import Link from "next/link";
import { ArrowRight, Cpu, Radio, Zap } from "lucide-react";
import { S11Plot, AntennaGeometry, WorkflowPipeline } from "@/components/engineering/SvgVisualizations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--background)] py-20 lg:py-32">
        <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-[var(--accent-muted)]/50 bg-[var(--accent-muted)]/10 px-3 py-1 text-sm font-medium text-[var(--accent-light)] backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[var(--accent)] mr-2"></span>
              Engineering Intelligence for the Electromagnetic World
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              AI-Accelerated Engineering for RF, Antennas and High-Frequency Electronics
            </h1>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] mb-8 max-w-2xl">
              ILKM explores the intersection of artificial intelligence, electromagnetic simulation and RF engineering to help engineers discover, evaluate and optimize high-performance antennas, RF circuits and high-frequency PCB structures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/technology" className="inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-base font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-light)]">
                Explore Our Technology
              </Link>
              <Link href="/research" className="inline-flex items-center justify-center rounded-md border border-[var(--surface-hover)] bg-[var(--surface)] px-6 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--accent)]">
                Research & Insights
              </Link>
            </div>
            
            <div className="mt-8 text-sm font-mono text-[var(--foreground-muted)]/70 uppercase tracking-widest border-l-2 border-[var(--accent-muted)] pl-4 py-1">
              AI proposes. Physics verifies. Engineers decide.
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] to-transparent z-10 w-12"></div>
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-lg border border-[var(--surface-hover)] bg-[var(--surface)] p-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-mono text-[var(--foreground)]">Optimization Goal: Return Loss</h3>
                  <span className="px-2 py-1 bg-[var(--background)] rounded text-xs font-mono text-[var(--accent)] border border-[var(--surface-hover)]">28 GHz Band</span>
                </div>
                <S11Plot />
              </div>
              <div className="rounded-lg border border-[var(--surface-hover)] bg-[var(--surface)] p-6 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-mono text-[var(--foreground)]">Candidate Geometry Generation</h3>
                  <span className="px-2 py-1 bg-[var(--background)] rounded text-xs font-mono text-[var(--accent)] border border-[var(--surface-hover)]">Microstrip Patch</span>
                </div>
                <AntennaGeometry />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Challenge Section */}
      <section className="py-24 bg-[var(--surface)] border-y border-[var(--surface-hover)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-6">
              High-Frequency Design Is a Multi-Dimensional Optimization Problem
            </h2>
            <p className="text-lg text-[var(--foreground-muted)]">
              RF performance depends on tightly coupled variables including geometry, materials, frequency, substrate properties, impedance, bias conditions, thermal behavior, and manufacturing tolerances. Traditional optimization requires repeated full-wave EM simulations, resulting in painfully slow engineering iterations.
            </p>
            <p className="text-lg text-[var(--foreground-muted)] mt-4">
              ILKM investigates hybrid workflows combining electromagnetic simulation, engineering constraints, and AI-based optimization to reduce the number of expensive design iterations while preserving physics-based verification.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--background)] border border-[var(--surface-hover)] p-8 rounded-lg">
              <Radio className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Antenna Engineering</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                From simple microstrip patches to complex phased arrays and mmWave structures, exploring topologies for optimal S11, bandwidth, and radiation efficiency.
              </p>
            </div>
            <div className="bg-[var(--background)] border border-[var(--surface-hover)] p-8 rounded-lg">
              <Zap className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">RF & Microwave Circuits</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                Optimizing matching networks, filters, power amplifiers, and passive structures for superior S-parameters, gain, and noise figure.
              </p>
            </div>
            <div className="bg-[var(--background)] border border-[var(--surface-hover)] p-8 rounded-lg">
              <Cpu className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="text-xl font-semibold mb-3">High-Frequency PCB</h3>
              <p className="text-[var(--foreground-muted)] text-sm">
                EM-aware layout optimization for controlled-impedance routing, via transitions, launch structures, and minimizing parasitic coupling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-[var(--background)] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] mb-4">
              The AI-Assisted Engineering Workflow
            </h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl">
              Integrating machine learning into standard electromagnetic engineering pipelines to augment design-space exploration.
            </p>
          </div>
          
          <WorkflowPipeline />
          
          <div className="mt-12 flex items-center justify-end">
            <Link href="/technology" className="inline-flex items-center text-[var(--accent)] hover:text-[var(--accent-light)] font-medium">
              Read more about our methodology <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
