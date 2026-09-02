import React from 'react';
import './components.css';

export default function Card({ children, className = '', hoverable = false, ...props }) {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <div 
      className={`janus-card ${className}`} 
      style={{
        cursor: hoverable ? 'pointer' : 'default',
        transition: 'all 0.1s ease',
        borderColor: hovered && hoverable ? 'var(--janus-accent)' : 'var(--janus-border)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </div>
  );
}
