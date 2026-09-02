import React, { useState } from 'react';

export default function SegmentedControl({ options, defaultOption, onChange }) {
  const [selected, setSelected] = useState(defaultOption || options[0]);

  return (
    <div style={{
      display: 'inline-flex',
      alignSelf: 'flex-start',
      padding: '3px',
      gap: '2px',
      background: 'var(--janus-surface)',
      border: '1.5px solid var(--janus-border)',
      borderRadius: '9px'
    }}>
      {options.map((opt) => {
        const isSelected = selected === opt;
        return (
          <SegmentOption 
            key={opt}
            label={opt}
            isSelected={isSelected}
            onClick={() => { setSelected(opt); onChange && onChange(opt); }}
          />
        );
      })}
    </div>
  );
}

function SegmentOption({ label, isSelected, onClick }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <span 
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '7px 14px',
        borderRadius: '6px',
        background: isSelected ? 'var(--janus-bg)' : 'transparent',
        color: isSelected ? 'var(--janus-text)' : (hovered ? 'var(--janus-text)' : 'var(--janus-text-secondary)'),
        fontWeight: isSelected ? 600 : 500,
        fontSize: '12.5px',
        fontFamily: '"DM Sans", sans-serif',
        boxShadow: isSelected ? 'var(--janus-shadow-sm)' : 'none',
        cursor: 'pointer',
        transition: 'color 0.1s ease'
      }}
    >
      {label}
    </span>
  );
}
