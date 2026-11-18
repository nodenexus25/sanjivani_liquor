# Content Trim, Image Expansion & Motion Upgrade — Implementation Plan

## Repository Research (current state audit)
- **7 routes**: / (Home 4 sections), /about (founder, timeline 4, 3 stats, 5 leaders, V&M, 4 growth, CTA), /products (hero, 4 stats strip, filters, 6 cards, 3 families, packaging table, CTA), /infrastructure (hero, 3 highlights, mosaic, 4 value-chain, priorities, 12 gallery, 3 promises, CTA), /pillars (hero, 4 alternating detail, CTA), /social-responsibility (hero, impact 3 stats, 6 initiatives, pillar 4, CTA), /contact (hero, address, form, 3 teasers)
- **Textual volume**: ~60 prose-sized paragraph blocks + descriptions. 30% reduction target → ~42 (tighten long sentences, kill repeated phrases, merge paragraph pairs, keep 1 sentence only for secondary blocks; never delete `data/*.ts` source strings themselves — trim via slice/line-clamp + shorter wrappers only where in-page JSX copy repeats).
- **Current animation inventory**: 2 `@keyframes` (fadeInUp, float) + 6 fade-delay classes + 1 `.floating` = ~9 motion rules total. **50% animation increase target** → add 5 new keyframes + 6 new animation utility classes → 20 total motion rules.
- **Current image inventory**: ~28 text_to_image API generated stills across all pages. **Image + brand enhancement add target** → ~10 new decorative visuals (brand marquee strip, watermark emblem SVGs, value chain icons, floating emblems, 4:5 portrait inset for legacy stats, parallax hero backdrops) plus slow cinemagraph-style Ken Burns pseudo-animation on every editorial/product/portrait photo so "moving images" perceive like animated GIFs even with static source (CSS zoom+pan infinite alternate 24s loop).
- **Constraints (keep VERBATIM from prior sessions, DO NOT relax)**:
  - LIGHT warm cream-paper theme always (no dark surfaces outside scrim-dark photo captions / Home closing CTA tinted overlay)
  - Multi-page React Router v7 (7 routes, ScrollToTop intact)
  - `src/data/*.ts` arrays are **NEVER modified** — copy trimming happens only in page JSX via shorter wrappers/line-clamp
  - Light-mode slogan/kicker removed from Home hero (footer slogan preserved)

## Files and Modules

| File | Expected Change |
|---|---|
| `src/styles/global.css` | +5 `@keyframes` (kenBurns, marqueeScrollX, shineSweep, grainPan, slowFloat); +9 new classes (photo-kenburns, brand-marquee, marquee-track, btn-shine, reveal-stagger, parallax-bg, float-slow, float-delay-*, wave-em); preserve existing tokens/cards |
| `src/pages/Home.tsx` | Cut 30% copy: hero 2-line subtitle → 1 tight line; Pillars teaser summaries line-clamp-3 → 2 lines each; closing CTA 2 paras → 1 merged para + short pull-quote. ADD: brand-marquee infinite band post-hero; closing CTA left-col small floating SS-64 emblem |
| `src/pages/About.tsx` | Cut 30% copy: merge duplicate "visionary dream" para (L61-66) into hero L38 → delete 1 full para; timeline descriptions → keep 1 sentence only via line-clamp-2; leadership message `<p>` → line-clamp-4 (keeps data, visually trims); growth 4-card summary → line-clamp-3. ADD: all 5 leader portraits + founder photo get `.photo-kenburns`; legacy stats band small inset floating icon |
| `src/pages/Products.tsx` | Cut 30% copy: signature section subtitle 2 sentences → 1; flavour/appeal/description cells per card → line-clamp-2 on description; signature strip lead-in sentence trim; range story 3 flavour families body copy → 1 line. ADD: hero bottle image photo-kenburns; product cards hero bottle image photo-kenburns; packaging matrix small SS watermark in corner |
| `src/pages/Infrastructure.tsx` | Cut 30% copy: value chain stage description → 1 sentence line-clamp-2 each; priorities → line-clamp-2 each; gallery copy intro → line-clamp-2; promises → line-clamp-2. ADD: all 12 gallery tiles photo-kenburns + subtle stagger-delay; 3-value chain icons (small SVG) |
| `src/pages/Pillars.tsx` | Cut 30% copy: each of 4 pillar 3 paragraphs → keep 2 (delete final "measured not just …" concluding para from all 4). ADD: all 4 pillar detail images photo-kenburns |
| `src/pages/Social.tsx` | Cut 30% copy: 6 initiatives bodies → line-clamp-2 (one sentence); pillar 4 detail 3 para → 2; band intro → line-clamp-2. ADD: 6 initiative cards small icon SVGs; impact 3 stats photo background with parallax-bg |
| `src/pages/Contact.tsx` | Cut 30% copy: hero 2 paras → 1 merged. ADD: 3 teaser card image backgrounds photo-kenburns |

## Dependency-Ordered Implementation Steps

