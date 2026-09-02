import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function SolidGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#basic-usage" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Basic Usage</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#props" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Props</a>
      <a href="#callbacks" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Callbacks</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager</a>
      <a href="#conflict-management" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Conflict Management</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/solid" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Solid</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>SolidJS Component</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler provides first-class SolidJS support via <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/solid</code>. The package provides thin Solid components that wrap the Lit Web Components from @janus-scheduler/ui. Props are synced via createEffect and events are attached in onMount with automatic cleanup in onCleanup.
      </p>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/solid">npm install @janus-scheduler/solid</CodeBlock></div>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        The Solid package re-exports everything from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/core</code> and registers all custom elements automatically. You never need to install or import from core or ui directly.
      </p>
      <Callout type="tip" style={{ marginTop: '20px', padding: '20px 22px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '10px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/solid">pnpm add @janus-scheduler/solid</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/solid">yarn add @janus-scheduler/solid</CodeBlock>
        </div>
      </Callout>

      {/* ── BASIC USAGE ─────────────────────────── */}
      <h2 id="basic-usage" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Basic Usage</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import {\n  Timeline,\n  Scheduler,\n  SchedulerManager,\n} from "@janus-scheduler/solid"\nimport { createSignal } from "solid-js"\n\n// 1. Create the manager (once, outside your component)\nconst manager = new SchedulerManager({\n  onEventAdd: async (event) => {\n    await fetch("/api/events", {\n      method: "POST",\n      body: JSON.stringify(event),\n    })\n  },\n  onError: ({ operation }) => {\n    alert(\`\${operation} failed. Your change has been undone.\`)\n  },\n})\n\n// 2. Seed data\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Room A", type: "room" })\nmanager.addEvent({\n  id: "evt-1",\n  title: "Design Review",\n  startTime: new Date().toISOString(),\n  endTime: new Date(Date.now() + 3600000).toISOString(),\n  resourceId: "alice",\n})\nmanager.addAssignment({ id: "a1", eventId: "evt-1", resourceId: "alice" })\n\n// 3. Build the component\nexport default function App() {\n  const [showModal, setShowModal] = createSignal(false)\n  const [editId, setEditId] = createSignal<string | null>(null)\n\n  return (\n    <div style={{ height: "100vh" }}>\n      <Timeline\n        allowCreate={true}\n        onEventClick={(event) => {\n          setEditId(event.id)\n          setShowModal(true)\n        }}\n        onEventMove={(detail) => {\n          manager.updateEvent(detail.event.id, {\n            startTime: detail.newStartTime,\n            endTime: detail.newEndTime,\n          })\n        }}\n        onAddEvent={() => {\n          setEditId(null)\n          setShowModal(true)\n        }}\n      />\n\n      {showModal() && (\n        <Scheduler\n          eventId={editId()}\n          onSave={(data) => {\n            if (data.id) {\n              manager.updateEvent(data.id, { title: data.title })\n            }\n            setShowModal(false)\n          }}\n          onClose={() => setShowModal(false)}\n        />\n      )}\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Timeline, Scheduler, SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/solid"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ createSignal }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"solid-js"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{ ... }'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export default function</span> <span style={{ color: '#7dd3fc' }}>App</span>() {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>const</span> [showModal, setShowModal] <span style={{ color: '#a1a1aa' }}>=</span> createSignal(<span style={{ color: '#7dd3fc' }}>false</span>)</div>
          <div>  <span style={{ color: '#f97316' }}>const</span> [editId, setEditId] <span style={{ color: '#a1a1aa' }}>=</span> createSignal<span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#a3e635' }}>string</span> | <span style={{ color: '#7dd3fc' }}>null</span><span style={{ color: '#a1a1aa' }}>&gt;</span>(<span style={{ color: '#7dd3fc' }}>null</span>)</div>
          <div>&#8203;</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> (</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>div</span> style<span style={{ color: '#a1a1aa' }}>=</span>{'{'}...{'}'}<span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>      <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> ... <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>      {'{'}showModal() <span style={{ color: '#a1a1aa' }}>&&</span> <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Scheduler</span> ... <span style={{ color: '#a1a1aa' }}>/&gt;</span>{'}'}</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>div</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>  )</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS ─────────────────────────── */}
      <h2 id="components" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import them all from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/solid</code>:</p>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 2fr' }}>
          <TH>Component</TH><TH>Underlying Tag</TH><TH>Description</TH>
          <TR3 c1="<Timeline>" c2="<janus-timeline>" c3="Horizontal timeline grid with drag-and-drop." />
          <TR3 c1="<MonthGrid>" c2="<janus-month-grid>" c3="Monthly calendar view." />
          <TR3 c1="<DayGrid>" c2="<janus-day-grid>" c3="Single-day hour grid view." />
          <TR3 c1="<WeekGrid>" c2="<janus-week-grid>" c3="Weekly hour grid view." />
          <TR3 c1="<YearGrid>" c2="<janus-year-grid>" c3="Yearly overview." />
          <TR3 c1="<Scheduler>" c2="<janus-scheduler>" c3="Event editor modal." />
          <TR3 c1="<Topbar>" c2="<janus-topbar>" c3="Navigation bar with view switching." />
          <TR3 c1="<AiBar>" c2="<janus-ai-bar>" c3="AI-powered scheduling input." />
          <TR3 c1="<Chat>" c2="<janus-chat>" c3="Natural language chat interface." isLast />
        </div>
      </div>

      {/* ── PROPS ─────────────────────────── */}
      <h2 id="props" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Props</h2>
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Timeline Props</h3>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.8fr 2fr' }}>
          <TH>Prop</TH><TH>Type</TH><TH>Default</TH><TH>Description</TH>
          <TR4 c1="resources" c2="TimelineResource[]" c3="auto from store" c4="Array of resource rows." />
          <TR4 c1="view" c2="ViewType" c3='"Timeline"' c4='Active view: "Timeline", "Month", or "Year".' />
          <TR4 c1="currentDate" c2="Date" c3="new Date()" c4="Date the timeline is centered on." />
          <TR4 c1="allowCreate" c2="boolean" c3="false" c4="Enable drag-to-create." />
          <TR4 c1="showFab" c2="boolean" c3="false" c4="Show the floating action button." />
          <TR4 c1="preventConflicts" c2="boolean" c3="false" c4="Block double-bookings when true." />
          <TR4 c1="timezone" c2="string" c3="browser tz" c4="IANA timezone for display." isLast />
        </div>
      </div>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Scheduler (Modal) Props</h3>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2.5fr' }}>
          <TH>Prop</TH><TH>Type</TH><TH>Description</TH>
          <TR3 c1="eventId" c2="string | null" c3="Event ID to edit; null for new." />
          <TR3 c1="title" c2="string" c3="Pre-fill the title." />
          <TR3 c1="startDate / endDate" c2="string" c3="Pre-fill date fields (YYYY-MM-DD)." />
          <TR3 c1="startTime / endTime" c2="string" c3="Pre-fill time fields (HH:MM)." />
          <TR3 c1="participants" c2="string[]" c3="Pre-fill participant list." />
          <TR3 c1="activeColor" c2="string" c3="Pre-select event color." />
          <TR3 c1="preventConflicts" c2="boolean" c3="Disable saving on conflict." />
          <TR3 c1="allDay" c2="boolean" c3="Set the all-day toggle." />
          <TR3 c1="recurrenceRule" c2="string" c3="Pre-fill an RRule string." isLast />
        </div>
      </div>

      {/* ── CALLBACKS ─────────────────────────── */}
      <h2 id="callbacks" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Callbacks</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>All callbacks automatically unwrap the DOM CustomEvent — your handler receives the typed payload directly, not the raw event.</p>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Timeline Callbacks</h3>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 2.5fr' }}>
          <TH>Callback</TH><TH>Payload Type</TH><TH>Description</TH>
          <TR3 c1="onEventClick" c2="TimelineEvent" c3="Event chip clicked." />
          <TR3 c1="onEventMove" c2="EventMoveDetail" c3="Drag move completed." />
          <TR3 c1="onEventResize" c2="EventResizeDetail" c3="Drag resize completed." />
          <TR3 c1="onEventCreate" c2="EventCreateDetail" c3="Drag-to-create completed." />
          <TR3 c1="onAddEvent" c2="void" c3="Add button clicked." />
          <TR3 c1="onViewChange" c2="{ view: ViewType }" c3="View changed." />
          <TR3 c1="onConflictDetected" c2="{ message, action, detail }" c3="Conflict detected." isLast />
        </div>
      </div>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Scheduler Callbacks</h3>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 2.5fr' }}>
          <TH>Callback</TH><TH>Payload Type</TH><TH>Description</TH>
          <TR3 c1="onSave" c2="SchedulerSaveData" c3="Form saved." />
          <TR3 c1="onDelete" c2="SchedulerDeleteData" c3="Event deleted." />
          <TR3 c1="onClose" c2="void" c3="Modal dismissed." isLast />
        </div>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Works identically across all frameworks. See the SchedulerManager reference for full documentation.</p>
      
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>How It Works</h3>
      <ol style={{ margin: '10px 0 0', paddingLeft: '20px', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <li>The store is updated immediately → UI re-renders with no perceived lag.</li>
        <li>Your async hook fires (e.g., fetch() to your backend).</li>
        <li>If it resolves → done.</li>
        <li>If it rejects → the store change is rolled back and onError fires.</li>
      </ol>

      {/* ── CONFLICT MANAGEMENT ─────────────────────────── */}
      <h2 id="conflict-management" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Conflict Management</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`// Mode 1: Visual warnings (default)\n<Timeline preventConflicts={false} />\n\n// Mode 2: Hard blocking\n<Timeline preventConflicts={true} />`}>
          <div><span style={{ color: '#52525b' }}>// Mode 1: Visual warnings (default)</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> preventConflicts<span style={{ color: '#a1a1aa' }}>=</span>{'{'}false{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// Mode 2: Hard blocking</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> preventConflicts<span style={{ color: '#a1a1aa' }}>=</span>{'{'}true{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* ── THEMING ─────────────────────────── */}
      <h2 id="theming" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Theming</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`:root {\n  --janus-primary-color: #3b82f6;\n  --janus-primary-bg: #eff6ff;\n  --janus-primary-glow: rgba(59, 130, 246, 0.15);\n  --janus-primary-text: #1d4ed8;\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>:root</span> {'{'}</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-color</span>: <span style={{ color: '#a3e635' }}>#3b82f6</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-bg</span>: <span style={{ color: '#a3e635' }}>#eff6ff</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-glow</span>: <span style={{ color: '#a3e635' }}>rgba(59, 130, 246, 0.15)</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-text</span>: <span style={{ color: '#a3e635' }}>#1d4ed8</span>;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── TYPES ─────────────────────────── */}
      <h2 id="types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Types</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import all types from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/solid</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  SchedulerDeleteData,\n  EventColor,\n  ViewType,\n  EventData,\n  ResourceData,\n  AssignmentData,\n  SchedulerHooks,\n} from "@janus-scheduler/solid"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent, TimelineResource,</div>
          <div>  EventMoveDetail, EventResizeDetail,</div>
          <div>  EventCreateDetail, SchedulerSaveData,</div>
          <div>  SchedulerDeleteData, EventColor,</div>
          <div>  ViewType, EventData, ResourceData, AssignmentData,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/solid"</span></div>
        </CodeBlock>
      </div>
      <Callout type="tip" style={{ marginTop: '14px' }}>Never import from @janus-scheduler/core or @janus-scheduler/ui. The Solid package re-exports everything (Facade Pattern).</Callout>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>JSX IntrinsicElements</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>The Solid wrapper automatically declares all &lt;janus-*&gt; tags in the JSX.IntrinsicElements namespace. No manual type augmentation is needed.</p>

      <Callout type="warning" style={{ marginTop: '14px' }}>Custom element registration happens on import — if your bundler tree-shakes the import, the elements won't be registered. Make sure your entry point imports @janus-scheduler/solid.</Callout>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/frameworks/angular" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Angular</span>
        </Link>
        <Link to="/docs/frameworks/vue" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Vue</span>
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

function TR4({ c1, c2, c3, c4, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (<>
    <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
    <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
    <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', borderBottom: border }}>{c3}</span>
    <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c4}</span>
  </>);
}
