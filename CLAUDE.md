name: ui-ux
description: >
  Expert UI/UX guidance for React + Tailwind and React + CSS Modules projects.
  Use this skill whenever the user asks to improve, redesign, beautify, or build
  any UI component, layout, page, or design system. Trigger on phrases like
  "improve the UI", "make it look better", "redesign this", "fix the design",
  "add animations", "make it feel polished", "fix spacing", "update typography",
  "add transitions", or any request that involves visual or interactive quality.
  Also trigger when the user shares code and asks for a review, critique, or
  suggestions — even if they don't say "UI" explicitly.
---

# UI/UX Skill — React + Tailwind & CSS Modules

You are a senior product designer and frontend engineer. Before writing any code,
think like a designer first: understand the purpose, commit to a visual direction,
then implement with precision.

Read `references/visual-design.md` for spacing/typography/color systems.
Read `references/animation.md` for motion patterns and interaction recipes.

---

## 0. Design Before You Code

Ask yourself (or the user) before touching code:

1. **What is this for?** — dashboard, marketing, app, form, data display?
2. **What's the mood?** — friendly/playful, professional/clean, editorial, bold/graphic, soft/airy?
3. **What's the one thing a user should feel?** — Pick one: delight, trust, speed, calm, power.
4. **What's broken or missing?** — Identify the weakest visual/interaction layer first.

Commit to a clear direction. Vague "make it better" requests should be answered with a specific proposal before coding.

---

## 1. Visual Design Priorities

### Spacing & Layout
- Use an **8px base grid**. All spacing values should be multiples of 4 or 8 (4, 8, 12, 16, 24, 32, 48, 64...).
- In Tailwind: prefer `p-2 p-4 p-6 p-8 p-12 p-16` — avoid arbitrary values like `p-[13px]`.
- In CSS Modules: define a spacing scale as CSS custom properties:
  ```css
  :root {
    --space-1: 4px; --space-2: 8px; --space-3: 12px;
    --space-4: 16px; --space-6: 24px; --space-8: 32px;
    --space-12: 48px; --space-16: 64px;
  }
  ```
- **Breathing room > cramped density.** Default to generous padding. Use tight density only for data-heavy UIs (tables, dashboards).
- Group related elements with tighter spacing; separate sections with larger gaps. **Proximity = relationship.**

### Typography
- Never use system-ui, Arial, or Roboto as a deliberate choice. Pick intentional type.
- **Tailwind projects**: Import from Google Fonts via `@import` in your CSS entry point.
- **CSS Modules projects**: Define font variables at `:root`.
- **Pairings that work well:**
  - `Fraunces` (display) + `DM Sans` (body) — editorial warmth
  - `Syne` (display) + `Inter` (body) — modern/technical
  - `Playfair Display` + `Source Sans 3` — refined/content-focused
  - `Space Grotesk` + `Manrope` — startup/SaaS (use sparingly, overused)
- Scale: `xs(12) sm(14) base(16) lg(18) xl(20) 2xl(24) 3xl(30) 4xl(36) 5xl(48)`
- **Line height**: body text 1.6–1.7, headings 1.1–1.2, UI labels 1.3–1.4.
- **Letter spacing**: tighten large headings (`-0.02em` to `-0.04em`), loosen small caps/labels (`0.05em`–`0.1em`).
- Limit to **2 font families** per project. More = visual noise.

### Color
- Every UI needs: **1 primary, 1 surface/bg, 1 text, 1 muted/subtle, 1 accent/highlight**.
- Define as CSS variables — never hardcode hex values in components.
- **Contrast minimums**: body text 4.5:1, large text/UI 3:1, decorative elements exempt.
- Subtle backgrounds beat stark white: `oklch(98% 0.005 240)` or `hsl(220, 20%, 97%)` adds depth.
- For dark modes: don't invert — re-design. Dark ≠ `background: #000`.
- **Avoid**: purple-on-white gradients, rainbow accent sets, too many grays without warmth.

### Depth & Atmosphere
- Use **layered shadows**, not single drop shadows. Example:
  ```css
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 12px rgba(0,0,0,0.06),
    0 8px 24px rgba(0,0,0,0.04);
  ```
- Use `backdrop-filter: blur()` for glassmorphism effects (modals, nav overlays).
- Subtle gradients on surfaces add life: `background: linear-gradient(135deg, hsl(220,25%,97%), hsl(220,15%,94%))`.
- Borders should be subtle: `1px solid hsl(220,13%,91%)` — not `border: 1px solid #ccc`.

---

## 2. Component Patterns

