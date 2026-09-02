import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function SolidGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#quickstart" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>60-Second Quickstart</a>
      <a href="#step-by-step" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Step-by-Step Tutorial</a>
      <a href="#step-1-state" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>1. State &amp; Signals</a>
      <a href="#step-2-drag-drop" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>2. Drag &amp; Drop / Resize</a>
      <a href="#step-3-topbar" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>3. Topbar &amp; Views</a>
      <a href="#step-4-modal" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>4. Editor Modal &amp; Participants</a>
      <a href="#step-5-ai-chat" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>5. AI Chat (createJanusChat)</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#props" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Props</a>
      <a href="#callbacks" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Callbacks</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager API</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
      <a href="#full-example" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Full Production Template</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/solid" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Solid</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>SolidJS Component Guide</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler provides first-class SolidJS support via <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/solid</code>. The package provides thin Solid components that wrap the Web Components from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code>. Reactive props are synchronized via <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>createEffect</code> and event listeners automatically hook into Solid lifecycle cleanups.
      </p>

      <Callout type="info" style={{ marginTop: '16px' }}>
        The Solid package re-exports everything you need from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code>. Single-line installation via <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>npm install @janus-scheduler/solid</code> handles all dependencies.
      </Callout>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/solid">npm install @janus-scheduler/solid</CodeBlock></div>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        All custom elements are registered automatically. You never need to install or import from core or ui directly.
      </p>
      <Callout type="tip" style={{ marginTop: '20px', padding: '20px 22px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '10px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/solid">pnpm add @janus-scheduler/solid</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/solid">yarn add @janus-scheduler/solid</CodeBlock>
        </div>
      </Callout>

      {/* ── 60-SECOND QUICKSTART ─────────────────────────── */}
      <h2 id="quickstart" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>60-Second Quickstart</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Seed resources with <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code> and render the auto-syncing <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>&lt;Timeline&gt;</code> component:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import { Timeline, SchedulerManager } from "@janus-scheduler/solid"\n\n// 1. Create the manager\nconst manager = new SchedulerManager()\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Conference Room Alpha", type: "room" })\n\n// 2. Add an event for today\nconst now = new Date()\nmanager.addEvent({\n  id: "evt-1",\n  title: "Sprint Kickoff & Architecture Review",\n  startTime: now.toISOString(),\n  endTime: new Date(now.getTime() + 2 * 3600 * 1000).toISOString(),\n  resourceId: "alice",\n  color: "orange"\n})\n\nexport default function App() {\n  return (\n    <div style={{ height: "100vh", background: "#09090b" }}>\n      <Timeline allowCreate={true} showFab={true} />\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Timeline, SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/solid"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>()</div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>"alice"</span>, name: <span style={{ color: '#a3e635' }}>"Alice Fernando"</span>, type: <span style={{ color: '#a3e635' }}>"person"</span>{' }'})</div>
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

      {/* ── STEP-BY-STEP TUTORIAL ─────────────────────────── */}
      <h2 id="step-by-step" style={{ margin: '48px 0 0', font: '700 28px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.022em', color: 'var(--janus-text)' }}>
        Step-by-Step Integration Tutorial
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Build a complete SolidJS scheduling app with Topbar view switcher, drag-and-drop movement, edge resizing, and the participant creation modal.
      </p>

      {/* STEP 1 */}
      <h3 id="step-1-state" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 1: Solid Signals for Resources &amp; Timestamps
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use Solid's fine-grained <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>createSignal</code> to hold your <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>TimelineResource[]</code>. Ensure each event has <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>startMs</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>endMs</code>:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { createSignal } from "solid-js"\nimport { Timeline, type TimelineResource, type TimelineEvent } from "@janus-scheduler/solid"\n\nconst now = new Date()\nnow.setHours(9, 0, 0, 0)\nconst startMs = now.getTime()\n\nexport default function App() {\n  const [resources, setResources] = createSignal<TimelineResource[]>([\n    {\n      id: "res-1",\n      name: "Alex Fernando",\n      subtitle: "Principal Architect",\n      avatarType: "initials",\n      events: [\n        {\n          id: "evt-1",\n          title: "Architecture Sync",\n          resourceId: "res-1",\n          startTime: "09:00",\n          endTime: "11:00",\n          startMs,\n          endMs: startMs + 2 * 3600000,\n          color: "orange"\n        }\n      ]\n    }\n  ])\n\n  return <Timeline resources={resources()} />\n}`}>
          <div><span style={{ color: '#f97316' }}>const</span> [resources, setResources] <span style={{ color: '#a1a1aa' }}>=</span> createSignal&lt;<span style={{ color: '#7dd3fc' }}>TimelineResource[]</span>&gt;([...])</div>
        </CodeBlock>
      </div>

      {/* STEP 2 */}
      <h3 id="step-2-drag-drop" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 2: Drag &amp; Drop Movement and Handle Resizing
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Bind <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onEventMove</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onEventResize</code> to recalculate timestamps:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`// 1. Drag & Drop Move Handler\nconst handleEventMove = (detail: EventMoveDetail) => {\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n  setResources(prev =>\n    prev.map(r => {\n      const remaining = r.events.filter(e => e.id !== detail.event.id)\n      if (r.id === detail.newResourceId) {\n        return {\n          ...r,\n          events: [\n            ...remaining,\n            { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }\n          ]\n        }\n      }\n      return { ...r, events: remaining }\n    })\n  )\n}\n\n// 2. Drag Edge Resize Handler\nconst handleEventResize = (detail: EventResizeDetail) => {\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n  setResources(prev =>\n    prev.map(r => r.id === detail.resourceId\n      ? { ...r, events: r.events.map(e => e.id === detail.event.id ? { ...e, startTime, endTime, startMs: newStartMs, endMs: newEndMs } : e) }\n      : r\n    )\n  )\n}`}>
          <div><span style={{ color: '#52525b' }}>// Updates timestamps upon event drop</span></div>
          <div><span style={{ color: '#f97316' }}>const</span> handleEventMove <span style={{ color: '#a1a1aa' }}>=</span> (detail: <span style={{ color: '#7dd3fc' }}>EventMoveDetail</span>) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{ ... }'}</div>
        </CodeBlock>
      </div>

      {/* STEP 3 */}
      <h3 id="step-3-topbar" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 3: Topbar Navigation &amp; View Switching
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Topbar&gt;</code> to switch between Timeline, Day, Week, and Month grids:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`const [currentView, setCurrentView] = createSignal<ViewType>("Timeline")\nconst [currentDate, setCurrentDate] = createSignal<Date>(new Date())\n\nreturn (\n  <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>\n    <Topbar\n      navLabel={currentDate().toLocaleString('default', { month: 'long', year: 'numeric' })}\n      dayName={currentDate().toLocaleString('default', { weekday: 'short' })}\n      shortDate={currentDate().toLocaleString('default', { month: 'short', day: 'numeric' })}\n      view={currentView()}\n      views={['Timeline', 'Day', 'Week', 'Month']}\n      allowCreate={true}\n      onPrevClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() - 7)))}\n      onNextClick={() => setCurrentDate(d => new Date(d.setDate(d.getDate() + 7)))}\n      onTodayClick={() => setCurrentDate(new Date())}\n      onViewSwitch={({ view }) => setCurrentView(view)}\n      onToggleCreate={() => openCreateModal()}\n    />\n    <div style={{ flex: 1 }}>\n      {currentView() === 'Timeline' && <Timeline resources={resources()} onEventMove={handleEventMove} />}\n      {currentView() === 'Month' && <MonthGrid />}\n      {currentView() === 'Day' && <DayGrid />}\n    </div>\n  </div>\n)`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Topbar</span></div>
          <div>  view<span style={{ color: '#a1a1aa' }}>=</span>{'{currentView()}'}</div>
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
        Render <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Scheduler&gt;</code> inside a modal dialog with participant pickers:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`{isModalOpen() && (\n  <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>\n    <div style={{ width: "100%", maxWidth: "540px", background: "#18181b", borderRadius: "16px", overflow: "hidden" }}>\n      <Scheduler\n        title={selectedEvent()?.title || ""}\n        startTime={selectedEvent()?.startTime || "09:00"}\n        endTime={selectedEvent()?.endTime || "10:00"}\n        activeColor={selectedEvent()?.color || "orange"}\n        participants={[\n          "Alice Fernando (alice@example.com)",\n          "Bob Wickrama",\n          "Conference Room Alpha"\n        ]}\n        preventConflicts={true}\n        onClose={() => setIsModalOpen(false)}\n        onSave={(data: SchedulerSaveData) => {\n          handleModalSave(data)\n          setIsModalOpen(false)\n        }}\n      />\n    </div>\n  </div>\n)}`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>Scheduler</span></div>
          <div>  participants<span style={{ color: '#a1a1aa' }}>=</span>{'{["Alice Fernando", "Bob Wickrama"]}'}</div>
          <div>  onSave<span style={{ color: '#a1a1aa' }}>=</span>{'{handleModalSave}'}</div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 5 */}
      <h3 id="step-5-ai-chat" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 5: Conversational AI with <code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>createJanusChat</code>
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        SolidJS provides the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>createJanusChat</code> primitive to connect the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;Chat&gt;</code> sidebar with client-side NLP:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { Chat, createJanusChat, SchedulerManager } from "@janus-scheduler/solid"\n\nexport function Assistant({ manager }: { manager: SchedulerManager }) {\n  const chat = createJanusChat({\n    onCommit: (event) => {\n      manager.addEvent(event)\n    },\n  })\n\n  return (\n    <Chat\n      messages={chat.thread()}\n      busy={chat.busy()}\n      onChatSubmit={({ text }) => chat.submit(text)}\n      onChatClarifyResponse={({ label }) => chat.choose(label)}\n      onChatConfirm={() => chat.confirm()}\n      onChatUndo={({ messageId }) => chat.undo(messageId)}\n    />\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>const</span> chat <span style={{ color: '#a1a1aa' }}>=</span> createJanusChat({'{ onCommit: (evt) => manager.addEvent(evt) }'})</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS TABLE ─────────────────────────── */}
      <h2 id="components" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import them directly from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/solid</code>:</p>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 2fr' }}>
          <TH>Component</TH><TH>Underlying Tag</TH><TH>Description</TH>
          <TR3 c1="<Timeline>" c2="<janus-timeline>" c3="Horizontal timeline grid with drag-and-drop event creation, resizing, and moving." />
          <TR3 c1="<MonthGrid>" c2="<janus-month-grid>" c3="7-column monthly overview calendar." />
          <TR3 c1="<DayGrid>" c2="<janus-day-grid>" c3="Single-day vertical hour grid." />
          <TR3 c1="<WeekGrid>" c2="<janus-week-grid>" c3="7-day multi-column vertical hour grid." />
          <TR3 c1="<YearGrid>" c2="<janus-year-grid>" c3="12-month overview calendar with day density heatmaps." />
          <TR3 c1="<Scheduler>" c2="<janus-scheduler>" c3="Event editor modal with time pickers, participants, and colors." />
          <TR3 c1="<Topbar>" c2="<janus-topbar>" c3="Header toolbar providing view switching and date navigation." />
          <TR3 c1="<Chat>" c2="<janus-chat>" c3="Conversational NLP scheduling sidebar." isLast />
        </div>
      </div>

      {/* ── PROPS ─────────────────────────── */}
      <h2 id="props" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Props</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 0.8fr 2fr' }}>
          <TH>Prop</TH><TH>Type</TH><TH>Default</TH><TH>Description</TH>
          <TR4 c1="resources" c2="TimelineResource[]" c3="auto from store" c4="Array of resource rows and their assigned events." />
          <TR4 c1="view" c2="ViewType" c3='"Timeline"' c4='Active view: "Timeline" | "Day" | "Week" | "Month".' />
          <TR4 c1="currentDate" c2="Date" c3="new Date()" c4="Date the timeline is centered on." />
          <TR4 c1="allowCreate" c2="boolean" c3="false" c4="Enables drag-to-create on empty grid tracks." />
          <TR4 c1="showFab" c2="boolean" c3="false" c4="Shows floating + Add Event action button." />
          <TR4 c1="preventConflicts" c2="boolean" c3="false" c4="When true, resource double-bookings are strictly blocked." />
          <TR4 c1="timezone" c2="string" c3="browser tz" c4="IANA timezone for display (e.g. 'Asia/Colombo')." isLast />
        </div>
      </div>

      {/* ── CALLBACKS ─────────────────────────── */}
      <h2 id="callbacks" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Callbacks</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <TH>Callback</TH><TH>Payload Type</TH><TH>Description</TH>
          <TR3 c1="onEventClick" c2="(detail: TimelineEvent) => void" c3="Fired when clicking an event block on the timeline grid." />
          <TR3 c1="onEventMove" c2="(detail: EventMoveDetail) => void" c3="Fired after dragging an event to a new time or resource track." />
          <TR3 c1="onEventResize" c2="(detail: EventResizeDetail) => void" c3="Fired after dragging event resize handles." />
          <TR3 c1="onEventCreate" c2="(detail: EventCreateDetail) => void" c3="Fired when dragging across an empty track interval." />
          <TR3 c1="onAddEvent" c2="() => void" c3="Fired when the Add FAB button is clicked." />
          <TR3 c1="onSave" c2="(detail: SchedulerSaveData) => void" c3="Fired when saving in the <Scheduler> modal." />
          <TR3 c1="onDelete" c2="(detail: { id, title }) => void" c3="Fired when deleting an event from the modal." />
          <TR3 c1="onClose" c2="() => void" c3="Fired when closing the modal dialog." isLast />
        </div>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager API</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code> for optimistic data mutations and API synchronization:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`const manager = new SchedulerManager({\n  onEventAdd: async (event) => {\n    await fetch("/api/events", { method: "POST", body: JSON.stringify(event) })\n  },\n  onEventUpdate: async (event) => {\n    await fetch(\`/api/events/\${event.id}\`, { method: "PATCH", body: JSON.stringify(event) })\n  },\n  onEventDelete: async (id) => {\n    await fetch(\`/api/events/\${id}\`, { method: "DELETE" })\n  },\n  onError: ({ operation }) => {\n    alert(\`\${operation} failed — your change was automatically reverted.\`)\n  }\n})`}>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{ ... }'})</div>
        </CodeBlock>
      </div>

      {/* ── THEMING ─────────────────────────── */}
      <h2 id="theming" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Theming</h2>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`:root {\n  --janus-accent: #f97316;\n  --janus-accent-tint: rgba(249, 115, 22, 0.12);\n  --janus-accent-text: #c2560a;\n  --janus-bg: #09090b;\n  --janus-surface: #18181b;\n  --janus-border: #27272a;\n  --janus-text: #fafafa;\n  --janus-text-secondary: #a1a1aa;\n  --janus-text-muted: #71717a;\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>:root</span> {'{'}</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-accent</span>: <span style={{ color: '#a3e635' }}>#f97316</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-bg</span>: <span style={{ color: '#a3e635' }}>#09090b</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-surface</span>: <span style={{ color: '#a3e635' }}>#18181b</span>;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── TYPES ─────────────────────────── */}
      <h2 id="types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Types</h2>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  ViewType,\n  EventColor,\n} from "@janus-scheduler/solid"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{ TimelineEvent, TimelineResource, EventMoveDetail, ViewType }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/solid"</span></div>
        </CodeBlock>
      </div>

      {/* ── FULL EXAMPLE ─────────────────────────── */}
      <h2 id="full-example" style={{ margin: '48px 0 0', font: '700 26px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
        Full Production Template
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        A complete SolidJS component with Topbar view switcher, drag &amp; drop, and modal event editing:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.tsx" codeString={`import { createSignal } from "solid-js"\nimport {\n  Topbar,\n  Timeline,\n  Scheduler,\n  MonthGrid,\n  type ViewType,\n  type TimelineResource,\n  type TimelineEvent,\n  type EventMoveDetail,\n  type EventResizeDetail,\n  type SchedulerSaveData,\n} from "@janus-scheduler/solid"\n\nconst now = new Date()\nnow.setHours(9, 0, 0, 0)\nconst startMs = now.getTime()\n\nexport default function App() {\n  const [resources, setResources] = createSignal<TimelineResource[]>([\n    {\n      id: "res-1",\n      name: "Alex Fernando",\n      subtitle: "Principal Architect",\n      avatarType: "initials",\n      events: [\n        {\n          id: "evt-1",\n          title: "Architecture Planning",\n          resourceId: "res-1",\n          startTime: "09:00",\n          endTime: "11:00",\n          startMs,\n          endMs: startMs + 2 * 3600000,\n          color: "orange"\n        }\n      ]\n    }\n  ])\n\n  const [currentView, setCurrentView] = createSignal<ViewType>("Timeline")\n  const [currentDate, setCurrentDate] = createSignal<Date>(new Date())\n  const [isModalOpen, setIsModalOpen] = createSignal(false)\n  const [selectedEvent, setSelectedEvent] = createSignal<TimelineEvent | null>(null)\n\n  const handleEventMove = (detail: EventMoveDetail) => {\n    const newStartMs = new Date(detail.newStartTime).getTime()\n    const newEndMs = new Date(detail.newEndTime).getTime()\n    const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n    const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n    setResources(prev =>\n      prev.map(r => {\n        const rem = r.events.filter(e => e.id !== detail.event.id)\n        if (r.id === detail.newResourceId) {\n          return { ...r, events: [...rem, { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }] }\n        }\n        return { ...r, events: rem }\n      })\n    )\n  }\n\n  return (\n    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: "#09090b", color: "#fafafa" }}>\n      <Topbar\n        navLabel={currentDate().toLocaleString('default', { month: 'long', year: 'numeric' })}\n        dayName={currentDate().toLocaleString('default', { weekday: 'short' })}\n        shortDate={currentDate().toLocaleString('default', { month: 'short', day: 'numeric' })}\n        view={currentView()}\n        views={['Timeline', 'Day', 'Week', 'Month']}\n        allowCreate={true}\n        onViewSwitch={({ view }) => setCurrentView(view)}\n        onToggleCreate={() => { setSelectedEvent(null); setIsModalOpen(true); }}\n      />\n      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>\n        {currentView() === "Timeline" && (\n          <Timeline\n            resources={resources()}\n            allowCreate={true}\n            showFab={true}\n            preventConflicts={true}\n            onEventClick={(evt) => { setSelectedEvent(evt); setIsModalOpen(true); }}\n            onEventMove={handleEventMove}\n            onAddEvent={() => { setSelectedEvent(null); setIsModalOpen(true); }}\n          />\n        )}\n        {currentView() === "Month" && <MonthGrid />}\n      </div>\n\n      {isModalOpen() && (\n        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>\n          <div style={{ width: "100%", maxWidth: "540px", background: "#18181b", borderRadius: "16px", overflow: "hidden" }}>\n            <Scheduler\n              title={selectedEvent()?.title || ""}\n              startTime={selectedEvent()?.startTime || "09:00"}\n              endTime={selectedEvent()?.endTime || "10:00"}\n              activeColor={selectedEvent()?.color || "orange"}\n              participants={[\"Alice Fernando\", \"Bob Wickrama\", \"Conference Room Alpha\"]}\n              preventConflicts={true}\n              onClose={() => setIsModalOpen(false)}\n              onSave={() => setIsModalOpen(false)}\n            />\n          </div>\n        </div>\n      )}\n    </div>\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>export default function</span> <span style={{ color: '#7dd3fc' }}>App</span>() {'{ ... }'}</div>
        </CodeBlock>
      </div>

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

/* ── Helper table row components ─────────────────────────── */
function TH({ children }) {
  return (
    <span style={{ padding: '9px 16px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>
      {children}
    </span>
  );
}

function TR3({ c1, c2, c3, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 16px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
      <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c3}</span>
    </>
  );
}

function TR4({ c1, c2, c3, c4, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 16px', font: '500 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
      <span style={{ padding: '10px 14px', font: '400 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
      <span style={{ padding: '10px 14px', font: '400 12.5px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', borderBottom: border }}>{c3}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c4}</span>
    </>
  );
}
