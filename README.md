# XL over 3.0 — Premium Luxury 3D Digital Universe

**XL over 3.0** is a production-ready, cinematic digital brand hub serving as the central ecosystem for multiple independent creative channels. Built with a faceless digital persona, high-performance WebGL 3D visuals, responsive design, and smooth interactions.

---

## 🌟 Visual & Technical Architecture

- **Aesthetic**: Futuristic luxury dark theme (#07060B background, #100A1B deep midnight purple, electric violet #A855F7, luminous lavender #D8B4FE, and soft white typography with chrome accents).
- **Interactive 3D**: Three.js & React Three Fiber real-time rendered metallic orb, orbital rings, ambient light reflections, and responsive particle field.
- **Framework**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, and Framer Motion.
- **Accessibility & Motion**: Automatic detection for `prefers-reduced-motion` with lightweight fallback visual states, semantic HTML structure, high-contrast text, and complete keyboard navigation support.
- **GitHub Pages Ready**: Configured with relative base asset paths (`base: './'`) and GitHub Actions workflow for automated deployments.

---

## 🪐 Ecosystem Brands

1. **ROOHANI NOORANI**: Music & Entertainment (Original music, Desi Glam-Pop, cinematic music experiences).
2. **ROHANI RANI**: Music & Entertainment (Expressive creative identity for music content).
3. **ZOYA NOOR X**: Creative & Lifestyle (Modern editorial and visual identity channel).
4. **ZOYA MINDSET**: Psychology & Motivation (Psychology-inspired motivational content for personal development and emotional growth).
5. **YOUTUBE & OTHER PROJECTS**: Digital Media (Gateway to additional official channels and future creative experiments).

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## ⚙️ Customization & Updating Site Data

All brand channels, social media profiles, email contacts, and featured releases are centrally managed in `src/config/siteConfig.ts`.

- **Adding / Updating Official Channel URLs**: Update the `url` property for any brand in `siteConfig.ts` and set `isComingSoon: false`.
- **Configuring Business Email**: Replace `businessEmailPlaceholder` in `siteConfig.ts` with your actual business email address.
- **Adding Social Profile Links**: Provide official URLs in the `socials` list in `siteConfig.ts`.

To validate configuration integrity at any time, run:
```bash
python3 /home/jules/self_created_tools/verify_brand_config.py
```

---

## 🚀 Deploying to GitHub Pages

This project is configured for static hosting on GitHub Pages:

1. Push your changes to `main` or `master` branch.
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically compile the site and deploy the `dist/` directory to GitHub Pages.
3. Enable GitHub Pages in your repository settings under **Settings > Pages** with source set to **GitHub Actions**.
