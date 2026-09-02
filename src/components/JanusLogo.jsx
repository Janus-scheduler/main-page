import React from 'react';

export default function JanusLogo({ size = 22, color = 'var(--janus-accent, #f97316)', className = '', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
    >
      {/* Top-Left Calendar Window */}
      <rect
        x="3"
        y="3"
        width="17"
        height="17"
        rx="3.5"
        stroke={color}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="8.5"
        x2="20"
        y2="8.5"
        stroke={color}
        strokeWidth="2.75"
        strokeLinecap="round"
      />

      {/* Bottom-Right Interlocking Calendar Window */}
      <rect
        x="12"
        y="12"
        width="17"
        height="17"
        rx="3.5"
        stroke={color}
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="17.5"
        x2="29"
        y2="17.5"
        stroke={color}
        strokeWidth="2.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
