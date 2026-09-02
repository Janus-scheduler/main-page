import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export default function UtilitiesPage() {
  const toc = (
    <>
      <a href="#timezone-utils" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Timezone &amp; Date</a>
      <a href="#recurrence-utils" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Recurrence Expansion</a>
      <a href="#conflict-utils" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Conflict Computation</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/utilities" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Utilities</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Core Utilities</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Standalone helper functions exported by <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/core</code> for timezone conversions, date arithmetic, conflict detection, and recurrence rule evaluation.
      </p>

      {/* ── TIMEZONE UTILS ─────────────────────────── */}
      <h2 id="timezone-utils" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Timezone &amp; Date Helpers</h2>
      
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="time.ts" codeString={`import {\n  getBrowserTimezone,\n  isoToZonedDisplay,\n  zonedInputToISO,\n  formatTimezoneLabel,\n} from "@janus-scheduler/core"\n\n// 1. Detect browser timezone\nconst tz = getBrowserTimezone() // "America/New_York"\n\n// 2. Format ISO timestamp for display\nconst display = isoToZonedDisplay("2026-09-04T14:30:00.000Z", tz)\nconsole.log(display) // { date: "2026-09-04", time: "10:30" }\n\n// 3. Convert user form input back to UTC ISO\nconst iso = zonedInputToISO("2026-09-04", "10:30", tz)\nconsole.log(iso) // "2026-09-04T14:30:00.000Z"`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ getBrowserTimezone, isoToZonedDisplay, zonedInputToISO }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> tz <span style={{ color: '#a1a1aa' }}>=</span> getBrowserTimezone() <span style={{ color: '#52525b' }}>// "America/New_York"</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> display <span style={{ color: '#a1a1aa' }}>=</span> isoToZonedDisplay(<span style={{ color: '#a3e635' }}>"2026-09-04T14:30:00Z"</span>, tz)</div>
          <div><span style={{ color: '#f97316' }}>const</span> iso <span style={{ color: '#a1a1aa' }}>=</span> zonedInputToISO(<span style={{ color: '#a3e635' }}>"2026-09-04"</span>, <span style={{ color: '#a3e635' }}>"10:30"</span>, tz)</div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Function</TH><TH>Signature</TH><TH>Description</TH>
          <TR3 c1="getBrowserTimezone()" c2="() => string" c3="Returns current browser IANA timezone (e.g., 'Asia/Colombo')." />
          <TR3 c1="isoToZonedDisplay(iso, tz)" c2="(iso: string, tz: string) => { date, time }" c3="Converts UTC ISO string into localized date & time components." />
          <TR3 c1="zonedInputToISO(date, time, tz)" c2="(date: string, time: string, tz: string) => string" c3="Takes local date/time form inputs and returns a UTC ISO string." />
          <TR3 c1="formatTimezoneLabel(tz)" c2="(tz: string) => string" c3="Produces labels like 'New York (GMT-4:00)'." />
          <TR3 c1="getAllTimezones()" c2="() => string[]" c3="Returns full list of supported IANA timezone strings." isLast />
        </div>
      </div>

      {/* ── RECURRENCE UTILS ─────────────────────────── */}
      <h2 id="recurrence-utils" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Recurrence Expansion</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>expandEvents</code> evaluates RFC 5545 recurrence rules (<code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR</code>) and generates concrete event instances within the visible viewport:
      </p>

      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="recurrence.ts" codeString={`import { expandEvents } from "@janus-scheduler/core"\n\nconst visibleEvents = expandEvents(\n  rawEvents,\n  new Date("2026-09-01").getTime(),\n  new Date("2026-09-30").getTime()\n)`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ expandEvents }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> visibleEvents <span style={{ color: '#a1a1aa' }}>=</span> expandEvents(rawEvents, startMs, endMs)</div>
        </CodeBlock>
      </div>

      {/* ── CONFLICT UTILS ─────────────────────────── */}
      <h2 id="conflict-utils" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Conflict Detection</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Function</TH><TH>Signature</TH><TH>Description</TH>
          <TR3 c1="computeTimelineConflicts()" c2="(events, assignments) => Set<string>" c3="Identifies all event IDs overlapping within the same resource row." />
          <TR3 c1="checkSlotConflict()" c2="(draft, events, assignments) => boolean" c3="Validates if a drag-move or resize creates an overlap." />
          <TR3 c1="checkDraftConflict()" c2="(draft, events, assignments) => ConflictReport" c3="Generates detailed conflict warning report for modal editor." isLast />
        </div>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/types" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Types Reference</span>
        </Link>
        <Link to="/docs/api/events" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>Events Matrix</span>
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
