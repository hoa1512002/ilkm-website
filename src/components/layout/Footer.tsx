import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--surface-hover)] bg-[var(--background)] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold tracking-tight text-[var(--foreground)]">ILKM</span>
            <p className="mt-4 text-sm text-[var(--foreground-muted)] max-w-md">
              AI-accelerated engineering for RF, antennas and high-frequency electronics.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Navigation</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
              <li><Link href="/technology" className="hover:text-[var(--accent)]">Technology</Link></li>
              <li><Link href="/capabilities" className="hover:text-[var(--accent)]">Capabilities</Link></li>
              <li><Link href="/applications" className="hover:text-[var(--accent)]">Applications</Link></li>
              <li><Link href="/about" className="hover:text-[var(--accent)]">About ILKM</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--foreground)]">Research & Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--foreground-muted)]">
              <li><Link href="/research" className="hover:text-[var(--accent)]">Research</Link></li>
              <li><Link href="/insights" className="hover:text-[var(--accent)]">Insights</Link></li>
              <li><a href="mailto:proadmin@yayasanlenterakeadilanmasyarakat.com" className="hover:text-[var(--accent)]">Email ILKM</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-[var(--surface-hover)] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--foreground-muted)]">
          <p>© {new Date().getFullYear()} ILKM. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[var(--foreground)]">Privacy Policy</Link>
            <Link href="#" className="hover:text-[var(--foreground)]">Terms of Use</Link>
            <Link href="#" className="hover:text-[var(--foreground)]">Research Attribution Policy</Link>
          </div>
        </div>
        
        <div className="mt-8 text-xs text-[var(--foreground-muted)]/50 max-w-4xl">
          <p>
            Technical content published by ILKM is provided for research, educational and engineering discussion purposes. Performance figures shown in conceptual illustrations are not product specifications unless explicitly identified as measured or validated results.
          </p>
          <p className="mt-2">
            Research papers, trademarks and third-party technologies referenced on this website remain the property of their respective authors and owners. Their inclusion does not imply endorsement, partnership or affiliation with ILKM.
          </p>
        </div>
      </div>
    </footer>
  );
}
