import React, { useState } from 'react';

export default function CodeBlock({ title, codeString, children, isInstallCommand = false }) {
  const [copied, setCopied] = useState(false);
  
  const contentToCopy = codeString || (typeof children === 'string' ? children : '');

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(contentToCopy).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  if (isInstallCommand) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '9px', border: '1.5px solid var(--janus-border)', background: 'var(--janus-surface)' }}>
        <span style={{ font: '400 13.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
        <span style={{ flex: 1, font: '400 13.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{children}</span>
        <button 
          onClick={handleCopy}
          style={{ height: '26px', padding: '0 9px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', transition: 'all 0.1s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--janus-text-secondary)'; e.currentTarget.style.color = 'var(--janus-text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--janus-border)'; e.currentTarget.style.color = 'var(--janus-text-secondary)'; }}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    );
  }

  return (
    <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1.5px solid #27272a', background: '#18181b' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #27272a', background: '#09090b' }}>
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a1a1aa' }}>{title}</span>
        <button 
          onClick={handleCopy}
          style={{ height: '26px', padding: '0 9px', border: '1.5px solid #27272a', borderRadius: '9px', background: 'transparent', color: '#a1a1aa', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', transition: 'all 0.1s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#fafafa'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.color = '#a1a1aa'; }}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px 18px', font: '400 13px/1.8 "JetBrains Mono", monospace', color: '#e4e4e7', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
        {children || codeString}
      </pre>
    </div>
  );
}
