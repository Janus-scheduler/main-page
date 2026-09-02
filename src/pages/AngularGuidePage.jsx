import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function AngularGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#quickstart" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>60-Second Quickstart</a>
      <a href="#step-by-step" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Step-by-Step Tutorial</a>
      <a href="#step-1-state" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>1. State &amp; Resources</a>
      <a href="#step-2-drag-drop" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>2. Drag &amp; Drop / Resize</a>
      <a href="#step-3-topbar" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>3. Topbar &amp; Views</a>
      <a href="#step-4-modal" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>4. Editor Modal &amp; Participants</a>
      <a href="#step-5-ai-chat" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>5. AI Scheduling (Service)</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components &amp; Selectors</a>
      <a href="#inputs" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Signal Inputs (Props)</a>
      <a href="#outputs" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Signal Outputs (Events)</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager API</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
      <a href="#full-example" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Full Production Template</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/angular" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Angular</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Angular Component Guide</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler provides first-class Angular support via <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/angular</code>. The package contains standalone Angular components that wrap the Web Components from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code> with signal-based <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>input()</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>output()</code> bindings and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>OnPush</code> change detection.
      </p>

      <Callout type="info" style={{ marginTop: '16px' }}>
        The Angular package re-exports everything from <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code>. Single-line installation via <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>npm install @janus-scheduler/angular</code> handles all dependencies automatically.
      </Callout>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Install the Janus Scheduler Angular package:</p>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/angular">npm install @janus-scheduler/angular</CodeBlock></div>
      <Callout type="tip" style={{ marginTop: '20px', padding: '20px 22px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '10px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/angular">pnpm add @janus-scheduler/angular</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/angular">yarn add @janus-scheduler/angular</CodeBlock>
        </div>
      </Callout>

      {/* ── 60-SECOND QUICKSTART ─────────────────────────── */}
      <h2 id="quickstart" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>60-Second Quickstart</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Import <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>TimelineComponent</code> into your standalone Angular component and seed resources with the <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code>:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="app.component.ts" codeString={`import { Component } from '@angular/core';\nimport { TimelineComponent, SchedulerManager } from '@janus-scheduler/angular';\n\nconst manager = new SchedulerManager();\nmanager.addResource({ id: 'alice', name: 'Alice Fernando', type: 'person' });\nmanager.addResource({ id: 'room-a', name: 'Conference Room Alpha', type: 'room' });\n\nconst now = new Date();\nmanager.addEvent({\n  id: 'evt-1',\n  title: 'Sprint Architecture Sync',\n  startTime: now.toISOString(),\n  endTime: new Date(now.getTime() + 2 * 3600 * 1000).toISOString(),\n  resourceId: 'alice',\n  color: 'orange',\n});\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [TimelineComponent],\n  template: \`\n    <div style="height: 100vh; background: #09090b;">\n      <janus-timeline-ng [allowCreate]="true" [showFab]="true" />\n    </div>\n  \`,\n})\nexport class AppComponent {}\n`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ Component }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@angular/core'</span>;</div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ TimelineComponent, SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/angular'</span>;</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>();</div>
          <div>manager.addResource({'{ id: '}<span style={{ color: '#a3e635' }}>'alice'</span>, name: <span style={{ color: '#a3e635' }}>'Alice Fernando'</span>, type: <span style={{ color: '#a3e635' }}>'person'</span>{' }'});</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>@Component</span>({'{'}</div>
          <div>  selector: <span style={{ color: '#a3e635' }}>'app-root'</span>,</div>
          <div>  standalone: <span style={{ color: '#7dd3fc' }}>true</span>,</div>
          <div>  imports: [TimelineComponent],</div>
          <div>  template: <span style={{ color: '#a3e635' }}>{"`"}</span></div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline-ng</span> [allowCreate]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"true"</span> [showFab]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"true"</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>  <span style={{ color: '#a3e635' }}>{"`"}</span>,</div>
          <div>{'}'})</div>
          <div><span style={{ color: '#f97316' }}>export class</span> <span style={{ color: '#7dd3fc' }}>AppComponent</span> {'{}'}</div>
        </CodeBlock>
      </div>

      {/* ── STEP-BY-STEP TUTORIAL ─────────────────────────── */}
      <h2 id="step-by-step" style={{ margin: '48px 0 0', font: '700 28px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.022em', color: 'var(--janus-text)' }}>
        Step-by-Step Integration Tutorial
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Follow these steps to build a complete Angular scheduling dashboard with Topbar navigation, drag &amp; drop event moving, resizing, and the participant editor modal.
      </p>

      {/* STEP 1 */}
      <h3 id="step-1-state" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 1: Managing Resources &amp; Timestamps in Angular
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Store an array of <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>TimelineResource</code> objects on your component. Each event needs <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>startMs</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>endMs</code> timestamps for exact grid alignment:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { Component, signal } from '@angular/core';\nimport { TimelineComponent, type TimelineResource } from '@janus-scheduler/angular';\n\nconst now = new Date();\nnow.setHours(9, 0, 0, 0);\nconst startMs = now.getTime();\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [TimelineComponent],\n  template: \`<janus-timeline-ng [resources]="resources()" />\`\n})\nexport class AppComponent {\n  readonly resources = signal<TimelineResource[]>([\n    {\n      id: 'res-1',\n      name: 'Alice Fernando',\n      subtitle: 'Principal Architect',\n      avatarType: 'initials',\n      events: [\n        {\n          id: 'e1',\n          title: 'Architecture Review',\n          resourceId: 'res-1',\n          startTime: '09:00',\n          endTime: '11:00',\n          startMs,\n          endMs: startMs + 2 * 3600000,\n          color: 'orange'\n        }\n      ]\n    }\n  ]);\n}`}>
          <div><span style={{ color: '#f97316' }}>readonly</span> resources <span style={{ color: '#a1a1aa' }}>=</span> signal&lt;<span style={{ color: '#7dd3fc' }}>TimelineResource[]</span>&gt;([...]);</div>
        </CodeBlock>
      </div>

      {/* STEP 2 */}
      <h3 id="step-2-drag-drop" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 2: Wiring Drag &amp; Drop Movement and Edge Resizing
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Listen to the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>(eventMove)</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>(eventResize)</code> outputs to recalculate start/end timestamps and update Angular state:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`onEventMove(detail: EventMoveDetail) {\n  const newStartMs = new Date(detail.newStartTime).getTime();\n  const newEndMs = new Date(detail.newEndTime).getTime();\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n\n  this.resources.update(prev =>\n    prev.map(r => {\n      const remaining = r.events.filter(e => e.id !== detail.event.id);\n      if (r.id === detail.newResourceId) {\n        return {\n          ...r,\n          events: [\n            ...remaining,\n            { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }\n          ]\n        };\n      }\n      return { ...r, events: remaining };\n    })\n  );\n}\n\nonEventResize(detail: EventResizeDetail) {\n  const newStartMs = new Date(detail.newStartTime).getTime();\n  const newEndMs = new Date(detail.newEndTime).getTime();\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n\n  this.resources.update(prev =>\n    prev.map(r => r.id === detail.resourceId\n      ? { ...r, events: r.events.map(e => e.id === detail.event.id ? { ...e, startTime, endTime, startMs: newStartMs, endMs: newEndMs } : e) }\n      : r\n    )\n  );\n}`}>
          <div><span style={{ color: '#52525b' }}>// Drag and drop event move handler</span></div>
          <div><span style={{ color: '#7dd3fc' }}>onEventMove</span>(detail: <span style={{ color: '#7dd3fc' }}>EventMoveDetail</span>) {'{ ... }'}</div>
        </CodeBlock>
      </div>

      {/* STEP 3 */}
      <h3 id="step-3-topbar" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 3: Topbar Navigation &amp; Multi-View Switcher
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-topbar-ng&gt;</code> to switch views dynamically between Timeline, Day, Week, and Month grids:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`<janus-topbar-ng\n  [navLabel]="navLabel()"\n  [dayName]="dayName()"\n  [shortDate]="shortDate()"\n  [view]="currentView()"\n  [views]="['Timeline', 'Day', 'Week', 'Month']"\n  [allowCreate]="true"\n  (prevClick)="navigateWeek(-7)"\n  (nextClick)="navigateWeek(7)"\n  (todayClick)="resetToday()"\n  (viewSwitch)="currentView.set($event.view)"\n  (toggleCreate)="openModal()"\n/>\n\n@if (currentView() === 'Timeline') {\n  <janus-timeline-ng [resources]="resources()" (eventMove)="onEventMove($event)" />\n} @else if (currentView() === 'Month') {\n  <janus-month-grid-ng />\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-topbar-ng</span></div>
          <div>  [view]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"currentView()"</span></div>
          <div>  [views]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"['Timeline', 'Day', 'Week', 'Month']"</span></div>
          <div>  (viewSwitch)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"currentView.set($event.view)"</span></div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 4 */}
      <h3 id="step-4-modal" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 4: Event Editor Modal with Participants (<code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>&lt;janus-scheduler-ng&gt;</code>)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Render <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-scheduler-ng&gt;</code> in a modal dialog with participant pickers and color selectors:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`@if (isModalOpen()) {\n  <div class="modal-backdrop">\n    <div class="modal-card">\n      <janus-scheduler-ng\n        [title]="selectedEvent()?.title || ''"\n        [startTime]="selectedEvent()?.startTime || '09:00'"\n        [endTime]="selectedEvent()?.endTime || '10:00'"\n        [activeColor]="selectedEvent()?.color || 'orange'"\n        [participants]="['Alice Fernando (alice@example.com)', 'Bob Wickrama', 'Conference Room Alpha']"\n        [preventConflicts]="true"\n        (save)="handleSave($event)"\n        (delete)="handleDelete($event)"\n        (close)="isModalOpen.set(false)"\n      />\n    </div>\n  </div>\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-scheduler-ng</span></div>
          <div>  [participants]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"availableParticipants"</span></div>
          <div>  (save)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"handleSave($event)"</span></div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 5 */}
      <h3 id="step-5-ai-chat" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 5: Conversational AI with <code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>JanusChatService</code>
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Inject <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>JanusChatService</code> and attach the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-chat-ng&gt;</code> sidebar for prompt disambiguation and AI scheduling:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { Component, inject } from '@angular/core';\nimport { ChatComponent, JanusChatService, SchedulerManager } from '@janus-scheduler/angular';\n\n@Component({\n  selector: 'app-assistant',\n  standalone: true,\n  imports: [ChatComponent],\n  providers: [JanusChatService],\n  template: \`\n    <janus-chat-ng\n      [messages]="chat.thread()"\n      [busy]="chat.busy()"\n      (chatSubmit)="chat.submit($event.text)"\n      (chatClarifyResponse)="chat.choose($event.label)"\n      (chatConfirm)="chat.confirm()"\n      (chatUndo)="chat.undo($event.messageId)"\n    />\n  \`\n})\nexport class AssistantComponent {\n  readonly chat = inject(JanusChatService);\n}`}>
          <div><span style={{ color: '#f97316' }}>readonly</span> chat <span style={{ color: '#a1a1aa' }}>=</span> inject(<span style={{ color: '#7dd3fc' }}>JanusChatService</span>);</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS TABLE ─────────────────────────── */}
      <h2 id="components" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components &amp; Selectors</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 2fr' }}>
          <TH>Component</TH><TH>Selector</TH><TH>Description</TH>
          <TR3 c1="TimelineComponent" c2="<janus-timeline-ng>" c3="Horizontal multi-resource timeline with drag & drop, edge resizing, and conflict detection." />
          <TR3 c1="SchedulerComponent" c2="<janus-scheduler-ng>" c3="Event editor modal with time pickers, participant tags, recurrence, and colors." />
          <TR3 c1="TopbarComponent" c2="<janus-topbar-ng>" c3="Header toolbar providing view switching, prev/next/today pagination, and undo CTA." />
          <TR3 c1="MonthGridComponent" c2="<janus-month-grid-ng>" c3="Classic 7-column monthly overview calendar." />
          <TR3 c1="DayGridComponent" c2="<janus-day-grid-ng>" c3="Single-day vertical time grid with snap-to-grid slot selection." />
          <TR3 c1="WeekGridComponent" c2="<janus-week-grid-ng>" c3="7-day multi-column vertical time grid." />
          <TR3 c1="YearGridComponent" c2="<janus-year-grid-ng>" c3="12-month overview calendar with day density heatmaps." />
          <TR3 c1="ChatComponent" c2="<janus-chat-ng>" c3="Conversational NLP scheduling sidebar with clarify chips and parse preview." />
          <TR3 c1="AiBarComponent" c2="<janus-ai-bar-ng>" c3="Standalone natural language scheduling input bar." isLast />
        </div>
      </div>

      {/* ── INPUTS TABLE ─────────────────────────── */}
      <h2 id="inputs" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Signal Inputs (Properties)</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 0.8fr 2fr' }}>
          <TH>Input</TH><TH>Type</TH><TH>Default</TH><TH>Description</TH>
          <TR4 c1="[resources]" c2="TimelineResource[]" c3="undefined" c4="Array of resource rows and their assigned events." />
          <TR4 c1="[allowCreate]" c2="boolean" c3="false" c4="Enables drag-to-create on empty grid tracks." />
          <TR4 c1="[showFab]" c2="boolean" c3="false" c4="Shows floating + Add Event action button." />
          <TR4 c1="[preventConflicts]" c2="boolean" c3="false" c4="When true, drops or resizes causing conflicts are strictly blocked." />
          <TR4 c1="[timezone]" c2="string" c3="system" c4="Target IANA display timezone (e.g. 'Asia/Colombo')." />
          <TR4 c1="[view]" c2="ViewType" c3="'Timeline'" c4="Currently active view: 'Timeline' | 'Day' | 'Week' | 'Month'." />
          <TR4 c1="[views]" c2="ViewType[]" c3="['Day','Week','Month','Timeline']" c4="Ordered array of view tab choices on Topbar." isLast />
        </div>
      </div>

      {/* ── OUTPUTS TABLE ─────────────────────────── */}
      <h2 id="outputs" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Signal Outputs (Events)</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <TH>Output</TH><TH>Payload Type</TH><TH>Description</TH>
          <TR3 c1="(eventClick)" c2="TimelineEvent" c3="Emitted when clicking an event block on the timeline grid." />
          <TR3 c1="(eventMove)" c2="EventMoveDetail" c3="Emitted when dropping an event onto a new time or resource track." />
          <TR3 c1="(eventResize)" c2="EventResizeDetail" c3="Emitted when resizing event start/end boundary handles." />
          <TR3 c1="(eventCreate)" c2="EventCreateDetail" c3="Emitted when dragging across an empty track interval." />
          <TR3 c1="(addEvent)" c2="void" c3="Emitted when the Add FAB button is clicked." />
          <TR3 c1="(save)" c2="SchedulerSaveData" c3="Emitted when saving in the <janus-scheduler-ng> modal." />
          <TR3 c1="(delete)" c2="{ id, title }" c3="Emitted when deleting an event from the modal." />
          <TR3 c1="(close)" c2="void" c3="Emitted when closing the modal dialog." isLast />
        </div>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager API</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code> in Angular services or components for optimistic state mutations:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`import { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\nimport { SchedulerManager, type EventData } from '@janus-scheduler/angular';\n\n@Injectable({ providedIn: 'root' })\nexport class ScheduleService {\n  private readonly http = inject(HttpClient);\n\n  readonly manager = new SchedulerManager({\n    onEventAdd: async (event) => {\n      await this.http.post('/api/events', event).toPromise();\n    },\n    onEventUpdate: async (event) => {\n      await this.http.patch(\`/api/events/\${event.id}\`, event).toPromise();\n    },\n    onEventDelete: async (id) => {\n      await this.http.delete(\`/api/events/\${id}\`).toPromise();\n    },\n    onError: ({ operation, error }) => {\n      alert(\`\${operation} failed — reverted state automatically.\`);\n    }\n  });\n}`}>
          <div><span style={{ color: '#f97316' }}>@Injectable</span>({'{ providedIn: \'root\' }'})</div>
          <div><span style={{ color: '#f97316' }}>export class</span> <span style={{ color: '#7dd3fc' }}>ScheduleService</span> {'{ ... }'}</div>
        </CodeBlock>
      </div>

      {/* ── THEMING ─────────────────────────── */}
      <h2 id="theming" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Theming</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Define CSS custom properties in your global <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>styles.css</code>:</p>
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
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  TimeGridEvent,\n  ViewType,\n  EventColor,\n  ChatMessage,\n} from "@janus-scheduler/angular"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{ TimelineEvent, TimelineResource, EventMoveDetail, ViewType }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/angular"</span></div>
        </CodeBlock>
      </div>

      {/* ── FULL EXAMPLE ─────────────────────────── */}
      <h2 id="full-example" style={{ margin: '48px 0 0', font: '700 26px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
        Full Production Template
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        A complete, standalone Angular 18/19 component with Topbar view switcher, drag &amp; drop, and modal event editing:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="app.component.ts" codeString={`import { Component, signal } from '@angular/core';\nimport {\n  TimelineComponent,\n  SchedulerComponent,\n  TopbarComponent,\n  MonthGridComponent,\n  type ViewType,\n  type TimelineResource,\n  type TimelineEvent,\n  type EventMoveDetail,\n  type EventResizeDetail,\n  type SchedulerSaveData,\n} from '@janus-scheduler/angular';\n\nconst now = new Date();\nnow.setHours(9, 0, 0, 0);\nconst startMs = now.getTime();\n\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  imports: [TimelineComponent, SchedulerComponent, TopbarComponent, MonthGridComponent],\n  template: \`\n    <div style="height: 100vh; display: flex; flex-direction: column; background: #09090b; color: #fafafa;">\n      <janus-topbar-ng\n        [navLabel]="'September 2026'"\n        [dayName]="'Wed'"\n        [shortDate]="'Sep 2'"\n        [view]="currentView()"\n        [views]="['Timeline', 'Day', 'Week', 'Month']"\n        [allowCreate]="true"\n        (viewSwitch)="currentView.set($event.view)"\n        (toggleCreate)="openCreateModal()"\n      />\n\n      <div style="flex: 1; position: relative; overflow: hidden;">\n        @if (currentView() === 'Timeline') {\n          <janus-timeline-ng\n            [resources]="resources()"\n            [allowCreate]="true"\n            [showFab]="true"\n            [preventConflicts]="true"\n            (eventClick)="onEventClick($event)"\n            (eventMove)="onEventMove($event)"\n            (eventResize)="onEventResize($event)"\n            (addEvent)="openCreateModal()"\n          />\n        } @else if (currentView() === 'Month') {\n          <janus-month-grid-ng />\n        }\n      </div>\n\n      @if (isModalOpen()) {\n        <div style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 1000;">\n          <div style="width: 100%; maxWidth: 540px; background: #18181b; border-radius: 16px; overflow: hidden;">\n            <janus-scheduler-ng\n              [title]="selectedEvent()?.title || ''"\n              [startTime]="selectedEvent()?.startTime || '09:00'"\n              [endTime]="selectedEvent()?.endTime || '10:00'"\n              [activeColor]="selectedEvent()?.color || 'orange'"\n              [participants]="['Alice Fernando', 'Bob Wickrama', 'Conference Room Alpha']"\n              [preventConflicts]="true"\n              (save)="handleSave($event)"\n              (close)="isModalOpen.set(false)"\n            />\n          </div>\n        </div>\n      }\n    </div>\n  \`\n})\nexport class AppComponent {\n  readonly currentView = signal<ViewType>('Timeline');\n  readonly isModalOpen = signal(false);\n  readonly selectedEvent = signal<TimelineEvent | null>(null);\n\n  readonly resources = signal<TimelineResource[]>([\n    {\n      id: 'res-1',\n      name: 'Alice Fernando',\n      subtitle: 'Principal Architect',\n      avatarType: 'initials',\n      events: [\n        {\n          id: 'e1',\n          title: 'Sprint Architecture Kickoff',\n          resourceId: 'res-1',\n          startTime: '09:00',\n          endTime: '11:00',\n          startMs,\n          endMs: startMs + 2 * 3600000,\n          color: 'orange'\n        }\n      ]\n    }\n  ]);\n\n  openCreateModal() {\n    this.selectedEvent.set(null);\n    this.isModalOpen.set(true);\n  }\n\n  onEventClick(event: TimelineEvent) {\n    this.selectedEvent.set(event);\n    this.isModalOpen.set(true);\n  }\n\n  onEventMove(detail: EventMoveDetail) {\n    const newStartMs = new Date(detail.newStartTime).getTime();\n    const newEndMs = new Date(detail.newEndTime).getTime();\n    const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n    const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n\n    this.resources.update(prev =>\n      prev.map(r => {\n        const rem = r.events.filter(e => e.id !== detail.event.id);\n        if (r.id === detail.newResourceId) {\n          return { ...r, events: [...rem, { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }] };\n        }\n        return { ...r, events: rem };\n      })\n    );\n  }\n\n  onEventResize(detail: EventResizeDetail) {\n    const newStartMs = new Date(detail.newStartTime).getTime();\n    const newEndMs = new Date(detail.newEndTime).getTime();\n    const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n    const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });\n\n    this.resources.update(prev =>\n      prev.map(r => r.id === detail.resourceId\n        ? { ...r, events: r.events.map(e => e.id === detail.event.id ? { ...e, startTime, endTime, startMs: newStartMs, endMs: newEndMs } : e) }\n        : r\n      )\n    );\n  }\n\n  handleSave(data: SchedulerSaveData) {\n    this.isModalOpen.set(false);\n  }\n}`} />
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/frameworks/react" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif' }}>Framework guide: React</span>
        </Link>
        <Link to="/docs/frameworks/solid" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Solid</span>
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
