import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Discuss an RF or Electromagnetic Engineering Challenge
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] mb-12">
          Whether you are exploring an antenna concept, RF architecture, high-frequency PCB structure, or an AI-assisted optimization workflow, we welcome technical discussions and research collaboration opportunities.
        </p>
        
        <div className="bg-[var(--surface)] border border-[var(--surface-hover)] rounded-xl p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <Mail className="h-12 w-12 text-[var(--accent)] mx-auto mb-6" />
          
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Get in Touch</h2>
          <a href="mailto:ILKM@tech2grow.io.vn?subject=Engineering%20Inquiry%20%E2%80%94%20ILKM" className="text-lg font-mono text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors block mb-8">
            ILKM@tech2grow.io.vn
          </a>
          
          <a 
            href="mailto:ILKM@tech2grow.io.vn?subject=Engineering%20Inquiry%20%E2%80%94%20ILKM"
            className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-8 py-4 text-lg font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-light)] w-full md:w-auto"
          >
            Email ILKM
          </a>
        </div>
        
        <div className="text-left border-t border-[var(--surface-hover)] pt-12">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--foreground-muted)] mb-6 text-center">Contact Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Research Collaboration", "RF / Microwave Engineering", "Antenna Optimization", "High-Frequency PCB Design", "AI / ML Engineering", "Technology Partnership", "General Inquiry"].map(cat => (
              <span key={cat} className="px-4 py-2 rounded-full border border-[var(--surface-hover)] bg-[var(--background)] text-sm text-[var(--foreground)]">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
