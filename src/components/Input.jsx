import React from 'react';
import './components.css';

export default function Input({ className = '', ...props }) {
  return (
    <input 
      className={`janus-input ${className}`}
      {...props}
    />
  );
}
