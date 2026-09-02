import React from 'react';
import './components.css';

export default function Badge({ 
  variant = 'default', 
  children, 
  className = '', 
  icon,
  strike
}) {
  return (
    <span 
      className={`janus-badge janus-badge-${variant} ${className}`}
      style={strike ? { textDecoration: 'line-through' } : {}}
    >
      {icon && (
        <span 
          style={{
            width: '5px', 
            height: '5px', 
            borderRadius: '50%', 
            background: variant === 'solid' ? 'var(--janus-bg)' : '#f97316'
          }} 
        />
      )}
      {children}
    </span>
  );
}
