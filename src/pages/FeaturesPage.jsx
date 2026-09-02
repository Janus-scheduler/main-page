import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/components.css';

const sections = [
  { id: 'f01', num: '01', title: 'Resource Timeline', navLabel: 'Resource Timeline' },
  { id: 'f02', num: '02', title: 'Month Grid', navLabel: 'Month Grid' },
  { id: 'f03', num: '03', title: 'Drag to create, move and resize', navLabel: 'Drag to create, move and resize' },
  { id: 'f04', num: '04', title: 'Timezone-aware', navLabel: 'Timezone-aware' },
  { id: 'f05', num: '05', title: 'Conflict detection', navLabel: 'Conflict detection' },
  { id: 'f06', num: '06', title: 'Recurring events', navLabel: 'Recurring events' },
  { id: 'f07', num: '07', title: 'Natural language', navLabel: 'Natural language' },
  { id: 'f08', num: '08', title: 'Google Calendar sync', navLabel: 'Google Calendar sync' },
  { id: 'f09', num: '09', title: 'Theming', navLabel: 'Theming' },
  { id: 'f10', num: '10', title: 'Performance', navLabel: 'Performance' },
  { id: 'f11', num: '11', title: 'Accessibility', navLabel: 'Accessibility' },
  { id: 'f12', num: '12', title: 'Framework wrappers', navLabel: 'Framework wrappers' },
  { id: 'f13', num: '13', title: 'Headless core', navLabel: 'Headless core' },
  { id: 'f14', num: '14', title: 'TypeScript types', navLabel: 'TypeScript types' },
];

