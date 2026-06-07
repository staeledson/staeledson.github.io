"use client";

import { ACCENTS, useTheme } from "@/context/ThemeContext";

/** Small floating accent picker — mirrors the HTML "Tweaks" accent control. */
export default function AccentSwitcher() {
  const { accent, setAccent } = useTheme();
  return (
    <div className="accent-switch" aria-label="Cor de destaque">
      {Object.entries(ACCENTS).map(([key, [c]]) => (
        <button
          key={key}
          className={`accent-dot ${accent === key ? "is-on" : ""}`}
          style={{ background: c }}
          onClick={() => setAccent(key)}
          aria-label={key}
          aria-pressed={accent === key}
        />
      ))}
    </div>
  );
}
