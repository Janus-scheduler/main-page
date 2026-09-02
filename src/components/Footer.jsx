import React from 'react';
import JanusLogo from './JanusLogo';

export default function Footer() {
  return (
    <footer style={{
      marginTop: '72px',
      borderTop: '1px solid var(--janus-border)',
      padding: '32px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <JanusLogo size={20} />
        <span style={{ font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
          Janus Scheduler · Final-Year Research Project, University of Ruhuna.
        </span>
      </div>
      <span style={{ font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        v2.4.0 · MIT
      </span>
    </footer>
  );
}
