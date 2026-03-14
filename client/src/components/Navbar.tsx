import { useState, useEffect } from "react";

const navItems = [
  { label: "协议概述", href: "#overview" },
  { label: "人类价值", href: "#human" },
  { label: "AI Agent", href: "#agent" },
  { label: "具身机器人", href: "#robot" },
  { label: "三维价值", href: "#values" },
  { label: "开源计划", href: "#opensource" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "oklch(0.06 0.02 270 / 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.06)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            {/* Taiji SVG logo */}
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full taiji-spin" style={{ animationDuration: "20s" }}>
                <defs>
                  <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.90 0.16 80)" />
                    <stop offset="100%" stopColor="oklch(0.65 0.10 75)" />
                  </radialGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="none" stroke="oklch(0.78 0.14 75 / 0.3)" strokeWidth="1" />
                <path d="M20 2 A18 18 0 0 1 20 38 A9 9 0 0 1 20 20 A9 9 0 0 0 20 2Z" fill="url(#goldGrad)" opacity="0.8" />
                <path d="M20 2 A18 18 0 0 0 20 38 A9 9 0 0 0 20 20 A9 9 0 0 1 20 2Z" fill="oklch(0.14 0.04 265)" opacity="0.9" />
                <circle cx="20" cy="11" r="3" fill="url(#goldGrad)" />
                <circle cx="20" cy="29" r="3" fill="oklch(0.14 0.04 265)" stroke="oklch(0.78 0.14 75 / 0.5)" strokeWidth="0.5" />
              </svg>
            </div>
            <div>
              <div
                className="text-sm font-bold leading-tight"
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  background: "linear-gradient(135deg, oklch(0.90 0.16 80), oklch(0.78 0.14 75))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                黄庭协议
              </div>
              <div
                className="text-xs leading-tight"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: "oklch(0.60 0.04 270)",
                  letterSpacing: "0.05em",
                }}
              >
                HUANGTING PROTOCOL
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="px-3 py-1.5 text-sm rounded transition-all duration-300"
                style={{
                  color: "oklch(0.70 0.04 270)",
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.78 0.14 75)";
                  (e.target as HTMLElement).style.background = "oklch(0.78 0.14 75 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.70 0.04 270)";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-1.5 text-sm rounded-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                background: "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.15), oklch(0.78 0.14 75 / 0.05))",
                border: "1px solid oklch(0.78 0.14 75 / 0.3)",
                color: "oklch(0.85 0.12 75)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.14 75 / 0.25)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.6)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px oklch(0.78 0.14 75 / 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.15), oklch(0.78 0.14 75 / 0.05))";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.3)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              GitHub
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "oklch(0.78 0.14 75)" }}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="block h-px w-full" style={{ background: "oklch(0.78 0.14 75)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
              <span className="block h-px w-full" style={{ background: "oklch(0.78 0.14 75)", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
              <span className="block h-px w-full" style={{ background: "oklch(0.78 0.14 75)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{
              borderColor: "oklch(1 0 0 / 0.06)",
              background: "oklch(0.06 0.02 270 / 0.97)",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="block w-full text-left px-4 py-3 text-sm transition-colors"
                style={{ color: "oklch(0.70 0.04 270)", fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
