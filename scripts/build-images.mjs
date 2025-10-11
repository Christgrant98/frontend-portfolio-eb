#!/usr/bin/env node

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';
import { existsSync } from 'fs';

// Configuration
const CONFIG = {
  inputDir: './raw/portfolio',
  outputDir: './public/portfolio',
  widths: [480, 768, 1080, 1600],
  blurWidth: 20,
  blurQuality: 35,
  webpQuality: 78,
};

// ANSI colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.error(`${colors.red}✗${colors.reset} ${msg}`),
  warn: (msg) => console.warn(`${colors.yellow}⚠${colors.reset} ${msg}`),
};

/**
 * Generate blur placeholder image
 */
async function generateBlurPlaceholder(inputPath, outputPath, filename) {
  try {
    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF
      .resize(CONFIG.blurWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({
        quality: CONFIG.blurQuality,
        progressive: true,
        mozjpeg: true,
      })
      .toFile(outputPath);

    log.success(`Generated blur: ${filename}.blur.jpg`);
  } catch (error) {
    log.error(`Failed to generate blur for ${filename}: ${error.message}`);
    throw error;
  }
}

/**
 * Generate WebP variants at different widths
 */
async function generateWebPVariants(inputPath, outputDir, filename) {
  const tasks = CONFIG.widths.map(async (width) => {
    const outputFilename = `${filename}@${width}.webp`;
    const outputPath = join(outputDir, outputFilename);

    try {
      const info = await sharp(inputPath)
        .rotate() // Auto-rotate based on EXIF
        .resize(width, null, {
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({
          quality: CONFIG.webpQuality,
          effort: 4, // Balance between speed and compression
        })
        .toFile(outputPath);

      log.success(
        `Generated ${outputFilename} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)}KB)`
      );
      return info.size;
    } catch (error) {
      log.error(`Failed to generate ${outputFilename}: ${error.message}`);
      throw error;
    }
  });

  // Also generate the base WebP without size suffix
  const baseOutputPath = join(outputDir, `${filename}.webp`);
  tasks.push(
    (async () => {
      try {
        const info = await sharp(inputPath)
          .rotate()
          .resize(1600, null, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({
            quality: CONFIG.webpQuality,
            effort: 4,
          })
          .toFile(baseOutputPath);

        log.success(
          `Generated ${filename}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(1)}KB)`
        );
        return info.size;
      } catch (error) {
        log.error(`Failed to generate ${filename}.webp: ${error.message}`);
        throw error;
      }
    })()
  );

  return Promise.all(tasks);
}

/**
 * Process a single image file
 */
async function processImage(inputPath, outputDir) {
  const filename = basename(inputPath, extname(inputPath));

  log.info(`Processing: ${filename}`);

  try {
    // Generate blur placeholder
    const blurPath = join(outputDir, `${filename}.blur.jpg`);
    await generateBlurPlaceholder(inputPath, blurPath, filename);

    // Generate WebP variants
    const sizes = await generateWebPVariants(inputPath, outputDir, filename);

    const totalSize = sizes.reduce((acc, size) => acc + size, 0);
    log.success(
      `Completed ${filename} - Total: ${(totalSize / 1024).toFixed(1)}KB\n`
    );

    return { success: true, filename, totalSize };
  } catch (error) {
    log.error(`Failed to process ${filename}\n`);
    return { success: false, filename, error: error.message };
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('\n📸 Image Optimization Script\n');

  // Check if input directory exists
  if (!existsSync(CONFIG.inputDir)) {
    log.error(`Input directory not found: ${CONFIG.inputDir}`);
    log.info('Please create the directory and add your images.');
    process.exit(1);
  }

  // Create output directory if it doesn't exist
  if (!existsSync(CONFIG.outputDir)) {
    await mkdir(CONFIG.outputDir, { recursive: true });
    log.info(`Created output directory: ${CONFIG.outputDir}`);
  }

  // Read all files from input directory
  let files;
  try {
    files = await readdir(CONFIG.inputDir);
  } catch (error) {
    log.error(`Failed to read input directory: ${error.message}`);
    process.exit(1);
  }

  // Filter for image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.tiff'];
  const imageFiles = files.filter((file) =>
    imageExtensions.includes(extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    log.warn(`No image files found in ${CONFIG.inputDir}`);
    process.exit(0);
  }

  log.info(`Found ${imageFiles.length} image(s) to process\n`);

  // Process all images
  const results = [];
  for (const file of imageFiles) {
    const inputPath = join(CONFIG.inputDir, file);
    const result = await processImage(inputPath, CONFIG.outputDir);
    results.push(result);
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  const successful = results.filter((r) => r.success).length;
  const failed = results.filter((r) => !r.success).length;

  if (successful > 0) {
    log.success(`Successfully processed ${successful} image(s)`);
  }
  if (failed > 0) {
    log.error(`Failed to process ${failed} image(s)`);
  }

  const totalSize = results
    .filter((r) => r.success)
    .reduce((acc, r) => acc + r.totalSize, 0);
  log.info(`Total output size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);

  console.log('='.repeat(60) + '\n');

  process.exit(failed > 0 ? 1 : 0);
}

// Run the script
main().catch((error) => {
  log.error(`Unexpected error: ${error.message}`);
  console.error(error);
  process.exit(1);
});

