export default function TechnologyPage() {
  return (
    <div className="py-20 lg:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          From Design Space to Verified Electromagnetic Performance
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] max-w-3xl">
          At ILKM, we believe that artificial intelligence should augment the rigorous physics-based simulation workflows used by RF engineers, rather than attempt to bypass them. Our technical approach is structured across five critical layers.
        </p>
      </div>

      <div className="space-y-16">
        {/* Layer 1 */}
        <section className="border-l border-[var(--surface-hover)] pl-8 relative">
          <div className="absolute w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] -left-[9px] top-1"></div>
          <h2 className="text-xl font-mono text-[var(--accent)] mb-2">Layer 1</h2>
          <h3 className="text-2xl font-bold mb-4">Engineering Requirements</h3>
          <p className="text-[var(--foreground-muted)] mb-6">
            Optimization cannot begin without a mathematically rigorous definition of the goal. RF design is an exercise in managing tradeoffs between competing objectives.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Frequency band", "Physical envelope", "Substrate properties", "Input power", "Gain & Directivity", "Radiation pattern", "Efficiency", "Bandwidth", "Cost limits", "Manufacturing limits"].map(item => (
              <div key={item} className="bg-[var(--surface)] border border-[var(--surface-hover)] px-3 py-2 text-sm text-[var(--foreground)] rounded">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Layer 2 */}
        <section className="border-l border-[var(--surface-hover)] pl-8 relative">
          <div className="absolute w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] -left-[9px] top-1"></div>
          <h2 className="text-xl font-mono text-[var(--accent)] mb-2">Layer 2</h2>
          <h3 className="text-2xl font-bold mb-4">Parametric Models</h3>
          <p className="text-[var(--foreground-muted)] mb-6">
            Engineering geometries are represented using controlled parameters. Rather than allowing an AI to propose un-manufacturable voxel noise, we constrain the generative and optimization processes to valid topological variables.
          </p>
          <ul className="list-disc list-inside text-[var(--foreground-muted)] space-y-2">
            <li>Patch dimensions and feed positions</li>
            <li>Stub lengths and widths</li>
            <li>Transmission-line widths and gaps</li>
            <li>Substrate thickness and dielectric variations</li>
            <li>Array spacing and lattice geometries</li>
            <li>Matching network component values</li>
            <li>Via geometry and transition structures</li>
            <li>Ground-plane defect structures</li>
          </ul>
        </section>

        {/* Layer 3 */}
        <section className="border-l border-[var(--surface-hover)] pl-8 relative">
          <div className="absolute w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] -left-[9px] top-1"></div>
          <h2 className="text-xl font-mono text-[var(--accent)] mb-2">Layer 3</h2>
          <h3 className="text-2xl font-bold mb-4">Simulation Integration</h3>
          <p className="text-[var(--foreground-muted)] mb-4">
            Workflows may incorporate results exported from commercial or open electromagnetic and circuit simulation environments. We do not replace the solver; we automate the orchestration of design evaluations.
          </p>
          <p className="text-sm text-[var(--foreground-muted)] italic bg-[var(--surface)] p-4 rounded border border-[var(--surface-hover)]">
            Note: Workflows are conceptually compatible with industry-standard tools such as Ansys HFSS, Keysight ADS, Cadence AWR, Altair Feko, CST Studio Suite, openEMS, and scikit-rf. Trademarks belong to their respective owners. Mention does not imply affiliation.
          </p>
        </section>

        {/* Layer 4 */}
        <section className="border-l border-[var(--surface-hover)] pl-8 relative">
          <div className="absolute w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] -left-[9px] top-1"></div>
          <h2 className="text-xl font-mono text-[var(--accent)] mb-2">Layer 4</h2>
          <h3 className="text-2xl font-bold mb-4">AI & Optimization</h3>
          <p className="text-[var(--foreground-muted)] mb-6">
            Once a parametric space is defined and connected to a solver, we apply machine learning and optimization algorithms to explore the design space efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[var(--foreground-muted)]">
            <div>
              <strong className="text-[var(--foreground)] block mb-1">Surrogate Regression & Neural Networks</strong>
              Training fast-evaluating approximations of the EM solver based on sampled datasets to drastically speed up optimization.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-1">Bayesian Optimization & Gaussian Processes</strong>
              Intelligently selecting the next geometry to simulate by balancing the exploration of unknown parameter space with the exploitation of known high-performance regions.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-1">Evolutionary Algorithms</strong>
              Navigating multi-objective problems to find the Pareto front.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-1">Inverse & Generative Design</strong>
              Proposing initial candidate geometries based directly on target S-parameter or radiation objectives.
            </div>
          </div>
        </section>

        {/* Layer 5 */}
        <section className="border-l border-[var(--surface-hover)] pl-8 relative pb-8">
          <div className="absolute w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--accent)] -left-[9px] top-1"></div>
          <h2 className="text-xl font-mono text-[var(--accent)] mb-2">Layer 5</h2>
          <h3 className="text-2xl font-bold mb-4">Physics-Based Verification</h3>
          <p className="text-[var(--foreground-muted)]">
            Every candidate design generated or optimized by AI must be validated using appropriate electromagnetic or circuit simulation before engineering conclusions are drawn. Machine learning models are inherently interpolative and can be blind to complex physical coupling at the edges of their training distribution. Final verification ensures that the predicted performance holds true against the uncompromising laws of physics.
          </p>
        </section>
      </div>
    </div>
  );
}