### S1 — global.css: New keyframes + motion classes (animation +50%)
1. Append to bottom of `global.css` before the media query block (inside existing layer structure):
   - `@keyframes kenBurns { 0% { transform: scale(1) translate(0, 0); } 100% { transform: scale(1.16) translate(-1.5%, -1%); } }` — runs 24s infinite alternate ease-in-out, creates cinemagraph/"living photo" effect on any still image
   - `@keyframes marqueeScrollX { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }` — brand token strip
   - `@keyframes shineSweep { 0% { transform: translateX(-120%) skewX(-15deg); } 100% { transform: translateX(220%) skewX(-15deg); } }` — button/marquee shine
   - `@keyframes grainPan { from { background-position: 0 0; } to { background-position: 200px 200px; } }` — living grain on band accents
   - `@keyframes slowFloat { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-22px) rotate(2deg); } }` — emblem float
2. Add new component/util classes:
   - `.photo-kenburns { overflow: hidden; } .photo-kenburns > img, .photo-kenburns [class*=absolute] { animation: kenBurns 24s ease-in-out infinite alternate; }`
   - `.brand-marquee { overflow: hidden; border-block: 1px solid rgba(138,84,25,.1); }`, `.marquee-track { display: flex; gap: 56px; width: max-content; animation: marqueeScrollX 50s linear infinite; }`, `.marquee-token { @apply inline-flex items-center gap-3 font-serif text-2xl lg:text-3xl text-[color:var(--brand-copper)]/70 whitespace-nowrap; }`
   - `.btn-shine { position: relative; overflow: hidden; } .btn-shine::after { content: ""; position: absolute; top: 0; left: 0; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent); animation: shineSweep 2.6s ease-in-out infinite; animation-delay: 1.5s; }` — applies to all `btn-primary` usages
   - `.reveal-stagger > * { opacity: 0; transform: translateY(22px); animation: fadeInUp .9s cubic-bezier(.22,1,.36,1) forwards; }` — used for grid children
   - `.float-slow { animation: slowFloat 9s ease-in-out infinite; } .float-delay-1 { animation-delay: 1.2s; } .float-delay-2 { animation-delay: 2.4s; }`
   - `.wave-em em { display: inline-block; animation: float 5s ease-in-out infinite; animation-delay: calc(var(--i,0) * .08s); }` — subtle wave on italic title words when present

### S2 — Home.tsx: Trim 30% copy + brand marquee add + photo motion
1. Hero subtitle (copy 1 of 2 merged versions — single tight sentence → keep the stronger one only).
2. Insert `<div className="brand-marquee">` band immediately AFTER hero section → marquee-track contains 2x repeated tokens: "Est. 1960s · Kopargaon", "Bobby Santra — Flagship", "Premium Santra — Most Loved", "Bobby Saunf — Signature Spice", "64 Years · Vision · Growth · Trust" (SVG bullet separators with brand-gold filled circle).
3. Pillars teaser 4-card `.card-premium`: inner paragraph summary → `line-clamp-2` instead of full (copy trim via visual clamp — data array intact).
4. Featured 3 minimal product cards → apply wrapper `.photo-kenburns` to the article `<article>` so bottle image animates (cinemagraph effect).
5. Closing editorial CTA:
   - Merge the two long prose-body paras into **one single para** + a pull-quote under it (`<blockquote class="font-serif text-2xl italic text-gradient-gold border-l-2 border-gold/50 pl-5 max-w-md">`)
   - Add small decorative floating emblem `SS · 64` in left column background: `<div class="absolute -left-4 top-8 w-40 h-40 rounded-full border border-gold/25 bg-gold/5 flex items-center justify-center font-serif text-6xl text-gold/15 pointer-events-none float-slow">SS · 64</div>` (position relative wrapper)
   - All CTAs (`btn-primary`) also get `.btn-shine` class for sweep.

### S3 — About & Products: Trim + Cinemagraph
**About.tsx:**
1. Founding section (grid L59-92): Delete the repeated "A visionary dream took shape to build world-class organisation…" para (L61-66) entirely (it duplicates hero L38 word-for-word — this is 1 para removal, big trim). Keep second original paragraph only (Sahakar Maharshi Sakhar Karkhana founding), now line-clamp-3.
2. Timeline: `t.description` → wrap in `<p className="line-clamp-2 ...">` (forces one ~2 line presentation, data intact).
3. Leadership 5 cards: apply wrapper class `.photo-kenburns` to portrait container `md:col-span-2`. Inner message paragraph → `line-clamp-4` (visually tightens long messages, keep data array unchanged).
4. Vision & Mission: cards are fine as-is (short statements), add small `.float-slow float-delay-1` to the top gradient accent bar.
5. Growth Outlook 4 cards: summary → `line-clamp-3`, wrapper `reveal-stagger` on grid so they animate in with delays.

**Products.tsx:**
1. Signature section intro subtitle (2 sentences → keep first single sentence only; delete second).
2. 6 `ProductCard` instances (full card with description): wrapper `<article>` → `.photo-kenburns` class to the bottle-image header container so photo slow-zooms = cinemagraph look.
3. Flavour Families band (L84-96): each of 3 families body text → `line-clamp-2` (one short sentence presentation).
4. Packaging matrix table: add small watermark emblem top-right of table `absolute top-4 right-6 opacity-10 text-8xl font-serif text-gradient-gold pointer-events-none float-slow float-delay-2 → "S"`.

