import React from 'react';
import './components.css';

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <button 
      className={`janus-btn janus-btn-${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
