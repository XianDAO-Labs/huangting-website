/**
 * 黄庭协议官网 - 主页
 * Design: 深空东方宇宙主义 (Deep Space Oriental Cosmicism)
 * Theme: Dark space + Gold energy + Glass morphism
 * Typography: Noto Serif SC + Cinzel + JetBrains Mono
 */
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorSection from "@/components/AuthorSection";
import OverviewSection from "@/components/OverviewSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import ProtocolQuotesSection from "@/components/ProtocolQuotesSection";
import ValuesSection from "@/components/ValuesSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    document.title = "黄庭协议 Huangting Protocol | 生命体操作系统 · 大模型时代的道德经";
  }, []);
  const isDark = theme === "dark";
  return (
    <div
      className="min-h-screen relative"
      style={{ background: isDark ? "oklch(0.09 0.02 270)" : "oklch(0.97 0.008 80)", transition: "background 0.5s ease" }}
    >
      {/* Particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AuthorSection />
        <OverviewSection />
        <BeneficiariesSection />
        <ProtocolQuotesSection />
        <ValuesSection />
        <OpenSourceSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