### S4 — Pillars, Infrastructure, Social, Contact: polish + reveals
**Pillars.tsx:**
1. For each of the 4 pillar detail sections — DELETE the final 3rd concluding para per pillar (all 4 read "Leadership/.../culture is measured not just… quarter." → repetitive, cut these 4 paragraphs in total — 33% text removed from pillar body sections, exactly hits 30% target).
2. Each pillar photo container → `.photo-kenburns` wrapper so image slow-pans.

**Infrastructure.tsx:**
1. Value chain 4 stages + 4 priorities + gallery intro + 3 promises: all body paragraphs wrap in `line-clamp-2` → 1-2 sentence presentation.
2. Gallery 12-tile `<figure>` wrapper: add `.photo-kenburns` + `style={{ animationDelay: `${i*0.35}s }}` (staggered Ken Burns = different pan timing per image = feels like an animated reel/gif montage).
3. Value chain stages: each `<h3>` prepend small 24px inline SVG icon (alcohol manufacturing → flask; processing → box; brand portfolio → bottle; market → truck) in gold inline with the heading (brand enhancement + icons).

**Social.tsx:**
1. 6 initiatives cards → body wrap in `line-clamp-2`.
2. Pillar 4 detail: 3 paras → keep first 2 only (delete last one, same pattern as Pillars cut).
3. Initiatives cards each `<h3>` prepend 20px small SVG icon.
4. Impact 3 stats grid (`64+ / 8+ / 100%`): wrap container in `bg-gradient-to-br from-amber-50 via-transparent` + add `.parallax-bg` class (CSS animation subtle translate).

**Contact.tsx:**
1. Hero section subtitle (2 paras → merge into 1).
2. 3 teaser cards at bottom (`Products / Our Story / Infrastructure`): each image wrapper `.photo-kenburns` so they slow-zoom = cinemagraph feel.
3. Form submit `btn-primary` → add `.btn-shine`.

### S5 — Sweep: Add `.btn-shine` to every `btn-primary` on all 7 pages.
Find every `className="btn btn-primary"` → extend to `className="btn btn-primary btn-shine"` (grep + replace_all or manual Edit). This applies the sweep animation globally for a more premium interactive feel.

### S6 — Verify
1. `npm run build` → exit 0, 0 TS.
2. `GetDiagnostics` → [].
3. Browser refresh Home → confirm 4 sections still present, brand marquee renders, closing CTA 1 para + quote visible, featured cards zooming very slowly in place (kenBurns).
4. 7 routes quick-nav smoke (all load, non-empty).

## Dependencies and Considerations
- All photo animation via pure CSS (no .mp4/.gif files) — Ken Burns effect is the industry standard way to turn stills into "moving image" perception when video assets aren't available. Works offline, zero added KB.
- Copy trimming happens via: (a) JSX line-clamp-N wrappers on description strings from data modules (data arrays UNTOUCHED), (b) deletion of redundant 2nd/3rd repeated paragraphs that exist ONLY in inline JSX not sourced from data, (c) sentence-level merge of duplicate prose in Founding/Closing/Pillars sections.
- Marquee strip uses NO image API calls — all serif token text + simple SVG bullet separators → zero token burn, instant render.
- `prefers-reduced-motion` media query already present in global.css at bottom — extend it to disable kenBurns/marquee/shine too during final S1 write (honour a11y).
- No new dependencies. All changes pure existing TSX + CSS + inline SVGs.

## Validation
- Copy verbatim char count pre/post on 3 longest pages (About/Pillars/Social → each must be ≤70% of original chars on prose-body paragraphs only).
- CSS @keyframes count ≥7 (was 2 → 7 now = 250% increase; well above 50% minimum target).
- Visual DOM snapshot: Home marquee visible between sections; featured product images have kenBurns class applied; All btn-primary have shine class; closing CTA now 1 para + pull quote.
- Build + Diagnostics clean.
- No broken routes.

## Risks and Handling
- **Risk: line-clamps truncate user-brand critical copy.** → Mitigation: only clamp leadership messages (4) / timeline descriptions (4) / value chain 4 / priorities 4 / gallery intro / promises 3 / social initiatives 6 — total ~26 places all from data arrays where content length naturally varies; full unclamped copy is still reachable via data modules if needed later.
- **Risk: marquee + kenBurns feel too busy on mobile.** → Mitigation: add `md:` breakpoint wrapper so kenBurns photo zoom only runs on md+; mobile stays still. Already in utilities plan.
- **Risk: user was expecting real GIF/MP4 files.** → Mitigation: explicitly note in the completion summary that we deployed Ken Burns cinemagraph-style CSS animation across ~40 image tiles (the closest no-dependency approach) as the "related animated moving images n gifs" deliverable; mention that if real animated MP4 assets are supplied they can slot in using the same `.photo-kenburns` container.
