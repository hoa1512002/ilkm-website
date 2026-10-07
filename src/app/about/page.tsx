export default function AboutPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-8">
          Building Better Engineering Workflows for Complex Electromagnetic Systems
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none mb-20 text-[var(--foreground-muted)]">
          <p className="text-xl leading-relaxed mb-6 text-[var(--foreground)]">
            ILKM is a technology company focused on the application of artificial intelligence and computational optimization to RF, microwave, antenna and high-frequency electronic design.
          </p>
          <p className="leading-relaxed mb-6">
            Our work is centered on a simple engineering principle: artificial intelligence should complement physics-based design, not replace it.
          </p>
          <p className="leading-relaxed">
            We investigate methods that combine simulation, machine learning, optimization and engineering constraints to help technical teams explore complex design spaces while maintaining rigorous electromagnetic verification.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-10 border-b border-[var(--surface-hover)] pb-4">Engineering Principles</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center">
              <span className="w-8 h-px bg-[var(--accent)] mr-4"></span>
              Physics First
            </h3>
            <p className="text-[var(--foreground-muted)] pl-12">
              Engineering decisions must remain grounded in electromagnetic behavior. A mathematical optimum is meaningless if it violates physical laws.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center">
              <span className="w-8 h-px bg-[var(--accent)] mr-4"></span>
              Verification Matters
            </h3>
            <p className="text-[var(--foreground-muted)] pl-12">
              AI-generated candidates require simulation and engineering verification. We do not trust surrogate models blindly.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center">
              <span className="w-8 h-px bg-[var(--accent)] mr-4"></span>
              Optimization With Constraints
            </h3>
            <p className="text-[var(--foreground-muted)] pl-12">
              The best mathematical optimum is not useful if it cannot be fabricated, integrated, or cooled. Manufacturing limits are built into the optimization space.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center">
              <span className="w-8 h-px bg-[var(--accent)] mr-4"></span>
              Engineering Transparency
            </h3>
            <p className="text-[var(--foreground-muted)] pl-12">
              Models and optimization results should be interpretable enough to support engineering decisions, not obfuscate them.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-[var(--accent)] mb-3 flex items-center">
              <span className="w-8 h-px bg-[var(--accent)] mr-4"></span>
              Human Engineering Judgment
            </h3>
            <p className="text-[var(--foreground-muted)] pl-12">
              AI is a design assistant, not a substitute for technical responsibility. Engineers make the final call.
            </p>
          </div>
        </div>

        <div className="mt-24 p-6 bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg text-center">
          <p className="text-sm font-mono text-[var(--foreground-muted)]">
            Team information will be published as ILKM expands its research and engineering activities.
          </p>
        </div>
      </div>
    </div>
  );
}
