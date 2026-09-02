import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import { Link } from 'react-router-dom';

export default function StorePage() {
  const toc = (
    <>
      <a href="#overview" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Overview</a>
      <a href="#state-schema" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>State Schema</a>
      <a href="#actions" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Store Actions</a>
      <a href="#direct-access" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Direct Access &amp; Subscriptions</a>
      <a href="#draft-persistence" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Draft Persistence</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/store" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Store</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Store (Zustand)</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        <code style={{ font: '600 14px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>schedulerStore</code> is the centralized reactive state store powered by Zustand. It holds all calendar data, manages display timezones, coordinates event drafts, and synchronizes real-time updates across every visible component without framework lock-in.
      </p>

      {/* ── OVERVIEW ─────────────────────────── */}
      <h2 id="overview" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Importing the Store</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="store-example.ts" codeString={`import { schedulerStore } from "@janus-scheduler/core"\n\n// 1. Read current snapshot\nconst { events, timezone } = schedulerStore.getState()\n\n// 2. Subscribe to reactive changes\nconst unsubscribe = schedulerStore.subscribe((state) => {\n  console.log("Total events:", Object.keys(state.events).length)\n})\n\n// 3. Mutate state directly\nschedulerStore.getState().setTimezone("America/New_York")`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ schedulerStore }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 1. Read current snapshot</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> {'{ events, timezone }'} <span style={{ color: '#a1a1aa' }}>=</span> schedulerStore.getState()</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 2. Subscribe to reactive changes</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> unsubscribe <span style={{ color: '#a1a1aa' }}>=</span> schedulerStore.subscribe((state) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>  console.log(<span style={{ color: '#a3e635' }}>"Total events:"</span>, Object.keys(state.events).length)</div>
          <div>{'}'})</div>
        </CodeBlock>
      </div>

      {/* ── STATE SCHEMA ─────────────────────────── */}
      <h2 id="state-schema" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerState Interface</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 2fr' }}>
          <TH>Property</TH><TH>Type</TH><TH>Description</TH>
          <TR3 c1="events" c2="Record<string, Event>" c3="Dictionary of all domain Event instances indexed by ID." />
          <TR3 c1="resources" c2="Record<string, Resource>" c3="Dictionary of resource rows (people, rooms, vehicles)." />
          <TR3 c1="assignments" c2="Record<string, Assignment>" c3="Map of joins connecting event IDs to resource IDs." />
          <TR3 c1="timezone" c2="string" c3="Active IANA timezone string for display and formatting." />
          <TR3 c1="eventDraft" c2="EventDraft | null" c3="Current active modal form draft data, if any." isLast />
        </div>
      </div>

      {/* ── ACTIONS ─────────────────────────── */}
      <h2 id="actions" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerActions</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.6fr 2fr' }}>
          <TH>Action</TH><TH>Arguments</TH><TH>Behavior</TH>
          <TR3 c1="addEvent(data)" c2="EventData" c3="Instantiates domain Event and adds to store." />
          <TR3 c1="updateEvent(id, updates)" c2="string, Partial<EventData>" c3="Merges partial updates into target event." />
          <TR3 c1="deleteEvent(id)" c2="string" c3="Removes target event and all associated assignments." />
          <TR3 c1="addResource(data)" c2="ResourceData" c3="Registers a new Resource instance." />
          <TR3 c1="updateResource(id, updates)" c2="string, Partial<ResourceData>" c3="Updates resource name or custom properties." />
          <TR3 c1="deleteResource(id)" c2="string" c3="Removes a resource row." />
          <TR3 c1="setTimezone(timezone)" c2="string" c3="Triggers re-render across all views in new timezone." />
          <TR3 c1="startDraft(id, defaults)" c2="string | null, Partial<EventDraft>" c3="Initializes draft state for new or existing event." />
          <TR3 c1="updateDraft(updates)" c2="Partial<EventDraft>" c3="Syncs form inputs and persists to LocalStorage." />
          <TR3 c1="clearDraft()" c2="boolean?" c3="Resets active draft and clears stored cache." />
          <TR3 c1="clearAll()" c2="void" c3="Resets events, resources, and assignments." isLast />
        </div>
      </div>

      {/* ── DIRECT ACCESS ─────────────────────────── */}
      <h2 id="direct-access" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Direct Subscriptions</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Because <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>schedulerStore</code> is built with standard Zustand, you can seamlessly connect it with React hooks (<code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>useSyncExternalStore</code>), Vue watchers, or Svelte stores:
      </p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import { useSyncExternalStore } from "react"\nimport { schedulerStore } from "@janus-scheduler/core"\n\nexport function useEventCount() {\n  return useSyncExternalStore(\n    schedulerStore.subscribe,\n    () => Object.keys(schedulerStore.getState().events).length\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ useSyncExternalStore }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"react"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ schedulerStore }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>useEventCount</span>() {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> <span style={{ color: '#7dd3fc' }}>useSyncExternalStore</span>(</div>
          <div>    schedulerStore.subscribe,</div>
          <div>    () <span style={{ color: '#a1a1aa' }}>=&gt;</span> Object.keys(schedulerStore.getState().events).length</div>
          <div>  )</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── DRAFT PERSISTENCE ─────────────────────────── */}
      <h2 id="draft-persistence" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Draft Auto-Persistence</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        When users type into the event creation modal, <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>updateDraft()</code> automatically syncs changes to <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>localStorage</code> under the key <code style={{ font: '500 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>"janus-scheduler:new-event-draft"</code>. If the user accidentally reloads the page, their in-progress form draft is seamlessly restored.
      </p>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/scheduler-manager" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>SchedulerManager</span>
        </Link>
        <Link to="/docs/api/types" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>Types Reference</span>
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
    <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
    <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c3}</span>
  </>);
}
