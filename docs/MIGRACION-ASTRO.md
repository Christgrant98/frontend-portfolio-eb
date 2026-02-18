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
   - **Tailwind** (`@tailwindcss/vite` + `tailwindcss` v4): mismo ecosistema que el proyecto Vite.
   - Comandos: `npx astro add react --yes` y `npx astro add tailwind --yes`.

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
- **Tailwind**: Astro usa Tailwind v4 (igual que el proyecto actual). Los estilos globales de Astro están en `astro/src/styles/global.css`; hay que importarlos en el layout cuando exista.

---

## Próximos pasos

1. **Paso 1**: Layout base Astro (TopBar + slot + Footer) y página Home.
2. **Paso 2**: About, Services, Portfolio.
3. **Paso 3**: Subpáginas de servicios (Wedding, Events, etc.).
4. **Paso 4**: Deploy y corte final (GitHub Pages sirviendo build de Astro).
