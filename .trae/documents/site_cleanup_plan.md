# Sanjivani Spirits — Site Cleanup & Professional Polish Implementation Plan

## Repository Research (Current Problems)

### A. Massive Cross-Page Content Duplication (Main Cause of "Clutter")
Content modules that are dumped on 2–3 pages instead of living in ONE page:

| Module | Currently Shown On | Correct Home |
|---|---|---|
| `legacyAtAGlance` stats (64 / 1980s / 1996) | **Home + About** | About ONLY |
| `growthOutlook` 4 cards (R&D / Consumer / Nationwide / Tech) | **Home + About** | About ONLY |
| `leadership.slice(0, 4)` leader portraits + messages | **Home + About** | About ONLY |
| `operationalHighlights` 3 cards (Distillation / QC / Dispatch) | **Home + Infrastructure** | Infrastructure ONLY |
| `infrastructurePromises` 3 cards + 3-photo mosaic tile | **Home + Infrastructure** | Infrastructure ONLY |
| `portfolioStats` 4 stat cards + Flavour Families "Range Story" | **Home + Products** | Products ONLY |
| Full 6-product grid (`products.map` all 6) | **Home + Products** | Products page full; Home show MAX 3 featured |

### B. Home Page Over-Stuffed (10 content bands → should be 4)
Current Home section count is extreme: Hero → Legacy stats → Corporate photo + 3 "Authentic/Pillars/Responsibility" cream cards → 4 Pillars → Portfolio stats + All 6 products → Range Story CTA → 4 Leadership cards → 3 highlights → 3-photo mosaic → 3 promises → Growth outlook → CTA band.
This creates fatigue; Diageo/Pernod-style homes are **editorially sparse** (~4 section bands).

### C. Excessive Decorative Noise Per Section
- `bg-grid` overlay on ~50% of all section bands — creates visual static
- Every single card has: `bg-gradient-to-br`, `blur-3xl` gold corner blur, `border-amber-900/10`, rounded 22, 8-10px padding, shadow → creates "infinite wall of identical cards" fatigue
- `grain` multiply overlay on all 7 heroes — unnecessary over-processing
- `bg-[radial-gradient(ellipse_at_…)]` gold radial blur on almost every band
- Over 30 cards across the site with same visual language → "clustered" feeling

### D. Undefined CSS Variables & Broken / Malformed Classes
1. `var(--section-pad)` used in 4 CTA bands **but never defined** → CTA bands have collapsed vertical padding (0px → squished)
2. `var(--radius-sm)` used in Home portfolioStats `rounded-[var(--radius-sm)]` — never defined → 0 radius
3. `scrim-side md:scrim-dark` in leader cards: md: prefix doesn't work on custom `@layer` component classes from global.css — Tailwind breakpoint prefixes only work on Tailwind utilities, not custom classes. Result: scrim-side always renders, even on mobile 4:5 crops where left-to-right dark gradient doesn't fit.
4. Gibberish import in About.tsx line 9: `growthOutlook, nurtvhwiehbopjunbcbby` — stray mis-typed identifier in import statement (orphaned typing artifact). Currently silently `undefined`; harmless but wrong.
5. `line-clamp-5` not a Tailwind v4 default utility — silently ignored, leader message never truncates.
6. Home contact CTA band: `style={{ padding: 'var(--section-pad) 0' }}` → same undefined var → 0 vertical pad; should be `py-[var(--spacing-section)]` (defined in @theme).

### E. Page-by-Page Ideal Section Count (Premium Editorial Target)
| Page | Current Sections | Target |
|---|---|---|
| Home | 10+ | 4 → (1) Hero / (2) Pillars teaser (2×2, kept because pillars are navigation) / (3) Featured products — 3 cards, not 6 / (4) Closing CTA with 1 plant photo |
| About | 8 | 5 → Hero / Founder-Narrative-with-portrait / Timeline / 5 Leaders / Vision & Mission / CTA |
| Products | 6 | 5 → Remove duplicate portfolioStats from hero (move inside the section) |
| Infrastructure | 6 | Keep 6 — it's a gallery/presentation page with natural structure |
| Pillars | 3 | Keep 3 — perfectly structured |
| Social | 5 | Keep 5 — natural CSR flow |
| Contact | 3 | Keep 3 — already clean |

