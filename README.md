# CK Collection

Plantilla Angular basada en el stack de `bder-live-landing`.

## Stack

- Angular 21 (standalone components)
- Tailwind CSS 4 + PostCSS
- RxJS
- Vitest + jsdom
- Prettier
- pnpm

## Arranque

```bash
pnpm install
pnpm start
```

Abre `http://localhost:4200/`.

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm start` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm test` | Tests unitarios (Vitest) |
| `pnpm watch` | Build en modo watch |

## Estructura

```
src/
  app/
    core/           # Servicios (tema, idioma) y traducciones
    features/       # Páginas / features lazy-loaded
    shared/         # Pipes y utilidades compartidas
  styles.css        # Tailwind + estilos glass / dark mode
public/             # Assets estáticos
```

## Incluido

- Paleta de materiales (yeso, madera, arena, linen, negro mate)
- i18n ES/EN (`LanguageService` + pipe `trans`)
- Contacto Hermosillo + mapa Google Maps
- Estilos fashion editorial
