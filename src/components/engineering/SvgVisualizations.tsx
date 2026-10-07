export function S11Plot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={`w-full h-auto ${className}`} aria-label="S11 Frequency Plot - Illustrative Data">
      <rect width="400" height="200" fill="var(--surface)" rx="4" />
      {/* Grid Lines */}
      <g stroke="var(--surface-hover)" strokeWidth="1">
        <line x1="50" y1="20" x2="380" y2="20" />
        <line x1="50" y1="60" x2="380" y2="60" />
        <line x1="50" y1="100" x2="380" y2="100" />
        <line x1="50" y1="140" x2="380" y2="140" />
        <line x1="50" y1="180" x2="380" y2="180" />
        
        <line x1="50" y1="20" x2="50" y2="180" />
        <line x1="132.5" y1="20" x2="132.5" y2="180" />
        <line x1="215" y1="20" x2="215" y2="180" />
        <line x1="297.5" y1="20" x2="297.5" y2="180" />
        <line x1="380" y1="20" x2="380" y2="180" />
      </g>
      
      {/* Labels */}
      <g fill="var(--foreground-muted)" className="text-[10px] font-mono" textAnchor="end">
        <text x="40" y="24">0</text>
        <text x="40" y="64">-10</text>
        <text x="40" y="104">-20</text>
        <text x="40" y="144">-30</text>
        <text x="40" y="184">-40</text>
      </g>
      <g fill="var(--foreground-muted)" className="text-[10px] font-mono" textAnchor="middle">
        <text x="50" y="195">26.0</text>
        <text x="215" y="195">28.0</text>
        <text x="380" y="195">30.0</text>
      </g>
      <text x="215" y="10" fill="var(--foreground-muted)" className="text-[10px] font-mono" textAnchor="middle">Frequency (GHz)</text>
      <text x="15" y="100" fill="var(--foreground-muted)" className="text-[10px] font-mono" textAnchor="middle" transform="rotate(-90, 15, 100)">S11 (dB)</text>

      {/* Target line (-10dB) */}
      <line x1="50" y1="60" x2="380" y2="60" stroke="var(--science-orange-muted)" strokeWidth="1" strokeDasharray="4 4" />
      
      {/* Curve */}
      <path
        d="M 50 30 Q 150 40 180 80 T 215 160 T 250 80 T 380 30"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <circle cx="215" cy="160" r="3" fill="var(--accent-light)" />
      
      <text x="375" y="15" fill="var(--foreground-muted)" className="text-[8px] font-mono opacity-50" textAnchor="end">Illustrative data</text>
    </svg>
  );
}

export function AntennaGeometry({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={`w-full h-auto ${className}`} aria-label="Parameterized Microstrip Patch Antenna">
      <rect width="200" height="200" fill="var(--surface)" rx="4" />
      {/* Substrate */}
      <rect x="20" y="20" width="160" height="160" fill="var(--background)" stroke="var(--surface-hover)" strokeWidth="2" />
      {/* Patch */}
      <rect x="50" y="50" width="100" height="80" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="4 2" />
      <rect x="55" y="55" width="90" height="70" fill="var(--accent-muted)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1" />
      {/* Feed line */}
      <rect x="95" y="130" width="10" height="50" fill="var(--accent-muted)" fillOpacity="0.2" stroke="var(--accent)" strokeWidth="1" />
      {/* Inset */}
      <rect x="90" y="115" width="20" height="15" fill="var(--background)" stroke="var(--background)" strokeWidth="1" />
      <path d="M 95 130 L 95 115 M 105 130 L 105 115" stroke="var(--accent)" strokeWidth="1" />
      
      {/* Parameters */}
      <g stroke="var(--foreground-muted)" strokeWidth="1" strokeDasharray="2 2">
        {/* W */}
        <line x1="55" y1="40" x2="145" y2="40" />
        <line x1="55" y1="35" x2="55" y2="45" />
        <line x1="145" y1="35" x2="145" y2="45" />
        <text x="100" y="35" fill="var(--foreground)" className="text-[10px] font-mono" textAnchor="middle">W</text>
        
        {/* L */}
        <line x1="35" y1="55" x2="35" y2="125" />
        <line x1="30" y1="55" x2="40" y2="55" />
        <line x1="30" y1="125" x2="40" y2="125" />
        <text x="25" y="95" fill="var(--foreground)" className="text-[10px] font-mono" textAnchor="end">L</text>
      </g>
      <text x="195" y="15" fill="var(--foreground-muted)" className="text-[8px] font-mono opacity-50" textAnchor="end">Illustrative data</text>
    </svg>
  );
}

export function WorkflowPipeline({ className = "" }: { className?: string }) {
  const steps = [
    "01 - Define Requirements",
    "02 - Build Parametric Model",
    "03 - Generate Simulation Data",
    "04 - Train Surrogate Model",
    "05 - Explore Design Space",
    "06 - Multi-Objective Optimization",
    "07 - Full-Wave Verification",
    "08 - Engineering Review",
    "09 - Manufacturing Prep"
  ];
  
  return (
    <div className={`w-full py-8 overflow-x-auto ${className}`}>
      <div className="flex items-center min-w-max px-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--surface-hover)] flex items-center justify-center text-[var(--accent)] font-mono text-sm">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <span className="mt-4 text-xs font-mono text-[var(--foreground-muted)] text-center w-24 leading-tight">
                {step.split(' - ')[1]}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-16 h-px bg-[var(--surface-hover)] mx-2 relative mb-8">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 border-t border-r border-[var(--surface-hover)] rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