### F. Data Cross-Page Ownership Rule (Simple Canon)
1. **Home** — ONLY: Hero + Pillars teaser + 3 Featured products (Bobby Santra / Premium / Bobby Saunf flagship) + one photo CTA band. NO stats, NO leaders, NO infrastructure details, NO all-6 products.
2. **About** owns: Legacy stats, Timeline, All 5 leaders, Vision & Mission, Growth Outlook.
3. **Products** owns: Portfolio stats, All 6 products cards, Flavour Families, Packaging Matrix.
4. **Infrastructure** owns: Operational Highlights, Value Chain, Operational Priorities, Full 12 Gallery, 3 Promises.
5. **Pillars** owns: 4 detailed Pillars with alternating image + body paragraphs.
6. **Social** owns: Impact stats, CSR initiatives grid, Pillar 4 detail.
7. **Contact** owns: Address card + form + 3-page navigation teaser.

---

## Files and Modules

### CSS & Shared UI (Global Cleanup)
- `src/styles/global.css` — add missing `--section-pad` alias, add `--radius-sm` alias; simplify card layer; create `card-basic` / `card-premium` two tiers instead of 30 identical cards; kill `bg-grid` on most sections by removing it from inline markup later; add a real `.line-clamp-5` utility since v4 has no default plugin; add `.line-clamp-3/4` too. Remove duplicate opacity filters.
- `src/components/layout/Hero.tsx` — remove `grain` overlay from hero as default (leave scrim-light / scrim-dark, lose the SVG fractal noise grain multiply; overkill on photo + scrim already); fix `md:scrim-dark` breakpoint issue pattern (note — scrim breakpoints are in page files not Hero; will provide correct pattern).
- `src/components/ui/Section.tsx` — confirm container padding; keep Section intact because it's already a clean typed wrapper.
- `src/components/ui/StatCard.tsx` — simplify (no gold blur corners on a 3-number stat band; use plain border + transparent bg, tier-1 `card-basic` look).
- `src/components/ui/ProductCard.tsx` — simplify decorative layers (lose the always-on big gold corner blur; only add subtle accent on-hover). Move gradients to be more subtle. Fix `scrim-side md:scrim-dark` same pattern (provide conditional logic so md: prefix correctly swaps).

### Page Rewrites
- `src/pages/Home.tsx` — **MAJOR CUT**. Delete ~7 section bands. New structure: (1) Hero / (2) Pillars 2×2 teaser grid / (3) Featured products → 3 cards (top SKUs: Bobby Santra, Sanjivani Premium Santra, Bobby Saunf) → single Explore Full Range CTA under them / (4) Legacy Editorial closing band — one Kopargaon-plant photo on right + 2-paragraph story on left + "Explore Our Story" CTA to /about. No more stats on Home; no leaders; no all-6 products; no infrastructure details; no growth outlook. Fix undefined `--section-pad` in CTA band closing padding.
- `src/pages/About.tsx` — Cut `legacyAtAGlance` stats duplication into About ONLY (already correct here). Cut `GrowthOutlook` — keep in About only. Delete gibberish import `nurtvhwiehbopjunbcbby`. Keep 8-section structure → condense to 6 (remove stats block since Growth/Vision/Leaders provide similar number anchor — actually keep stats but merge into intro as a 3-accent strip, not a full Section. Will figure out details in implementation).
- `src/pages/Products.tsx` — Move `portfolioStats` rail that's duplicated across Home into Products only (remove from Home). Place it as a thin 4-accent strip above the flavour filter buttons, not in hero. Hero keeps headline + copy + 2 CTAs only, no stats row there either. Fix `--section-pad` in final CTA.
- `src/pages/Infrastructure.tsx` — Keep; just fix `--section-pad` undefined in closing center-CTA block inline style. Simplify corner blurs on operationalHighlight cards from 48px blur to none (global CSS tiered cards handle it).
- `src/pages/Pillars.tsx` — Keep; minor: lose the bg-grid overlay noise from hero.
- `src/pages/Social.tsx` — Keep; minor: remove `bg-grid` from initiatives accent band overlay.
- `src/pages/Contact.tsx` — Keep already-clean 3-section structure; no-op in cleanup unless visual audit finds issues.

---

## Implementation Steps (Dependency Order)

### Step 1 — Fix Global CSS Tokens + Two-Tier Card System
File: `src/styles/global.css`
- Add `--section-pad: var(--spacing-section)` alias in `@theme` so existing inline `style={{padding: 'var(--section-pad) 0'}}` in CTA bands actually produces vertical spacing (currently collapsed to 0).
- Add `--radius-sm: 14px` in @theme (for portfolioStats rounded-[var(--radius-sm)]).
- Add `.line-clamp-{3,4,5,6}` component utilities (display: -webkit-box / -webkit-line-clamp) because Tailwind v4 has no default line-clamp plugin.
- Introduce `@layer components` tiered card styles:
  - `.card-base` = `rounded-[var(--radius)] border border-amber-900/10 bg-white transition-colors` (FAST clean default, no gradients)
  - `.card-premium` = `card-base` + very soft gradient from `--cream-50` + subtle 14× shadow `shadow-sm shadow-amber-900/3` on hover only (not always-on), removes always-on blur-3xl corner gold circles (noise).
