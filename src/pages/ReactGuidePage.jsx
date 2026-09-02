import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function ReactGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#quickstart" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>60-Second Quickstart</a>
      <a href="#step-by-step" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Step-by-Step Tutorial</a>
      <a href="#step-1-manager" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>1. State &amp; Manager</a>
      <a href="#step-2-drag-drop" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>2. Drag &amp; Drop / Resize</a>
      <a href="#step-3-topbar" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>3. Topbar &amp; Views</a>
      <a href="#step-4-modal" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>4. Editor Modal &amp; Participants</a>
      <a href="#step-5-ai-chat" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>5. AI Scheduling Assistant</a>
      <a href="#core-concepts" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Core Concepts</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#props" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Props</a>
      <a href="#callbacks" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Callbacks</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager API</a>
      <a href="#undo-api" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Undo &amp; Rollback</a>
      <a href="#conflict" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Conflict Management</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#timezone" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Timezone Handling</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
      <a href="#full-example" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Full Production Template</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/react" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>React</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>React Component Guide</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler seamlessly integrates with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--janus-accent-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>React</a> (versions 18 and 19). It provides type-safe components wrapped via <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@lit/react</code>, giving you a native React developer experience with typed props, automatic CustomEvent unwrapping, gesture handlers, and zero manual DOM manipulation.
      </p>

      <Callout type="info" style={{ marginTop: '16px' }}>
        The React package re-exports everything you need from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code>, <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code>, and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/nlp</code>. You only need <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>npm install @janus-scheduler/react</code>.
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

      {/* ── 60-SECOND QUICKSTART ─────────────────────────── */}
      <h2 id="quickstart" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>60-Second Quickstart</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Create a scheduler manager, seed resources and events, and render the auto-syncing <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>&lt;Timeline&gt;</code> component:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import { Timeline, SchedulerManager } from "@janus-scheduler/react"\n\n// 1. Create the manager once (outside render or in a singleton)\nconst manager = new SchedulerManager()\n\n// 2. Add resource rows\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Conference Room Alpha", type: "room" })\n\n// 3. Add an event today\nconst now = new Date()\nmanager.addEvent({\n  id: "evt-1",\n  title: "Sprint Architecture Sync",\n  startTime: now.toISOString(),\n  endTime: new Date(now.getTime() + 2 * 3600 * 1000).toISOString(),\n  resourceId: "alice",\n  color: "orange",\n})\n\nexport default function App() {\n  return (\n    <div style={{ height: "100vh", background: "#09090b" }}>\n      <Timeline allowCreate={true} showFab={true} />\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Timeline, SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 1. Create the manager once (outside render)</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>()</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 2. Add resource rows</span></div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>"alice"</span>, name: <span style={{ color: '#a3e635' }}>"Alice Fernando"</span>, type: <span style={{ color: '#a3e635' }}>"person"</span>{' }'})</div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>"room-a"</span>, name: <span style={{ color: '#a3e635' }}>"Conference Room Alpha"</span>, type: <span style={{ color: '#a3e635' }}>"room"</span>{' }'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// 3. Add an event today</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> now <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>Date</span>()</div>
          <div>manager.addEvent({'{'}</div>
          <div>  id: <span style={{ color: '#a3e635' }}>"evt-1"</span>,</div>
          <div>  title: <span style={{ color: '#a3e635' }}>"Sprint Architecture Sync"</span>,</div>
          <div>  startTime: now.toISOString(),</div>
          <div>  endTime: <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>Date</span>(now.getTime() + 2 * 3600 * 1000).toISOString(),</div>
          <div>  resourceId: <span style={{ color: '#a3e635' }}>"alice"</span>,</div>
          <div>  color: <span style={{ color: '#a3e635' }}>"orange"</span>,</div>
          <div>{'}'})</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export default function</span> <span style={{ color: '#7dd3fc' }}>App</span>() {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> (</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>div</span> style<span style={{ color: '#a1a1aa' }}>=</span>{'{'}{'{ height: '}<span style={{ color: '#a3e635' }}>"100vh"</span>, background: <span style={{ color: '#a3e635' }}>"#09090b"</span>{' }'}{'}'}<span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>      <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Timeline</span> allowCreate<span style={{ color: '#a1a1aa' }}>=</span>{'{'}true{'}'} showFab<span style={{ color: '#a1a1aa' }}>=</span>{'{'}true{'}'} <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>div</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>  )</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── STEP-BY-STEP INTEGRATION TUTORIAL ─────────────────────────── */}
      <h2 id="step-by-step" style={{ margin: '48px 0 0', font: '700 28px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.022em', color: 'var(--janus-text)' }}>
        Step-by-Step Integration Tutorial
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Follow these steps to assemble a full-featured scheduling dashboard with Topbar view switching, drag-and-drop gestures, modal creation/editing with participants, and conversational AI.
      </p>

      {/* STEP 1 */}
      <h3 id="step-1-manager" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 1: Setting up State &amp; Resources
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Create an initial array of <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>TimelineResource</code> items in standard React state. Each resource has an <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>id</code>, <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>name</code>, <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>subtitle</code>, and an array of <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>TimelineEvent</code> objects:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { useState } from "react"\nimport { Timeline, type TimelineResource, type TimelineEvent } from "@janus-scheduler/react"\n\nconst now = new Date()\nconst today9AM = new Date(now.setHours(9, 0, 0, 0)).getTime()\n\nexport default function SchedulerDashboard() {\n  const [resources, setResources] = useState<TimelineResource[]>([\n    {\n      id: "res-1",\n      name: "Alex Fernando",\n      subtitle: "Principal Engineer",\n      avatarType: "initials",\n      events: [\n        {\n          id: "evt-1",\n          title: "Architecture Planning",\n          resourceId: "res-1",\n          startTime: "09:00",\n          endTime: "11:00",\n          startMs: today9AM,\n          endMs: today9AM + 2 * 3600000,\n          color: "orange"\n        }\n      ]\n    }\n  ])\n\n  return <Timeline resources={resources} />\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ useState }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"react"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Timeline, type TimelineResource }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
        </CodeBlock>
      </div>

      {/* STEP 2 */}
      <h3 id="step-2-drag-drop" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 2: Handling Drag-and-Drop &amp; Edge Resizing
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        When the user drops an event onto a new track or drags its edge handles, the component emits <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onEventMove</code> or <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onEventResize</code>. Update the event's <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>startMs</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>endMs</code> timestamps:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`// 1. Move Event Handler\nconst handleEventMove = (detail: EventMoveDetail) => {\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n\n  setResources(prev =>\n    prev.map(resource => {\n      const filtered = resource.events.filter(e => e.id !== detail.event.id)\n      if (resource.id === detail.newResourceId) {\n        return {\n          ...resource,\n          events: [\n            ...filtered,\n            {\n              ...detail.event,\n              resourceId: detail.newResourceId,\n              startTime: new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),\n              endTime: new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),\n              startMs: newStartMs,\n              endMs: newEndMs\n            }\n          ]\n        }\n      }\n      return { ...resource, events: filtered }\n    })\n  )\n}\n\n// 2. Resize Event Handler\nconst handleEventResize = (detail: EventResizeDetail) => {\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n\n  setResources(prev =>\n    prev.map(resource => {\n      if (resource.id === detail.resourceId) {\n        return {\n          ...resource,\n          events: resource.events.map(e =>\n            e.id === detail.event.id\n              ? {\n                  ...e,\n                  startTime: new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),\n                  endTime: new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),\n                  startMs: newStartMs,\n                  endMs: newEndMs\n                }\n              : e\n          )\n        }\n      }\n      return resource\n    })\n  )\n}`}>
          <div><span style={{ color: '#52525b' }}>// Handles drag &amp; drop between tracks and times</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> handleEventMove <span style={{ color: '#a1a1aa' }}>=</span> (detail: <span style={{ color: '#7dd3fc' }}>EventMoveDetail</span>) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} ... {'}'}</div>
        </CodeBlock>
      </div>

      {/* STEP 3 */}
      <h3 id="step-3-topbar" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 3: Topbar Navigation &amp; View Switching
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Topbar&gt;</code> component to switch between Timeline, Day, Week, and Month views, and navigate weeks with Prev/Next buttons:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`const [currentView, setCurrentView] = useState<ViewType>('Timeline')\nconst [currentDate, setCurrentDate] = useState<Date>(new Date())\n\nreturn (\n  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>\n    <Topbar\n      navLabel={currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}\n      dayName={currentDate.toLocaleString('default', { weekday: 'short' })}\n      shortDate={currentDate.toLocaleString('default', { month: 'short', day: 'numeric' })}\n      view={currentView}\n      views={['Timeline', 'Day', 'Week', 'Month']}\n      allowCreate={true}\n      onPrevClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() - 7)))}\n      onNextClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() + 7)))}\n      onTodayClick={() => setCurrentDate(new Date())}\n      onViewSwitch={({ view }) => setCurrentView(view)}\n      onToggleCreate={() => openCreateModal()}\n    />\n    <div style={{ flex: 1 }}>\n      {currentView === 'Timeline' && <Timeline resources={resources} />}\n      {currentView === 'Day' && <DayGrid />}\n      {currentView === 'Week' && <WeekGrid />}\n      {currentView === 'Month' && <MonthGrid />}\n    </div>\n  </div>\n)`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Topbar</span></div>
          <div>  view<span style={{ color: '#a1a1aa' }}>=</span>{'{currentView}'}</div>
          <div>  views<span style={{ color: '#a1a1aa' }}>=</span>{'{[\'Timeline\', \'Day\', \'Week\', \'Month\']}'}</div>
          <div>  onViewSwitch<span style={{ color: '#a1a1aa' }}>=</span>{'{({ view }) => setCurrentView(view)}'}</div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 4 */}
      <h3 id="step-4-modal" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 4: Event Editor Modal with Participants (<code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>&lt;Scheduler&gt;</code>)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Open the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Scheduler&gt;</code> modal when clicking an event or dragging on empty grid space to select participants, colors, and times:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`{isModalOpen && (\n  <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>\n    <div style={{ width: "100%", maxWidth: "540px", background: "#18181b", borderRadius: "16px", overflow: "hidden" }}>\n      <Scheduler\n        title={selectedEvent?.title || ""}\n        startTime={selectedEvent?.startTime || "09:00"}\n        endTime={selectedEvent?.endTime || "10:00"}\n        activeColor={selectedEvent?.color || "orange"}\n        participants={[\n          "Alice Fernando (alice@example.com)",\n          "Bob Wickrama (bob@example.com)",\n          "Conference Room Alpha"\n        ]}\n        preventConflicts={true}\n        onClose={() => setIsModalOpen(false)}\n        onSave={(data: SchedulerSaveData) => {\n          saveEventToState(data)\n          setIsModalOpen(false)\n        }}\n        onDelete={({ id }) => {\n          deleteEventFromState(id)\n          setIsModalOpen(false)\n        }}\n      />\n    </div>\n  </div>\n)}`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Scheduler</span></div>
          <div>  title<span style={{ color: '#a1a1aa' }}>=</span>{'{selectedEvent?.title || ""}'}</div>
          <div>  participants<span style={{ color: '#a1a1aa' }}>=</span>{'{["Alice Fernando", "Bob Wickrama"]}'}</div>
          <div>  onSave<span style={{ color: '#a1a1aa' }}>=</span>{'{handleModalSave}'}</div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 5 */}
      <h3 id="step-5-ai-chat" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 5: Conversational AI Scheduling Assistant
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Add client-side NLP scheduling with the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>useJanusChat</code> hook and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Chat&gt;</code> sidebar:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { Chat, useJanusChat, SchedulerManager } from "@janus-scheduler/react"\n\nexport function SchedulingAssistant({ manager }: { manager: SchedulerManager }) {\n  const chat = useJanusChat({\n    onCommit: (event) => {\n      manager.addEvent(event)\n    },\n  })\n\n  return (\n    <Chat\n      messages={chat.thread}\n      busy={chat.busy}\n      onChatSubmit={({ text }) => chat.submit(text)}\n      onChatClarifyResponse={({ label }) => chat.choose(label)}\n      onChatConfirm={() => chat.confirm()}\n      onChatUndo={({ messageId }) => chat.undo(messageId)}\n    />\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>const</span> chat <span style={{ color: '#a1a1aa' }}>=</span> useJanusChat({'{ onCommit: (evt) => manager.addEvent(evt) }'})</div>
        </CodeBlock>
      </div>

      {/* ── CORE CONCEPTS ─────────────────────────── */}
      <h2 id="core-concepts" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Core Concepts</h2>
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

      {/* Topbar Props */}
      <h3 style={{ margin: '32px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Topbar Props</h3>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.2fr 2fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Prop</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Type</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>
          <PropRow3 prop="navLabel" type="string" desc="Month and year heading label (e.g. 'September 2026')." />
          <PropRow3 prop="dayName" type="string" desc="Short weekday label (e.g. 'Wed')." />
          <PropRow3 prop="shortDate" type="string" desc="Short date label (e.g. 'Sep 2')." />
          <PropRow3 prop="view" type="ViewType" desc="Currently active view: 'Timeline' | 'Day' | 'Week' | 'Month'." />
          <PropRow3 prop="views" type="ViewType[]" desc="Ordered list of view tabs to display." />
          <PropRow3 prop="canUndo" type="boolean" desc="Enables/disables the topbar Undo button based on manager undo stack." />
          <PropRow3 prop="isGoogleCalendarConnected" type="boolean" desc="Controls Google Calendar sync indicator and connect/disconnect button state." />
          <PropRow3 prop="showBenchmarkBtn" type="boolean" desc="Shows the live performance benchmark suite toggle." isLast />
        </div>
      </div>

      {/* ── CALLBACKS ─────────────────────────── */}
      <h2 id="callbacks" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Callbacks</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus automatically unwraps the underlying DOM <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>CustomEvent</code> — your callback receives the strongly-typed payload directly.
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

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager — The Public API</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        The <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code> is the complete orchestration API. Every mutating method performs an optimistic store update and invokes your lifecycle hooks with automatic error rollback:
      </p>

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
          <PropRow4 c1="deleteAssignment(id)" c2="string" c3="boolean" c4="Removes an assignment by ID." isLast />
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
        <CodeBlock codeString={`:root {\n  --janus-accent: #f97316;\n  --janus-accent-tint: rgba(249, 115, 22, 0.12);\n  --janus-accent-text: #c2560a;\n  --janus-bg: #09090b;\n  --janus-surface: #18181b;\n  --janus-border: #27272a;\n  --janus-text: #fafafa;\n  --janus-text-secondary: #a1a1aa;\n  --janus-text-muted: #71717a;\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>:root</span> {'{'}</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-accent</span>: <span style={{ color: '#a3e635' }}>#f97316</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-bg</span>: <span style={{ color: '#a3e635' }}>#09090b</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-surface</span>: <span style={{ color: '#a3e635' }}>#18181b</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-border</span>: <span style={{ color: '#a3e635' }}>#27272a</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-text</span>: <span style={{ color: '#a3e635' }}>#fafafa</span>;</div>
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

      {/* ── TYPES ─────────────────────────── */}
      <h2 id="types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Types</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import all TypeScript types directly from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/react</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  SchedulerDeleteData,\n  TimeGridEvent,\n  SlotSelectDetail,\n  TimeGridEventMoveDetail,\n  TimeGridEventResizeDetail,\n  ViewType,\n  EventColor,\n  SchedulerHooks,\n  SchedulerConfig,\n  UndoAction,\n  MonthEvent,\n  EventData,\n  ResourceData,\n  AssignmentData,\n  ResourceTypeConfig,\n  ChatMessage,\n  ChatSuggestion,\n  ChatSubmitDetail,\n  ChatActionDetail,\n  ChatClarifyResponseDetail,\n} from "@janus-scheduler/react"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent,</div>
          <div>  TimelineResource,</div>
          <div>  EventMoveDetail,</div>
          <div>  EventResizeDetail,</div>
          <div>  EventCreateDetail,</div>
          <div>  SchedulerSaveData,</div>
          <div>  SchedulerDeleteData,</div>
          <div>  TimeGridEvent,</div>
          <div>  ViewType,</div>
          <div>  EventColor,</div>
          <div>  ChatMessage,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/react"</span></div>
        </CodeBlock>
      </div>

      {/* ── FULL EXAMPLE ─────────────────────────── */}
      <h2 id="full-example" style={{ margin: '48px 0 0', font: '700 26px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
        Full Production Template
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        A complete, production-ready React component with Topbar view navigation, drag &amp; drop, modal event creation/editing with participants, and API synchronization:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import { useState, useRef } from "react"\nimport {\n  Topbar,\n  Timeline,\n  Scheduler,\n  MonthGrid,\n  DayGrid,\n  WeekGrid,\n  type ViewType,\n  type TimelineResource,\n  type TimelineEvent,\n  type EventMoveDetail,\n  type EventResizeDetail,\n  type EventCreateDetail,\n  type SchedulerSaveData,\n} from "@janus-scheduler/react"\n\nconst now = new Date()\nnow.setHours(9, 0, 0, 0)\nconst startMs = now.getTime()\nconst endMs = startMs + 2 * 3600000\n\nconst INITIAL_RESOURCES: TimelineResource[] = [\n  {\n    id: "res-1",\n    name: "Alex Fernando",\n    subtitle: "Principal Architect",\n    avatarType: "initials",\n    events: [\n      {\n        id: "evt-1",\n        title: "Sprint Kickoff & Architecture Review",\n        resourceId: "res-1",\n        startTime: "09:00",\n        endTime: "11:00",\n        startMs,\n        endMs,\n        color: "orange"\n      }\n    ]\n  },\n  {\n    id: "res-2",\n    name: "Conference Room Alpha",\n    subtitle: "Capacity: 16 · AV Enabled",\n    avatarType: "initials",\n    events: []\n  }\n]\n\nconst PARTICIPANTS = [\n  "Alex Fernando (alex@example.com)",\n  "Bob Wickrama (bob@example.com)",\n  "Conference Room Alpha"\n]\n\nexport default function App() {\n  const [resources, setResources] = useState<TimelineResource[]>(INITIAL_RESOURCES)\n  const [currentView, setCurrentView] = useState<ViewType>("Timeline")\n  const [currentDate, setCurrentDate] = useState<Date>(new Date())\n  const [isModalOpen, setIsModalOpen] = useState(false)\n  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)\n  const [targetResId, setTargetResId] = useState("res-1")\n\n  const formatTime = (ms: number) => {\n    const d = new Date(ms)\n    return \`\${String(d.getHours()).padStart(2, '0')}:\${String(d.getMinutes()).padStart(2, '0')}\`\n  }\n\n  // Move Event (Drag & Drop)\n  const handleEventMove = (detail: EventMoveDetail) => {\n    const newStartMs = new Date(detail.newStartTime).getTime()\n    const newEndMs = new Date(detail.newEndTime).getTime()\n    setResources(prev =>\n      prev.map(r => {\n        const remaining = r.events.filter(e => e.id !== detail.event.id)\n        if (r.id === detail.newResourceId) {\n          return {\n            ...r,\n            events: [\n              ...remaining,\n              {\n                ...detail.event,\n                resourceId: detail.newResourceId,\n                startTime: formatTime(newStartMs),\n                endTime: formatTime(newEndMs),\n                startMs: newStartMs,\n                endMs: newEndMs\n              }\n            ]\n          }\n        }\n        return { ...r, events: remaining }\n      })\n    )\n  }\n\n  return (\n    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#09090b", color: "#fafafa" }}>\n      <Topbar\n        navLabel={currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}\n        dayName={currentDate.toLocaleString('default', { weekday: 'short' })}\n        shortDate={currentDate.toLocaleString('default', { month: 'short', day: 'numeric' })}\n        view={currentView}\n        views={['Timeline', 'Day', 'Week', 'Month']}\n        allowCreate={true}\n        onPrevClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() - 7)))}\n        onNextClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() + 7)))}\n        onTodayClick={() => setCurrentDate(new Date())}\n        onViewSwitch={({ view }) => setCurrentView(view)}\n        onToggleCreate={() => { setSelectedEvent(null); setIsModalOpen(true); }}\n      />\n      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>\n        {currentView === "Timeline" && (\n          <Timeline\n            resources={resources}\n            allowCreate={true}\n            showFab={true}\n            preventConflicts={true}\n            onEventClick={(evt) => { setSelectedEvent(evt); setTargetResId(evt.resourceId || "res-1"); setIsModalOpen(true); }}\n            onEventMove={handleEventMove}\n            onAddEvent={() => { setSelectedEvent(null); setIsModalOpen(true); }}\n          />\n        )}\n        {currentView === "Month" && <MonthGrid />}\n      </div>\n\n      {isModalOpen && (\n        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>\n          <div style={{ width: "100%", maxWidth: "540px", background: "#18181b", borderRadius: "16px", overflow: "hidden" }}>\n            <Scheduler\n              title={selectedEvent?.title || ""}\n              startTime={selectedEvent?.startTime || "09:00"}\n              endTime={selectedEvent?.endTime || "10:00"}\n              activeColor={selectedEvent?.color || "orange"}\n              participants={PARTICIPANTS}\n              preventConflicts={true}\n              onClose={() => setIsModalOpen(false)}\n              onSave={(data) => { setIsModalOpen(false); }}\n            />\n          </div>\n        </div>\n      )}\n    </div>\n  )\n}`} />
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
