import { fieldResearch, ilkmDirections } from "@/data/research";
import { ExternalLink } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Research & Exploration
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] max-w-3xl">
          Advancing the application of machine learning in computational electromagnetics.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
        {/* ILKM Research Directions */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-8 border-b border-[var(--surface-hover)] pb-4">
            ILKM Research Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ilkmDirections.map(dir => (
              <div key={dir.id} className="bg-[var(--surface)] border border-[var(--surface-hover)] p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-bl-full -mr-16 -mt-16"></div>
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">{dir.title}</h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {dir.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Research from the Field */}
        <section>
          <div className="mb-12 border-b border-[var(--surface-hover)] pb-4">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-2">
              Selected Research from the Field
            </h2>
            <p className="text-sm text-[var(--foreground-muted)]">
              Curated academic and industry research demonstrating the viability of AI in electromagnetic engineering.
            </p>
          </div>
          
          <div className="space-y-8">
            {fieldResearch.map(paper => (
              <article key={paper.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[var(--background)] border border-[var(--surface-hover)] p-6 md:p-8 rounded-lg group hover:border-[var(--accent-muted)] transition-colors">
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {paper.title}
                  </h3>
                  <div className="text-sm font-mono text-[var(--foreground-muted)] mb-6 flex flex-wrap gap-x-4 gap-y-2">
                    <span>{paper.authors.join(", ")}</span>
                    <span className="text-[var(--surface-hover)]">|</span>
                    <span>{paper.publication}, {paper.year}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--foreground-muted)] mb-1">Summary</h4>
                      <p className="text-[var(--foreground)] text-sm leading-relaxed">{paper.summary}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-[var(--science-orange)] mb-1">Why it matters for RF engineering</h4>
                      <p className="text-[var(--foreground)] text-sm leading-relaxed border-l-2 border-[var(--science-orange)] pl-3 py-1">
                        {paper.technicalSignificance}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end">
                  <div className="flex flex-wrap gap-2 mb-8 lg:justify-end">
                    {paper.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-[var(--surface)] px-2.5 py-0.5 text-xs font-medium text-[var(--foreground-muted)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={paper.sourceUrl}
                    className="inline-flex items-center text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)]"
                  >
                    View Original Research <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