- Add `.bg-grid-off` helper to be able to kill grid in overrides (optional, just use deletion instead).

### Step 2 — Shared UI Component Simplification
- `StatCard.tsx`: Rewrite to use `card-base` flat style; no always-on gradient bg; no decorative `blur-3xl` gold corner blobs; plain serif big number + 1 paragraph label. Clean up malformed `shadow-[shadow-sm …]` syntax bugs from earlier (already fixed in earlier session? — double-check line 9).
- `Hero.tsx`: Keep `variant="light|dark"` system. Remove the hardcoded `.grain` class from hero div in all page files (Step 3 will do page-file `.grain` deletions; Hero doesn't have grain directly — pages do attach it).
- `ProductCard.tsx`: Trim visual layers — drop always-on big absolute `w-48 h-48 right-0 top-0 blur-3xl` accent blob that exists on every card; add subtle hover-only gradient border accent instead. Fix malformed string bugs on line ~76 (if still present), ensure `scrim-side` → conditional on breakpoint (use `className={isDesktop ? 'scrim-dark' : 'scrim-dark'}` — actually for portrait cards on products the scrim-dark is fine everywhere.
- Audit `scrim-side md:scrim-dark` custom-class-with-Tailwind-prefix pattern (Home/About leader cards): convert to explicit logic like `<div className={cond ? 'scrim-dark' : 'scrim-side'}` using a media query or just use `scrim-dark` everywhere because it works on both 4:5 and 2:5 aspect ratios without a left-side weight bias.

### Step 3 — Home.tsx Aggressive Trim (Biggest Win)
Delete these 7 section bands from Home:
- (a) `Legacy` band with 3 StatCards + corporate photo tile + 3 Authentic/Pillars/Responsibility cream cards (move ownership to About & Infrastructure)
- (b) `portfolioStats` 4 stats (move to Products)
- (c) All 6 products `.slice(0, 6)`.map → replace with `.filter` 3 featured (Bobby Santra id=bobby-santra, Sanjivani Premium Santra id=sanjivani-premium-santra, Bobby Saunf id=bobby-saunf) in a 3-column lg:grid
- (d) Range Story band with 2 Explore CTA buttons under the 6 products → replace with single "Explore Full Range →" centered CTA pill under 3 featured row
- (e) Entire Leadership band (4 cards + "All Leadership" button) — ownership moves to About only. Delete from Home.
- (f) Entire Infrastructure duplicate section (3 operational highlights + 3 mosaic photo tiles + 3 promises + Explore gallery CTA) — ownership moves to Infrastructure only. Delete from Home.
- (g) Entire Growth Outlook 4-card band from Home — ownership to About. Delete from Home.

Keep + add on Home:
- (1) Hero clean (already done in earlier session — slogan/kicker removed; good)
- (2) Pillars 2×2 grid (Section "Pillars — What Guides Us") — OK. This is our navigation teaser, keep it. Simplify pillar cards to remove corner blur blobs (use new `.card-premium` tier from global).
- (3) Featured 3 products grid + Explore CTA
- (4) Closing editorial legacy band (use existing sugarcane-field CTA background image with 2 copy paragraphs + two links, fix undefined `--section-pad` in style inline so it un-collapses to real padding).

### Step 4 — About.tsx Polish
- Delete gibberish identifier `nurtvhwiehbopjunbcbby` from import on line 9.
- Confirm `legacyAtAGlance` stats + `growthOutlook` are present here (they are).
- Hero: remove `.grain` class + `bg-grid` overlay noise from hero.
- Timeline band: kill the 30% opacity `bg-grid` overlay that sits on the whole band (creates static behind timeline dots).
- Trim: Actually About is structurally OK, section count is editorial. Keep all 6 blocks (Hero / Founder / Timeline + stats? — wait stats is legacyAtAGlance, it's separate section. Let me keep structure, mainly remove noise layers: `bg-grid` overlays, `grain` everywhere, radial blurs on bands.

### Step 5 — Products.tsx Polish
- Move portfolioStats 4 stats row to **inside the "Signature Expressions" Section** above filter buttons, as a thin 4-accent stat strip. Delete it from hero (it was 4-column grid under hero CTAs → cluttered hero).
- Remove `bg-grid` overlays: hero (30% grid), Range Story accent band (30% grid).
- Remove `.grain` from hero.
- Fix undefined `--section-pad` in Next CTA band bottom.

### Step 6 — Small Fixes on Pillars / Social / Infrastructure / Contact
- Pillars.tsx hero: remove `.grain` + `bg-grid` overlay (both there)
- Infrastructure.tsx: delete hero `.grain` + `bg-grid` overlay. Fix undefined `--section-pad` in center closing CTA band inline style.
- Social.tsx hero: remove `.grain` + `bg-grid` overlay. Delete initiatives section band `bg-grid` + ellipse radial gold blur (two overlays applied, heavy noise).
- Contact.tsx hero: remove `.grain` + `bg-grid` overlay. Already structurally clean, keep form.

### Step 7 — Build Verify + Browser Smoke
- Run `npm run build` in sanjivani-spirits folder; exit-0 required, 0 TS errors, 0 CSS warnings
- Run `GetDiagnostics` for IDE TS level errors (0)
- Start/reload dev server on localhost
- Browser snapshot `/` + screenshot hero → 4 section bands confirmed (hero/pillars/3 products/closing CTA), no more 10 bands
- Browser snapshot `/about` → 6 section bands confirmed + gibberish import gone + timeline no bg-grid
- Confirm 7 routes still routable via `/products`, `/infrastructure`, `/pillars`, `/social-responsibility`, `/contact` (Home about routes should render)

---

## Dependencies and Considerations
- **Tailwind v4 line-clamp caveat**: Unlike Tailwind v3 `@tailwindcss/line-clamp` plugin, v4 has no default plugin. We'll add `.line-clamp-3/4/5/6` manually in `@layer utilities` using standard `-webkit-line-clamp` (works fine for Chromium/FF/Safari).
- **`scrim-side md:scrim-dark` pattern broken by design**: This is a conceptual error in Tailwind — `md:` prefix only applies to utilities registered with Tailwind, not to custom classes in `@layer components`. We'll fix by (a) either adding both `scrim-side + scrim-dark` as separate classes and deleting the `md:scrim-dark` reference since scrim-dark actually works for all aspect ratios, OR (b) if we want left-heavy scrim only on desktop, use `@media (min-width: 768px)` condition inside the global CSS of scrim-side. Simpler path: standardize to `scrim-dark` on all leader portraits because it's the safe universal photo caption legibility scrim regardless of grid column. 99% of photos on the site use `scrim-dark` already and look good.
- **Content ownership rule is conservative**: We DON'T delete any data files (leadership, pillars, infrastructure, products data stay untouched). We only stop mapping them on pages where they don't belong — no data loss, just less rendering on Home.
- **No new npm dependencies**: All changes are CSS refactor + TSX trim; no new packages; 2 existing deps already resolved from prior session.

---

## Validation
1. Build test: `cd A:\DESI\sanjivani-spirits ; npm run build` → exit 0, 0 TS warnings, 0 CSS warnings
2. IDE Diagnostics: `GetDiagnostics` → 0 squiggles reported
3. Section count DOM audit via browser snapshot + screenshot of Home: expect snapshot to have ~60 refs fewer than current 244 (removing 6 full bands)
4. Hero vertical padding on closing CTA band: confirm not collapsed 0 — use screenshot ruler of CTA band height (~200-300px h min)
5. Routing smoke: `/`, `/about`, `/products`, `/infrastructure` return 200 in `browser_navigate`
6. Line-clamp check: About leader message `line-clamp-5` now actually truncates to 5 lines (not full paragraph as before — verify DOM via snapshot that text is truncated; or just check CSS file for line-clamp class present)

---

## Risks
- **Risk 1: Over-trimming Home leaves it feeling "too empty"** → Handling: Add 1 editorial legacy section back (plant photo + 2 paras + CTA to About) so Home has 4 "rich" sections, not just 3 sparse ones. The 3 featured products are the anchors (they were the most viewed SKUs from user brief: Bobby Santra flagship, Premium most-loved, Saunf signature spice — we aren't removing the product showcase entirely, we're curating it).
- **Risk 2: Global CSS card refactor breaks a card variant with custom gradient** → Handling: We create `.card-base` + `.card-premium` classes but KEEP every site-specific inline gradient override (accent bands, pillar icon rings, product colour chips) because those are idiosyncratic. The refactor only kills ALWAYS-ON universal gold blur blobs that are on 30 cards (the visual noise culprit). Unique gradients per-component are preserved.
- **Risk 3: `--section-pad` undefined caused 0-pad CTA, now we add it → spacing change on 4 bands could be jarring vs adjacent 0-pad blocks** → Handled: spacing aligns with Section wrapper `py-[var(--spacing-section)]` (clamp 56-120px), all CTA bands now have the same vertical rhythm as real sections, no longer collapsed.
