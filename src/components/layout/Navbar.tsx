"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Research", href: "/research" },
  { name: "Applications", href: "/applications" },
  { name: "Insights", href: "/insights" },
  { name: "About ILKM", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--surface-hover)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--foreground)]">
            ILKM
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--accent)]",
                  pathname === link.href ? "text-[var(--accent)]" : "text-[var(--foreground-muted)]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-[var(--accent-muted)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--accent)] transition-colors hover:bg-[var(--surface-hover)] hover:text-[var(--accent-light)]"
          >
            Discuss an Engineering Problem
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--foreground-muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--surface-hover)] bg-[var(--background)]">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium",
                  pathname === link.href ? "bg-[var(--surface)] text-[var(--accent)]" : "text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-[var(--accent)] hover:bg-[var(--surface-hover)]"
              onClick={() => setIsOpen(false)}
            >
              Discuss an Engineering Problem
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
