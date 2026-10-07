import Link from "next/link";
import { insights } from "@/data/insights";

export default function InsightsPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Insights & Publications
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] max-w-3xl">
          Technical perspectives on machine learning, electromagnetic simulation, and the future of high-frequency engineering.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((article) => (
            <Link 
              key={article.slug} 
              href={`/insights/${article.slug}`}
              className="flex flex-col bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg p-6 hover:border-[var(--accent-muted)] transition-colors group"
            >
              <div className="flex items-center text-xs font-mono text-[var(--foreground-muted)] mb-4 space-x-4">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                {article.title}
              </h2>
              <p className="text-[var(--foreground-muted)] text-sm flex-grow">
                {article.summary}
              </p>
              <div className="mt-6 text-[var(--accent)] font-medium text-sm flex items-center">
                Read Article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
