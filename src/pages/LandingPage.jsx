import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

function LandingPage() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('react');
  const [themeDark, setThemeDark] = useState(theme === 'dark');
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [copiedCta, setCopiedCta] = useState(false);
  const [installCopied, setInstallCopied] = useState(false);

  useEffect(() => {
    setThemeDark(theme === 'dark');
  }, [theme]);

  const handleCopyInstall = () => {
    navigator.clipboard.writeText('npm i @janus-scheduler/react');
    setInstallCopied(true);
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const tabs = [
    { id: 'react', label: 'React', pkg: '@janus-scheduler/react' },
    { id: 'angular', label: 'Angular', pkg: '@janus-scheduler/angular' },
    { id: 'solid', label: 'Solid', pkg: '@janus-scheduler/solid' },
    { id: 'vue', label: 'Vue', pkg: '@janus-scheduler/vue' }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);
  
  const handleCopySnippet = () => {
    navigator.clipboard.writeText('npm i ' + currentTab.pkg);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };
  
  const handleCopyCta = () => {
    navigator.clipboard.writeText('npm i @janus-scheduler/react');
    setCopiedCta(true);
    setTimeout(() => setCopiedCta(false), 2000);
  };

  const getTabStyle = (id) => ({
    padding: '14px 16px',
    font: '500 13px/1 "DM Sans",sans-serif',
    cursor: 'pointer',
    color: activeTab === id ? 'var(--janus-text)' : 'var(--janus-text-secondary)',
    boxShadow: activeTab === id ? 'inset 0 -2px 0 var(--janus-accent)' : 'none',
    background: activeTab === id ? 'var(--janus-bg)' : 'transparent',
    transition: 'all 0.15s ease',
    whiteSpace: 'nowrap'
  });

  const dark = themeDark;
  const sunBg = dark ? 'transparent' : 'var(--janus-bg)';
  const sunFg = dark ? 'var(--janus-text-muted)' : 'var(--janus-text)';
  const moonBg = dark ? 'var(--janus-bg)' : 'transparent';
  const moonFg = dark ? 'var(--janus-text)' : 'var(--janus-text-muted)';
  
  const prevBg = dark ? '#18181b' : '#ffffff';
  const prevSurface = dark ? '#27272a' : '#f4f4f5';
  const prevActiveBg = dark ? '#3f3f46' : '#ffffff';
  const prevBorder = dark ? '#3f3f46' : '#e4e4e7';
  const prevHairline = dark ? '#27272a' : '#f4f4f5';
  const prevText = dark ? '#fafafa' : '#18181b';
  const prevMuted = dark ? '#a1a1aa' : '#71717a';
  const prevAccentTint = dark ? 'rgba(249,115,22,0.22)' : 'rgba(249,115,22,0.12)';

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)', overflowX: 'hidden' }}>
      <Header />

      {/* ── HERO ─────────────────────────── */}
      <section className="hero-responsive-section" style={{ padding: '88px 24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: 'var(--janus-accent-tint)', font: '500 12px/1.35 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--janus-accent)' }} />
          v2.4.0 · resource timeline is stable
        </span>
        <h1 className="hero-responsive-title" style={{ margin: '22px 0 0', maxWidth: '19ch', font: '700 68px/1.03 "DM Sans", sans-serif', letterSpacing: '-0.032em', textWrap: 'balance' }}>
          Natural-language scheduling for any web app.
        </h1>
        <p className="hero-responsive-desc" style={{ margin: '24px 0 0', maxWidth: '74ch', font: '400 17.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
          Framework-agnostic Web Components with a resource timeline, month grid, drag-and-drop, timezone-aware conflict detection, browser-side NLP and Google Calendar sync.
        </p>
        <div className="hero-responsive-cta-group" style={{ display: 'flex', gap: '10px', marginTop: '32px' }}>
          <Link to="/docs/getting-started" className="janus-btn janus-btn-primary" style={{ height: '44px', padding: '0 22px', fontSize: '14.5px' }}>
            Get started
          </Link>
          <a href="https://github.com/Janus-scheduler/main-program" target="_blank" rel="noreferrer" className="janus-btn janus-btn-secondary" style={{ height: '44px', padding: '0 20px', fontSize: '14.5px', gap: '8px' }}>
            <span style={{ font: '400 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>◍</span>
            View on GitHub
          </a>
        </div>
        <div className="hero-responsive-install" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '22px', padding: '11px 14px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '400 13.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
          <span style={{ font: '400 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>npm i @janus-scheduler/react</span>
          <button onClick={handleCopyInstall} style={{ height: '26px', padding: '0 9px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', flexShrink: 0 }}>
            {installCopied ? 'copied!' : 'copy'}
          </button>
        </div>
      </section>

      {/* ── HERO VISUAL ─────────────────────────── */}
      <section className="hero-visual-responsive-section" style={{ padding: '56px 24px 0' }}>
        <div className="hero-visual-responsive-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '20px', boxShadow: 'var(--janus-shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px 10px 14px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', boxShadow: 'var(--janus-shadow-sm)' }}>
            <span style={{ font: '400 15px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✦</span>
            <input type="text" placeholder="Try 'Schedule a design sync with Alex tomorrow at 10am in Room A'" style={{ flex: 1, minWidth: 0, height: '32px', border: 0, background: 'transparent', outline: 'none', font: '400 14px/1 "DM Sans", sans-serif', color: 'var(--janus-text)' }} />
            <span className="hero-prompt-local" style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', whiteSpace: 'nowrap' }}>parsed locally</span>
            <button className="janus-btn janus-btn-primary" style={{ height: '34px', flexShrink: 0 }}>Schedule</button>
          </div>
          
          <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', overflow: 'hidden' }}>
            {/* Timeline Header */}
            <div className="hero-timeline-header-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--janus-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span style={{ font: '600 13.5px/1 "DM Sans", sans-serif' }}>Thursday, 3 September</span>
                <div style={{ display: 'inline-flex', padding: '3px', gap: '2px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', borderRadius: '9px' }}>
                  <span style={{ padding: '4px 9px', borderRadius: '6px', background: 'var(--janus-bg)', color: 'var(--janus-text)', font: '600 11.5px/1 "DM Sans", sans-serif', boxShadow: 'var(--janus-shadow-sm)' }}>Timeline</span>
                  <span style={{ padding: '4px 9px', borderRadius: '6px', color: 'var(--janus-text-secondary)', font: '500 11.5px/1 "DM Sans", sans-serif' }}>Week</span>
                  <span style={{ padding: '4px 9px', borderRadius: '6px', color: 'var(--janus-text-secondary)', font: '500 11.5px/1 "DM Sans", sans-serif' }}>Month</span>
                </div>
              </div>
              <div className="hero-timeline-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>UTC+5:30</span>
                <div style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid var(--janus-border)', borderRadius: '9px', overflow: 'hidden' }}>
                  <span style={{ padding: '5px 9px', font: '500 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)', cursor: 'pointer' }}>−</span>
                  <span style={{ padding: '5px 8px', borderLeft: '1.5px solid var(--janus-border)', borderRight: '1.5px solid var(--janus-border)', font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>1 h</span>
                  <span style={{ padding: '5px 9px', font: '500 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)', cursor: 'pointer' }}>+</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 190px) 1fr', overflow: 'hidden' }}>
              <div style={{ borderRight: '1.5px solid var(--janus-border)', background: 'var(--janus-bg)', zIndex: 4 }}>
                <div style={{ height: '34px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-border)', background: 'var(--janus-surface)', font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Resources</div>
                <div style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '999px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>AF</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}><span style={{ font: '500 12.5px/1.2 "DM Sans", sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Alex Fernando</span><span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Design</span></div>
                </div>
                <div style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '999px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>SP</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}><span style={{ font: '500 12.5px/1.2 "DM Sans", sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sara Perera</span><span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Engineering</span></div>
                </div>
                <div style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '999px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>CS</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}><span style={{ font: '500 12.5px/1.2 "DM Sans", sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Chamath Silva</span><span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Engineering</span></div>
                </div>
                <div style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '6px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>A</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}><span style={{ font: '500 12.5px/1.2 "DM Sans", sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Room A</span><span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Seats 8 · display</span></div>
                </div>
                <div style={{ height: '52px', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px' }}>
                  <span style={{ width: '24px', height: '24px', flexShrink: 0, borderRadius: '6px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>B</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', overflow: 'hidden' }}><span style={{ font: '500 12.5px/1.2 "DM Sans", sans-serif', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Room B</span><span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Seats 20 · video</span></div>
                </div>
              </div>

              <div className="jscroll" style={{ position: 'relative', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <div style={{ height: '34px', display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '800px', borderBottom: '1px solid var(--janus-border)', background: 'var(--janus-surface)' }}>
                  {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map(t => (
                    <span key={t} style={{ paddingLeft: '8px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{t}</span>
                  ))}
                </div>

                <div style={{ position: 'relative', height: '260px', width: '800px' }}>
                  {/* Grid Lines */}
                  <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', pointerEvents: 'none' }}>
                    {[...Array(10)].map((_, i) => (
                      <span key={i} style={{ borderLeft: '1px solid var(--janus-border)', background: i === 4 || i === 5 ? 'var(--janus-surface)' : 'transparent', opacity: 0.5 }} />
                    ))}
                  </div>
                  <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    {[...Array(4)].map((_, i) => <div key={i} style={{ height: '52px', borderBottom: '1px solid var(--janus-border)', opacity: 0.5 }} />)}
                  </div>

                  {/* Current Time Line */}
                  <div style={{ position: 'absolute', left: '32%', top: 0, bottom: 0, width: '1.5px', background: 'var(--janus-accent)', zIndex: 3 }}>
                    <span style={{ position: 'absolute', top: '-1px', left: '-4px', width: '9px', height: '9px', borderRadius: '999px', background: 'var(--janus-accent)' }} />
                    <span style={{ position: 'absolute', top: '12px', left: '8px', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-accent)', color: '#ffffff', font: '600 9.5px/1.3 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>now 11:15</span>
                  </div>

                  {/* Events */}
                  <div style={{ position: 'absolute', top: '8px', left: '1%', width: '19%', height: '36px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '6px 9px', display: 'flex', flexDirection: 'column', gap: '2px', zIndex: 2 }}>
                    <span style={{ font: '600 11.5px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-text-dark)' }}>Design sync · Room A</span>
                    <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>08:00 – 09:50</span>
                  </div>
                  <div style={{ position: 'absolute', top: '8px', left: '41%', width: '14%', height: '36px', borderRadius: '9px', background: 'rgba(59,130,246,0.15)', border: '1.5px solid rgba(59,130,246,0.6)', padding: '6px 9px', display: 'flex', flexDirection: 'column', gap: '2px', zIndex: 2 }}>
                    <span style={{ font: '600 11.5px/1.2 "DM Sans", sans-serif', color: '#60a5fa' }}>1:1 Sara</span>
                  </div>
                  <div style={{ position: 'absolute', top: '8px', left: '70%', width: '22%', height: '36px', borderRadius: '9px', background: 'var(--janus-surface)', border: '1.5px dashed var(--janus-border)', padding: '6px 9px', display: 'flex', alignItems: 'center', zIndex: 2 }}>
                    <span style={{ font: '500 11px/1.2 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Focus block (tentative)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BADGE STRIP ─────────────────────────── */}
      <section style={{ padding: '36px 24px 0' }}>
        <div className="badge-strip-responsive-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '34px', padding: '18px 24px', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 12px/1.35 "JetBrains Mono", monospace' }}>npm v2.4.0</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 12px/1.35 "JetBrains Mono", monospace' }}>MIT licence</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 12px/1.35 "JetBrains Mono", monospace' }}>14.2 kB min+gzip</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '26px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['React', 'Angular', 'Solid', 'Vue'].map(f => (
              <span key={f} style={{ font: '600 14.5px/1 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', letterSpacing: '-0.01em' }}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────── */}
      <section className="problem-responsive-section" style={{ padding: '96px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center' }}>
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>The state of scheduling components</span>
        <p className="problem-responsive-text" style={{ margin: '8px 0 0', font: '600 30px/1.35 "DM Sans", sans-serif', letterSpacing: '-0.02em', maxWidth: '28ch' }}>Every scheduler is locked to one framework.</p>
        <p className="problem-responsive-text" style={{ margin: '0', font: '600 30px/1.35 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text-muted)', maxWidth: '34ch' }}>The good ones are commercially licensed.</p>
        <p className="problem-responsive-text" style={{ margin: '0', font: '600 30px/1.35 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text-muted)', maxWidth: '34ch' }}>And almost all of them need a backend.</p>
      </section>

      {/* ── FEATURES GRID ─────────────────────────── */}
      <section id="features" style={{ padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '26px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ margin: 0, font: '700 clamp(26px, 5vw, 34px)/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Everything a scheduler owes you</h2>
          <Link to="/features" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>All features →</Link>
        </div>
        <div className="features-grid">
          <FeatureCard 
            title="Resource timeline" 
            desc="Rows for people, rooms or machines against a zoomable time axis, from five minutes to a full quarter." 
            code="view='timeline'" 
          />
          <FeatureCard 
            title="Month grid" 
            desc="A dense month view with overflow chips, week numbers and locale-correct first day of week." 
            code="view='month'" 
          />
          <FeatureCard 
            title="Drag to create, move and resize" 
            desc="Pointer and keyboard driven, with configurable snapping and an optimistic rollback if your handler rejects." 
            code="snapMinutes={15}" 
          />
          <FeatureCard 
            title="Timezone-aware" 
            desc="Events are stored as UTC instants and rendered in a display zone, so daylight-saving shifts never move a meeting." 
            code="timeZone='Asia/Colombo'" 
          />
          <FeatureCard 
            title="Conflict detection" 
            desc="Overlaps per resource are computed as you drag, across zones, and surfaced before the drop commits." 
            code="onConflict={…}" 
          />
          <FeatureCard 
            title="Recurring events" 
            desc="RFC 5545 rules expanded in a worker, with per-instance exceptions and 'this event or all following'." 
            code="rrule='FREQ=WEEKLY'" 
          />
        </div>
      </section>

      {/* ── NLP ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '104px 24px 0' }}>
        <div className="grid-report" style={{ display: 'grid', gap: '44px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Natural language</span>
            <h2 style={{ margin: 0, font: '700 clamp(28px, 6vw, 42px)/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', maxWidth: '16ch' }}>Type it, don't build it</h2>
            <p style={{ margin: 0, font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', maxWidth: '48ch', textWrap: 'pretty' }}>
              A compact grammar-based parser turns a sentence into a structured event: dates, times, durations, participants and locations, resolved against the display time zone and your resource list. It ships as part of the bundle and runs on the main thread in under a millisecond.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginTop: '4px' }}>
              {['Runs entirely in the browser', 'No API key required', 'No data leaves the device'].map(t => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', font: '500 14.5px/1.3 "DM Sans", sans-serif' }}>
                  <span style={{ width: '18px', height: '18px', flexShrink: 0, borderRadius: '999px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '700 9px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>✓</span>
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '24px 20px', boxShadow: 'var(--janus-shadow)', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ padding: '16px 18px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', font: '400 16.5px/1.9 "DM Sans", sans-serif' }}>
              Schedule a <span style={{ boxShadow: 'inset 0 -8px 0 rgba(249,115,22,0.22)' }}>design sync</span> with <span style={{ boxShadow: 'inset 0 -8px 0 rgba(37,99,235,0.22)' }}>Alex</span> <span style={{ boxShadow: 'inset 0 -8px 0 rgba(13,148,136,0.22)' }}>tomorrow</span> at <span style={{ boxShadow: 'inset 0 -8px 0 rgba(249,115,22,0.22)' }}>10am</span> in <span style={{ boxShadow: 'inset 0 -8px 0 rgba(124,58,237,0.22)' }}>Room A</span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-bg)', border: '1.5px solid rgba(13,148,136,0.62)' }}>
                <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#14b8a6' }}>date</span>
                <span style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>2026-08-30</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-bg)', border: '1.5px solid rgba(249,115,22,0.66)' }}>
                <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>time</span>
                <span style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>10:00 – 11:00</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-bg)', border: '1.5px solid rgba(37,99,235,0.62)' }}>
                <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#3b82f6' }}>participant</span>
                <span style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>alex.f</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-bg)', border: '1.5px solid rgba(124,58,237,0.5)' }}>
                <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a855f7' }}>location</span>
                <span style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>room-a</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ flex: 1, height: '1.5px', background: 'var(--janus-border)' }} />
              <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>↓ committed</span>
              <span style={{ flex: 1, height: '1.5px', background: 'var(--janus-border)' }} />
            </div>

            <div style={{ borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ font: '600 13.5px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-text-dark)' }}>Design sync · Alex Fernando</span>
                <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>Sun 30 Aug · 10:00 – 11:00 · Room A</span>
              </div>
              <span style={{ padding: '3px 8px', borderRadius: '999px', background: 'var(--janus-bg)', font: '500 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>no conflicts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE CALENDAR ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '104px 24px 0' }}>
        <div className="gcal-grid">
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '28px 20px', boxShadow: 'var(--janus-shadow)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(80px, 1fr) minmax(70px, 120px) minmax(80px, 1fr)', alignItems: 'center', gap: '0' }}>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'var(--janus-accent)', flexShrink: 0 }} />
                  <span style={{ font: '600 12px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Janus</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ height: '18px', borderRadius: '5px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)' }} />
                  <span style={{ height: '18px', borderRadius: '5px', background: 'rgba(59,130,246,0.15)', border: '1.5px solid rgba(59,130,246,0.6)' }} />
                  <span style={{ height: '18px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)' }} />
                </div>
                <span style={{ font: '400 9.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>local state</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '0 6px' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ flex: '1', height: '1.5px', background: 'var(--janus-accent)' }} />
                  <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>▶</span>
                </div>
                <span style={{ padding: '3px 7px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-border)', font: '500 9.5px/1.2 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)', textAlign: 'center', whiteSpace: 'nowrap' }}>two-way</span>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>◀</span>
                  <span style={{ flex: '1', height: '1.5px', background: 'var(--janus-border)' }} />
                </div>
                <span style={{ font: '400 9px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', textAlign: 'center' }}>syncToken</span>
              </div>

              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', flexShrink: 0 }} />
                  <span style={{ font: '600 12px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Google Cal</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ height: '18px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)' }} />
                  <span style={{ height: '18px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)' }} />
                  <span style={{ height: '18px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)' }} />
                </div>
                <span style={{ font: '400 9.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>events.watch</span>
              </div>
            </div>
            <div style={{ marginTop: '20px', paddingTop: '14px', borderTop: '1px solid var(--janus-border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>conflict: last-write-wins</span>
              <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>delta poll: 30 s</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Google Calendar sync</span>
            <h2 style={{ margin: '0', font: '700 clamp(28px, 6vw, 42px)/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', maxWidth: '17ch', color: 'var(--janus-text)' }}>One calendar, two directions</h2>
            <p style={{ margin: '0', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', maxWidth: '48ch', textWrap: 'pretty' }}>Connect a Google account and Janus keeps both sides current: an incremental sync token pulls remote changes, local edits push straight back. Field-level merging means a title edited here and a time moved there do not overwrite each other.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '14px 16px', border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-surface)' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Limitation</span>
              <p style={{ margin: '0', font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>The sync adapter needs a token endpoint of your own — Janus never holds a client secret in the browser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK TABS ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '128px 24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', marginBottom: '38px' }}>
          <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Integration</span>
          <h2 style={{ margin: '0', font: '700 clamp(28px, 6vw, 48px)/1.08 "DM Sans", sans-serif', letterSpacing: '-0.03em', maxWidth: '24ch', color: 'var(--janus-text)' }}>The same component, in the framework you already use</h2>
          <p style={{ margin: '0', maxWidth: '62ch', font: '400 16px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>One Lit core, thin wrappers. Props, events and theming are identical everywhere — the wrappers exist only to make the ergonomics native.</p>
        </div>

        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--janus-shadow)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', overflowX: 'auto' }}>
            <div style={{ display: 'flex', flexShrink: 0 }}>
              <span onClick={() => setActiveTab('react')} style={getTabStyle('react')}>React</span>
              <span onClick={() => setActiveTab('angular')} style={getTabStyle('angular')}>Angular</span>
              <span onClick={() => setActiveTab('solid')} style={getTabStyle('solid')}>Solid</span>
              <span onClick={() => setActiveTab('vue')} style={getTabStyle('vue')}>Vue</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, paddingLeft: '8px' }}>
              <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{currentTab?.pkg}</span>
              <button onClick={handleCopySnippet} style={{ height: '26px', padding: '0 9px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text)', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{copiedSnippet ? 'Copied' : 'Copy'}</button>
            </div>
          </div>

          <div style={{ background: '#18181b', minHeight: '392px', display: 'flex', overflowX: 'auto' }}>
            <div style={{ width: '48px', flex: 'none', padding: '24px 0', borderRight: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0', font: '400 12.5px/1.85 "JetBrains Mono", monospace', color: '#52525b' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
                <span key={n} style={{ paddingRight: '12px' }}>{n}</span>
              ))}
            </div>
            <div style={{ flex: '1', padding: '24px 20px', overflowX: 'auto' }}>
              {activeTab === 'react' && (
                <pre style={{ margin: '0', font: '400 13px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7' }}><div><span style={{ color: '#f97316' }}>import</span> {'{ JanusScheduler }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/react'</span></div><div>&#8203;</div><div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>Calendar</span>({'{ events }'}) {'{'}</div><div>  <span style={{ color: '#f97316' }}>return</span> (</div><div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>JanusScheduler</span></div><div>      view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timeline"</span></div><div>      events<span style={{ color: '#a1a1aa' }}>=</span>{'{events}'}</div><div>      timeZone<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"Asia/Colombo"</span></div><div>      onEventDrop<span style={{ color: '#a1a1aa' }}>=</span>{'{'}(e) <span style={{ color: '#a1a1aa' }}>=&gt;</span> persist(e){'}'}</div><div>    <span style={{ color: '#a1a1aa' }}>/&gt;</span></div><div>  )</div><div>{'}'}</div></pre>
              )}
              {activeTab === 'angular' && (
                <pre style={{ margin: '0', font: '400 13px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7' }}><div><span style={{ color: '#f97316' }}>import</span> {'{ JanusSchedulerModule }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/angular'</span></div><div>&#8203;</div><div><span style={{ color: '#52525b' }}>// calendar.component.html</span></div><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-scheduler</span></div><div>  view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timeline"</span></div><div>  [events]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"events"</span></div><div>  timeZone<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"Asia/Colombo"</span></div><div>  (eventDrop)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"persist($event)"</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div><div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>janus-scheduler</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div></pre>
              )}
              {activeTab === 'solid' && (
                <pre style={{ margin: '0', font: '400 13px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7' }}><div><span style={{ color: '#f97316' }}>import</span> {'{ JanusScheduler }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/solid'</span></div><div>&#8203;</div><div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>Calendar</span>(props) {'{'}</div><div>  <span style={{ color: '#f97316' }}>return</span> (</div><div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>JanusScheduler</span></div><div>      view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timeline"</span></div><div>      events<span style={{ color: '#a1a1aa' }}>=</span>{'{props.events}'}</div><div>      timeZone<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"Asia/Colombo"</span></div><div>      onEventDrop<span style={{ color: '#a1a1aa' }}>=</span>{'{persist}'}</div><div>    <span style={{ color: '#a1a1aa' }}>/&gt;</span></div><div>  )</div><div>{'}'}</div></pre>
              )}
              {activeTab === 'vue' && (
                <pre style={{ margin: '0', font: '400 13px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7' }}><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>script setup</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div><div><span style={{ color: '#f97316' }}>import</span> {'{ JanusScheduler }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/vue'</span></div><div><span style={{ color: '#f97316' }}>const</span> events <span style={{ color: '#a1a1aa' }}>=</span> useEvents()</div><div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>script</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div><div>&#8203;</div><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>JanusScheduler</span></div><div>  view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timeline"</span></div><div>  :events<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"events"</span></div><div>  time-zone<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"Asia/Colombo"</span></div><div>  @event-drop<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"persist"</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div></pre>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderTop: '1.5px solid var(--janus-border)', background: 'var(--janus-surface)', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ font: '400 12.5px/1 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Identical props and events across all four wrappers.</span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>SSR safe</span>
              <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>Typed events</span>
              <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>Tree-shakeable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── THEMING ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '112px 24px 0' }}>
        <div className="theming-grid">
          <div style={{ border: `1.5px solid ${prevBorder.trim()}`, borderRadius: '14px', background: `${prevBg.trim()}`, padding: '18px', boxShadow: 'var(--janus-shadow)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ font: '600 13px/1 "DM Sans", sans-serif', color: `${prevText.trim()}` }}>September 2026</span>
              <div style={{ display: 'inline-flex', padding: '3px', gap: '2px', background: `${prevSurface.trim()}`, border: `1.5px solid ${prevBorder.trim()}`, borderRadius: '9px' }}>
                <span style={{ padding: '4px 9px', borderRadius: '6px', background: `${prevActiveBg.trim()}`, color: `${prevText.trim()}`, font: '600 11px/1 "DM Sans", sans-serif' }}>Week</span>
                <span style={{ padding: '4px 9px', borderRadius: '6px', color: `${prevMuted.trim()}`, font: '500 11px/1 "DM Sans", sans-serif' }}>Month</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '36px repeat(5,1fr)', gap: '0' }}>
              <span />
              <span style={{ paddingBottom: '8px', font: '500 10px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}`, textAlign: 'center' }}>MON</span>
              <span style={{ paddingBottom: '8px', font: '500 10px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}`, textAlign: 'center' }}>TUE</span>
              <span style={{ paddingBottom: '8px', font: '500 10px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}`, textAlign: 'center' }}>WED</span>
              <span style={{ paddingBottom: '8px', font: '500 10px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}`, textAlign: 'center' }}>THU</span>
              <span style={{ paddingBottom: '8px', font: '500 10px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}`, textAlign: 'center' }}>FRI</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '36px repeat(5,1fr)', borderTop: `1px solid ${prevBorder.trim()}` }}>
              <div style={{ display: 'flex', flexDirection: 'column', font: '400 9.5px/1 "JetBrains Mono", monospace', color: `${prevMuted.trim()}` }}>
                <span style={{ height: '38px', padding: '4px 4px 0 0', textAlign: 'right', borderBottom: `1px solid ${prevHairline.trim()}` }}>09:00</span>
                <span style={{ height: '38px', padding: '4px 4px 0 0', textAlign: 'right', borderBottom: `1px solid ${prevHairline.trim()}` }}>10:00</span>
                <span style={{ height: '38px', padding: '4px 4px 0 0', textAlign: 'right', borderBottom: `1px solid ${prevHairline.trim()}` }}>11:00</span>
                <span style={{ height: '38px', padding: '4px 4px 0 0', textAlign: 'right' }}>12:00</span>
              </div>
              <div style={{ position: 'relative', borderLeft: `1px solid ${prevHairline.trim()}`, height: '152px' }}>
                <span style={{ position: 'absolute', top: '4px', left: '2px', right: '2px', height: '52px', borderRadius: '7px', background: `${prevAccentTint.trim()}`, border: '1.5px solid #f97316' }} />
              </div>
              <div style={{ position: 'relative', borderLeft: `1px solid ${prevHairline.trim()}`, height: '152px' }}>
                <span style={{ position: 'absolute', top: '42px', left: '2px', right: '2px', height: '34px', borderRadius: '7px', background: `${prevSurface.trim()}`, border: `1.5px solid ${prevBorder.trim()}` }} />
              </div>
              <div style={{ position: 'relative', borderLeft: `1px solid ${prevHairline.trim()}`, height: '152px' }}>
                <span style={{ position: 'absolute', top: '80px', left: '2px', right: '2px', height: '52px', borderRadius: '7px', background: `${prevAccentTint.trim()}`, border: '1.5px solid #f97316' }} />
              </div>
              <div style={{ position: 'relative', borderLeft: `1px solid ${prevHairline.trim()}`, height: '152px' }}>
                <span style={{ position: 'absolute', top: '4px', left: '2px', right: '2px', height: '34px', borderRadius: '7px', background: `${prevSurface.trim()}`, border: `1.5px solid ${prevBorder.trim()}` }} />
              </div>
              <div style={{ position: 'relative', borderLeft: `1px solid ${prevHairline.trim()}`, height: '152px' }}>
                <span style={{ position: 'absolute', top: '56px', left: '2px', right: '2px', height: '70px', borderRadius: '7px', background: `${prevAccentTint.trim()}`, border: '1.5px solid #f97316' }} />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Theming</span>
            <h2 style={{ margin: '0', font: '700 clamp(28px, 6vw, 42px)/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', maxWidth: '18ch', color: 'var(--janus-text)' }}>Twelve custom properties, no build step</h2>
            <p style={{ margin: '0', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', maxWidth: '46ch', textWrap: 'pretty' }}>Colour, radius and density are plain CSS custom properties on the host element. Change them at runtime, scope them per calendar, or leave them alone and inherit your own tokens.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Accent</span>
              <div style={{ display: 'flex', gap: '9px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f97316', boxShadow: '0 0 0 3px rgba(249,115,22,0.22)', cursor: 'pointer' }} />
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'oklch(0.62 0.12 240)', cursor: 'pointer' }} />
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'oklch(0.62 0.12 165)', cursor: 'pointer' }} />
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'oklch(0.62 0.12 300)', cursor: 'pointer' }} />
                <span style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--janus-text)', border: '1px solid var(--janus-border)', cursor: 'pointer' }} />
                <span style={{ width: '1px', height: '26px', background: 'var(--janus-border)', margin: '0 4px' }} />
                <div onClick={() => setThemeDark(!themeDark)} style={{ display: 'inline-flex', padding: '3px', gap: '2px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', borderRadius: '9px', cursor: 'pointer' }}>
                  <span style={{ padding: '5px 10px', borderRadius: '6px', background: `${sunBg.trim()}`, color: `${sunFg.trim()}`, font: '600 11px/1 "DM Sans", sans-serif', boxShadow: !dark ? 'var(--janus-shadow-sm)' : 'none' }}>Light</span>
                  <span style={{ padding: '5px 10px', borderRadius: '6px', background: `${moonBg.trim()}`, color: `${moonFg.trim()}`, font: '600 11px/1 "DM Sans", sans-serif', boxShadow: dark ? 'var(--janus-shadow-sm)' : 'none' }}>Dark</span>
                </div>
              </div>
              <span style={{ font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', marginTop: '2px' }}>--janus-accent · --janus-radius · --janus-row-height</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '112px 24px 0' }}>
        <div className="perf-grid" style={{ background: '#09090b', border: '1px solid #27272a', borderRadius: '14px', padding: '44px 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ font: '700 clamp(44px, 7vw, 60px)/1 "DM Sans",sans-serif', letterSpacing: '-0.035em', color: '#fafafa' }}>14.2<span style={{ fontSize: '24px', color: '#f97316' }}> kB</span></span>
            <span style={{ font: '500 14px/1.4 "DM Sans",sans-serif', color: '#fafafa' }}>Core plus timeline, min+gzip</span>
            <span style={{ font: '400 12px/1.5 "JetBrains Mono",monospace', color: '#71717a' }}>no dependencies, no polyfills</span>
          </div>
          <div className="perf-col-divider">
            <span style={{ font: '700 clamp(44px, 7vw, 60px)/1 "DM Sans",sans-serif', letterSpacing: '-0.035em', color: '#fafafa' }}>63k+<span style={{ fontSize: '24px', color: '#f97316' }}> events</span></span>
            <span style={{ font: '500 14px/1.4 "DM Sans",sans-serif', color: '#fafafa' }}>Scrolled at 60 fps, virtualised</span>
            <span style={{ font: '400 12px/1.5 "JetBrains Mono",monospace', color: '#71717a' }}>M2 Air, Chrome 128, 2× DPR</span>
          </div>
          <div className="perf-col-divider">
            <span style={{ font: '700 clamp(44px, 7vw, 60px)/1 "DM Sans",sans-serif', letterSpacing: '-0.035em', color: '#fafafa' }}>0.8<span style={{ fontSize: '24px', color: '#f97316' }}> ms</span></span>
            <span style={{ font: '500 14px/1.4 "DM Sans",sans-serif', color: '#fafafa' }}>Median sentence parse</span>
            <span style={{ font: '400 12px/1.5 "JetBrains Mono",monospace', color: '#71717a' }}>1,000-sentence benchmark suite</span>
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE ─────────────────────────── */}
      <section className="section-responsive-padding" style={{ padding: '112px 24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Architecture</span>
          <h2 style={{ margin: '0', font: '700 clamp(26px, 5.5vw, 34px)/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em', color: 'var(--janus-text)' }}>Three packages, one direction of dependency</h2>
        </div>
        <div className="architecture-grid">
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '24px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ font: '500 13px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>@janus-scheduler/core</span>
            <span style={{ font: '600 17px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>State</span>
            <p style={{ margin: '0', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Events, resources, ranges, recurrence expansion, conflict detection and the parser. No DOM.</p>
          </div>
          <div className="architecture-arrow">
            <span style={{ flex: '1', height: '1.5px', background: 'var(--janus-border)' }} />
            <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '24px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ font: '500 13px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>@janus-scheduler/ui</span>
            <span style={{ font: '600 17px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>Lit Web Components</span>
            <p style={{ margin: '0', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Timeline, month grid, prompt bar and drag layer, styled through custom properties.</p>
          </div>
          <div className="architecture-arrow">
            <span style={{ flex: '1', height: '1.5px', background: 'var(--janus-border)' }} />
            <span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '24px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ font: '500 13px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>/react · /angular · /solid · /vue</span>
            <span style={{ font: '600 17px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>Framework wrappers</span>
            <p style={{ margin: '0', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Typed props, native event handlers, correct SSR behaviour. Roughly 200 lines each.</p>
          </div>
        </div>
        <p style={{ margin: '22px 0 0', textAlign: 'center', font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Nothing below depends on anything above it — you can use the core on its own, headless.</p>
      </section>

      {/* ── CTA ─────────────────────────── */}
      <section className="cta-responsive-section" style={{ padding: '112px 24px 0' }}>
        <div className="cta-responsive-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '64px 48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center', boxShadow: 'var(--janus-shadow)' }}>
          <h2 className="cta-responsive-title" style={{ margin: '0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', maxWidth: '24ch', color: 'var(--janus-text)' }}>Add a scheduler this afternoon</h2>
          <p style={{ margin: '0', maxWidth: '56ch', font: '400 16px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Install the wrapper for your framework, pass an array of events, and you have a working timeline. Everything else is optional.</p>
          <div className="cta-responsive-install" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', padding: '12px 14px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)' }}>
            <span style={{ font: '400 13.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>$</span>
            <span style={{ font: '400 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>npm i @janus-scheduler/react</span>
            <button onClick={handleCopyCta} style={{ height: '26px', padding: '0 9px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', flexShrink: 0 }}>{copiedCta ? 'Copied' : 'Copy'}</button>
          </div>
          <Link 
            to="/docs/getting-started" 
            className="cta-responsive-btn"
            style={{ 
              height: '44px', 
              padding: '0 24px', 
              border: '0', 
              borderRadius: '9px', 
              background: 'var(--janus-accent)', 
              color: '#ffffff', 
              font: '600 14.5px/1 "DM Sans",sans-serif', 
              cursor: 'pointer', 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              textDecoration: 'none',
              transition: 'all 0.15s ease'
            }} 
          >
            Read the documentation
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

function FeatureCard({ title, desc, code }) {
  return (
    <div className="janus-feature-card" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--janus-bg)', cursor: 'default' }}>
      <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)' }} />
      <span style={{ font: '600 17px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em' }}>{title}</span>
      <p style={{ margin: 0, font: '400 14px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{desc}</p>
      <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', marginTop: '2px' }}>{code}</span>
    </div>
  );
}

export default LandingPage;
