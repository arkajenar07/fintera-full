/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.{js,ts}',
    './app/plugins/**/*.{js,ts}',
    './app/utils/**/*.{js,ts}',
    './app/app.{js,ts,vue}',
    './app/error.{js,ts,vue}',
    './app/app.config.{js,ts}',
  ],
  theme: {
    extend: {
      // ─────────────────────────────────────────────
      // Brand color tokens
      // Usage: bg-brand-green, text-brand-orange, dll.
      // ─────────────────────────────────────────────
      colors: {
        brand: {
          // ── Green scale ──────────────────────────
          green: {
            DEFAULT: '#173D32', // Warna utama (CTA, logo)
            dark:    '#122F27', // Footer bg
            deep:    '#163D31', // Section gelap (pengadaan)
            hover:   '#285747', // Hover state CTA
            subtle:  '#2E5946', // Secondary text on bg
            soft:    '#3B6348', // Tertiary text green
            muted:   '#617469', // Body text muted
            faint:   '#E8F0E8', // Active tab/chip bg
            wash:    '#EFF4EC', // Icon bg / step card
            pale:    '#EEF3EC', // Section bg hijau muda
            fog:     '#F3F7F0', // Highlight plan card
            ghost:   '#FAFBF9', // Sidebar bg
            canvas:  '#F5F7F2', // Tab strip bg
          },
          // ── Orange scale ─────────────────────────
          orange: {
            DEFAULT: '#B65024', // Orange utama
            warm:    '#B75D32', // Nav hover
            accent:  '#BD6337', // Uppercase label aksen
            mid:     '#BA6338', // H1 accent span
            badge:   '#B86940', // Badge/pill bg
            step:    '#C07951', // Step label
            segment: '#AD633E', // Target segment label
            glow:    '#E3AF8D', // CTA button light
            bloom:   '#F0C6A7', // CTA button hover
            skin:    '#DBA17D', // Dark section label
            pale:    '#E9A981', // Tag icon dark section
            blush:   '#E5AA85', // H2 span dark section
            buff:    '#F0BEA0', // Link hover on dark bg
            sand:    '#E6B18E', // Footer logo icon bg
            linen:   '#FBF0E8', // Alert bg low-stock
            peach:   '#F5EEE8', // Challenge icon bg
          },
          // ── Neutrals ─────────────────────────────
          cream:   '#F8F8F4', // Page / FAQ section bg
          canvas:  '#FBFCF9', // Dashboard header bg
          border:  '#DDE5DC', // Default border
          divider: '#E3E7DD', // Section separator
          rule:    '#DAE3D8', // FAQ / module divider
          line:    '#DCE5DC', // Step card border
          rim:     '#D6DFD4', // Mockup card border
          edge:    '#E0E7DD', // Module card border
          frame:   '#E0E8DE', // Inventory card border
          // ── Text scale ───────────────────────────
          text: {
            base:    '#173D32', // Default body text
            heading: '#214635', // H3 / card title
            sub:     '#536A5E', // Nav link
            muted:   '#617469', // Body muted
            faint:   '#687D70', // Tagline / note
            dim:     '#78897C', // Card description
            soft:    '#7A8D7D', // FAQ sub
            pale:    '#8A9A8B', // Footnote / disclaimer
            ghost:   '#A6BBAF', // Footer body copy
          },
        },
      },
      // ─────────────────────────────────────────────
      // Typography tokens
      // Usage: font-display (heading), font-body (body)
      // ─────────────────────────────────────────────
      fontFamily: {
        display: ['"Manrope"', '"DM Sans"', 'sans-serif'],   // Heading / logo / badge
        body:    ['"DM Sans"', '"Inter"', 'sans-serif'],      // Default body
        ui:      ['"Inter"', '"DM Sans"', 'sans-serif'],      // UI labels / tags
        sans:    ['"DM Sans"', '"Inter"', 'Roboto', 'sans-serif'], // Tailwind default override
      },
      // ─────────────────────────────────────────────
      // Tracking presets (letter-spacing)
      // ─────────────────────────────────────────────
      letterSpacing: {
        'display': '-0.065em',   // Logo, big display heading
        'heading':  '-0.055em',  // Section h2
        'title':    '-0.035em',  // Card h3
        'label':    '0.17em',    // Uppercase section label
        'tag':      '0.12em',    // Small tag / badge text
      },
      // ─────────────────────────────────────────────
      // Border radius presets
      // ─────────────────────────────────────────────
      borderRadius: {
        'card':  '14px',  // Article / module card
        'panel': '18px',  // Large mockup / CTA block
        'sheet': '15px',  // Procurement card
      },
    },
  },
  plugins: [],
}
