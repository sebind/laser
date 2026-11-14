# LASER Group Website

Official research group website for the **LASER Group** (*Laboratory for Advanced Simulations and Energy Materials Research*), led by **Dr. Sebin Devasia** across **PSG Institute of Advanced Studies (PSGIAS)** and **PSG Institute of Technology and Applied Research (PSGiTech)** in Coimbatore, India.

- **Live Website (GitHub Pages):** [https://sebind.github.io/laser/](https://sebind.github.io/laser/)
- **Principal Investigator:** Dr. Sebin Devasia (`seb@psgias.ac.in` · `sebin@psgitech.ac.in`)

---

## Research Domains

1. **First Principles Density Functional Theory (DFT)** — Electronic structure, charge redistribution, band alignments, and catalytic surface energetics (`Quantum ESPRESSO`).
2. **Machine Learning Interatomic Potentials (MLIPs)** — Equivariant crystal graph neural networks and active learning workflows bridging ab initio precision to large disordered supercells.
3. **Optoelectronics & Self-Powered Photodetectors** — Ultrasonic spray pyrolysis, chemical bath deposition, rapid iodization, and `SCAPS-1D` device physics for lead-free halide perovskites and chalcogenide absorbers.
4. **D³Mat Workshop Series** — *Digital Discovery and Design of Materials* computational training program hosted at PSG Institute of Advanced Studies.

---

## Tech Stack & Architecture

- **Framework:** React 18 + TypeScript + Vite 5
- **Styling & Design System:** Tailwind CSS + CSS Custom Properties (`src/styles/tokens.css`), Geist Sans & Geist Mono (`@fontsource`), Phosphor Icons (`@phosphor-icons/react`)
- **Static Hosting & SPA Routing:** Configured for **GitHub Pages** (`/laser/` base path) with pre-generated static route entry points (`dist/<route>/index.html`), `404.html` fallback, `.nojekyll`, `sitemap.xml`, and `robots.txt` via `scripts/postbuild-gh-pages.mjs`.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Typecheck and build production bundle into ./dist
npx tsc --noEmit
npm run build

# Preview production bundle locally
npm run preview
```

---

## Deployment (GitHub Pages)

Pushes to the `main` branch automatically build and deploy `./dist` to **GitHub Pages** via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To deploy on a custom root domain later (for example, `lasergroup.org` or Vercel):
- Set `VITE_BASE_PATH=/` and `SITE_URL=https://your-domain.org` during `npm run build`.
