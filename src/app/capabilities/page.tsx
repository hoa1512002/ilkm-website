import { capabilities } from "@/data/capabilities";
import { CheckCircle2 } from "lucide-react";

export default function CapabilitiesPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Engineering Capabilities
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] max-w-3xl">
          ILKM focuses on AI-assisted engineering workflows across four primary domains of high-frequency electronics.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {capabilities.map((cap) => (
            <div key={cap.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[var(--surface-hover)] pt-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">{cap.title}</h2>
                <p className="text-[var(--foreground-muted)]">{cap.description}</p>
              </div>
              
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="mb-6 sm:mb-0">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--accent)] mb-4">Focus Areas</h3>
                    <ul className="space-y-3">
                      {cap.topics.map(topic => (
                        <li key={topic} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-[var(--accent-muted)] mr-3 flex-shrink-0" />
                          <span className="text-[var(--foreground)]">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {cap.objectives.length > 0 && (
                    <div>
                      <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--science-orange)] mb-4">Optimization Objectives</h3>
                      <div className="flex flex-wrap gap-2">
                        {cap.objectives.map(obj => (
                          <span key={obj} className="inline-flex items-center rounded-md bg-[var(--surface)] px-2.5 py-1.5 text-sm font-medium text-[var(--foreground-muted)] border border-[var(--surface-hover)]">
                            {obj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Physics-Informed AI Section */}
      <div className="mt-32 bg-[var(--surface)] border-y border-[var(--surface-hover)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">Physics-Informed AI</h2>
          <p className="text-[var(--foreground-muted)] text-lg mb-8 text-left">
            Engineering AI should respect or incorporate physical constraints, simulation data, and electromagnetic relationships rather than operate as an unconstrained black box.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="bg-[var(--background)] p-6 rounded border border-[var(--surface-hover)]">
              <strong className="text-[var(--foreground)] block mb-2">Constraint-Aware Optimization</strong>
              <p className="text-sm text-[var(--foreground-muted)]">Ensuring generated geometries do not violate manufacturing rules (DRC) or physical envelope limits.</p>
            </div>
            <div className="bg-[var(--background)] p-6 rounded border border-[var(--surface-hover)]">
              <strong className="text-[var(--foreground)] block mb-2">Physics-Informed Loss Functions</strong>
              <p className="text-sm text-[var(--foreground-muted)]">Penalizing neural networks when their predictions violate Maxwell&apos;s equations or boundary conditions.</p>
            </div>
            <div className="bg-[var(--background)] p-6 rounded border border-[var(--surface-hover)]">
              <strong className="text-[var(--foreground)] block mb-2">Simulation-in-the-Loop</strong>
              <p className="text-sm text-[var(--foreground-muted)]">Active learning workflows that continuously query the EM solver during optimization to refine the surrogate model.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
