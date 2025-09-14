import React from "react";

export default function AbilityScoreCard({ ability, value, onChange, onExplain, onExample }) {
  return (
    <div className="p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold">{ability.name}</h3>
      <p className="text-sm opacity-80">{ability.description}</p>
      <div className="mt-3 flex gap-3 items-center">
        {[1,2,3].map(v => (
          <label key={v} className="flex items-center gap-1">
            <input
              type="radio"
              name={`score-${ability.id}`}
              value={v}
              checked={value === v}
              onChange={() => onChange(v)}
            />
            <span>{v}</span>
          </label>
        ))}
        <button className="text-sm underline" onClick={() => onExplain(ability)}>
          What does this mean?
        </button>
        <button className="text-sm underline" onClick={() => onExample(ability)}>
          Need an example?
        </button>
      </div>
      <p className="text-xs mt-2 opacity-70">
        Scores must be whole numbers: 1 (weak), 2 (proficient), 3 (inherent). You can explore and rescore later.
      </p>
    </div>
  );
}
