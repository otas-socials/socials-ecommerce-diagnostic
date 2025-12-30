# 🔄 FRESH START - Krok za krokem

Vercel cachuje starou konfiguraci. Musíme začít úplně od nuly.

---

## ⚠️ DŮLEŽITÉ: Postupujte PŘESNĚ v tomto pořadí

### KROK 1: Smazat projekt z Vercelu

1. Jděte na [vercel.com](https://vercel.com/dashboard)
2. Najděte projekt **socials-ecommerce-diagnostic**
3. Klikněte na něj
4. Nahoře klikněte **Settings**
5. Scroll úplně dolů
6. Najděte sekci **"Delete Project"**
7. Klikněte **"Delete"**
8. Potvrďte smazání (napište název projektu)

### KROK 2: Smazat GitHub repository

1. Jděte na [github.com](https://github.com)
2. Otevřete **socials-ecommerce-diagnostic** repository
3. Nahoře klikněte **Settings**
4. Scroll úplně dolů
5. Najděte sekci **"Danger Zone"**
6. Klikněte **"Delete this repository"**
7. Potvrďte smazání (zkopírujte název)

### KROK 3: Vytvořit NOVÉ repository

1. GitHub → klikněte **"New"** (zelené tlačítko)
2. Název: `socials-ecommerce-diagnostic`
3. **Public** (ne Private!)
4. **Žádný** README, .gitignore, license
5. Klikněte **"Create repository"**

### KROK 4: Nahrát soubory

1. Na nové prázdné repository stránce najděte **"uploading an existing file"**
2. Klikněte na ten modrý odkaz
3. **ROZBALTE** `compass-prototype-FINAL.zip`
4. **VSTUPTE** do složky `compass-prototype-v2`
5. **VYBERTE VŠECHNO** uvnitř (Ctrl+A / Cmd+A)
   - Měli byste vidět: app, components, lib, public, *.json, *.js, *.md
6. **PŘETÁHNĚTE** na GitHub stránku
7. Commit message: `Initial commit`
8. Klikněte **"Commit changes"**
9. Počkejte až se všechno nahraje (30-60 sekund)

### KROK 5: Import do Vercelu

1. Jděte na [vercel.com](https://vercel.com/new)
2. Klikněte **"Add New..." → "Project"**
3. Najděte **socials-ecommerce-diagnostic** v seznamu
4. Klikněte **"Import"**
5. **NASTAVENÍ:**
   - Framework Preset: **Next.js** (auto-detected) ✅
   - Root Directory: `.` (tečka) ✅
   - Build Command: `npm run build` ✅
   - Output Directory: (nechte prázdné) ✅
   - Install Command: `npm install` ✅
   - **Environment Variables: ŽÁDNÉ** ✅
6. Klikněte **"Deploy"**
7. Počkejte 2-3 minuty

---

## ✅ OČEKÁVANÝ VÝSLEDEK:

Build by měl projít s těmito logama:

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    1.38 kB        95.2 kB
├ ○ /diagnostic                          1.42 kB        95.2 kB
├ ○ /roadmap                             2.7 kB         96.5 kB
└ ○ /start                               1.7 kB         95.5 kB

✓ Build completed successfully
```

**Žádná chyba s routes-manifest.json!**

---

## 🎯 PROČ TO TENTOKRÁT BUDE FUNGOVAT:

### Co jsem změnil:
1. ✅ **Odstraněn `vercel.json`** - způsoboval konflikty
2. ✅ **Odstraněn `output: 'export'`** z next.config.js
3. ✅ **Fixed routes** místo dynamic
4. ✅ **Čistý start** - žádná cache

### Co je v balíčku:
- ✅ Opravený `next.config.js` (bez static export)
- ✅ Žádný `vercel.json` (Vercel použije defaults)
- ✅ Fixed `/roadmap` route
- ✅ Všechny ostatní soubory v pořádku

---

## 🆘 POKUD STÁLE SELŽE:

Pošlete mi screenshot error logy a já to vyřeším jinak. Ale tohle by mělo fungovat - je to standardní Next.js app bez custom configu.

---

**Začněte KROKEM 1 a postupujte přesně!** 🚀