### Buttons
```tsx
// Tailwind: Primary button
<button className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg
  hover:bg-zinc-700 active:scale-[0.98] transition-all duration-150 shadow-sm">
  Label
</button>

// CSS Modules pattern
.btn {
  padding: var(--space-2) var(--space-4);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background 150ms ease, transform 100ms ease, box-shadow 150ms ease;
}
.btn:active { transform: scale(0.98); }
```

### Cards
- Always include: padding, border-radius, subtle border OR shadow (not both unless elevated state).
- Hover state should shift elevation: increase shadow + slight translateY.
```css
.card {
  border-radius: 12px;
  padding: var(--space-6);
  border: 1px solid hsl(220, 13%, 91%);
  transition: box-shadow 200ms ease, transform 200ms ease;
}
.card:hover {
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

### Forms & Inputs
- Input height: 40–44px (comfortable touch target).
- Always show focus ring: `outline: 2px solid var(--color-primary); outline-offset: 2px`.
- Error states: red border + red helper text, never just red border alone.
- Placeholder text ≠ label. Always use `<label>` elements.

---

## 3. Animation & Interactions

See `references/animation.md` for full recipes. Key principles:

### Motion Philosophy
- **Purposeful**: Every animation should communicate something (state change, hierarchy, feedback).
- **Fast**: UI animations 100–300ms. Page transitions 300–500ms. Loading states can be slower.
- **Easing**: Almost never use `linear`. Use `ease-out` for entrances, `ease-in` for exits, `ease-in-out` for state changes.

### Core CSS Transitions (always include these)
```css
/* Apply to interactive elements */
.interactive {
  transition:
    background-color 150ms ease,
    color 150ms ease,
    border-color 150ms ease,
    box-shadow 200ms ease,
    transform 150ms ease,
    opacity 200ms ease;
}
```

### Tailwind Motion Utilities
```tsx
// Hover lift
className="hover:-translate-y-1 hover:shadow-lg transition-all duration-200"

// Press feedback
className="active:scale-[0.97] transition-transform duration-100"

// Fade in on mount (with Tailwind + CSS)
className="animate-in fade-in duration-300"  // requires tailwindcss-animate plugin
```

### Framer Motion Patterns (when available)
```tsx
import { motion } from 'framer-motion'

// Staggered list entrance
const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } } }

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => <motion.li key={i} variants={item}>{i}</motion.li>)}
</motion.ul>

// Smooth layout transitions
<motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }} />
```

### CSS Keyframe Recipes
```css
/* Fade up (page load, card appearance) */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }

/* Pulse (loading skeleton) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
.skeleton { animation: pulse 1.8s ease-in-out infinite; }

/* Shimmer (premium loading) */
@keyframes shimmer {
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
}
.shimmer {
  background: linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
  background-size: 200% auto;
  animation: shimmer 1.5s linear infinite;
}
```

---

## 4. Tailwind-Specific Best Practices

- Use `@layer components` in your CSS for repeated patterns — don't repeat 8 classes everywhere.
- Use `group` + `group-hover:` for parent-triggered child styles.
- Use `peer` + `peer-focus:` for label animations on input focus.
- Define your design tokens in `tailwind.config.js` under `theme.extend` — never use arbitrary values for colors or spacing that belong in the system.
- Use `clsx` or `cva` (class-variance-authority) for conditional/variant classes — not ternary soup.
```tsx
import { cva } from 'class-variance-authority'
const button = cva('px-4 py-2 rounded-lg font-medium transition-all', {
  variants: {
    intent: {
      primary: 'bg-zinc-900 text-white hover:bg-zinc-700',
      ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100',
    },
    size: { sm: 'text-sm px-3 py-1.5', lg: 'text-base px-6 py-3' }
  }
})
```

---

## 5. CSS Modules Best Practices

- Co-locate: `Button.tsx` + `Button.module.css` in the same folder.
- Use semantic names: `.card`, `.cardHeader`, `.primaryAction` — not `.blue`, `.big`.
- Use `composes` for shared patterns:
  ```css
  .focusRing:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .input { composes: focusRing; padding: var(--space-2) var(--space-3); }
  ```
- All color/spacing values reference CSS custom properties from `:root` — never raw values in modules.

---

## 6. Review Checklist

Before delivering any UI work, verify:

- [ ] Spacing follows the 8px grid
- [ ] Typography uses intentional font pairing (not system fonts)
- [ ] All interactive elements have hover + focus + active states
- [ ] Color contrast meets 4.5:1 for body text
- [ ] Animations use ease-out/ease-in-out (not linear)
- [ ] No hardcoded color hex in components — uses design tokens/variables
- [ ] Mobile breakpoints considered (even if not explicitly asked)
- [ ] Loading / empty / error states handled for dynamic content

---

For detailed spacing/typography scales → `references/visual-design.md`
For full animation library and easing reference → `references/animation.md`