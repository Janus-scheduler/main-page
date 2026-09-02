import React, { useState } from 'react';

function highlightTokens(code) {
  if (!code) return null;
  const lines = code.split('\n');

  return lines.map((line, idx) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
      return (
        <div key={idx} style={{ color: '#71717a', fontStyle: 'italic', minHeight: '1.4em' }}>
          {line || ' '}
        </div>
      );
    }

    const tokens = [];
    const regex = /(\/\/[^\n]*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[a-zA-Z0-9_\-:]+)|(\b(?:import|export|default|from|const|let|var|function|return|async|await|new|if|else|type|interface|readonly|class|implements|extends|typeof|as|void|any|true|false|null|undefined)\b)|(\b[A-Z][a-zA-Z0-9_]*\b)|(\b\d+(?:\.\d+)?\b)|([=><:+\-*\/&|!]+)|(\s+)|([^\s]+)/g;

    let match;
    let tokenKey = 0;
    while ((match = regex.exec(line)) !== null) {
      const [, comment, string, jsxTag, keyword, typeName, number, op, space, other] = match;

      if (comment) {
        tokens.push(<span key={tokenKey++} style={{ color: '#71717a', fontStyle: 'italic' }}>{comment}</span>);
      } else if (string) {
        tokens.push(<span key={tokenKey++} style={{ color: '#a3e635' }}>{string}</span>);
      } else if (jsxTag) {
        tokens.push(<span key={tokenKey++} style={{ color: '#38bdf8' }}>{jsxTag}</span>);
      } else if (keyword) {
        if (['true', 'false', 'null', 'undefined'].includes(keyword)) {
          tokens.push(<span key={tokenKey++} style={{ color: '#f472b6' }}>{keyword}</span>);
        } else {
          tokens.push(<span key={tokenKey++} style={{ color: '#f97316' }}>{keyword}</span>);
        }
      } else if (typeName) {
        tokens.push(<span key={tokenKey++} style={{ color: '#7dd3fc' }}>{typeName}</span>);
      } else if (number) {
        tokens.push(<span key={tokenKey++} style={{ color: '#fbbf24' }}>{number}</span>);
      } else if (op) {
        tokens.push(<span key={tokenKey++} style={{ color: '#a1a1aa' }}>{op}</span>);
      } else if (space) {
        tokens.push(space);
      } else {
        tokens.push(<span key={tokenKey++} style={{ color: '#e4e4e7' }}>{other}</span>);
      }
    }

    return (
      <div key={idx} style={{ minHeight: '1.4em' }}>
        {tokens.length > 0 ? tokens : ' '}
      </div>
    );
  });
}

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
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a1a1aa' }}>{title || 'CODE'}</span>
        <button 
          onClick={handleCopy}
          style={{ height: '26px', padding: '0 9px', border: '1.5px solid #27272a', borderRadius: '9px', background: 'transparent', color: '#a1a1aa', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', transition: 'all 0.1s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#fafafa'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#27272a'; e.currentTarget.style.color = '#a1a1aa'; }}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre style={{ margin: 0, padding: '16px 18px', font: '400 13px/1.8 "JetBrains Mono", monospace', color: '#e4e4e7', overflowX: 'auto', whiteSpace: 'pre' }}>
        {children || (codeString ? highlightTokens(codeString) : null)}
      </pre>
    </div>
  );
}
