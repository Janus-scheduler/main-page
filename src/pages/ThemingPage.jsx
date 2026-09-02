import React, { useState } from 'react';
import DocsLayout from '../layouts/DocsLayout';
import { Link } from 'react-router-dom';

export default function ThemingPage() {
  const [accent, setAccent] = useState('#f97316');
  const [radius, setRadius] = useState(9);
  const [density, setDensity] = useState('Regular');
  const [previewDark, setPreviewDark] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = {
    orange: '#f97316',
    blue: '#2563eb',
    teal: '#0d9488',
    violet: '#7c3aed',
    ink: '#18181b'
  };

  const getTint = (hex) => {
    // Basic tint logic for preview purposes
    if (hex === '#18181b') return 'rgba(24,24,27,0.12)';
    if (hex === '#fafafa') return 'rgba(250,250,250,0.12)';
    let c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c = hex.substring(1).split('');
      if(c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      c = '0x' + c.join('');
      return `rgba(${(c>>16)&255},${(c>>8)&255},${c&255},0.12)`;
    }
    return `${hex}20`; 
  };

  const getStrong = (hex, dark) => {
    const pairs = {
      '#f97316': ['#c2560a', '#fb8c3a'], '#2563eb': ['#1e40af', '#60a5fa'],
      '#0d9488': ['#0f766e', '#2dd4bf'], '#7c3aed': ['#5b21b6', '#a78bfa'],
      '#18181b': ['#18181b', '#fafafa']
    };
    const p = pairs[hex.toLowerCase()];
    if (p) return dark ? p[1] : p[0];
    return hex;
  };

  const rowHeights = { Compact: 40, Regular: 52, Roomy: 64 };
  const rowHeight = rowHeights[density];

  const previewStyle = {
    '--janus-accent': accent,
    '--janus-accent-tint': getTint(accent),
    '--janus-accent-strong': getStrong(accent, previewDark),
    '--janus-radius': `${radius}px`,
    '--janus-row-height': `${rowHeight}px`,
    '--janus-bg': previewDark ? '#09090b' : '#ffffff',
    '--janus-surface': previewDark ? '#18181b' : '#f4f4f5',
    '--janus-border': previewDark ? '#27272a' : '#e4e4e7',
    '--janus-text': previewDark ? '#fafafa' : '#18181b',
    '--janus-text-secondary': previewDark ? '#a1a1aa' : '#52525b',
    '--janus-text-muted': previewDark ? '#52525b' : '#a1a1aa'
  };

  const generatedCss = `janus-timeline, janus-month {
  --janus-accent: ${accent};
  --janus-accent-tint: ${getTint(accent)};
  --janus-radius: ${radius}px;
  --janus-row-height: ${rowHeight}px;
  --janus-bg: ${previewStyle['--janus-bg']};
  --janus-surface: ${previewStyle['--janus-surface']};
  --janus-border: ${previewStyle['--janus-border']};
  --janus-text: ${previewStyle['--janus-text']};
}`;

  const copyCss = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toc = (
    <>
      <a href="#boundary">How tokens pierce the boundary</a>
      <a href="#try-it">Try it</a>
      <a href="#token-reference">Token reference</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/topics/theming" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>Topics</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Theming and design tokens</span>
      </div>
      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Theming and design tokens</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus renders inside a shadow root, so your stylesheet cannot reach its internals — deliberately. What does reach in is custom properties: they inherit through the shadow boundary like any other inherited property, and every visual decision the component makes reads one.
      </p>

      <div id="boundary" style={{ marginTop: '26px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>What pierces the boundary</span>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Inherited properties, including every <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12.5px', color: 'var(--janus-text)' }}>--custom-property</span>. Set one on <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12.5px', color: 'var(--janus-text)' }}>:root</span>, on a wrapper div, or on the element itself — the closest declaration wins, exactly as it would outside a shadow root.
          </p>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>What does not</span>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Selectors. A rule like <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12.5px', color: 'var(--janus-text)' }}>.janus .event {'{ … }'}</span> never matches anything inside the component, no matter how specific. That is the guarantee that lets us change internal markup without breaking your build.
          </p>
        </div>
      </div>

      <h2 id="try-it" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Try it</h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Change a token on the left; the miniature on the right is a real scheduler reading the same properties you would set in your own stylesheet.
      </p>

      {/* Editor Box */}
      <div style={{ marginTop: '18px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: 'var(--janus-bg)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '296px 1fr' }}>
          
          <div style={{ borderRight: '1.5px solid var(--janus-border)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '22px', background: 'var(--janus-bg)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Primary colour</span>
                <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{accent}</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {Object.values(colors).map(c => {
                  let shadowColor;
                  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(c)){
                    let h = c.substring(1).split('');
                    if(h.length === 3) h = [h[0], h[0], h[1], h[1], h[2], h[2]];
                    h = '0x' + h.join('');
                    shadowColor = `rgba(${(h>>16)&255},${(h>>8)&255},${h&255},0.32)`;
                  } else {
                    shadowColor = 'rgba(0,0,0,0.32)';
                  }
                  return (
                    <button key={c} onClick={() => setAccent(c)} style={{ width: '36px', height: '36px', borderRadius: '9px', background: c, border: 'none', cursor: 'pointer', padding: 0, boxShadow: accent === c ? `0 0 0 3px ${shadowColor}` : 'none' }} />
                  );
                })}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ position: 'relative', width: '36px', height: '36px', flex: 'none' }}>
                  <input type="color" value={accent} onChange={e => setAccent(e.target.value)} style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }} />
                  <div style={{ width: '100%', height: '100%', borderRadius: '9px', border: '1.5px solid var(--janus-border)', background: accent, pointerEvents: 'none' }} />
                </div>
                <input type="text" value={accent} onChange={e => setAccent(e.target.value)} style={{ flex: 1, minWidth: 0, height: '36px', padding: '0 10px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text)', outline: 'none' }} />
              </div>
              <span style={{ font: '400 11px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
                Sets <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px' }}>--janus-accent</span>; the tint is derived at 12% alpha and <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px' }}>--janus-accent-strong</span> ({getStrong(accent, previewDark)}) is used for text on it.
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Border radius</span>
                <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{radius}px</span>
              </div>
              <input type="range" min="0" max="20" step="1" value={radius} onChange={e => setRadius(parseInt(e.target.value))} style={{ width: '100%', accentColor: 'var(--janus-accent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span>0</span><span>9 · default</span><span>20</span></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Density</span>
              <div style={{ display: 'flex', padding: '3px', gap: '2px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', borderRadius: '9px' }}>
                {['Compact', 'Regular', 'Roomy'].map(d => (
                  <button key={d} onClick={() => setDensity(d)} style={{ flex: 1, padding: '6px 0', border: 'none', borderRadius: '6px', background: density === d ? 'var(--janus-bg)' : 'transparent', color: density === d ? 'var(--janus-text)' : 'var(--janus-text-secondary)', font: '500 12px/1 "DM Sans", sans-serif', cursor: 'pointer', boxShadow: density === d ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>
                    {d}
                  </button>
                ))}
              </div>
              <span style={{ font: '400 11px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Row height {rowHeight}px · axis label size follows.</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Appearance</span>
              <div style={{ display: 'flex', padding: '3px', gap: '2px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', borderRadius: '9px' }}>
                <button onClick={() => setPreviewDark(false)} style={{ flex: 1, padding: '6px 0', border: 'none', borderRadius: '6px', background: !previewDark ? 'var(--janus-bg)' : 'transparent', color: !previewDark ? 'var(--janus-text)' : 'var(--janus-text-secondary)', font: '500 12px/1 "DM Sans", sans-serif', cursor: 'pointer', boxShadow: !previewDark ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>Light</button>
                <button onClick={() => setPreviewDark(true)} style={{ flex: 1, padding: '6px 0', border: 'none', borderRadius: '6px', background: previewDark ? 'var(--janus-bg)' : 'transparent', color: previewDark ? 'var(--janus-text)' : 'var(--janus-text-secondary)', font: '500 12px/1 "DM Sans", sans-serif', cursor: 'pointer', boxShadow: previewDark ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}>Dark</button>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <button onClick={() => { setAccent('#f97316'); setRadius(9); setDensity('Regular'); setPreviewDark(false); }} style={{ height: '32px', padding: '0 12px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '600 12px/1 "DM Sans", sans-serif', cursor: 'pointer' }}>Reset to defaults</button>
              <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>4 of 12 tokens</span>
            </div>
          </div>

          <div style={{ padding: '20px', background: previewDark ? '#09090b' : '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            
            {/* Theming Preview Stage */}
            <div style={{ ...previewStyle, width: '100%', maxWidth: '600px', border: '1px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', color: 'var(--janus-text)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--janus-border)' }}>
                <span style={{ font: '600 13px/1 "DM Sans", sans-serif' }}>Thu 3 September</span>
                <div style={{ display: 'flex', padding: '2px', background: 'var(--janus-surface)', borderRadius: '6px' }}>
                  <span style={{ padding: '4px 10px', background: 'var(--janus-bg)', borderRadius: '4px', font: '500 11px/1 "DM Sans", sans-serif', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)' }}>Timeline</span>
                  <span style={{ padding: '4px 10px', font: '500 11px/1 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Week</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '132px 1fr' }}>
                <div style={{ borderRight: '1px solid var(--janus-border)', background: 'var(--janus-surface)' }}>
                  <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-border)', font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Resource</div>
                  <div style={{ height: 'var(--janus-row-height)', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 13px/1.2 "DM Sans", sans-serif' }}>Alex Fernando</div>
                  <div style={{ height: 'var(--janus-row-height)', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 13px/1.2 "DM Sans", sans-serif' }}>Nadeesha Perera</div>
                  <div style={{ height: 'var(--janus-row-height)', display: 'flex', alignItems: 'center', padding: '0 12px', font: '500 13px/1.2 "DM Sans", sans-serif' }}>Room A</div>
                </div>
                <div style={{ position: 'relative', overflowX: 'hidden' }}>
                  <div style={{ height: '30px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', borderBottom: '1px solid var(--janus-border)', background: 'var(--janus-surface)' }}>
                    {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'].map((t, i) => (
                      <span key={t} style={{ display: 'flex', alignItems: 'center', padding: '0 8px', font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', borderLeft: i > 0 ? '1px solid var(--janus-surface)' : 'none' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ position: 'relative', height: `calc(var(--janus-row-height) * 3)` }}>
                    {/* Grid lines */}
                    <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', pointerEvents: 'none' }}>
                      {[1,2,3,4,5,6].map(i => <span key={i} style={{ borderLeft: i > 1 ? '1px solid var(--janus-surface)' : 'none' }} />)}
                    </div>
                    {/* Row lines */}
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                      <div style={{ height: 'var(--janus-row-height)', borderBottom: '1px solid var(--janus-surface)' }} />
                      <div style={{ height: 'var(--janus-row-height)', borderBottom: '1px solid var(--janus-surface)' }} />
                    </div>
                    
                    {/* Now Line */}
                    <div style={{ position: 'absolute', left: '34%', top: 0, bottom: 0, width: '1.5px', background: 'var(--janus-accent)', zIndex: 3 }} />

                    {/* Events */}
                    <div style={{ position: 'absolute', top: '7px', left: '4%', width: '30%', height: 'calc(var(--janus-row-height) - 14px)', background: 'var(--janus-accent-tint)', borderRadius: 'var(--janus-radius)', border: '1.5px solid var(--janus-accent)', display: 'flex', alignItems: 'center', padding: '0 10px', overflow: 'hidden' }}>
                      <span style={{ font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Design sync</span>
                    </div>
                    <div style={{ position: 'absolute', top: `calc(var(--janus-row-height) + 7px)`, left: '20%', width: '34%', height: 'calc(var(--janus-row-height) - 14px)', background: 'var(--janus-accent-tint)', borderRadius: 'var(--janus-radius)', border: '1.5px solid var(--janus-accent)', display: 'flex', alignItems: 'center', padding: '0 10px', overflow: 'hidden' }}>
                      <span style={{ font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Sprint planning</span>
                    </div>
                    <div style={{ position: 'absolute', top: `calc(var(--janus-row-height) * 2 + 7px)`, left: '8%', width: '22%', height: 'calc(var(--janus-row-height) - 14px)', background: 'var(--janus-surface-off)', borderRadius: 'var(--janus-radius)', border: '1.5px solid var(--janus-border)', display: 'flex', alignItems: 'center', padding: '0 10px', overflow: 'hidden' }}>
                      <span style={{ font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Held</span>
                    </div>
                    <div style={{ position: 'absolute', top: `calc(var(--janus-row-height) * 2 + 7px)`, left: '44%', width: '34%', height: 'calc(var(--janus-row-height) - 14px)', background: 'var(--janus-accent-tint)', borderRadius: 'var(--janus-radius)', border: '1.5px solid var(--janus-accent)', display: 'flex', alignItems: 'center', padding: '0 10px', overflow: 'hidden' }}>
                      <span style={{ font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-strong)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Client workshop</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '12px 16px', borderTop: '1px solid var(--janus-border)', background: 'var(--janus-surface-off)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>3 resources · 4 events</span>
                <span style={{ padding: '4px 10px', borderRadius: '12px', background: 'var(--janus-accent-tint)', font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-strong)' }}>radius {radius}px · row {rowHeight}px</span>
              </div>
            </div>
            
          </div>
        </div>

        <div style={{ borderTop: '1.5px solid var(--janus-border)', background: '#18181b' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #27272a', background: '#09090b' }}>
            <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: '#a1a1aa' }}>Generated CSS · theme.css</span>
            <button onClick={copyCss} style={{ height: '26px', padding: '0 9px', border: '1.5px solid #27272a', borderRadius: '9px', background: 'transparent', color: '#a1a1aa', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{copied ? 'Copied!' : 'Copy'}</button>
          </div>
          <pre style={{ margin: 0, padding: '18px 20px', font: '400 13px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7', overflowX: 'auto' }}>
            <div><span style={{ color: '#7dd3fc' }}>janus-timeline</span><span style={{ color: '#a1a1aa' }}>,</span> <span style={{ color: '#7dd3fc' }}>janus-month</span> {'{'}</div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-accent</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-accent']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-accent-tint</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-accent-tint']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-radius</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-radius']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-row-height</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-row-height']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-bg</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-bg']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-surface</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-surface']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-border</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-border']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'  '}<span style={{ color: '#f97316' }}>--janus-text</span><span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>{previewStyle['--janus-text']}</span><span style={{ color: '#a1a1aa' }}>;</span></div>
            <div>{'}'}</div>
          </pre>
        </div>
      </div>
      <p style={{ marginTop: '12px', font: '400 11.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
        Scope the same block to a wrapper element to theme one calendar differently from the rest of the page.
      </p>

      {/* TOKEN REFERENCE */}
      <div id="token-reference" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '48px 0 0' }}>
        <h2 style={{ margin: 0, font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Token reference</h2>
        <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>21 tokens · 7 groups · defaults shown for light</span>
      </div>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'auto', maxHeight: '520px', scrollbarWidth: 'thin' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 168px 128px minmax(240px,1fr)', minWidth: '700px' }}>
          <span style={{ position: 'sticky', top: 0, zIndex: 3, padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Token</span>
          <span style={{ position: 'sticky', top: 0, zIndex: 3, padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Default</span>
          <span style={{ position: 'sticky', top: 0, zIndex: 3, padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Dark</span>
          <span style={{ position: 'sticky', top: 0, zIndex: 3, padding: '9px 18px 9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Applies to</span>
          
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-accent</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#f97316' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#f97316</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#f97316' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Event borders, now-line, focus ring, selection outline.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-accent-tint</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.32)' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>12% accent</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.32)' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Event fill, hover wash, drop-target row.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-accent-strong</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#c2560a' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#c2560a</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#fb8c3a' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#fb8c3a</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Text on tinted fills, pressed states.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-conflict</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#18181b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#18181b</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#fafafa', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#fafafa</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Conflict badges and blocked-drop hatching.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Surface</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-bg</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#ffffff', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#ffffff</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#09090b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#09090b</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Grid canvas behind the rows.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-surface</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#f4f4f5', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#f4f4f5</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#18181b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#18181b</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Axis header, resource gutter, toolbar.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-surface-off</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#fafafa', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#fafafa</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#0f0f11' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#0f0f11</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Non-working hours and weekend columns.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Border</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-border</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#e4e4e7</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#27272a' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#27272a</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Structural rules, gutter divider, outer edge.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-border-hairline</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#f4f4f5', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#f4f4f5</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#18181b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#18181b</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Row and column lines inside the grid.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-border-width</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>1.5px</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Interactive containers only; hairlines stay at 1px.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Text</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-text</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#18181b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#18181b</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#fafafa', border: '1px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#fafafa</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Resource names and event titles.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-text-secondary</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#52525b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#52525b</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#a1a1aa' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#a1a1aa</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Times inside blocks, secondary resource lines.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-text-muted</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#a1a1aa' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#a1a1aa</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#52525b' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>#52525b</span></span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Axis labels and empty-state copy.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Typography</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-font</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>inherit</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>All UI text. Inherits your page font by default.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-font-mono</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>ui-monospace</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Times, axis labels, numeric badges.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-font-size</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>13px</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Base size; everything else is a ratio of it.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Geometry</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-radius</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '9px', background: '#f4f4f5', border: '1.5px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>9px</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Event blocks and in-grid controls.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-radius-panel</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '14px', background: '#f4f4f5', border: '1.5px solid #e4e4e7' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>14px</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Outer shell, popovers, conflict dialog.</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-row-height</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>52px</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Row pitch. Under 32px the secondary line is hidden.</span>

          <span style={{ gridColumn: '1/-1', padding: '8px 18px', background: 'var(--janus-surface-off)', borderTop: '1px solid var(--janus-border)', borderBottom: '1px solid var(--janus-border)', font: '600 10px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>Elevation</span>
          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-shadow</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', flex: 'none', borderRadius: '5px', background: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}></span><span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0 4px 20px</span></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Dragged blocks, popovers, dialogs.</span>

          <span style={{ padding: '10px 18px', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>--janus-shadow-none</code></span>
          <span style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>none</span>
          <span style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>same</span>
          <span style={{ padding: '10px 18px 10px 12px', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Set to <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>--janus-shadow</span> to flatten the component entirely.</span>

        </div>
      </div>

      <div style={{ marginTop: '26px', border: '1.5px dashed var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '5px', height: '5px', background: 'var(--janus-text)' }}></span>
          <span style={{ font: '700 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--janus-text)' }}>Limitation</span>
        </div>
        <p style={{ margin: 0, maxWidth: '78ch', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
          Global stylesheets do not leak into the shadow root. Tailwind classes, CSS resets, utility frameworks and your own <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px' }}>.event {'{ … }'}</span> rules have no effect on anything Janus renders — only the tokens above do. If you need a visual change no token covers, use a slot or the <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px' }}>renderEvent</span> hook rather than reaching in; we will not add <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px' }}>::part</span> for every internal node, because that would freeze the internal DOM as public API.
        </p>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/events" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Events</span>
        </Link>
        <Link to="/docs/topics/nlp" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Natural language</span>
        </Link>
      </div>
    </DocsLayout>
  );
}
