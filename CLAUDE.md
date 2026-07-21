@AGENTS.md

# Venu's Portfolio

## Project conventions

### Folder structure

- Routes live under `src/app/<page>/`, each with its own `page.tsx` and `layout.tsx`. The home route is the exception
  required by Next.js: it must live directly at `src/app/page.tsx` (+ `src/app/layout.tsx` as the root layout), not in a
  subfolder.
- Reusable UI lives under `src/components/<component>/`:
    - `index.tsx` — the component itself.
    - `hooks.ts` — component-local hooks (e.g. `useTerminal`).
    - `constants.ts` — static data and colocated types (e.g. `EXPERIENCES`, `Experience`).
    - `utils.ts` — pure helper functions.
    - `<sub-component>/` — nested folder with the same shape, for a piece that only that parent component uses (e.g.
      `hero-section/terminal/`).
- Everything should be fully componentized — no inline one-off markup blocks in `page.tsx`; pages just compose
  components.

### Naming

- Filenames and folders: hyphenated lowercase (`site-nav`, `experience-item`, `constants.ts`).
- Component identifiers in code: Capitalised CamelCase (`SiteNav`, `ExperienceItem`).

### Styling

- Tailwind only — no CSS Modules, no inline `style` props, except for genuine one-off arbitrary values Tailwind can't
  otherwise express (e.g. a decorative gradient background).
- Reusable design tokens (colors, fonts) are declared once in `src/app/globals.css`'s `@theme` block and consumed as
  Tailwind classes (`text-accent`, `font-display`, etc.) rather than repeated as literals in components.
- Prefer Tailwind's standard size/spacing scale with responsive breakpoints (`text-4xl sm:text-6xl`) over arbitrary
  values (`text-[clamp(...)]`) when a close approximation is good enough.