export default function FeaturesPage() {
  const [activeSection, setActiveSection] = useState('f01');
  const [selectedTz, setSelectedTz] = useState('America/New_York');
  const [selectedFramework, setSelectedFramework] = useState('react');
  const [previewAccent, setPreviewAccent] = useState('#f97316');
  const hasMountedHashRef = useRef(false);

  // Scroll to hash once on initial load
  useEffect(() => {
    if (hasMountedHashRef.current) return;
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.some(s => s.id === hash)) {
      hasMountedHashRef.current = true;
      setActiveSection(hash);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  // Scroll spy listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let current = sections[0].id;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)' }}>
      <Header />

      <header style={{ padding: '72px 40px 56px', display: 'flex', flexDirection: 'column', gap: '18px', borderBottom: '1px solid var(--janus-border)' }}>
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Features · fourteen of them</span>
        <h1 style={{ margin: 0, maxWidth: '24ch', font: '700 56px/1.05 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>
          Everything the component does, and nothing it pretends to.
        </h1>
        <p style={{ margin: 0, maxWidth: '70ch', font: '400 17px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
          Each section below is a capability that ships today, with a link to the reference page that documents its edges. Where Janus stops, we say so.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '236px 1fr', alignItems: 'start' }}>

        {/* Sticky Sub-Nav (TOC) */}
        <nav style={{ position: 'sticky', top: '56px', maxHeight: 'calc(100vh - 70px)', overflowY: 'auto', padding: '44px 24px 44px 40px', display: 'flex', flexDirection: 'column', gap: '14px', scrollbarWidth: 'thin' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>On this page</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleNavClick(e, section.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    padding: '6px 9px',
                    borderRadius: '9px',
                    background: isActive ? 'var(--janus-accent-tint, rgba(249,115,22,0.12))' : 'transparent',
                    font: `${isActive ? '600' : '400'} 12.5px/1.35 "DM Sans", sans-serif`,
                    color: isActive ? 'var(--janus-accent-text, #c2560a)' : 'var(--janus-text-secondary)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'var(--janus-surface)';
                      e.currentTarget.style.color = 'var(--janus-text)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--janus-text-secondary)';
                    }
                  }}
                >
                  <span style={{ font: '500 10px/1.6 "JetBrains Mono", monospace', color: isActive ? 'var(--janus-accent-text, #c2560a)' : 'var(--janus-text-muted)' }}>
                    {section.num}
                  </span>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {section.navLabel}
                  </span>
                </a>
              );
            })}
          </div>
          <div style={{ marginTop: '8px', paddingTop: '14px', borderTop: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>14 sections · ~6 min read</span>
            <a href="/packages" style={{ font: '600 11.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Compare with packages ↗</a>
          </div>
        </nav>

        {/* Feature Content Sections */}
        <div style={{ padding: '0 40px 0 8px', minWidth: 0 }}>

          {/* 01 · Resource Timeline */}
          <section id="f01" style={{ padding: '44px 0 60px', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>01 · Resource Timeline</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Rows for the things you are actually booking</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                People, rooms, vehicles or machines run down the left; a zoomable axis runs across the top from five minutes to a full quarter. Rows and columns are both virtualised, so the axis range costs nothing until you scroll to it. Groups nest one level, and the resource gutter stays pinned while the grid scrolls.
              </p>
              <a href="/docs/api/janus-timeline" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 12.5px/1 "DM Sans", sans-serif' }}>Thu 3 September</span>
                  <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>zoom: hour</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr' }}>
                  <div style={{ borderRight: '1.5px solid var(--janus-border)' }}>
                    <div style={{ height: '26px', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}></div>
                    <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1.2 "DM Sans", sans-serif' }}>Alex Fernando</div>
                    <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1.2 "DM Sans", sans-serif' }}>Nadeesha Perera</div>
                    <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1.2 "DM Sans", sans-serif' }}>Room A</div>
                    <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', font: '500 12px/1.2 "DM Sans", sans-serif' }}>Room B</div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ height: '26px', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}>
                      {['09', '10', '11', '12', '13', '14', '15'].map(h => (
                        <span key={h} style={{ paddingLeft: '6px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 9.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{h}</span>
                      ))}
                    </div>
                    <div style={{ position: 'relative', height: '168px' }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', pointerEvents: 'none' }}>
                        {[...Array(7)].map((_, i) => <span key={i} style={{ borderLeft: '1px solid var(--janus-surface)' }}></span>)}
                      </div>
                      <div style={{ position: 'absolute', left: '34%', top: 0, bottom: 0, width: '1.5px', background: 'var(--janus-accent)' }}><span style={{ position: 'absolute', top: '-1px', left: '-4px', width: '9px', height: '9px', borderRadius: '999px', background: 'var(--janus-accent)' }}></span></div>
                      <div style={{ position: 'absolute', top: '6px', left: '2%', width: '26%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '5px 8px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Design sync</span></div>
                      <div style={{ position: 'absolute', top: '48px', left: '16%', width: '30%', height: '30px', borderRadius: '9px', background: 'oklch(0.93 0.045 240)', border: '1.5px solid oklch(0.62 0.12 240)', padding: '5px 8px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'oklch(0.38 0.09 240)' }}>Sprint planning</span></div>
                      <div style={{ position: 'absolute', top: '90px', left: '2%', width: '26%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '5px 8px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Design sync</span></div>
                      <div style={{ position: 'absolute', top: '90px', left: '56%', width: '20%', height: '30px', borderRadius: '9px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', padding: '5px 8px', display: 'flex', alignItems: 'center' }}><span style={{ font: '500 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Held</span></div>
                      <div style={{ position: 'absolute', top: '132px', left: '30%', width: '34%', height: '30px', borderRadius: '9px', background: 'oklch(0.93 0.045 165)', border: '1.5px solid oklch(0.62 0.12 165)', padding: '5px 8px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'oklch(0.36 0.08 165)' }}>All-hands</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 02 · Month Grid */}
          <section id="f02" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 14px', borderBottom: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 13px/1 "DM Sans", sans-serif' }}>September 2026</span>
                  <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>&lt;janus-month&gt;</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)', textAlign: 'center', padding: '6px 0', font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridAutoRows: '58px', gap: '1px', background: 'var(--janus-border)' }}>
                  {[...Array(28)].map((_, idx) => {
                    const day = idx + 1;
                    const isToday = day === 3;
                    const hasEvents = day === 3 || day === 9 || day === 14 || day === 21;
                    return (
                      <div key={idx} style={{ background: 'var(--janus-bg)', padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: '3px', position: 'relative' }}>
                        <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', color: isToday ? 'var(--janus-accent)' : 'var(--janus-text-secondary)', fontWeight: isToday ? 700 : 400 }}>
                          {day}
                        </span>
                        {isToday && (
                          <span style={{ background: 'var(--janus-accent-tint)', border: '1px solid var(--janus-accent)', color: 'var(--janus-accent-content)', fontSize: '9px', borderRadius: '4px', padding: '1px 3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            Design sync
                          </span>
                        )}
                        {hasEvents && day !== 3 && (
                          <span style={{ background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', color: 'var(--janus-text)', fontSize: '9px', borderRadius: '4px', padding: '1px 3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            2 meetings
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>02 · Month Grid</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Dense month view with overflow chips</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Full-month overview with automatic cell truncation, "+N more" overflow pills, localized first day of the week, and instant drag-between-days. Reads the same data array as the timeline with zero schema translation.
              </p>
              <a href="/docs/api/janus-month" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
          </section>

          {/* 03 · Drag to create, move and resize */}
          <section id="f03" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>03 · Drag to create, move and resize</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Direct manipulation, with a way back</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Drag on empty grid to create, drag a block to move it between resources, pull either edge to resize. The ghost shows where the event came from and the target row highlights as you cross it. Every interaction is also available from the keyboard, and returning a rejected promise rolls the whole thing back.
              </p>
              <a href="/docs/getting-started#first-scheduler" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr' }}>
                  <div style={{ borderRight: '1.5px solid var(--janus-border)' }}>
                    <div style={{ height: '26px', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}></div>
                    <div style={{ height: '52px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1.2 "DM Sans", sans-serif' }}>Alex F.</div>
                    <div style={{ height: '52px', display: 'flex', alignItems: 'center', padding: '0 12px', font: '500 12px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Room A</div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ height: '26px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}>
                      {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map(t => (
                        <span key={t} style={{ paddingLeft: '6px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 9.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ position: 'relative', height: '104px' }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', pointerEvents: 'none' }}>
                        {[...Array(6)].map((_, i) => <span key={i} style={{ borderLeft: '1px solid var(--janus-surface)' }}></span>)}
                      </div>
                      <div style={{ position: 'absolute', top: '52px', left: 0, right: 0, bottom: 0, background: 'var(--janus-accent-tint)', borderTop: '1.5px solid var(--janus-accent)', borderBottom: '1.5px solid var(--janus-accent)' }}></div>
                      <div style={{ position: 'absolute', top: '11px', left: '10%', width: '28%', height: '30px', borderRadius: '9px', background: 'var(--janus-surface)', border: '1.5px dashed var(--janus-text-muted)', padding: '5px 8px', display: 'flex', alignItems: 'center', opacity: 0.75 }}><span style={{ font: '500 10.5px/1.2 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>was 09:30</span></div>
                      <div style={{ position: 'absolute', top: '63px', left: '38%', width: '28%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
                        <span style={{ width: '3px', height: '14px', borderRadius: '2px', background: 'var(--janus-accent)' }}></span>
                        <span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Design sync</span>
                        <span style={{ width: '3px', height: '14px', borderRadius: '2px', background: 'var(--janus-accent)' }}></span>
                      </div>
                      <span style={{ position: 'absolute', top: '38px', left: '38%', padding: '3px 7px', borderRadius: '5px', background: 'var(--janus-text)', color: 'var(--janus-bg)', font: '600 10px/1.3 "JetBrains Mono", monospace', whiteSpace: 'nowrap' }}>11:15 → 12:15 · snap 15m</span>
                      <span style={{ position: 'absolute', bottom: '6px', right: '8px', padding: '2px 7px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-accent)', font: '600 9.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>drop target</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '9px 12px', borderTop: '1px solid var(--janus-border)', display: 'flex', gap: '14px' }}>
                  <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⇧ drag = copy</span>
                  <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⌥ drag = ignore snap</span>
                  <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>esc = cancel</span>
                </div>
              </div>
            </div>
          </section>

          {/* 04 · Timezone-aware */}
          <section id="f04" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ font: '600 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', textTransform: 'uppercase' }}>Display Zone Selector</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['America/New_York', 'Europe/London', 'Asia/Colombo'].map(tz => (
                    <button
                      key={tz}
                      type="button"
                      onClick={() => setSelectedTz(tz)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        border: selectedTz === tz ? '1px solid var(--janus-accent)' : '1px solid var(--janus-border)',
                        background: selectedTz === tz ? 'var(--janus-accent-tint)' : 'var(--janus-bg)',
                        color: selectedTz === tz ? 'var(--janus-accent-text)' : 'var(--janus-text-secondary)',
                        font: '500 10.5px/1 "JetBrains Mono", monospace',
                        cursor: 'pointer'
                      }}
                    >
                      {tz.split('/')[1]}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ font: '600 14px/1.3 "DM Sans", sans-serif' }}>Global Sprint Review</span>
                  <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>
                    {selectedTz === 'America/New_York' ? '10:00 - 11:30 AM EDT' : selectedTz === 'Europe/London' ? '15:00 - 16:30 BST' : '19:30 - 21:00 IST'}
                  </span>
                </div>
                <div style={{ padding: '8px 10px', borderRadius: '6px', background: 'var(--janus-surface)', font: '400 11.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>
                  Stored as UTC: <span style={{ color: 'var(--janus-text)', fontWeight: 600 }}>2026-09-03T14:00:00.000Z</span>
                </div>
                <span style={{ font: '400 11px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
                  ✓ Daylight Saving Time transitions calculated via Intl.DateTimeFormat with zero date-fns bundle cost.
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>04 · Timezone-aware</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>UTC in the store, local in the view</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                The store holds absolute ISO timestamps, and the view projects them through whatever display zone you pass. Changing time zones shifts every block across the grid synchronously without altering event start times.
              </p>
              <a href="/docs/api/utilities#timezone-utils" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
          </section>

          {/* 05 · Conflict detection */}
          <section id="f05" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>05 · Conflict detection</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Double bookings caught before the drop</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>Overlaps are computed per resource on every pointer move, across time zones and daylight-saving boundaries. Set <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '14.5px' }}>conflictMode</span> to warn and the affected blocks are flagged; set it to block and the drop is refused with a dialog you can style or replace.</p>
              <a href="/docs/api/utilities#conflict-utils" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr' }}>
                  <div style={{ borderRight: '1.5px solid var(--janus-border)' }}>
                    <div style={{ height: '30px', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}></div>
                    <div style={{ height: '88px', display: 'flex', alignItems: 'center', padding: '0 12px', font: '600 12px/1.2 "DM Sans", sans-serif' }}>Room A</div>
                  </div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ height: '30px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}>
                      {['10:00', '11:00', '12:00', '13:00'].map(t => (
                        <span key={t} style={{ paddingLeft: '8px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ position: 'relative', height: '88px' }}>
                      <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', pointerEvents: 'none' }}>
                        {[...Array(4)].map((_, i) => <span key={i} style={{ borderLeft: '1px solid var(--janus-surface)' }}></span>)}
                      </div>
                      <div style={{ position: 'absolute', top: '28px', left: '14%', right: '22%', bottom: '16px', background: 'repeating-linear-gradient(135deg, rgba(249,115,22,0.18) 0 4px, transparent 4px 8px)', borderLeft: '1.5px solid var(--janus-accent)', borderRight: '1.5px solid var(--janus-accent)' }}></div>
                      <div style={{ position: 'absolute', top: '10px', left: '6%', width: '46%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '5px 10px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Client workshop</span></div>
                      <div style={{ position: 'absolute', top: '48px', left: '14%', width: '52%', height: '30px', borderRadius: '9px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-text)', padding: '5px 10px', display: 'flex', alignItems: 'center' }}><span style={{ font: '600 11px/1.2 "DM Sans", sans-serif' }}>Design sync</span></div>
                      <span style={{ position: 'absolute', top: '52px', left: '69%', padding: '2px 8px', borderRadius: '999px', background: 'var(--janus-accent)', color: '#ffffff', font: '700 9px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>2 CONFLICTS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 06 · Recurring events */}
          <section id="f06" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '12px 14px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: '600 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textTransform: 'uppercase' }}>
                  RFC 5545 Recurrence Engine
                </span>
                <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>
                  RRULE:FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=1;COUNT=12
                </code>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '6px' }}>
                  <div style={{ padding: '8px', borderRadius: '6px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', textAlign: 'center' }}>
                    <span style={{ font: '700 14px/1 "DM Sans", sans-serif', display: 'block' }}>Tue, Sep 1</span>
                    <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Instance 1</span>
                  </div>
                  <div style={{ padding: '8px', borderRadius: '6px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', textAlign: 'center' }}>
                    <span style={{ font: '700 14px/1 "DM Sans", sans-serif', display: 'block' }}>Thu, Sep 3</span>
                    <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Instance 2</span>
                  </div>
                  <div style={{ padding: '8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', border: '1px solid var(--janus-accent)', textAlign: 'center' }}>
                    <span style={{ font: '700 14px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-text)', display: 'block' }}>Tue, Sep 8</span>
                    <span style={{ font: '600 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>Exception ★</span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>06 · Recurring events</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>RFC 5545 rules expanded in a worker</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Full support for daily, weekly, monthly and yearly recurrence rules with count or until constraints. Moving an individual occurrence creates an exception without splitting the parent rule.
              </p>
              <a href="/docs/api/utilities#recurrence-utils" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the docs →</a>
            </div>
          </section>

          {/* 07 · Natural language */}
          <section id="f07" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>07 · Natural language</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>A sentence becomes an event in under 1 ms</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Local browser-based NLP grammar that parses time, duration, location, and participant entities with 0 server requests, zero API keys, and offline-first accuracy.
              </p>
              <a href="/docs/topics/nlp" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Try the NLP parser →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '12px 14px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ font: '500 13px/1 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
                  "Schedule a design sync with Alex tomorrow at 10am in Room A"
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span style={{ padding: '3px 8px', borderRadius: '4px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '500 10.5px/1 "JetBrains Mono", monospace' }}>intent: create_event (0.97)</span>
                  <span style={{ padding: '3px 8px', borderRadius: '4px', background: 'var(--janus-surface)', font: '500 10.5px/1 "JetBrains Mono", monospace' }}>date: tomorrow</span>
                  <span style={{ padding: '3px 8px', borderRadius: '4px', background: 'var(--janus-surface)', font: '500 10.5px/1 "JetBrains Mono", monospace' }}>time: 10:00</span>
                  <span style={{ padding: '3px 8px', borderRadius: '4px', background: 'var(--janus-surface)', font: '500 10.5px/1 "JetBrains Mono", monospace' }}>person: alex.f</span>
                </div>
              </div>
            </div>
          </section>

          {/* 08 · Google Calendar sync */}
          <section id="f08" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '14px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ font: '600 12.5px/1 "DM Sans", sans-serif' }}>GoogleSyncManager</span>
                  <span style={{ padding: '2px 7px', borderRadius: '999px', background: '#10b98118', color: '#10b981', font: '600 10px/1.4 "JetBrains Mono", monospace' }}>Bidirectional Sync</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '6px', background: 'var(--janus-surface)', font: '500 11px/1.4 "JetBrains Mono", monospace' }}>
                  <span>Janus Store</span>
                  <span style={{ color: 'var(--janus-accent)' }}>⇄ syncToken delta ⇄</span>
                  <span>Google v3 REST</span>
                </div>
                <span style={{ font: '400 11px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
                  Automatic optimistic rollbacks on network drops and 412 precondition mismatches.
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>08 · Google Calendar sync</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Two-way, incremental, field-level merge</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Connect your scheduler directly to Google Calendar with optimistic updates, push notifications, and incremental change ingestion using <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/integrations</code>.
              </p>
              <a href="/docs/topics/google-calendar-sync" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read the sync guide →</a>
            </div>
          </section>

          {/* 09 · Theming */}
          <section id="f09" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>09 · Theming</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>CSS custom properties pierce the shadow root</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Janus components encapsulate their styles inside shadow DOM, but expose 21 CSS variables for full visual customization. Override colors, surface fills, border radii, and row heights from your global stylesheet without breaking component encapsulation.
              </p>
              <a href="/docs/topics/theming" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Explore the token reference →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ font: '600 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', textTransform: 'uppercase' }}>Live Theme Tokens</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {['#f97316', '#3b82f6', '#10b981', '#8b5cf6'].map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setPreviewAccent(c)}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: c,
                        border: previewAccent === c ? '2px solid var(--janus-text)' : '1px solid transparent',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </div>
              </div>
              <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <code style={{ font: '500 12px/1 "JetBrains Mono", monospace', color: previewAccent }}>--janus-accent: {previewAccent}</code>
                  <span style={{ padding: '3px 8px', borderRadius: '6px', background: `${previewAccent}22`, color: previewAccent, font: '600 11px/1 "DM Sans", sans-serif' }}>
                    Active Token
                  </span>
                </div>
                <div style={{ height: '24px', borderRadius: '6px', background: `${previewAccent}22`, border: `1px solid ${previewAccent}`, display: 'flex', alignItems: 'center', padding: '0 8px' }}>
                  <span style={{ fontSize: '11px', color: previewAccent, fontWeight: 600 }}>Themeable Event Pill</span>
                </div>
              </div>
            </div>
          </section>

          {/* 10 · Performance */}
          <section id="f10" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ background: '#09090b', borderRadius: '14px', padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a1a1aa' }}>Render time · v1.8 → v2.4</span>
                <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>lower is better · ms</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ font: '500 11.5px/1 "DM Sans", sans-serif', color: '#fafafa' }}>First paint · 200 events</span><span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: '#52525b' }}>−72%</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '46%', height: '11px', borderRadius: '999px', background: '#27272a' }}></span><span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>64</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '13%', height: '11px', borderRadius: '999px', background: '#f97316' }}></span><span style={{ font: '600 10.5px/1 "JetBrains Mono", monospace', color: '#fafafa' }}>18</span></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ font: '500 11.5px/1 "DM Sans", sans-serif', color: '#fafafa' }}>First paint · 63,000+ events</span><span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: '#52525b' }}>−94%</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '92%', height: '11px', borderRadius: '999px', background: '#27272a' }}></span><span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>1,480</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '6%', height: '11px', borderRadius: '999px', background: '#f97316' }}></span><span style={{ font: '600 10.5px/1 "JetBrains Mono", monospace', color: '#fafafa' }}>86</span></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ font: '500 11.5px/1 "DM Sans", sans-serif', color: '#fafafa' }}>Scroll frame · 63,000+ events</span><span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: '#52525b' }}>−84%</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '38%', height: '11px', borderRadius: '999px', background: '#27272a' }}></span><span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>51</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '6%', height: '11px', borderRadius: '999px', background: '#f97316' }}></span><span style={{ font: '600 10.5px/1 "JetBrains Mono", monospace', color: '#fafafa' }}>8</span></div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '7px', font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#a1a1aa' }}><span style={{ width: '14px', height: '8px', borderRadius: '999px', background: '#27272a' }}></span>v1.8</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '7px', font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#fafafa' }}><span style={{ width: '14px', height: '8px', borderRadius: '999px', background: '#f97316' }}></span>v2.4</span>
                <span style={{ flex: 1 }}></span>
                <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: '#52525b' }}>M2 Air · Chrome 128</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>10 · Performance</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>63,000+ events, one frame budget</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>Version 2 moved layout into a typed-array pass and virtualised both axes, so cost scales with what is on screen rather than what is in the store. Recurrence expansion runs in a worker. The benchmark suite ships in the repository, so you can reproduce these numbers on your own hardware.</p>
              <a href="/packages" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>View package benchmarks →</a>
            </div>
          </section>

          {/* 11 · Accessibility */}
          <section id="f11" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>11 · Accessibility</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>WCAG 2.1 AA accessible from day one</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Keyboard shortcuts for moving between resources and timeslots, aria-live region announcements for drag-and-drop operations, and automatic high-contrast focus indicators make Janus accessible to all users.
              </p>
              <a href="/docs/getting-started#core-concepts" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read accessibility docs →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 12px/1.3 "DM Sans", sans-serif', display: 'block', marginBottom: '4px' }}>⌨ Keyboard Grid Nav</span>
                  <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Arrow keys traverse time cells and resources</span>
                </div>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 12px/1.3 "DM Sans", sans-serif', display: 'block', marginBottom: '4px' }}>📢 Live Announcements</span>
                  <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Screen readers read drop target times & conflicts</span>
                </div>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 12px/1.3 "DM Sans", sans-serif', display: 'block', marginBottom: '4px' }}>🎯 Visible Focus Ring</span>
                  <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>High-contrast 2px outline for tab focus</span>
                </div>
                <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>
                  <span style={{ font: '600 12px/1.3 "DM Sans", sans-serif', display: 'block', marginBottom: '4px' }}>♿ Zero Mouse Lock</span>
                  <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Every drag feature has keyboard equivalents</span>
                </div>
              </div>
            </div>
          </section>

          {/* 12 · Framework wrappers */}
          <section id="f12" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                {['react', 'angular', 'solid', 'vue'].map(fw => (
                  <button
                    key={fw}
                    type="button"
                    onClick={() => setSelectedFramework(fw)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      border: selectedFramework === fw ? '1px solid var(--janus-accent)' : '1px solid var(--janus-border)',
                      background: selectedFramework === fw ? 'var(--janus-accent-tint)' : 'var(--janus-bg)',
                      color: selectedFramework === fw ? 'var(--janus-accent-text)' : 'var(--janus-text-secondary)',
                      font: '600 11px/1 "DM Sans", sans-serif',
                      textTransform: 'capitalize',
                      cursor: 'pointer'
                    }}
                  >
                    {fw}
                  </button>
                ))}
              </div>
              <div style={{ borderRadius: '8px', background: '#18181b', padding: '14px', color: '#e4e4e7', font: '400 11.5px/1.6 "JetBrains Mono", monospace' }}>
                {selectedFramework === 'react' && <div><span style={{ color: '#f97316' }}>import</span> {'{ JanusScheduler }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span><br />&lt;<span style={{ color: '#7dd3fc' }}>JanusScheduler</span> view="timeline" events={'{events}'} /&gt;</div>}
                {selectedFramework === 'angular' && <div><span style={{ color: '#f97316' }}>import</span> {'{ JanusSchedulerModule }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/angular"</span><br />&lt;<span style={{ color: '#7dd3fc' }}>janus-scheduler</span> [events]="events" /&gt;</div>}
                {selectedFramework === 'solid' && <div><span style={{ color: '#f97316' }}>import</span> {'{ Timeline }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/solid"</span><br />&lt;<span style={{ color: '#7dd3fc' }}>Timeline</span> events={'{props.events}'} /&gt;</div>}
                {selectedFramework === 'vue' && <div><span style={{ color: '#f97316' }}>import</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/ui"</span><br />&lt;<span style={{ color: '#7dd3fc' }}>janus-timeline</span> :events="events" /&gt;</div>}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>12 · Framework wrappers</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>React, Angular, Solid and Vue native feel</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Thin wrappers around the Lit Web Components provide idiomatic prop names, signal bindings, reactive event handlers, and TypeScript prop autocompletion.
              </p>
              <a href="/docs/frameworks/react" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>View framework guides →</a>
            </div>
          </section>

          {/* 13 · Headless core */}
          <section id="f13" style={{ padding: '60px 0', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>13 · Headless core</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>State, conflict & parsing logic with no DOM</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code> runs completely headless in Node.js, Cloudflare Workers, or unit test runners. Execute scheduling mutations and conflict checks on your backend server with identical behavior.
              </p>
              <a href="/docs/api/scheduler-manager" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>Read SchedulerManager docs →</a>
            </div>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '14px', borderRadius: '8px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: '600 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', textTransform: 'uppercase' }}>Node.js / Headless Runner</span>
                <code style={{ font: '500 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>
                  const manager = new SchedulerManager(hooks);<br />
                  const conflicts = manager.getConflicts(newEvent);<br />
                  console.log(conflicts.length); // 0
                </code>
              </div>
            </div>
          </section>

          {/* 14 · TypeScript types */}
          <section id="f14" style={{ padding: '60px 0 80px', borderTop: '1px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '44px', alignItems: 'center', scrollMarginTop: '80px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ padding: '14px', borderRadius: '8px', background: '#18181b', color: '#e4e4e7', font: '400 12px/1.65 "JetBrains Mono", monospace' }}>
                <div><span style={{ color: '#f97316' }}>export interface</span> <span style={{ color: '#7dd3fc' }}>TimelineEvent</span>&lt;<span style={{ color: '#f97316' }}>T</span> = Record&lt;string, any&gt;&gt; {'{'}</div>
                <div>{'  '}id<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#7dd3fc' }}>string</span>;</div>
                <div>{'  '}title<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#7dd3fc' }}>string</span>;</div>
                <div>{'  '}start<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#7dd3fc' }}>string</span>; <span style={{ color: '#52525b' }}>// ISO 8601 UTC</span></div>
                <div>{'  '}end<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#7dd3fc' }}>string</span>;</div>
                <div>{'  '}resourceIds<span style={{ color: '#a1a1aa' }}>?:</span> <span style={{ color: '#7dd3fc' }}>string</span>[];</div>
                <div>{'  '}meta<span style={{ color: '#a1a1aa' }}>?:</span> <span style={{ color: '#f97316' }}>T</span>;</div>
                <div>{'}'}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>14 · TypeScript types</span>
              <h2 style={{ margin: 0, maxWidth: '18ch', font: '700 36px/1.12 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Hand-written declarations, generic over your payload</h2>
              <p style={{ margin: 0, maxWidth: '46ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Zero <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>any</code> types. Every callback, drag event payload, and state slice has precise TypeScript definitions that pass strict mode with no manual casting.
              </p>
              <a href="/docs/api/types" style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', textDecoration: 'none' }}>View TypeScript types reference →</a>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
