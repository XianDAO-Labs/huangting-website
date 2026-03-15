/**
 * SkillRedirect — /skill.md 永久重定向
 * 目标：https://raw.githubusercontent.com/XianDAO-Labs/huangting-protocol/main/huangting.skill.md
 * 策略：客户端立即执行 window.location.replace（等效 301 语义）
 */
import { useEffect } from "react";

const TARGET_URL =
  "https://raw.githubusercontent.com/XianDAO-Labs/huangting-protocol/main/huangting.skill.md";

export default function SkillRedirect() {
  useEffect(() => {
    window.location.replace(TARGET_URL);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        background: "#0a0a0f",
        color: "#c9a84c",
        fontFamily: "monospace",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>
        Redirecting to{" "}
        <a href={TARGET_URL} style={{ color: "#c9a84c" }}>
          huangting.skill.md
        </a>
        …
      </p>
    </div>
  );
}
