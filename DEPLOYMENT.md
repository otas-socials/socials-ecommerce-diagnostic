# 🚀 DEPLOYMENT GUIDE - Vercel

## Rychlý Deployment (5 minut)

### Krok 1: Push na GitHub

```bash
# V lokálním projektu
git init
git add .
git commit -m "Initial commit - E-commerce Compass prototype"

# Vytvořte nový repo na GitHub a pak:
git remote add origin https://github.com/[username]/compass-prototype.git
git branch -M main
git push -u origin main
```

### Krok 2: Import do Vercel

1. Přihlaste se na [vercel.com](https://vercel.com)
2. Klikněte "Add New" → "Project"
3. Import z GitHub: Vyberte `compass-prototype` repo
4. Framework Preset: **Next.js** (auto-detected)
5. Build Settings (default):
   - Build Command: `npm run build`
   - Output Directory: `out` (auto-detected)
   - Install Command: `npm install`
6. Environment Variables: **ŽÁDNÉ NEJSOU POTŘEBA**
7. Klikněte **Deploy**

### Krok 3: Wait (2-3 minuty)

Vercel automaticky:
- ✓ Nainstaluje dependencies
- ✓ Buildne Next.js projekt
- ✓ Vytvoří static export
- ✓ Deploynutí

### Krok 4: Test

Po deployi dostanete URL:
```
https://compass-prototype-[random].vercel.app
```

**Otestujte:**
1. Landing page se načte
2. "Spustit diagnostiku" → Lead form
3. Vyplňte formulář → Diagnostic
4. Projděte 3 otázky → Result page
5. Všechny sekce se zobrazí

---

## 🔧 Troubleshooting

### Build Failed?

**Problem:** `Error: Cannot find module...`
**Solution:** 
```bash
# Locally test the build
npm run build

# Check for TypeScript errors
npm run lint
```

**Problem:** `Module parse failed...`
**Solution:** Make sure all `.tsx` files have proper syntax

### 404 Errors?

**Problem:** Routes not working after deployment
**Solution:** Next.js static export is configured correctly with `output: 'export'` in `next.config.js`

### Styles Not Loading?

**Problem:** Tailwind classes not working
**Solution:** 
- Check `tailwind.config.js` has correct content paths
- Verify `globals.css` is imported in `layout.tsx`

---

## 📊 Expected Results

✅ **Build Time:** 2-3 minutes
✅ **URL:** Auto-generated Vercel URL
✅ **Status:** Should be green (successful)
✅ **Pages:** All 4 pages accessible

---

## 🎯 Custom Domain (Optional)

Pokud chcete vlastní doménu:

1. V Vercel projektu → Settings → Domains
2. Add Domain: `compass.socials.cz`
3. Nastavte DNS záznamy podle Vercel instrukcí
4. Wait for propagation (10-60 min)

---

## ✉️ Podpora

Jakékoliv problémy? 
- Check Vercel deployment logs
- Run `npm run build` locally first
- Kontakt: ahoj@socials.cz
