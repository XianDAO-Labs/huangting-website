import { useLang } from "@/contexts/LangContext";
import { useTheme } from "@/contexts/ThemeContext";
import TaijiLogo3D from "@/components/TaijiLogo3D";
import { Link, useLocation } from "wouter";

interface KbNavItem {
  href: string;
  zh: string;
  en: string;
}

const kbNav: KbNavItem[] = [
  { href: "/kb", zh: "知识库首页", en: "Knowledge Base" },
  { href: "/kb/concepts", zh: "核心概念", en: "Core Concepts" },
  { href: "/kb/assertions", zh: "协议断言", en: "Protocol Assertions" },
];

interface KbLayoutProps {
  children: React.ReactNode;
  title?: { zh: string; en: string };
  description?: { zh: string; en: string };
  jsonLd?: object;
}

export default function KbLayout({ children, title, description, jsonLd }: KbLayoutProps) {
  const { lang, toggleLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const [location] = useLocation();

  const bg = isDark ? "oklch(0.09 0.02 270)" : "oklch(0.97 0.008 80)";
  const sidebarBg = isDark ? "oklch(0.11 0.025 270)" : "oklch(0.93 0.01 80)";
  const borderColor = isDark ? "oklch(1 0 0 / 0.06)" : "oklch(0 0 0 / 0.08)";
  const textMain = isDark ? "oklch(0.90 0.02 270)" : "oklch(0.15 0.02 270)";
  const textMuted = isDark ? "oklch(0.55 0.04 270)" : "oklch(0.45 0.04 270)";
  const gold = "oklch(0.78 0.14 75)";

  return (
    <div style={{ minHeight: "100vh", background: bg, color: textMain }}>
      {/* Inject JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      {/* Top bar */}
      <header
        style={{
          borderBottom: `1px solid ${borderColor}`,
          background: isDark ? "oklch(0.07 0.02 270 / 0.95)" : "oklch(0.97 0.01 80 / 0.95)",
          backdropFilter: "blur(20px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: 56 }}>
          <a href="/" className="flex items-center gap-2">
            <TaijiLogo3D size={28} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: gold, letterSpacing: "0.1em" }}>
              HUANGTING
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a
              href="/developers"
              style={{ fontSize: 13, color: textMuted, textDecoration: "none" }}
              className="hover:opacity-80 transition-opacity hidden sm:block"
            >
              {t("开发者", "Developers")}
            </a>
            <a
              href="/mcp"
              style={{ fontSize: 13, color: textMuted, textDecoration: "none" }}
              className="hover:opacity-80 transition-opacity hidden sm:block"
            >
              MCP
            </a>
            <button
              onClick={toggleLang}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                borderRadius: 6,
                border: `1px solid ${borderColor}`,
                background: "transparent",
                color: textMuted,
                cursor: "pointer",
              }}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <button
              onClick={toggleTheme}
              style={{
                fontSize: 16,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: textMuted,
              }}
            >
              {isDark ? "☀" : "☾"}
            </button>
          </div>
        </div>
      </header>

      <div className="container" style={{ paddingTop: 32, paddingBottom: 64 }}>
        {/* Breadcrumb */}
        <nav style={{ marginBottom: 24, fontSize: 13, color: textMuted }}>
          <a href="/" style={{ color: textMuted, textDecoration: "none" }} className="hover:opacity-80">
            {t("首页", "Home")}
          </a>
          <span style={{ margin: "0 8px" }}>/</span>
          <span style={{ color: gold }}>{t("知识库", "Knowledge Base")}</span>
        </nav>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside
            className="hidden md:block flex-shrink-0"
            style={{ width: 200 }}
          >
            <div
              style={{
                background: sidebarBg,
                borderRadius: 12,
                border: `1px solid ${borderColor}`,
                padding: "16px 0",
                position: "sticky",
                top: 80,
              }}
            >
              <div style={{ padding: "0 16px 12px", fontSize: 11, letterSpacing: "0.1em", color: textMuted, textTransform: "uppercase" }}>
                {t("知识库导航", "Navigation")}
              </div>
              {kbNav.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <a
                      style={{
                        display: "block",
                        padding: "8px 16px",
                        fontSize: 14,
                        color: isActive ? gold : textMuted,
                        textDecoration: "none",
                        background: isActive ? (isDark ? "oklch(0.78 0.14 75 / 0.08)" : "oklch(0.78 0.14 75 / 0.12)") : "transparent",
                        borderLeft: isActive ? `2px solid ${gold}` : "2px solid transparent",
                        transition: "all 0.2s",
                      }}
                      className="hover:opacity-90"
                    >
                      {t(item.zh, item.en)}
                    </a>
                  </Link>
                );
              })}
              <div style={{ margin: "16px 16px 0", paddingTop: 16, borderTop: `1px solid ${borderColor}` }}>
                <a
                  href="/developers"
                  style={{ display: "block", padding: "8px 0", fontSize: 13, color: textMuted, textDecoration: "none" }}
                  className="hover:opacity-80"
                >
                  → {t("开发者中心", "Developers")}
                </a>
                <a
                  href="/mcp"
                  style={{ display: "block", padding: "8px 0", fontSize: 13, color: textMuted, textDecoration: "none" }}
                  className="hover:opacity-80"
                >
                  → MCP {t("文档", "Docs")}
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main style={{ flex: 1, minWidth: 0 }}>
            {title && (
              <header style={{ marginBottom: 32 }}>
                <h1
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    fontWeight: 700,
                    color: gold,
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {t(title.zh, title.en)}
                </h1>
                {description && (
                  <p style={{ fontSize: 16, color: textMuted, lineHeight: 1.7, maxWidth: 640 }}>
                    {t(description.zh, description.en)}
                  </p>
                )}
              </header>
            )}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
