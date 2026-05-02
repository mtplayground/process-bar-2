import styles from "./page.module.css";

const foundations = [
  "Next.js App Router wired for server-first pages",
  "TypeScript configured with strict mode",
  "ESLint enabled with the Next.js ruleset",
  "Prettier ready for consistent formatting",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Issue #1</p>
        <h1>Process Bar 2 is now running on Next.js.</h1>
        <p className={styles.copy}>
          This branch establishes the application shell for the blog and CMS
          roadmap: App Router, TypeScript, linting, formatting, and the baseline
          folder structure for future issues.
        </p>
      </section>

      <section className={styles.panel} aria-labelledby="foundation-heading">
        <h2 id="foundation-heading">Foundation in place</h2>
        <ul className={styles.list}>
          {foundations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
