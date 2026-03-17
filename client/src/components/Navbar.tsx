import { useState, useEffect } from "react";
import TaijiLogo3D from "@/components/TaijiLogo3D";
import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";

const navItemsZh = [
  { label: "协议概述", href: "#overview" },
  { label: "人类价值", href: "#human" },
  { label: "AI Agent", href: "#agent" },
  { label: "具身机器人", href: "#robot" },
  { label: "三维价值", href: "#values" },
  { label: "开源计划", href: "#opensource" },
  { label: "知识库", href: "/kb" },
  { label: "开发者", href: "/developers" },
];

const navItemsEn = [
  { label: "Overview", href: "#overview" },
  { label: "For Humans", href: "#human" },
  { label: "AI Agent", href: "#agent" },
  { label: "Robotics", href: "#robot" },
  { label: "Value", href: "#values" },
  { label: "Open Source", href: "#opensource" },
  { label: "Knowledge Base", href: "/kb" },
  { label: "Developers", href: "/developers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  const navItems = lang === "zh" ? navItemsZh : navItemsEn;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isDark
      ? "oklch(0.07 0.02 270 / 0.95)"
      : "oklch(0.97 0.01 80 / 0.95)"
    : "transparent";

  const navBorder = scrolled
    ? isDark
      ? "1px solid oklch(1 0 0 / 0.06)"
      : "1px solid oklch(0 0 0 / 0.08)"
    : "none";

  const navItemColor = isDark ? "oklch(0.65 0.04 270)" : "oklch(0.35 0.04 270)";
  const mobileMenuBg = isDark ? "oklch(0.07 0.02 270 / 0.98)" : "oklch(0.97 0.01 80 / 0.98)";
  const mobileItemColor = isDark ? "oklch(0.70 0.04 270)" : "oklch(0.30 0.04 270)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: navBorder,
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: "60px" }}>
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 flex-shrink-0"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <TaijiLogo3D size={36} />
            <div className="flex flex-col justify-center" style={{ lineHeight: 1.2 }}>
              <div
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, oklch(0.90 0.16 80), oklch(0.78 0.14 75))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  whiteSpace: "nowrap",
                }}
              >
                {lang === "zh" ? "黄庭协议" : "Huangting Protocol"}
              </div>
              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "0.6rem",
                  color: isDark ? "oklch(0.50 0.04 270)" : "oklch(0.45 0.04 270)",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
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
                  color: navItemColor,
                  fontFamily: "'Noto Sans SC', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.82rem",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "oklch(0.78 0.14 75)";
                  (e.target as HTMLElement).style.background = "oklch(0.78 0.14 75 / 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = navItemColor;
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {item.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-1 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
              title={isDark ? "切换白天模式" : "Switch to Dark Mode"}
              style={{
                background: isDark ? "oklch(0.78 0.14 75 / 0.08)" : "oklch(0.20 0.04 270 / 0.08)",
                border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.2)"}`,
                color: isDark ? "oklch(0.78 0.14 75)" : "oklch(0.30 0.04 270)",
                fontSize: "0.85rem",
              }}
            >
              {isDark ? "☀" : "☾"}
            </button>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="ml-1 px-2.5 py-1 rounded transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.7rem",
                letterSpacing: "0.05em",
                background: "oklch(0.78 0.14 75 / 0.08)",
                border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                color: "oklch(0.78 0.14 75)",
                whiteSpace: "nowrap",
              }}
            >
              {lang === "zh" ? "EN" : "中"}
            </button>

            <a
              href="https://github.com/XianDAO-Labs/huangting-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-1.5 rounded-sm font-medium transition-all duration-300"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.75rem",
                background: "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.15), oklch(0.78 0.14 75 / 0.05))",
                border: "1px solid oklch(0.78 0.14 75 / 0.3)",
                color: "oklch(0.85 0.12 75)",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "oklch(0.78 0.14 75 / 0.25)";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, oklch(0.78 0.14 75 / 0.15), oklch(0.78 0.14 75 / 0.05))";
                (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.78 0.14 75 / 0.3)";
              }}
            >
              GitHub
            </a>
          </div>

          {/* Mobile right controls */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full"
              style={{
                background: isDark ? "oklch(0.78 0.14 75 / 0.08)" : "oklch(0.20 0.04 270 / 0.08)",
                border: `1px solid ${isDark ? "oklch(0.78 0.14 75 / 0.2)" : "oklch(0.20 0.04 270 / 0.2)"}`,
                color: isDark ? "oklch(0.78 0.14 75)" : "oklch(0.30 0.04 270)",
                fontSize: "0.85rem",
              }}
            >
              {isDark ? "☀" : "☾"}
            </button>
            {/* Lang toggle mobile */}
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.65rem",
                background: "oklch(0.78 0.14 75 / 0.08)",
                border: "1px solid oklch(0.78 0.14 75 / 0.2)",
                color: "oklch(0.78 0.14 75)",
              }}
            >
              {lang === "zh" ? "EN" : "中"}
            </button>
            {/* Hamburger */}
            <button
              className="p-1 flex-shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="菜单"
              style={{ color: "oklch(0.78 0.14 75)" }}
            >
              <div style={{ width: "20px", height: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <span style={{ display: "block", height: "1.5px", width: "100%", background: "oklch(0.78 0.14 75)", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                <span style={{ display: "block", height: "1.5px", width: "100%", background: "oklch(0.78 0.14 75)", opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
                <span style={{ display: "block", height: "1.5px", width: "100%", background: "oklch(0.78 0.14 75)", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              borderTop: `1px solid ${isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)"}`,
              background: mobileMenuBg,
              paddingTop: "0.75rem",
              paddingBottom: "0.75rem",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  color: mobileItemColor,
                  fontFamily: "'Noto Sans SC', sans-serif",
                  background: "transparent",
                  border: "none",
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/XianDAO-Labs/huangting-protocol"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "0.75rem 1rem",
                fontSize: "0.85rem",
                color: "oklch(0.78 0.14 75)",
                fontFamily: "'Cinzel', serif",
                letterSpacing: "0.1em",
              }}
            >
              GitHub →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
