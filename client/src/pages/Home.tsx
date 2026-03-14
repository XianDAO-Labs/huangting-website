/**
 * 黄庭协议官网 - 主页
 * Design: 深空东方宇宙主义 (Deep Space Oriental Cosmicism)
 * Theme: Dark space + Gold energy + Glass morphism
 * Typography: Noto Serif SC + Cinzel + JetBrains Mono
 */
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import ValuesSection from "@/components/ValuesSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: "oklch(0.06 0.02 270)" }}
    >
      {/* Particle background */}
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <OverviewSection />
        <BeneficiariesSection />
        <ValuesSection />
        <OpenSourceSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
