// Loaded right after the Tailwind CDN script, before it scans the DOM.
// Kept in its own 'self'-served file so the CSP needs no 'unsafe-inline'
// for script-src — only the CDN host itself is allowlisted.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: "#09090b",
        ink: "#fafafa",
        muted: "#a1a1aa",
        border: "#27272a",
        accent: "#2e6fff",
        "accent-bright": "#5b93ff",
      },
      fontFamily: {
        sans: ["Geist", "Inter", "sans-serif"],
        mono: ["Geist Mono", "JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
};
