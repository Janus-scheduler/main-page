import React from 'react';
import './components.css';

export default function Callout({ 
  variant,
  type, 
  title, 
  children, 
  className = '',
  style = {}
}) {
  const effectiveVariant = variant || type || 'note';
  const isLimitation = effectiveVariant === 'limitation';
  
  return (
    <div 
      className={`janus-callout janus-callout-${effectiveVariant} ${className}`}
      style={{
        marginTop: '18px',
        marginBottom: '18px',
        padding: '18px 22px',
        borderRadius: '14px',
        ...style
      }}
    >
      {title && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          {isLimitation && (
            <span style={{ width: '5px', height: '5px', background: 'var(--janus-bg)' }} />
          )}
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '11px',
            fontWeight: isLimitation ? 700 : 600,
            letterSpacing: isLimitation ? '0.12em' : '0.08em',
            textTransform: 'uppercase',
            color: isLimitation 
              ? 'var(--janus-bg)' 
              : (effectiveVariant === 'tip' ? 'var(--janus-accent-text)' : (effectiveVariant === 'warning' ? '#d97706' : 'var(--janus-text-secondary)')),
          }}>
            {title}
          </span>
        </div>
      )}
      <div style={{
        margin: 0,
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '14px',
        lineHeight: 1.65,
        color: isLimitation 
          ? 'var(--janus-border)' 
          : (effectiveVariant === 'tip' ? 'var(--janus-text)' : (effectiveVariant === 'warning' ? 'var(--janus-text)' : 'var(--janus-text-secondary)'))
      }}>
        {children}
      </div>
    </div>
  );
}
