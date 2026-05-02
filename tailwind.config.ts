import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "var(--color-slate-700)",
            "--tw-prose-headings": "var(--color-slate-950)",
            "--tw-prose-links": "var(--color-sky-700)",
            "--tw-prose-bold": "var(--color-slate-950)",
            "--tw-prose-bullets": "var(--color-sky-400)",
            "--tw-prose-quotes": "var(--color-slate-900)",
            "--tw-prose-code": "var(--color-slate-950)",
            "--tw-prose-pre-bg": "rgb(15 23 42 / 0.96)",
            h1: {
              fontWeight: "800",
              letterSpacing: "-0.04em",
            },
            h2: {
              fontWeight: "700",
              letterSpacing: "-0.03em",
            },
            a: {
              fontWeight: "600",
              textDecoration: "none",
            },
            code: {
              borderRadius: "0.375rem",
              backgroundColor: "rgb(226 232 240 / 0.75)",
              paddingInline: "0.35rem",
              paddingBlock: "0.2rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
};

export default config;
