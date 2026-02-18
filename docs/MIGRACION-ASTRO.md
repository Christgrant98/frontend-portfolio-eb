# Migración Vite+React → Astro — Pharus Photography (portfolio-eb)

Plan gradual y seguro. El sitio actual (Vite) sigue estable hasta el cambio final.

---

## Paso 0 — Preparación (completado)

### Instalaciones realizadas

1. **Proyecto Astro** en `./astro` (mismo repo, monorepo simple).
   - Template: `minimal`
   - TypeScript: `strict`
   - Comando: `npm create astro@latest ./astro -- --template minimal --typescript strict --install --no-git --skip-houston`

2. **Integraciones en Astro**
   - **React** (`@astrojs/react`): para usar componentes React existentes como islas.
   - **Tailwind** (`@astrojs/tailwind` + `tailwindcss` v3): en Astro se usa v3 por compatibilidad con Vite 6; el proyecto Vite sigue con Tailwind v4.
   - Comandos: `npx astro add react --yes` y `npm install @astrojs/tailwind tailwindcss`.

3. **Workspaces en root**
   - En `package.json` del repo: `"workspaces": ["astro"]`.
   - Scripts añadidos:
     - `npm run dev:astro` — desarrollo del sitio Astro.
     - `npm run build:astro` — build del sitio Astro.
     - `npm run preview:astro` — vista previa del build de Astro.

4. **Imágenes**
   - **sharp** ya está en `astro/package.json` (dependencia de Astro/Tailwind). Astro usa optimización de imágenes por defecto; más adelante se configurará `astro:assets` y, si hace falta, el servicio con sharp para las 50+ imágenes.

### Estructura actual

```
portfolio-eb/
├── package.json          # Root: Vite app + workspaces ["astro"]
├── src/                  # App actual (Vite + React) — intacta
├── astro/
│   ├── package.json      # Astro 5, React, Tailwind, sharp
│   ├── astro.config.mjs  # react(), tailwindcss vite plugin
│   ├── src/
│   │   ├── pages/
│   │   │   └── index.astro
│   │   └── styles/
│   │       └── global.css  # Tailwind
│   └── public/
└── docs/
    └── MIGRACION-ASTRO.md
```

### Comandos útiles

| Acción              | Comando              |
|---------------------|----------------------|
| Dev sitio actual    | `npm run dev`        |
| Dev sitio Astro     | `npm run dev:astro`  |
| Build sitio actual  | `npm run build`      |
| Build sitio Astro   | `npm run build:astro`|
| Preview Astro       | `npm run preview:astro` |

### Notas

- **React**: Astro instaló React 19 en `astro/`. El proyecto Vite sigue en React 18. Al reutilizar componentes en Astro, si aparece incompatibilidad, se puede fijar React 18 en `astro/package.json`.
- **Tailwind**: Astro usa `@astrojs/tailwind` (Tailwind v3) por compatibilidad. Los estilos globales se importan en `Layout.astro` (global.css + `@/fonts.css`, `@/index.css`, `@/App.css`).

---

## Paso 1 — Layout + Home (completado)

### Cambios realizados

1. **Alias `@` en Astro**  
   En `astro.config.mjs`: `resolve.alias['@'] = '../src'` para importar código y estilos del proyecto compartido.

2. **TopBar y Footer compatibles con Astro**  
   - Nueva prop opcional `pathname?: string`.  
   - Cuando `pathname` está definida (desde Astro), se usan `<a href="...">` en lugar de `<Link to="...">` para que la navegación sea por rutas reales.  
   - Sin `pathname`, se mantiene el comportamiento con React Router (Vite).

3. **LayoutShell** (`src/core/layouts/LayoutShell.tsx`)  
   - Envuelve AppProvider + TopBar + contenido + Footer.  
   - Si recibe `pathname`, envuelve todo en `MemoryRouter` para que `useLocation()` y `useScrollEffect()` sigan funcionando.  
   - Prop `page?: 'home' | 'about'` para que la página se renderice dentro del shell (y dentro de AppProvider), evitando errores de contexto en el pre-render de Astro.

4. **Layout.astro**  
   - Importa estilos globales (Tailwind, fonts, index, App).  
   - Estructura HTML base y `<slot />` para el contenido.

5. **index.astro (Home)**  
   - Usa `<LayoutShell pathname={Astro.url.pathname} page="home" client:only="react" />`.  
   - `client:only` evita que Astro pre-renderice el árbol React (que depende de AppProvider).

6. **Tailwind en Astro**  
   - Sustituido `@tailwindcss/vite` (v4) por `@astrojs/tailwind` (v3) por conflicto con Vite 6.  
   - Añadido `tailwind.config.cjs` con `content` que incluye `../src/**/*` para las clases del código compartido.

### Cómo probar

- `npm run dev:astro` → abrir `http://localhost:4321` y comprobar Home con TopBar, Hero, secciones y Footer.  
- `npm run build:astro` → build correcto.  
- `npm run dev` y `npm run build` (Vite) siguen funcionando sin cambios.

### Favicon en Astro

Si quieres el mismo favicon que en Vite, copia `public/pharus-logo.png` (o el que uses) a `astro/public/pharus-logo.png`. El layout ya referencia `/pharus-logo.png`.

---

## Paso 2 (parcial) — About Us (completado)

### Cambios realizados

1. **LayoutShell**  
   - Tipo `LayoutShellPage` ampliado a `'home' | 'about'`.  
   - Import de `AboutUsPage` y render condicional `page === 'about' ? <AboutUsPage />`.

2. **about.astro** (`astro/src/pages/about.astro`)  
   - Usa `<Layout>` con título y descripción para SEO.  
   - `<LayoutShell pathname={Astro.url.pathname} page="about" client:only="react" />`.  
   - Ruta resultante: `/about` (Astro genera `about/index.html`).

### Cómo probar

- `npm run dev:astro` → `http://localhost:4321/about`.  
- Desde Home, clic en "About Us" en la TopBar debe llevar a `/about`.

---

## Próximos pasos

1. **Paso 2 (resto)**: Services, Portfolio.
2. **Paso 3**: Subpáginas de servicios (Wedding, Events, etc.).
3. **Paso 4**: Deploy y corte final (GitHub Pages sirviendo build de Astro).
