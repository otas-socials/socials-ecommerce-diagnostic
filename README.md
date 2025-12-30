# 🎯 E-commerce Compass - Clickable Prototype

Interaktivní diagnostický nástroj pro e-commerce klienty Socials.

## 📋 O projektu

Tento prototype slouží k validaci:
- ✓ Funguje flow?
- ✓ Sedí design s brandem Project Black?
- ✓ Je obsah relevantní?

## 🚀 Jak spustit lokálně

### Prerekvizity
- Node.js 18+ nainstalovaný
- npm nebo yarn

### Instalace a spuštění

```bash
# 1. Naklonujte repo
git clone [your-repo-url]
cd compass-prototype

# 2. Nainstalujte dependencies
npm install

# 3. Spusťte dev server
npm run dev

# 4. Otevřete v browseru
# http://localhost:3000
```

### Build pro production

```bash
# Static export pro Vercel
npm run build

# Výstup bude v /out directory
```

## 🗂️ Struktura projektu

```
/compass-prototype
├── app/
│   ├── page.tsx                    # Landing page
│   ├── start/page.tsx              # Lead form
│   ├── diagnostic/page.tsx         # 3-question filter
│   └── roadmap/[stage]/[pillar]/page.tsx  # Result page
├── components/
│   ├── Header.tsx                  # Logo + navigation
│   ├── Button.tsx                  # Primary CTA button
│   ├── ProgressBar.tsx            # Diagnostic progress
│   └── QuickWinCard.tsx           # Quick win display
├── lib/
│   ├── mock-data.ts               # Hardcoded result data
│   └── localStorage.ts            # Local storage helpers
└── public/                        # Static assets
```

## 🎨 Design System - Project Black

### Barvy
- **Carbon Black** (#0A0A0A) - Main background
- **Ebitda Green** (#00E676) - Primary CTA & accents
- **Signal Red** (#FF3D00) - High severity indicators
- **Slate 800/900** (#1e293b / #0f172a) - Borders & cards

### Typography
- **Font**: Inter
- **Headings**: 48px / 700 (H1), 32px / 700 (H2), 24px / 600 (H3)
- **Body**: 16px / 400

### Design Principles
- ✓ Sharp corners (border-radius: 0-2px max)
- ✓ Subtle borders (1px solid)
- ✓ No shadows
- ✓ High contrast
- ✓ Minimal animations (150ms transitions max)

## 🔄 User Flow

1. **Landing Page** (`/`)
   - Hero s hlavním CTA
   - Anti-persona section
   - → "Spustit diagnostiku" → `/start`

2. **Lead Form** (`/start`)
   - Jméno, Příjmení, Email
   - Validace + localStorage
   - → Submit → `/diagnostic`

3. **Diagnostic Filter** (`/diagnostic`)
   - 3 otázky (one per screen)
   - Progress bar
   - → Complete → `/roadmap/medium/finance-marze`

4. **Result Page** (`/roadmap/[stage]/[pillar]`)
   - Diagnóza + severity
   - Quick wins (3 cards)
   - Related episodes (3 cards)
   - CTA: Growth Blueprint

## 💾 Data Flow

- **localStorage** pro persistenci dat mezi stránkami
- **Mock data** pro result page (žádná databáze)
- **Dummy routing logic** (vždy vrací `medium/finance-marze`)

## 📱 Responsive Design

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Všechny stránky jsou plně responsive.

## 🚀 Deployment na Vercel

### One-click deploy

1. Push code na GitHub
2. Importuj projekt na Vercel
3. Žádné env variables nejsou potřeba
4. Deploy!

### Manual deploy

```bash
# Build static export
npm run build

# Deploy /out directory
vercel --prod
```

## ✅ Checklist

### Funkční požadavky
- [x] Landing page se zobrazí správně
- [x] "Spustit diagnostiku" naviguje na `/start`
- [x] Lead form validuje vstupy
- [x] Data se ukládají do localStorage
- [x] Všechny 3 otázky se zobrazí postupně
- [x] Navigace na result page funguje
- [x] Result page zobrazí všechny sekce

### Design požadavky
- [x] Správné barvy (carbon black, ebitda green)
- [x] Font Inter
- [x] Sharp corners
- [x] No shadows
- [x] Minimal transitions

### Technical
- [x] Next.js 14 App Router
- [x] Tailwind CSS
- [x] Static export ready
- [x] TypeScript

## 📝 Poznámky

- Pro prototype je hardcoded pouze jedna cesta výsledků: `medium/finance-marze`
- Routing logic je dummy - vždy vrací stejný result
- Data jsou pouze v localStorage (reset při refresh)
- Žádné backend API, žádná databáze

## 🆘 Troubleshooting

### Build fails?
```bash
# Clear cache
rm -rf .next out node_modules
npm install
npm run build
```

### Styles not loading?
```bash
# Check if globals.css is imported in layout.tsx
# Restart dev server
```

## 📧 Kontakt

Pro otázky kontaktujte: ahoj@socials.cz

---

**Built with ❤️ by Socials**
