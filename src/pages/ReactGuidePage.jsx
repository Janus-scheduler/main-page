import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function ReactGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#basic-usage" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Basic Usage</a>
      <a href="#core-concepts" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Core Concepts</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#props" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Props</a>
      <a href="#callbacks" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Callbacks</a>
      <a href="#nlp-chat" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Chat &amp; useJanusChat Hook</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager</a>
      <a href="#undo-api" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Undo &amp; Rollback API</a>
      <a href="#conflict" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Conflict Management</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#timezone" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Timezone Handling</a>
      <a href="#recurring" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Recurring Events</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
      <a href="#state" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>State Management</a>
      <a href="#full-example" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Full Working Example</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/react" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>React</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>React Component</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler seamlessly integrates with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--janus-accent-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>React</a> (versions 18 and 19). It provides type-safe components wrapped via <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@lit/react</code>, giving you a native React developer experience with typed props, automatic CustomEvent unwrapping, and zero manual DOM manipulation.
      </p>

      <Callout type="info" style={{ marginTop: '16px' }}>
        The React package re-exports everything you need from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code>, <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code>, and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/nlp</code>.
      </Callout>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Install the Janus Scheduler React package:</p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock isInstallCommand codeString="npm install @janus-scheduler/react">npm install @janus-scheduler/react</CodeBlock>
      </div>
      <Callout type="tip" style={{ marginTop: '18px', padding: '16px 20px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '8px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/react">pnpm add @janus-scheduler/react</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/react">yarn add @janus-scheduler/react</CodeBlock>
        </div>
      </Callout>

      {/* ── BASIC USAGE ─────────────────────────── */}
      <h2 id="basic-usage" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Basic Usage</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Create a scheduler manager, add initial resources and events, and render the <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>&lt;Timeline&gt;</code> component:</p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import {\n  Timeline,\n  Scheduler,\n  SchedulerManager,\n} from "@janus-scheduler/react"\n\n// 1. Create the manager (outside your component or in a ref/singleton)\nconst manager = new SchedulerManager()\n\n// 2. Add resources (rows in the timeline)\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Conference Room A", type: "room" })\n\n// 3. Add an event\nmanager.addEvent({\n  id: "evt-1",\n  title: "Sprint Architecture Sync",\n  startTime: "2026-09-02T09:00:00Z",\n  endTime: "2026-09-02T10:30:00Z",\n  resourceId: "alice",\n})\n\n// 4. Assign the event\nmanager.addAssignment({\n  id: "asgn-1",\n  eventId: "evt-1",\n  resourceId: "alice",\n})\n\nexport default function App() {\n  return (\n    <div style={{ height: "100vh" }}>\n      <Timeline allowCreate preventConflicts={false} />\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{'}</div>
          <div>  Timeline,</div>
          <div>  Scheduler,</div>
          <div>  SchedulerManager,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 1. Create the manager</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>()</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 2. Add resources</span></div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>"alice"</span>, name: <span style={{ color: '#a3e635' }}>"Alice Fernando"</span>, type: <span style={{ color: '#a3e635' }}>"person"</span>{' }'})</div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>"room-a"</span>, name: <span style={{ color: '#a3e635' }}>"Conference Room A"</span>, type: <span style={{ color: '#a3e635' }}>"room"</span>{' }'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 3. Add an event</span></div>
          <div>manager.addEvent({'{'}</div>
          <div>  id: <span style={{ color: '#a3e635' }}>"evt-1"</span>,</div>
          <div>  title: <span style={{ color: '#a3e635' }}>"Sprint Architecture Sync"</span>,</div>
          <div>  startTime: <span style={{ color: '#a3e635' }}>"2026-09-02T09:00:00Z"</span>,</div>
          <div>  endTime: <span style={{ color: '#a3e635' }}>"2026-09-02T10:30:00Z"</span>,</div>
          <div>  resourceId: <span style={{ color: '#a3e635' }}>"alice"</span>,</div>
          <div>{'}'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 4. Assign the event</span></div>
          <div>manager.addAssignment({'{ id: '}<span style={{ color: '#a3e635' }}>"asgn-1"</span>, eventId: <span style={{ color: '#a3e635' }}>"evt-1"</span>, resourceId: <span style={{ color: '#a3e635' }}>"alice"</span>{' }'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export default function</span> <span style={{ color: '#7dd3fc' }}>App</span>() {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> (</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>div</span> style<span style={{ color: '#a1a1aa' }}>=</span>{'{'}{'{ height: '}<span style={{ color: '#a3e635' }}>"100vh"</span>{' }'}{'}'}<span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>      <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> allowCreate preventConflicts<span style={{ color: '#a1a1aa' }}>=</span>{'{'}false{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>div</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>  )</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── CORE CONCEPTS ─────────────────────────── */}
      <h2 id="core-concepts" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Core Concepts</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>There are three core data models in Janus, and one relational join between them:</p>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>1. Event</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Represents an occurrence between two UTC timestamps with title, color, metadata, and optional recurrence rules.</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`interface EventData {\n  id: string\n  title: string\n  startTime: string  // ISO 8601 UTC string (e.g. 2026-09-02T09:00:00Z)\n  endTime: string    // ISO 8601 UTC string\n  resourceId: string\n  status?: "draft" | "confirmed" | "cancelled"\n  description?: string\n  color?: EventColor\n  recurrenceRule?: string  // RFC 5545 RRULE string\n  metadata?: Record<string, unknown>\n}`}>
          <div><span style={{ color: '#f97316' }}>interface</span> <span style={{ color: '#7dd3fc' }}>EventData</span> {'{'}</div>
          <div>  id: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  title: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  startTime: <span style={{ color: '#a3e635' }}>string</span>  <span style={{ color: '#52525b' }}>// ISO 8601 UTC string</span></div>
          <div>  endTime: <span style={{ color: '#a3e635' }}>string</span>    <span style={{ color: '#52525b' }}>// ISO 8601 UTC string</span></div>
          <div>  resourceId: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  status?: <span style={{ color: '#a3e635' }}>"draft"</span> | <span style={{ color: '#a3e635' }}>"confirmed"</span> | <span style={{ color: '#a3e635' }}>"cancelled"</span></div>
          <div>  description?: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  color?: <span style={{ color: '#7dd3fc' }}>EventColor</span></div>
          <div>  recurrenceRule?: <span style={{ color: '#a3e635' }}>string</span>  <span style={{ color: '#52525b' }}>// RFC 5545 RRULE</span></div>
          <div>  metadata?: <span style={{ color: '#7dd3fc' }}>Record</span>&lt;<span style={{ color: '#a3e635' }}>string</span>, <span style={{ color: '#a3e635' }}>unknown</span>&gt;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>2. Resource</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>A schedule entity — a person, room, or equipment unit. Displayed as rows in the timeline.</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`interface ResourceData {\n  id: string\n  name: string\n  type?: "person" | "room" | "equipment" | string\n  subtitle?: string\n  avatar?: string\n}`}>
          <div><span style={{ color: '#f97316' }}>interface</span> <span style={{ color: '#7dd3fc' }}>ResourceData</span> {'{'}</div>
          <div>  id: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  name: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  type?: <span style={{ color: '#a3e635' }}>"person"</span> | <span style={{ color: '#a3e635' }}>"room"</span> | <span style={{ color: '#a3e635' }}>"equipment"</span> | <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  subtitle?: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  avatar?: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>3. Assignment</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Joins an event to one or more resources. Conflicts are evaluated per assignment.</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`interface AssignmentData {\n  id: string\n  eventId: string\n  resourceId: string\n}`}>
          <div><span style={{ color: '#f97316' }}>interface</span> <span style={{ color: '#7dd3fc' }}>AssignmentData</span> {'{'}</div>
          <div>  id: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  eventId: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>  resourceId: <span style={{ color: '#a3e635' }}>string</span></div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS ─────────────────────────── */}
      <h2 id="components" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>All components are exported directly from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/react</code>:</p>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 2.7fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Component</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <TableRow left="<Timeline>" right="Interactive multi-resource timeline with drag-and-drop creation, resizing, collision detection, and zoom." />
          <TableRow left="<MonthGrid>" right="Standard 7-column month overview grid with multi-event indicators and day selection." />
          <TableRow left="<DayGrid>" right="Single-day vertical time grid with hour slots, snap-to-grid creation, and event rescheduling." />
          <TableRow left="<WeekGrid>" right="Multi-day week time grid displaying vertical hour columns across 7 days." />
          <TableRow left="<YearGrid>" right="12-month overview calendar showing day-level density heatmap and fast navigation." />
          <TableRow left="<Scheduler>" right="Event editor modal card with date/time pickers, participants, colors, recurrence, and timezone." />
          <TableRow left="<Chat>" right="Conversational NLP scheduling sidebar with interactive clarify chips, parse preview cards, and undo." />
          <TableRow left="<Topbar>" right="Header toolbar providing view switching, prev/next/today date pagination, and Google Calendar sync button." />
          <TableRow left="<ConfirmDialog>" right="Modal confirmation dialog with before/after comparison preview for edits and undo actions." isLast />
        </div>
      </div>

      {/* ── PROPS ─────────────────────────── */}
      <h2 id="props" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Props</h2>

      {/* Timeline Props */}
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Timeline Props</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.3fr 0.9fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Prop</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Default</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow prop="resources" type="TimelineResource[]" def="store auto" desc="Array of resource rows. Reads from shared Zustand store if omitted." />
          <PropRow prop="resourceTypeConfig" type="ResourceTypeConfig" def="undefined" desc="Config dictionary for grouping, badges, and colors per resource type." />
          <PropRow prop="view" type="ViewType" def='"Timeline"' desc='Active view: "Timeline" | "Month" | "Day" | "Week" | "Year".' />
          <PropRow prop="currentDate" type="Date" def="new Date()" desc="Center reference date for navigation." />
          <PropRow prop="aiPrompt" type="string" def="undefined" desc="Pre-fills the natural language scheduling input bar." />
          <PropRow prop="allowCreate" type="boolean" def="true" desc="Enables drag-to-create on empty grid tracks." />
          <PropRow prop="showFab" type="boolean" def="true" desc="Shows the floating action + button in bottom-right corner." />
          <PropRow prop="preventConflicts" type="boolean" def="false" desc="When true, drops or resizes causing conflicts are hard-prevented." />
          <PropRow prop="timezone" type="string" def="system" desc="Display IANA timezone (e.g. 'Asia/Colombo', 'America/New_York')." isLast />
        </div>
      </div>

      {/* Scheduler (Modal) Props */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Scheduler (Modal) Props</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.3fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Prop</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="eventId" type="string | null" desc="Pass an ID to edit an existing event, or null to create a new draft." />
          <PropRow3 prop="title" type="string" desc="Initial title value in the form." />
          <PropRow3 prop="startDate / endDate" type="string" desc="Date strings formatted as YYYY-MM-DD." />
          <PropRow3 prop="startTime / endTime" type="string" desc="Time strings formatted as HH:MM." />
          <PropRow3 prop="participants" type="string[]" desc="Array of participant names or email tags." />
          <PropRow3 prop="description" type="string" desc="Detailed event description / agenda." />
          <PropRow3 prop="activeColor" type="string" desc="Selected event accent color." />
          <PropRow3 prop="error" type="string | null" desc="Error message string displayed at the top of the modal." />
          <PropRow3 prop="allDay" type="boolean" desc="Sets the all-day toggle switch." />
          <PropRow3 prop="recurrenceRule" type="string" desc="RFC 5545 RRULE recurrence string (e.g. 'FREQ=WEEKLY;BYDAY=MO,WE')." />
          <PropRow3 prop="timezone" type="string" desc="Target IANA timezone." />
          <PropRow3 prop="preventConflicts" type="boolean" desc="Disables Save when conflicts exist." />
          <PropRow3 prop="showConfirmOnCreate" type="boolean" desc="Prompts user confirmation before creating." isLast />
        </div>
      </div>

      {/* TimeGrid (DayGrid & WeekGrid) Props */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>DayGrid &amp; WeekGrid (TimeGrid) Props</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.3fr 0.8fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Prop</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Default</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow prop="events" type="TimeGridEvent[]" def="store auto" desc="Externally supplied event list (reads from store if omitted)." />
          <PropRow prop="startHour" type="number" def="0" desc="First hour displayed on the vertical time axis (0–23)." />
          <PropRow prop="endHour" type="number" def="24" desc="Last hour displayed exclusive (1–24)." />
          <PropRow prop="slotMinutes" type="number" def="30" desc="Grid click resolution in minutes." />
          <PropRow prop="defaultDuration" type="number" def="60" desc="Default duration in minutes for new slot selections." />
          <PropRow prop="scrollToHour" type="number" def="8" desc="Initial hour scrolled into viewport on first paint." />
          <PropRow prop="weekStartsOn" type="number" def="1" desc="First day of the week (0 = Sunday, 1 = Monday)." />
          <PropRow prop="allowCreate" type="boolean" def="true" desc="Emits onSlotSelect when empty time ranges are clicked." />
          <PropRow prop="showFab" type="boolean" def="true" desc="Toggles floating action add button." isLast />
        </div>
      </div>

      {/* Topbar & ConfirmDialog Props */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Topbar Props</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Prop</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="view" type="ViewType" desc="Currently active view identifier." />
          <PropRow3 prop="views" type="ViewType[]" desc="Ordered list of view tabs to display (e.g. ['Day', 'Week', 'Month', 'Timeline'])." />
          <PropRow3 prop="canUndo" type="boolean" desc="Enables/disables the topbar Undo button based on manager undo stack." />
          <PropRow3 prop="isGoogleCalendarConnected" type="boolean" desc="Controls Google Calendar sync indicator and connect/disconnect button state." />
          <PropRow3 prop="showBenchmarkBtn" type="boolean" desc="Shows the live performance benchmark suite toggle." isLast />
        </div>
      </div>

      {/* ── CALLBACKS ─────────────────────────── */}
      <h2 id="callbacks" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Callbacks</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        A callback function can be passed into any Janus component and it will be called when something happens. Janus automatically unwraps the DOM <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>CustomEvent</code> — your callback receives the typed payload directly.
      </p>

      {/* Timeline Callbacks */}
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Timeline Callbacks</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Callback</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Payload Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="onEventClick" type="(detail: TimelineEvent) => void" desc="Fired when clicking an event block on the timeline grid." />
          <PropRow3 prop="onEventMove" type="(detail: EventMoveDetail) => void" desc="Fired after dragging an event to a new time or resource track." />
          <PropRow3 prop="onEventResize" type="(detail: EventResizeDetail) => void" desc="Fired after dragging event resize handles." />
          <PropRow3 prop="onEventCreate" type="(detail: EventCreateDetail) => void" desc="Fired when dragging to create a new event interval." />
          <PropRow3 prop="onAddEvent" type="() => void" desc="Fired when the Add FAB button is clicked." />
          <PropRow3 prop="onViewChange" type="(detail: { view: ViewType }) => void" desc="Fired when changing views (Timeline, Month, Week, Day, Year)." />
          <PropRow3 prop="onNavChange" type="(detail: Record<string, unknown>) => void" desc="Fired when dates are navigated via next/prev/today." />
          <PropRow3 prop="onConflictDetected" type="(detail: { message, action, detail }) => void" desc="Fired when a scheduling overlap occurs during user interaction." isLast />
        </div>
      </div>

      {/* Scheduler Callbacks */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Scheduler (Modal) Callbacks</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Callback</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Payload Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="onSave" type="(detail: SchedulerSaveData) => void" desc="Fired with complete form data (title, dates, times, participants, color, recurrence, timezone) when user saves." />
          <PropRow3 prop="onDelete" type="(detail: { id: string | null; title: string }) => void" desc="Fired when user deletes an existing event from the modal." />
          <PropRow3 prop="onClose" type="() => void" desc="Fired when the modal is closed or cancelled." isLast />
        </div>
      </div>

      {/* TimeGrid Callbacks */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>TimeGrid (Day &amp; Week) Callbacks</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Callback</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Payload Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="onSlotSelect" type="(detail: SlotSelectDetail) => void" desc="Fired when clicking or dragging across an empty time slot." />
          <PropRow3 prop="onEventMove" type="(detail: TimeGridEventMoveDetail) => void" desc="Fired when moving an event in day or week columns." />
          <PropRow3 prop="onEventResize" type="(detail: TimeGridEventResizeDetail) => void" desc="Fired when resizing top/bottom event boundaries." />
          <PropRow3 prop="onDayClick" type="(detail: { date: string }) => void" desc="Fired when clicking a day column header." isLast />
        </div>
      </div>

      {/* ── NLP CHAT ─────────────────────────── */}
      <h2 id="nlp-chat" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Conversational AI &amp; useJanusChat Hook</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus includes a conversational scheduling sidebar component <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Chat&gt;</code> and a native React hook <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>useJanusChat</code> that handles prompt disambiguation, clarify chips, and structured parse cards with zero external server dependencies:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="ChatSidebar.tsx" codeString={`import { Chat, useJanusChat, SchedulerManager } from "@janus-scheduler/react"\n\nexport function SchedulingAssistant({ manager }: { manager: SchedulerManager }) {\n  const chat = useJanusChat({\n    onCommit: (event) => {\n      manager.addEvent(event)\n    },\n  })\n\n  return (\n    <Chat\n      messages={chat.thread}\n      busy={chat.busy}\n      onChatSubmit={({ text }) => chat.submit(text)}\n      onChatClarifyResponse={({ label }) => chat.choose(label)}\n      onChatConfirm={() => chat.confirm()}\n      onChatUndo={({ messageId }) => chat.undo(messageId)}\n    />\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Chat, useJanusChat, SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>SchedulingAssistant</span>({'{ manager }'}: {'{ manager: SchedulerManager }'}) {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>const</span> chat <span style={{ color: '#a1a1aa' }}>=</span> useJanusChat({'{'}</div>
          <div>    onCommit: (event) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>      manager.addEvent(event)</div>
          <div>    {'}'},</div>
          <div>  {'}'})</div>
          <div>&#8203;</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> (</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Chat</span></div>
          <div>      messages<span style={{ color: '#a1a1aa' }}>=</span>{'{chat.thread}'}</div>
          <div>      busy<span style={{ color: '#a1a1aa' }}>=</span>{'{chat.busy}'}</div>
          <div>      onChatSubmit<span style={{ color: '#a1a1aa' }}>=</span>{'{({ text }) => chat.submit(text)}'}</div>
          <div>      onChatClarifyResponse<span style={{ color: '#a1a1aa' }}>=</span>{'{({ label }) => chat.choose(label)}'}</div>
          <div>      onChatConfirm<span style={{ color: '#a1a1aa' }}>=</span>{'{() => chat.confirm()}'}</div>
          <div>      onChatUndo<span style={{ color: '#a1a1aa' }}>=</span>{'{({ messageId }) => chat.undo(messageId)}'}</div>
          <div>    <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>  )</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager — The Public API</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        The <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code> is the complete orchestration API. Every mutating method performs an optimistic store update and invokes your lifecycle hooks with automatic error rollback:
      </p>

      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Manager Methods</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.3fr 0.8fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Method</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Parameters</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Returns</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow4 c1="addEvent(data)" c2="EventData" c3="Event" c4="Optimistically adds a new event to the store and fires onEventAdd." />
          <PropRow4 c1="batchAddEvents(events)" c2="EventData[]" c3="Event[]" c4="Atomically adds multiple events in a single store transaction." />
          <PropRow4 c1="getEvent(id)" c2="string" c3="Event | undefined" c4="Retrieves a single event instance by unique ID." />
          <PropRow4 c1="getAllEvents()" c2="—" c3="Event[]" c4="Returns an array of all active events in the store." />
          <PropRow4 c1="updateEvent(id, updates)" c2="string, Partial<EventData>" c3="Event" c4="Updates event fields optimistically with rollback on reject." />
          <PropRow4 c1="deleteEvent(id)" c2="string" c3="boolean" c4="Removes an event and cleans up associated assignments." />
          <PropRow4 c1="clearEvents()" c2="—" c3="void" c4="Removes all events from the schedule." />
          <PropRow4 c1="addResource(data)" c2="ResourceData" c3="Resource" c4="Adds a new resource row (person, room, equipment)." />
          <PropRow4 c1="getResource(id)" c2="string" c3="Resource | undefined" c4="Retrieves a single resource by ID." />
          <PropRow4 c1="getAllResources()" c2="—" c3="Resource[]" c4="Returns all registered resources in display order." />
          <PropRow4 c1="updateResource(id, updates)" c2="string, Partial<ResourceData>" c3="Resource" c4="Updates resource details (name, avatar, type, subtitle)." />
          <PropRow4 c1="deleteResource(id)" c2="string" c3="boolean" c4="Removes a resource row from the schedule." />
          <PropRow4 c1="clearResources()" c2="—" c3="void" c4="Clears all resources." />
          <PropRow4 c1="addAssignment(data)" c2="AssignmentData" c3="Assignment" c4="Creates an event-to-resource assignment link." />
          <PropRow4 c1="getAssignment(id)" c2="string" c3="Assignment | undefined" c4="Retrieves an assignment by ID." />
          <PropRow4 c1="getAllAssignments()" c2="—" c3="Assignment[]" c4="Returns all active assignments." />
          <PropRow4 c1="getAssignmentsForEvent(id)" c2="string" c3="Assignment[]" c4="Returns all resource assignments for a specific event." />
          <PropRow4 c1="getAssignmentsForResource(id)" c2="string" c3="Assignment[]" c4="Returns all events assigned to a specific resource." />
          <PropRow4 c1="deleteAssignment(id)" c2="string" c3="boolean" c4="Removes an assignment by ID." />
          <PropRow4 c1="clearAssignments()" c2="—" c3="void" c4="Clears all assignment links." isLast />
        </div>
      </div>

      {/* ── UNDO API ─────────────────────────── */}
      <h2 id="undo-api" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Undo &amp; Rollback API</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        SchedulerManager maintains a full undo stack with reactive subscriptions for React state synchronization:
      </p>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 0.8fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Method</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Parameters</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Returns</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow4 c1="undo()" c2="—" c3="void" c4="Pops and reverses the most recent operation from the undo stack." />
          <PropRow4 c1="canUndo()" c2="—" c3="boolean" c4="Returns true if there are operations available to undo." />
          <PropRow4 c1="peekUndo()" c2="—" c3="UndoAction | undefined" c4="Inspects the top undo action without popping it." />
          <PropRow4 c1="subscribeUndo(listener)" c2="() => void" c3="() => void" c4="Subscribes to stack changes. Returns an unsubscribe function." isLast />
        </div>
      </div>

      {/* ── CONFLICT ─────────────────────────── */}
      <h2 id="conflict" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Conflict Management</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus includes built-in timezone-aware scheduling conflict detection. Toggle modes using the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>preventConflicts</code> prop:
      </p>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Mode 1: Visual Warning (Default)</h3>
      <div style={{ marginTop: '10px' }}><CodeBlock codeString='<Timeline preventConflicts={false} />'><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> preventConflicts<span style={{ color: '#a1a1aa' }}>=</span>{'{'}false{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div></CodeBlock></div>
      <ul style={{ margin: '10px 0 0', paddingLeft: '20px', maxWidth: '66ch', font: '400 14.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <li>Double-bookings are allowed to complete.</li>
        <li>Overlapping items display a subtle red warning badge and emit <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onConflictDetected</code>.</li>
      </ul>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Mode 2: Hard Blocking</h3>
      <div style={{ marginTop: '10px' }}><CodeBlock codeString='<Timeline preventConflicts={true} />'><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> preventConflicts<span style={{ color: '#a1a1aa' }}>=</span>{'{'}true{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div></CodeBlock></div>
      <ul style={{ margin: '10px 0 0', paddingLeft: '20px', maxWidth: '66ch', font: '400 14.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <li>Double-bookings are intercepted on drop/resize; the component cleanly reverts to the previous time slot.</li>
        <li>In the Scheduler modal, saving is blocked until the conflict is resolved.</li>
      </ul>

      {/* ── THEMING ─────────────────────────── */}
      <h2 id="theming" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Theming</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Customize appearance using standard CSS custom properties:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`:root {\n  --janus-accent: #f97316;\n  --janus-accent-tint: rgba(249, 115, 22, 0.12);\n  --janus-accent-text: #c2560a;\n  --janus-bg: #ffffff;\n  --janus-surface: #f4f4f5;\n  --janus-border: #e4e4e7;\n  --janus-text: #18181b;\n  --janus-text-secondary: #52525b;\n  --janus-text-muted: #a1a1aa;\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>:root</span> {'{'}</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-accent</span>: <span style={{ color: '#a3e635' }}>#f97316</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-accent-tint</span>: <span style={{ color: '#a3e635' }}>rgba(249, 115, 22, 0.12)</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-accent-text</span>: <span style={{ color: '#a3e635' }}>#c2560a</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-bg</span>: <span style={{ color: '#a3e635' }}>#ffffff</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-surface</span>: <span style={{ color: '#a3e635' }}>#f4f4f5</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-border</span>: <span style={{ color: '#a3e635' }}>#e4e4e7</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-text</span>: <span style={{ color: '#a3e635' }}>#18181b</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-text-secondary</span>: <span style={{ color: '#a3e635' }}>#52525b</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-text-muted</span>: <span style={{ color: '#a3e635' }}>#a1a1aa</span>;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── TIMEZONE ─────────────────────────── */}
      <h2 id="timezone" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Timezone Handling</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        All events are stored as ISO 8601 UTC strings and rendered in the display timezone. Utilities are re-exported directly from the React wrapper:
      </p>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Function</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <TableRow left="getBrowserTimezone()" right="Returns the client browser's IANA timezone (e.g. 'Asia/Colombo')." />
          <TableRow left="isoToZonedDisplay(iso, tz)" right="Converts UTC ISO timestamp to formatted date and time labels in target timezone." />
          <TableRow left="zonedInputToISO(date, time, tz)" right="Converts user-entered date + time in a specific timezone to a UTC ISO string." isLast />
        </div>
      </div>

      {/* ── RECURRING ─────────────────────────── */}
      <h2 id="recurring" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Recurring Events</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Recurring schedules use standard RFC 5545 RRULE strings. Individual occurrences are computed deterministically with IDs formatted as <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;parentId&gt;_occ_&lt;timestampMs&gt;</code>.
      </p>

      {/* ── TYPES ─────────────────────────── */}
      <h2 id="types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Types</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import all TypeScript types directly from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/react</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  SchedulerDeleteData,\n  TimeGridEvent,\n  SlotSelectDetail,\n  TimeGridEventMoveDetail,\n  TimeGridEventResizeDetail,\n  ViewType,\n  EventDraft,\n  EventColor,\n  SchedulerHooks,\n  SchedulerConfig,\n  UndoAction,\n  MonthEvent,\n  EventData,\n  ResourceData,\n  AssignmentData,\n  ResourceTypeConfig,\n  ChatMessage,\n  ChatSuggestion,\n  ChatSubmitDetail,\n  ChatActionDetail,\n  ChatClarifyResponseDetail,\n} from "@janus-scheduler/react"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent,</div>
          <div>  TimelineResource,</div>
          <div>  EventMoveDetail,</div>
          <div>  EventResizeDetail,</div>
          <div>  EventCreateDetail,</div>
          <div>  SchedulerSaveData,</div>
          <div>  SchedulerDeleteData,</div>
          <div>  TimeGridEvent,</div>
          <div>  SlotSelectDetail,</div>
          <div>  TimeGridEventMoveDetail,</div>
          <div>  TimeGridEventResizeDetail,</div>
          <div>  ViewType,</div>
          <div>  EventDraft,</div>
          <div>  EventColor,</div>
          <div>  SchedulerHooks,</div>
          <div>  SchedulerConfig,</div>
          <div>  UndoAction,</div>
          <div>  MonthEvent,</div>
          <div>  EventData,</div>
          <div>  ResourceData,</div>
          <div>  AssignmentData,</div>
          <div>  ResourceTypeConfig,</div>
          <div>  ChatMessage,</div>
          <div>  ChatSuggestion,</div>
          <div>  ChatSubmitDetail,</div>
          <div>  ChatActionDetail,</div>
          <div>  ChatClarifyResponseDetail,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
        </CodeBlock>
      </div>

      {/* ── STATE MANAGEMENT ─────────────────────────── */}
      <h2 id="state" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>State Management</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Components share a centralized Zustand store (<code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>schedulerStore</code>). You can observe state changes reactively from external React components:
      </p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import { schedulerStore } from "@janus-scheduler/react"\n\n// Subscribe to store updates\nconst unsubscribe = schedulerStore.subscribe((state) => {\n  console.log("Total events:", Object.keys(state.events).length)\n})\n\n// Read current snapshot\nconst currentEvents = schedulerStore.getState().events`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ schedulerStore }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// Subscribe to store updates</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> unsubscribe <span style={{ color: '#a1a1aa' }}>=</span> schedulerStore.subscribe((state) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>  console.log(<span style={{ color: '#a3e635' }}>"Total events:"</span>, Object.keys(state.events).length)</div>
          <div>{'}'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// Read current snapshot</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> currentEvents <span style={{ color: '#a1a1aa' }}>=</span> schedulerStore.getState().events</div>
        </CodeBlock>
      </div>

      {/* ── FULL EXAMPLE ─────────────────────────── */}
      <h2 id="full-example" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Full Working Example</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>A complete, production-ready React component with optimistic API sync, modal editor, and undo capabilities:</p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`"use client"\nimport { useState } from "react"\nimport {\n  Timeline,\n  Scheduler,\n  Topbar,\n  SchedulerManager,\n  type TimelineEvent,\n  type EventMoveDetail,\n  type SchedulerSaveData,\n} from "@janus-scheduler/react"\n\nconst manager = new SchedulerManager({\n  onEventAdd: async (event) => {\n    await fetch("/api/events", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(event),\n    })\n  },\n  onEventUpdate: async (event) => {\n    await fetch(\`/api/events/\${event.id}\`, {\n      method: "PATCH",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(event),\n    })\n  },\n  onEventDelete: async (id) => {\n    await fetch(\`/api/events/\${id}\`, { method: "DELETE" })\n  },\n  onError: ({ operation, error }) => {\n    alert(\`\${operation} failed — your change was automatically reverted.\`)\n    console.error(error)\n  },\n})\n\n// Seed resources\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "bob", name: "Bob Smith", type: "person" })\nmanager.addResource({ id: "room-a", name: "Executive Room A", type: "room" })\n\nexport default function App() {\n  const [modalOpen, setModalOpen] = useState(false)\n  const [activeEventId, setActiveEventId] = useState<string | null>(null)\n\n  return (\n    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>\n      <Topbar\n        canUndo={manager.canUndo()}\n        onUndoClick={() => manager.undo()}\n        onToggleCreate={() => { setActiveEventId(null); setModalOpen(true) }}\n      />\n      <div style={{ flex: 1 }}>\n        <Timeline\n          allowCreate={true}\n          preventConflicts={false}\n          onEventClick={(evt) => {\n            setActiveEventId(evt.id)\n            setModalOpen(true)\n          }}\n          onEventMove={(d) => {\n            manager.updateEvent(d.event.id, {\n              startTime: d.newStartTime,\n              endTime: d.newEndTime,\n              resourceId: d.newResourceId || d.event.resourceId,\n            })\n          }}\n          onAddEvent={() => {\n            setActiveEventId(null)\n            setModalOpen(true)\n          }}\n        />\n      </div>\n\n      {modalOpen && (\n        <Scheduler\n          eventId={activeEventId}\n          onSave={(data) => {\n            if (data.id) {\n              manager.updateEvent(data.id, {\n                title: data.title,\n                description: data.description,\n                startTime: \`\${data.startDate}T\${data.startTime}:00Z\`,\n                endTime: \`\${data.endDate}T\${data.endTime}:00Z\`,\n              })\n            } else {\n              manager.addEvent({\n                id: \`evt-\${Date.now()}\`,\n                title: data.title || "Untitled Event",\n                startTime: \`\${data.startDate}T\${data.startTime}:00Z\`,\n                endTime: \`\${data.endDate}T\${data.endTime}:00Z\`,\n                resourceId: "alice",\n              })\n            }\n            setModalOpen(false)\n          }}\n          onDelete={({ id }) => {\n            if (id) manager.deleteEvent(id)\n            setModalOpen(false)\n          }}\n          onClose={() => setModalOpen(false)}\n        />\n      )}\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#a3e635' }}>"use client"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ useState }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"react"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{'}</div>
          <div>  Timeline,</div>
          <div>  Scheduler,</div>
          <div>  Topbar,</div>
          <div>  SchedulerManager,</div>
          <div>  type TimelineEvent,</div>
          <div>  type EventMoveDetail,</div>
          <div>  type SchedulerSaveData,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{'}</div>
          <div>  onEventAdd: <span style={{ color: '#f97316' }}>async</span> (event) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} <span style={{ color: '#52525b' }}>/* API call */</span> {'}'},</div>
          <div>  onEventUpdate: <span style={{ color: '#f97316' }}>async</span> (event) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} <span style={{ color: '#52525b' }}>/* API call */</span> {'}'},</div>
          <div>  onEventDelete: <span style={{ color: '#f97316' }}>async</span> (id) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} <span style={{ color: '#52525b' }}>/* API call */</span> {'}'},</div>
          <div>  onError: ({'{ operation, error }'}) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>    alert(<span style={{ color: '#a3e635' }}>`$&#123;operation&#125; failed — change was rolled back.`</span>)</div>
          <div>  {'}'},</div>
          <div>{'}'})</div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Callout type="tip" style={{ margin: 0, padding: '18px 22px' }}>
          Return a promise from any lifecycle hook and Janus maintains the optimistic UI state until it settles. If the promise rejects, the change automatically rolls back.
        </Callout>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/getting-started" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Getting started</span>
        </Link>
        <Link to="/docs/frameworks/angular" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Angular</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

/* ── Helper table row components ─────────────────────────── */
function TableRow({ left, right, isLast }) {
  return (
    <>
      <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: isLast ? 'none' : '1px solid var(--janus-border)' }}>{left}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: isLast ? 'none' : '1px solid var(--janus-border)' }}>{right}</span>
    </>
  );
}

function PropRow({ prop, type, def, desc, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{prop}</span>
      <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{type}</span>
      <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', borderBottom: border }}>{def}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{desc}</span>
    </>
  );
}

function PropRow3({ prop, type, desc, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{prop}</span>
      <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{type}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{desc}</span>
    </>
  );
}

function PropRow4({ c1, c2, c3, c4, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 18px', font: '500 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
      <span style={{ padding: '10px 14px', font: '400 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
      <span style={{ padding: '10px 14px', font: '400 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', borderBottom: border }}>{c3}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c4}</span>
    </>
  );
}
