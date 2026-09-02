import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export default function EventsPage() {
  const toc = (
    <>
      <a href="#overview" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Overview</a>
      <a href="#timeline-events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>&lt;janus-timeline&gt;</a>
      <a href="#month-events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>&lt;janus-month-grid&gt;</a>
      <a href="#prompt-events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>&lt;janus-prompt&gt;</a>
      <a href="#scheduler-events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>&lt;janus-event&gt;</a>
      <a href="#listening-examples" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Listening Across Frameworks</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/events" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Events</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Custom Events Matrix</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Web Components communicate state changes upwards by dispatching native standard <code style={{ font: '600 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>CustomEvent</code> objects. All events are configured with <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>bubbles: true</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>composed: true</code> to seamlessly cross shadow DOM boundaries.
      </p>

      {/* ── TIMELINE EVENTS ─────────────────────────── */}
      <h2 id="timeline-events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>&lt;janus-timeline&gt; Events</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Event Name</TH><TH>Detail Payload</TH><TH>When Dispatched</TH>
          <TR3 c1="event-click" c2="TimelineEvent" c3="User clicks an event bar in the timeline." />
          <TR3 c1="event-move" c2="EventMoveDetail" c3="Drag-and-drop movement finishes." />
          <TR3 c1="event-resize" c2="EventResizeDetail" c3="Drag resize handle movement finishes." />
          <TR3 c1="event-create" c2="EventCreateDetail" c3="User click-drags on an empty slot to create." />
          <TR3 c1="add-event" c2="void" c3="Floating action button (+) is clicked." />
          <TR3 c1="view-change" c2="{ view: ViewType }" c3="View selector toggles (e.g. to Month or Day)." />
          <TR3 c1="conflict-detected" c2="{ conflicts: ConflictDetail[] }" c3="Drag operation violates collision rules." isLast />
        </div>
      </div>

      {/* ── MONTH EVENTS ─────────────────────────── */}
      <h2 id="month-events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>&lt;janus-month-grid&gt; Events</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Event Name</TH><TH>Detail Payload</TH><TH>When Dispatched</TH>
          <TR3 c1="event-click" c2="MonthEvent" c3="User clicks an event pill in the calendar grid." />
          <TR3 c1="day-click" c2="{ date: string }" c3="User clicks a calendar day cell." />
          <TR3 c1="add-event" c2="void" c3="Floating action button (+) is clicked." />
          <TR3 c1="nav-change" c2="{ navLabel: string }" c3="User navigates next/prev month or clicks Today." isLast />
        </div>
      </div>

      {/* ── PROMPT EVENTS ─────────────────────────── */}
      <h2 id="prompt-events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>&lt;janus-prompt&gt; Events</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Event Name</TH><TH>Detail Payload</TH><TH>When Dispatched</TH>
          <TR3 c1="ai-submit" c2="{ prompt: string }" c3="User clicks submit or presses Enter." />
          <TR3 c1="ai-input" c2="{ prompt: string }" c3="Fires on each character change." />
          <TR3 c1="prompt-parse" c2="{ draft: EventDraft }" c3="NLP parser resolves input into structured draft." />
          <TR3 c1="prompt-error" c2="{ message: string }" c3="Parsing or validation fails." isLast />
        </div>
      </div>

      {/* ── SCHEDULER EVENTS ─────────────────────────── */}
      <h2 id="scheduler-events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>&lt;janus-event&gt; Events</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Event Name</TH><TH>Detail Payload</TH><TH>When Dispatched</TH>
          <TR3 c1="save" c2="SchedulerSaveData" c3="User saves valid event form." />
          <TR3 c1="delete" c2="SchedulerDeleteData" c3="User confirms event deletion." />
          <TR3 c1="close" c2="void" c3="User closes modal via cancel or backdrop click." isLast />
        </div>
      </div>

      {/* ── LISTENING EXAMPLES ─────────────────────────── */}
      <h2 id="listening-examples" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Listening Across Frameworks</h2>
      
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`// 1. React (@janus-scheduler/react automatically unwraps detail)\n<Timeline onEventMove={(detail) => console.log(detail.event)} />\n\n// 2. Vue\n<janus-timeline @event-move="(e) => console.log(e.detail.event)" />\n\n// 3. Angular (@janus-scheduler/angular signal output)\n<janus-timeline-ng (eventMove)="onEventMove($event)" />\n\n// 4. Solid\n<Timeline onEventMove={(detail) => console.log(detail.event)} />`}>
          <div><span style={{ color: '#52525b' }}>// 1. React (@janus-scheduler/react automatically unwraps detail)</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> onEventMove<span style={{ color: '#a1a1aa' }}>=</span>{'(detail) => console.log(detail.event)'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 2. Vue</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline</span> @event-move<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>{'"(e) => console.log(e.detail.event)"'}</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 3. Angular (@janus-scheduler/angular signal output)</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline-ng</span> (eventMove)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>{'"onEventMove($event)"'}</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/utilities" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Utilities</span>
        </Link>
        <Link to="/docs/topics/theming" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Theming Guide</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

function TH({ children }) {
  return <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>{children}</span>;
}

function TR3({ c1, c2, c3, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (<>
    <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
    <span style={{ padding: '10px 14px', font: '400 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
    <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c3}</span>
  </>);
}
