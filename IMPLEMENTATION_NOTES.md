# Personal Page Template Changes

This version keeps the original sidebar/navigation pattern while moving About and Research content into TypeScript data modules.

## Main editable files

- `src/data/about.ts`: edit About modules. Each module can represent one hobby or personal topic.
- `src/data/research.ts`: edit Research Interest modules. These appear before publications on `/research`.
- `src/data/publications.ts`: edit publications. Used by `/research`, `/publication`, and `/resume`.
- `src/data/degrees.ts`: edit education entries.
- `src/data/work.ts`: edit experience entries.
- `src/components/Template/SideBar.tsx`: edit sidebar identity text and profile image.

## Pages

- `/about`: renders TypeScript About modules, not Markdown.
- `/research`: renders TypeScript research interests first, then publications.
- `/resume`: keeps the original repo-style section links and includes publications.

## Validation

`npm run build` was run after reinstalling dependencies. The Next.js build completed through static page generation.

If your local `node_modules` came from the old zip, reinstall dependencies:

```bash
rm -rf node_modules .next
npm install
npm run build
```
