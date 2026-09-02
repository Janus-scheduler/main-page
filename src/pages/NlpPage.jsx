import React, { useState } from 'react';
import DocsLayout from '../layouts/DocsLayout';
import { Link } from 'react-router-dom';

export default function NlpPage() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState(null);
  const [copied, setCopied] = useState(false);

  const data = [
    {
      sentence: 'Schedule a design sync with Alex tomorrow at 10am in Room A',
      intent: 'create_event', conf: 0.97, ms: '0.7 ms',
      note: 'Clear lexical match against the create prototypes; no competing intent above 0.2.',
      ents: [['date', '2026-08-30', 165], ['time', '10:00', 55], ['duration', '60 min', 30], ['participant', 'alex.f', 240], ['location', 'room-a', 300]],
      json: [['title', '"Design sync"', 'str'], ['start', '"2026-08-30T04:30:00Z"', 'str'], ['end', '"2026-08-30T05:30:00Z"', 'str'], ['resourceIds', '["alex.f", "room-a"]', 'str'], ['allDay', 'false', 'kw'], ['source', '"nlp"', 'str'], ['confidence', '0.97', 'num']],
      tz: 'display zone Asia/Colombo'
    },
    {
      sentence: 'Move the sprint review to Friday afternoon',
      intent: 'move_event', conf: 0.89, ms: '0.6 ms',
      note: 'Referent "sprint review" matched one existing event; ambiguity would be surfaced instead.',
      ents: [['date', '2026-09-04', 165], ['time', '14:00 (afternoon)', 55]],
      json: [['eventId', '"evt_8123"', 'str'], ['start', '"2026-09-04T08:30:00Z"', 'str'], ['end', '"2026-09-04T09:30:00Z"', 'str'], ['keepDuration', 'true', 'kw'], ['source', '"nlp"', 'str'], ['confidence', '0.89', 'num']],
      tz: 'duration preserved from source event'
    },
    {
      sentence: 'Book Room B for two hours on Monday morning',
      intent: 'book_resource', conf: 0.94, ms: '0.9 ms',
      note: 'Resource-first phrasing; participant defaults to the current user.',
      ents: [['date', '2026-08-31', 165], ['time', '09:00 (morning)', 55], ['duration', '120 min', 30], ['location', 'room-b', 300]],
      json: [['title', '"Room B booking"', 'str'], ['start', '"2026-08-31T03:30:00Z"', 'str'], ['end', '"2026-08-31T05:30:00Z"', 'str'], ['resourceIds', '["room-b", "me"]', 'str'], ['allDay', 'false', 'kw'], ['source', '"nlp"', 'str'], ['confidence', '0.94', 'num']],
      tz: 'morning window from locale profile'
    }
  ];

  const current = data[i] || data[0];
  const displayedSentence = typed !== null ? typed : current.sentence;
  const intentNote = typed !== null && typed !== current.sentence 
    ? 'Showing the last parsed phrase — press Parse to run your own sentence.' 
    : current.note;

  const valColour = { str: '#a3e635', num: '#7dd3fc', kw: '#f97316' };
  const jsonText = '{\n' + current.json.map(r => '  "' + r[0] + '": ' + r[1]).join(',\n') + '\n}';

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const getChipStyle = (index) => {
    const isActive = typed === null && i === index;
    return {
      padding: '6px 11px',
      borderRadius: '999px',
      cursor: 'pointer',
      font: '500 11.5px/1.35 "JetBrains Mono", monospace',
      background: isActive ? 'var(--janus-text)' : 'var(--janus-bg)',
      color: isActive ? 'var(--janus-bg)' : 'var(--janus-text-secondary)',
      border: isActive ? '1.5px solid var(--janus-text)' : '1.5px solid var(--janus-border)'
    };
  };

  const toc = (
    <>
      <a href="#privacy">Privacy</a>
      <a href="#try-it">Try it</a>
      <a href="#how-it-works">How it works</a>
      <a href="#supported-intents">Supported intents</a>
      <a href="#entity-types">Entity types</a>
      <a href="#accuracy">Accuracy</a>
      <a href="#limitation">Limitation</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/topics/nlp" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>Topics</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Natural language scheduling</span>
      </div>
      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em' }}>Natural language scheduling</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        A sentence goes in; a structured event comes out. The parser is a small grammar plus static token embeddings and a nearest-neighbour classifier — no large language model, no server, and no surprises about where the text goes.
      </p>

      {/* PRIVACY */}
      <div id="privacy" style={{ marginTop: '22px', background: 'var(--janus-surface)', borderRadius: '14px', padding: '20px 22px', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '700 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--janus-accent)' }}></span>Privacy
          </span>
          <span style={{ font: '600 19px/1.35 "DM Sans", sans-serif', color: 'var(--janus-text)', letterSpacing: '-0.015em' }}>
            All inference runs locally in the browser. No network request is made.
          </span>
          <span style={{ font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            The language artefact is fetched once from your own origin, then cached. Nothing you type is transmitted, logged or retained — there is no endpoint to send it to.
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flex: 'none' }}>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>0 requests</span>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>no API key</span>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>works offline</span>
        </div>
      </div>

      {/* TRY IT */}
      <h2 id="try-it" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Try it</h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Pick a phrase, or type your own. The three stages below are the parser's actual output shape.
      </p>

      <div style={{ marginTop: '18px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '18px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px 10px 16px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)' }}>
          <span style={{ font: '400 15px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✦</span>
          <input type="text" value={displayedSentence} onChange={e => setTyped(e.target.value)} placeholder="Try 'Schedule a design sync with Alex tomorrow at 10am in Room A'" style={{ flex: 1, minWidth: 0, height: '32px', border: 0, background: 'transparent', outline: 'none', font: '400 14.5px/1 "DM Sans", sans-serif', color: 'var(--janus-text)' }} />
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{current.ms}</span>
          <button style={{ height: '34px', padding: '0 16px', border: 0, borderRadius: '9px', background: 'var(--janus-accent)', color: '#ffffff', font: '600 13.5px/1 "DM Sans", sans-serif', cursor: 'pointer' }}>Parse</button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '12px' }}>
          <span onClick={() => { setI(0); setTyped(null); }} style={getChipStyle(0)}>{data[0].sentence}</span>
          <span onClick={() => { setI(1); setTyped(null); }} style={getChipStyle(1)}>{data[1].sentence}</span>
          <span onClick={() => { setI(2); setTyped(null); }} style={getChipStyle(2)}>{data[2].sentence}</span>
        </div>

        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Stage 1 · intent</span>
                <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>k = 5 neighbours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                <code style={{ font: '600 17px/1.2 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{current.intent}</code>
                <span style={{ padding: '2px 7px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-content)', font: '600 10px/1.4 "JetBrains Mono", monospace' }}>confidence {current.conf.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ height: '8px', borderRadius: '999px', background: 'var(--janus-surface)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.round(current.conf * 100)}%`, borderRadius: '999px', background: 'var(--janus-accent)' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span>0.0</span><span>floor 0.62</span><span>1.0</span></div>
              </div>
              <span style={{ font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{intentNote}</span>
            </div>

            <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Stage 2 · entities</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {current.ents.map((ent, idx) => (
                  <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 9px', borderRadius: '9px', background: 'var(--janus-bg)', border: `1.5px solid oklch(0.62 0.12 ${ent[2]})`, font: '500 12px/1.35 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>
                    <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: `oklch(0.5 0.1 ${ent[2]})` }}>{ent[0]}</span>
                    {ent[1]}
                  </span>
                ))}
              </div>
              <div style={{ paddingTop: '10px', borderTop: '1px solid var(--janus-surface)', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: 'oklch(0.62 0.12 165)' }}></span>date</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: 'oklch(0.66 0.13 55)' }}></span>time</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: 'oklch(0.62 0.12 30)' }}></span>duration</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: 'oklch(0.62 0.12 240)' }}></span>participant</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: 'oklch(0.62 0.12 300)' }}></span>location</span>
              </div>
            </div>
          </div>

          <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1.5px solid #27272a', background: '#18181b', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #27272a', background: '#09090b' }}>
              <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a1a1aa' }}>Stage 3 · resulting event</span>
              <button onClick={handleCopy} style={{ height: '26px', padding: '0 9px', border: '1.5px solid #27272a', borderRadius: '9px', background: 'transparent', color: '#a1a1aa', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer' }}>{copied ? 'Copied' : 'Copy JSON'}</button>
            </div>
            <pre style={{ margin: 0, padding: '16px 18px', font: '400 12.5px/1.85 "JetBrains Mono", monospace', color: '#e4e4e7', flex: 1 }}>
              <div>{'{'}</div>
              {current.json.map((r, n) => (
                <div key={n}>  <span style={{ color: '#7dd3fc' }}>"{r[0]}"</span><span style={{ color: '#a1a1aa' }}>: </span><span style={{ color: valColour[r[2]] }}>{r[1]}</span><span style={{ color: '#a1a1aa' }}>{n === current.json.length - 1 ? '' : ','}</span></div>
              ))}
              <div>{'}'}</div>
            </pre>
            <div style={{ padding: '10px 14px', borderTop: '1px solid #27272a', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>unresolved fields fall back to defaults</span>
              <span style={{ font: '400 10.5px/1 "JetBrains Mono", monospace', color: '#52525b' }}>{current.tz}</span>
            </div>
          </div>
        </div>
      </div>

      {/* PIPELINE */}
      <h2 id="how-it-works" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>How it works</h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Five stages, all synchronous, all in the main bundle apart from the embedding table.
      </p>
      <div style={{ marginTop: '18px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '24px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 34px 1fr 34px 1fr 34px 1fr 34px 1fr', alignItems: 'stretch', minWidth: '800px' }}>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>01</span>
            <span style={{ font: '600 13.5px/1.25 "DM Sans", sans-serif' }}>Text input</span>
            <p style={{ margin: 0, font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Raw string from the prompt bar or your own call.</p>
            <span style={{ font: '400 10px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>parse(input, ctx)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>02</span>
            <span style={{ font: '600 13.5px/1.25 "DM Sans", sans-serif' }}>Normalisation</span>
            <p style={{ margin: 0, font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Case folding, contraction expansion, British and American spellings unified.</p>
            <span style={{ font: '400 10px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>≈ 40 rules</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>03</span>
            <span style={{ font: '600 13.5px/1.25 "DM Sans", sans-serif' }}>Static token embeddings</span>
            <p style={{ margin: 0, font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Each token looked up in a quantised 64-dimension table; mean-pooled.</p>
            <span style={{ font: '400 10px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>38 kB · int8</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
          <div style={{ border: '1.5px solid var(--janus-accent)', borderRadius: '14px', background: 'var(--janus-accent-tint)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-accent)' }}>04</span>
            <span style={{ font: '600 13.5px/1.25 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Nearest-neighbour classification</span>
            <p style={{ margin: 0, font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Cosine distance against 240 labelled prototypes; k = 5, distance-weighted.</p>
            <span style={{ font: '400 10px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>→ intent + confidence</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            <span style={{ font: '500 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>05</span>
            <span style={{ font: '600 13.5px/1.25 "DM Sans", sans-serif' }}>Entity resolution</span>
            <p style={{ margin: 0, font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Grammar spans resolved against your resource list, locale and display zone.</p>
            <span style={{ font: '400 10px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>→ JanusEvent</span>
          </div>
        </div>
        <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--janus-border)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>stages 02 – 05 are pure functions · no shared mutable state</span>
          <span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>median total 0.8 ms</span>
        </div>
      </div>

      {/* INTENTS TABLE */}
      <h2 id="supported-intents" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Supported intents</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px minmax(240px,1fr) 190px 96px', minWidth: '700px' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Intent</span>
          <span style={{ padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Example phrase</span>
          <span style={{ padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Emits</span>
          <span style={{ padding: '9px 18px 9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Floor</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>create_event</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"Schedule a design sync with Alex tomorrow at 10am"</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>event-create</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.62</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>move_event</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"Move the sprint review to Friday afternoon"</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>event-drop</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.68</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>book_resource</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"Book Room B for two hours on Monday morning"</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>event-create</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.62</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>cancel_event</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"Cancel Thursday's stand-up"</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>event-remove</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.74</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>block_time</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"Block out Friday for deep work"</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>event-create</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.66</span>

          <span style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>query_availability</code>
            <span style={{ padding: '2px 6px', borderRadius: '999px', background: 'var(--janus-text)', color: 'var(--janus-bg)', font: '700 9px/1.3 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>rc</span>
          </span>
          <span style={{ padding: '10px 12px', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>"When is Room A free on Wednesday?"</span>
          <span style={{ padding: '10px 12px', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>availability-query</span>
          <span style={{ padding: '10px 18px 10px 12px', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>0.80</span>
        </div>
      </div>
      <span style={{ display: 'block', marginTop: '9px', font: '400 11.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
        Below the floor the parser returns <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11.5px' }}>{`{ intent: null }`}</span> rather than guessing — render your own form in that case.
      </span>

      {/* ENTITY TABLE */}
      <h2 id="entity-types" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Entity types</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '150px minmax(240px,1fr) 200px 170px', minWidth: '700px' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Recognised forms</span>
          <span style={{ padding: '9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Resolves to</span>
          <span style={{ padding: '9px 18px 9px 12px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>If absent</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: 'oklch(0.62 0.12 165)' }}></span><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>date</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>tomorrow · next Tuesday · 3 Sept · 03/09 · in two weeks</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>ISO date</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>today</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: 'oklch(0.66 0.13 55)' }}></span><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>time</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>10am · 14:30 · half past two · morning · after lunch</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>UTC instant</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>next free slot</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: 'oklch(0.62 0.12 30)' }}></span><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>duration</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>for an hour · 90 minutes · all day · 10 – 11</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>minutes</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>60</span>

          <span style={{ padding: '10px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: 'oklch(0.62 0.12 240)' }}></span><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>participant</code></span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>with Alex · me and Nadeesha · the design team</span>
          <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>resource id</span>
          <span style={{ padding: '10px 18px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>current user</span>

          <span style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '10px', height: '10px', flex: 'none', borderRadius: '3px', background: 'oklch(0.62 0.12 300)' }}></span><code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>location</code></span>
          <span style={{ padding: '10px 12px', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>in Room A · at the studio · on Zoom</span>
          <span style={{ padding: '10px 12px', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>resource id or string</span>
          <span style={{ padding: '10px 18px 10px 12px', font: '400 12px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>null</span>
        </div>
      </div>

      {/* METRICS */}
      <h2 id="accuracy" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Accuracy</h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Measured on a held-out set of 1,000 hand-labelled British-English scheduling sentences. The suite is in the repository.
      </p>
      <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ font: '700 34px/1 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>96.4<span style={{ fontSize: '17px', color: 'var(--janus-accent)' }}>%</span></span>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif' }}>Intent accuracy</span>
          <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>top-1, above the floor</span>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ font: '700 34px/1 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>0.93</span>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif' }}>Entity F1</span>
          <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>macro-averaged, five types</span>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ font: '700 34px/1 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>0.8<span style={{ fontSize: '17px', color: 'var(--janus-accent)' }}> ms</span></span>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif' }}>Median parse</span>
          <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>p95 2.1 ms · M2 Air</span>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ font: '700 34px/1 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>38<span style={{ fontSize: '17px', color: 'var(--janus-accent)' }}> kB</span></span>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif' }}>Model artefact</span>
          <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>gzip · lazy-loaded once</span>
        </div>
      </div>

      <div id="limitation" style={{ marginTop: '28px', border: '1.5px dashed var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '5px', height: '5px', background: 'var(--janus-text)' }}></span>
          <span style={{ font: '700 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--janus-text)' }}>Limitation</span>
        </div>
        <p style={{ margin: 0, maxWidth: '78ch', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
          This is a small classifier, not a language model, and its scope is deliberately narrow:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· British English only. No other locale ships an artefact.</span>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· One intent per sentence. Compound requests are rejected, not split.</span>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· No recurrence parsing — "every Tuesday" is ignored, by design.</span>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· No conversational memory. Each call is independent.</span>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· Participants resolve only against the resource list you supply.</span>
          <span style={{ font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>· Ambiguity is surfaced, never guessed: confirm before you commit.</span>
        </div>
        <p style={{ margin: '4px 0 0', maxWidth: '78ch', font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
          If you need free-form conversation, send the same string to a model of your choice and hand us the structured result — the parser is one implementation of a documented interface, not a requirement.
        </p>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/topics/theming" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Theming and design tokens</span>
        </Link>
        <Link to="/docs/topics/google-calendar-sync" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Google Calendar sync</span>
        </Link>
      </div>
    </DocsLayout>
  );
}
