import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import { Link } from 'react-router-dom';

export default function TypesPage() {
  const toc = (
    <>
      <a href="#overview" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Overview</a>
      <a href="#event-types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Event Types</a>
      <a href="#resource-types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Resource Types</a>
      <a href="#interaction-details" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Interaction &amp; Event Details</a>
      <a href="#enums" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Unions &amp; Enums</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/types" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Types</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>TypeScript Definitions</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Complete reference for all TypeScript interfaces, object schemas, and utility types exported by <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/core</code> and framework wrapper packages.
      </p>

      {/* ── OVERVIEW ─────────────────────────── */}
      <h2 id="overview" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Importing Types</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  SchedulerSaveData,\n  ViewType,\n  EventColor,\n  SchedulerHooks,\n} from "@janus-scheduler/core" // or from @janus-scheduler/react, /angular, /solid`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent, TimelineResource,</div>
          <div>  EventMoveDetail, EventResizeDetail,</div>
          <div>  SchedulerSaveData, ViewType, EventColor,</div>
          <div>  SchedulerHooks,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
        </CodeBlock>
      </div>

      {/* ── EVENT TYPES ─────────────────────────── */}
      <h2 id="event-types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Event Interfaces</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Interface</TH><TH>Shape Summary</TH><TH>Usage</TH>
          <TR3 c1="TimelineEvent" c2="{ id: string; title: string; startTime: string; endTime: string; ... }" c3="Standard rendered event object across timeline & views." />
          <TR3 c1="EventData" c2="{ id?: string; title: string; startTime: string; endTime: string; ... }" c3="Input shape passed to manager.addEvent() and store." />
          <TR3 c1="MonthEvent" c2="TimelineEvent & { date: string; isMultiDay?: boolean; ... }" c3="Specialized shape for monthly calendar cells." />
          <TR3 c1="EventDraft" c2="{ id: string | null; title: string; startDate: string; ... }" c3="In-progress form state inside <janus-scheduler>." isLast />
        </div>
      </div>

      {/* ── RESOURCE TYPES ─────────────────────────── */}
      <h2 id="resource-types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Resource &amp; Assignment Interfaces</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Interface</TH><TH>Shape Summary</TH><TH>Usage</TH>
          <TR3 c1="TimelineResource" c2="{ id: string; name: string; type?: string; avatar?: string }" c3="Row representation for people, rooms, and equipment." />
          <TR3 c1="ResourceData" c2="{ id?: string; name: string; type?: string }" c3="Creation payload for manager.addResource()." />
          <TR3 c1="AssignmentData" c2="{ id?: string; eventId: string; resourceId: string }" c3="Joins an event to a resource row." isLast />
        </div>
      </div>

      {/* ── INTERACTION DETAILS ─────────────────────────── */}
      <h2 id="interaction-details" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Interaction &amp; Event Payloads</h2>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Payload Type</TH><TH>Key Fields</TH><TH>Dispatched By</TH>
          <TR3 c1="EventMoveDetail" c2="{ event: TimelineEvent; newStartTime: string; newEndTime: string; newResourceId?: string }" c3="event-move (Drag-and-drop)" />
          <TR3 c1="EventResizeDetail" c2="{ event: TimelineEvent; newStartTime: string; newEndTime: string; edge: 'start' | 'end' }" c3="event-resize (Drag edge)" />
          <TR3 c1="EventCreateDetail" c2="{ resourceId: string; startTime: string; endTime: string }" c3="event-create (Grid click-drag)" />
          <TR3 c1="SchedulerSaveData" c2="{ id?: string; title: string; startDate: string; startTime: string; ... }" c3="save (<janus-scheduler>)" />
          <TR3 c1="SchedulerDeleteData" c2="{ id: string }" c3="delete (<janus-scheduler>)" isLast />
        </div>
      </div>

      {/* ── ENUMS ─────────────────────────── */}
      <h2 id="enums" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Unions &amp; Enums</h2>
      
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="unions.ts" codeString={`export type ViewType = "Timeline" | "Month" | "Day" | "Week" | "Year"\n\nexport type EventColor =\n  | "primary"\n  | "orange"\n  | "blue"\n  | "green"\n  | "yellow"\n  | "purple"\n  | "red"\n  | "pink"\n  | "indigo"\n  | "cyan"\n  | "teal"`}>
          <div><span style={{ color: '#f97316' }}>export type</span> <span style={{ color: '#7dd3fc' }}>ViewType</span> <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#a3e635' }}>"Timeline"</span> | <span style={{ color: '#a3e635' }}>"Month"</span> | <span style={{ color: '#a3e635' }}>"Day"</span> | <span style={{ color: '#a3e635' }}>"Week"</span> | <span style={{ color: '#a3e635' }}>"Year"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export type</span> <span style={{ color: '#7dd3fc' }}>EventColor</span> <span style={{ color: '#a1a1aa' }}>=</span></div>
          <div>  | <span style={{ color: '#a3e635' }}>"primary"</span> | <span style={{ color: '#a3e635' }}>"orange"</span> | <span style={{ color: '#a3e635' }}>"blue"</span> | <span style={{ color: '#a3e635' }}>"green"</span></div>
          <div>  | <span style={{ color: '#a3e635' }}>"yellow"</span> | <span style={{ color: '#a3e635' }}>"purple"</span> | <span style={{ color: '#a3e635' }}>"red"</span> | <span style={{ color: '#a3e635' }}>"pink"</span> ...</div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/store" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Store</span>
        </Link>
        <Link to="/docs/api/utilities" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>Utilities</span>
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
