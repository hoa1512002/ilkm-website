import { Satellite, RadioTower, Smartphone, Database } from "lucide-react";

export default function ApplicationsPage() {
  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          Engineering Domains
        </h1>
        <p className="text-lg text-[var(--foreground-muted)] max-w-3xl mx-auto">
          ILKM technology is relevant across a broad spectrum of high-frequency engineering applications, from terrestrial communications to aerospace systems.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Wireless */}
          <div className="bg-[var(--surface)] border border-[var(--surface-hover)] p-8 lg:p-12 rounded-lg">
            <RadioTower className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Wireless Communications</h2>
            <ul className="space-y-3 mb-8 text-[var(--foreground-muted)]">
              <li>• RF front ends</li>
              <li>• 5G and future 6G research</li>
              <li>• MIMO array synthesis</li>
              <li>• Beamforming networks</li>
              <li>• Base-station systems</li>
            </ul>
            <p className="text-sm text-[var(--foreground-muted)]/70">
              Assisting in the exploration of complex multi-band architectures and densely packed RF chains.
            </p>
          </div>

          {/* Radar */}
          <div className="bg-[var(--surface)] border border-[var(--surface-hover)] p-8 lg:p-12 rounded-lg">
            <Database className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Radar & Sensing</h2>
            <ul className="space-y-3 mb-8 text-[var(--foreground-muted)]">
              <li>• Automotive radar (77 GHz)</li>
              <li>• Industrial sensing applications</li>
              <li>• Remote sensing hardware</li>
              <li>• Phased array optimization</li>
              <li>• mmWave radar architectures</li>
            </ul>
            <p className="text-sm text-[var(--foreground-muted)]/70">
              Parametric optimization of array spacing and patch geometries for highly directive sensing.
            </p>
          </div>

          {/* Aerospace */}
          <div className="bg-[var(--surface)] border border-[var(--surface-hover)] p-8 lg:p-12 rounded-lg">
            <Satellite className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Aerospace & Satellite</h2>
            <ul className="space-y-3 mb-8 text-[var(--foreground-muted)]">
              <li>• Satellite communications</li>
              <li>• High-gain antennas</li>
              <li>• Compact RF systems</li>
              <li>• Antenna placement on complex bodies</li>
              <li>• RF payload engineering</li>
            </ul>
            <p className="text-sm text-[var(--foreground-muted)]/70">
              Balancing stringent physical envelope and thermal constraints against electromagnetic performance.
            </p>
          </div>

          {/* IoT */}
          <div className="bg-[var(--surface)] border border-[var(--surface-hover)] p-8 lg:p-12 rounded-lg">
            <Smartphone className="h-10 w-10 text-[var(--accent)] mb-6" />
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">IoT & Embedded Wireless</h2>
            <ul className="space-y-3 mb-8 text-[var(--foreground-muted)]">
              <li>• Compact embedded antennas</li>
              <li>• Low-power radio systems</li>
              <li>• Small-form-factor RF PCB layout</li>
              <li>• Wearable device antennas</li>
              <li>• Multi-protocol coexistence</li>
            </ul>
            <p className="text-sm text-[var(--foreground-muted)]/70">
              Optimizing antenna geometries and matching networks within severely constrained physical spaces.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-[var(--background)] border border-[var(--surface-hover)] p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">Research & Advanced Engineering</h2>
          <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
            ILKM collaborates with universities, R&D laboratories, and advanced engineering teams to accelerate design-space exploration and prototype development.
          </p>
        </div>
      </div>
    </div>
  );
}
