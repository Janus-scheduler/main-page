import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/components.css';

export default function PackagesPage() {
  const [copied, setCopied] = useState(null);

  const copy = (key, pkg) => {
    if (navigator.clipboard) navigator.clipboard.writeText('npm i @janus-scheduler/' + pkg).catch(() => {});
    setCopied(key);
    setTimeout(() => setCopied(null), 1600);
  };

  const lbl = (k) => (copied === k ? 'Copied' : 'Copy');

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)' }}>
      <Header />

      <header style={{ padding: '64px 40px 40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Packages · seven, published together</span>
        <h1 style={{ margin: 0, maxWidth: '26ch', font: '700 52px/1.06 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>Install only the part you need</h1>
        <p style={{ margin: 0, maxWidth: '72ch', font: '400 17px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
          Every package is versioned in lockstep and published from one repository. Most projects install a single framework wrapper; the rest exist so you can go lower-level or leave features out entirely.
        </p>
      </header>

      {/* CARDS */}
      <section style={{ padding: '0 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/core</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>State, ranges, recurrence expansion and conflict logic — no DOM.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/core</span>
              <button className="janus-copy-btn" onClick={() => copy('core', 'core')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('core')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>6.4 kB gzip</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/ui</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>The Lit Web Components: timeline, month grid, prompt bar, drag layer.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/ui</span>
              <button className="janus-copy-btn" onClick={() => copy('ui', 'ui')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('ui')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>11.8 kB gzip</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-accent)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)', boxShadow: '0 4px 20px var(--janus-accent-tint)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/react</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent)', color: '#ffffff', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>React wrapper with typed props and native handlers. Most people start here.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/react</span>
              <button className="janus-copy-btn" onClick={() => copy('react', 'react')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('react')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>14.2 kB gzip</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/angular</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Standalone component and module, with outputs instead of DOM events.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/angular</span>
              <button className="janus-copy-btn" onClick={() => copy('angular', 'angular')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('angular')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>14.6 kB gzip</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/solid</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Solid wrapper with fine-grained reactivity — signals pass straight through.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/solid</span>
              <button className="janus-copy-btn" onClick={() => copy('solid', 'solid')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('solid')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>13.9 kB gzip</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
              <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/nlp</code>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-text)', color: 'var(--janus-bg)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0-rc.2</span>
            </div>
            <p style={{ margin: 0, font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Sentence parser and entity resolver. Loads its language artefact on demand.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
              <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/nlp</span>
              <button className="janus-copy-btn" onClick={() => copy('nlp', 'nlp')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('nlp')}</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--janus-surface)' }}>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>4.9 kB + 38 kB lazy</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>npm ↗</a>
                <a href="#" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>docs →</a>
              </div>
            </div>
          </div>

          <div className="janus-package-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', gridColumn: 'span 3', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <code style={{ font: '600 14px/1.3 "JetBrains Mono", monospace', letterSpacing: '-0.01em' }}>@janus-scheduler/integrations</code>
                  <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 11px/1.35 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>2.4.0</span>
                </div>
                <p style={{ margin: 0, maxWidth: '44ch', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Two-way sync adapter (Google Calendar API v3, webhooks, RFC 5545): incremental pull by syncToken, field-level merge on push, client &amp; server hub.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 11px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
                <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
                <span style={{ flex: 1, minWidth: 0, font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>npm i @janus-scheduler/integrations</span>
                <button className="janus-copy-btn" onClick={() => copy('integrations', 'integrations')} style={{ height: '26px', padding: '0 8px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{lbl('integrations')}</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '16px' }}>
                <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>3.1 kB gzip</span>
                <span style={{ padding: '3px 8px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text-secondary)', font: '500 10.5px/1.35 "JetBrains Mono", monospace' }}>Google Calendar v3</span>
                <a href="https://www.npmjs.com/package/@janus-scheduler/integrations" target="_blank" rel="noreferrer" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)', textDecoration: 'none' }}>npm ↗</a>
                <a href="/docs/topics/google-calendar-sync" style={{ font: '600 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>docs →</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DEPENDENCY GRAPH */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Dependency graph</h2>
          <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>every edge is two-way · imports one way, events and state the other</span>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '32px 40px', overflowX: 'auto' }}>
          <div style={{ position: 'relative', width: '1200px', height: '404px', margin: '0 auto' }}>

            <div style={{ position: 'absolute', left: '300px', top: '0', width: '180px', height: '62px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 14px' }}>
              <span style={{ font: '600 12.5px/1.3 "JetBrains Mono", monospace' }}>/react</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>peer: react ≥18</span>
            </div>
            <div style={{ position: 'absolute', left: '510px', top: '0', width: '180px', height: '62px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 14px' }}>
              <span style={{ font: '600 12.5px/1.3 "JetBrains Mono", monospace' }}>/angular</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>peer: @angular ≥16</span>
            </div>
            <div style={{ position: 'absolute', left: '720px', top: '0', width: '180px', height: '62px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 14px' }}>
              <span style={{ font: '600 12.5px/1.3 "JetBrains Mono", monospace' }}>/solid</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>peer: solid-js ≥1.8</span>
            </div>

            <div style={{ position: 'absolute', left: '389px', top: '74px', width: '1.5px', height: '46px', background: 'var(--janus-text-muted)' }} />
            <div style={{ position: 'absolute', left: '389px', top: '119px', width: '132px', height: '1.5px', background: 'var(--janus-text-muted)' }} />
            <div style={{ position: 'absolute', left: '520px', top: '119px', width: '1.5px', height: '27px', background: 'var(--janus-text-muted)' }} />
            <svg style={{ position: 'absolute', left: '385.75px', top: '66px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10"/></svg>
            <svg style={{ position: 'absolute', left: '516.75px', top: '146px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10"/></svg>

            <div style={{ position: 'absolute', left: '599px', top: '74px', width: '1.5px', height: '72px', background: 'var(--janus-text-muted)' }} />
            <svg style={{ position: 'absolute', left: '595.75px', top: '66px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10"/></svg>
            <svg style={{ position: 'absolute', left: '595.75px', top: '146px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10"/></svg>
            <span style={{ position: 'absolute', left: '150px', top: '170px', width: '200px', font: '400 10.5px/1.6 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Wrappers ↔ ui<br/>▼ imports the elements<br/>▲ events, slots, refs</span>

            <div style={{ position: 'absolute', left: '809px', top: '74px', width: '1.5px', height: '46px', background: 'var(--janus-text-muted)' }} />
            <div style={{ position: 'absolute', left: '679px', top: '119px', width: '132px', height: '1.5px', background: 'var(--janus-text-muted)' }} />
            <div style={{ position: 'absolute', left: '679px', top: '119px', width: '1.5px', height: '27px', background: 'var(--janus-text-muted)' }} />
            <svg style={{ position: 'absolute', left: '805.75px', top: '66px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10"/></svg>
            <svg style={{ position: 'absolute', left: '675.75px', top: '146px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10"/></svg>

            <div style={{ position: 'absolute', left: '480px', top: '158px', width: '240px', height: '66px', border: '1.5px solid var(--janus-text)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 16px', boxShadow: 'var(--janus-shadow)' }}>
              <span style={{ font: '600 13px/1.3 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Lit Web Components · 11.8 kB</span>
            </div>

            <div style={{ position: 'absolute', left: '599px', top: '236px', width: '1.5px', height: '42px', background: 'var(--janus-accent)' }} />
            <svg style={{ position: 'absolute', left: '595.75px', top: '228px', width: '8px', height: '8px', fill: 'var(--janus-accent)' }} viewBox="0 0 10 10"><polygon points="5,0 10,10 0,10"/></svg>
            <svg style={{ position: 'absolute', left: '595.75px', top: '278px', width: '8px', height: '8px', fill: 'var(--janus-accent)' }} viewBox="0 0 10 10"><polygon points="0,0 10,0 5,10"/></svg>
            <span style={{ position: 'absolute', left: '614px', top: '238px', font: '400 10.5px/1.6 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>▼ reads the store<br/>▲ commits mutations</span>

            <div style={{ position: 'absolute', left: '460px', top: '290px', width: '280px', height: '74px', border: '1.5px solid var(--janus-accent)', borderRadius: '14px', background: 'var(--janus-accent-tint)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '4px', padding: '0 18px', boxShadow: 'var(--janus-shadow)' }}>
              <span style={{ font: '700 14px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-accent-text-dark)' }}>@janus-scheduler/core</span>
              <span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>state · no DOM · zero dependencies</span>
            </div>

            <div style={{ position: 'absolute', left: '80px', top: '296px', width: '220px', height: '62px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 14px' }}>
              <span style={{ font: '600 12.5px/1.3 "JetBrains Mono", monospace' }}>/nlp</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>+ 38 kB lazy artefact</span>
            </div>
            <div style={{ position: 'absolute', left: '312px', top: '326px', width: '136px', height: '1.5px', background: 'var(--janus-text-muted)' }} />
            <svg style={{ position: 'absolute', left: '304px', top: '322.75px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="10,0 10,10 0,5"/></svg>
            <svg style={{ position: 'absolute', left: '448px', top: '322.75px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="0,0 0,10 10,5"/></svg>
            <span style={{ position: 'absolute', left: '300px', top: '340px', width: '146px', font: '400 10.5px/1.6 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>▶ parses into events<br/>◀ resolves resources</span>

            <div style={{ position: 'absolute', left: '900px', top: '296px', width: '220px', height: '62px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '3px', padding: '0 14px' }}>
              <span style={{ font: '600 12.5px/1.3 "JetBrains Mono", monospace' }}>/integrations</span>
              <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Google Calendar sync</span>
            </div>
            <div style={{ position: 'absolute', left: '752px', top: '326px', width: '136px', height: '1.5px', background: 'var(--janus-text-muted)' }} />
            <svg style={{ position: 'absolute', left: '744px', top: '322.75px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="10,0 10,10 0,5"/></svg>
            <svg style={{ position: 'absolute', left: '888px', top: '322.75px', width: '8px', height: '8px', fill: 'var(--janus-text-muted)' }} viewBox="0 0 10 10"><polygon points="0,0 0,10 10,5"/></svg>
            <span style={{ position: 'absolute', left: '744px', top: '340px', width: '152px', textAlign: 'center', font: '400 10.5px/1.6 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>◀ pushes remote changes<br/>▶ observes local edits</span>

            <span style={{ position: 'absolute', left: '80px', top: '384px', font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
              Every edge carries traffic in both directions. Only the <span style={{ color: 'var(--janus-text-secondary)' }}>build-time</span> dependency is one-way: nothing above core is ever imported by it.
            </span>
          </div>
        </div>
      </section>

      {/* COMPATIBILITY MATRIX */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Compatibility matrix</h2>
          <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>peer ranges as published · TypeScript ≥5.0 throughout</span>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr) 1.1fr' }}>
            {['Package', 'React', 'Angular', 'Solid', 'Vue', 'Node / SSR'].map((th, i) => (
              <span key={th} style={{ padding: i === 0 ? '9px 18px' : i === 5 ? '9px 18px 9px 12px' : '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>{th}</span>
            ))}

            {/* /core */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/core</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≥18 · full</span>

            {/* /ui */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/ui</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≥18 · declarative shadow</span>

            {/* /react */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/react</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '2px 7px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '600 10px/1.4 "JetBrains Mono", monospace' }}>18 · 19</span>
            </span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Next 14 · 15</span>

            {/* /angular */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/angular</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '2px 7px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '600 10px/1.4 "JetBrains Mono", monospace' }}>16 – 19</span>
            </span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Angular Universal</span>

            {/* /solid */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/solid</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
              <span style={{ padding: '2px 7px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '600 10px/1.4 "JetBrains Mono", monospace' }}>1.8+</span>
            </span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>SolidStart 1.0</span>

            {/* /nlp */}
            <span style={{ padding: '11px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
              <span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/nlp</span>
              <span style={{ padding: '2px 6px', borderRadius: '999px', background: 'var(--janus-text)', color: 'var(--janus-bg)', font: '700 9px/1.3 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>rc</span>
            </span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 18px 11px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≥18 · en-GB only</span>

            {/* /integrations */}
            <span style={{ padding: '11px 18px', font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>/integrations</span>
            <span style={{ padding: '11px 12px', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 12px', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>any</span>
            <span style={{ padding: '11px 18px 11px 12px', font: '400 12px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≥18 · browser &amp; Node</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
