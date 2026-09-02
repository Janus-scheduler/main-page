import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function VueGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install &amp; Setup</a>
      <a href="#quickstart" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>60-Second Quickstart</a>
      <a href="#step-by-step" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Step-by-Step Tutorial</a>
      <a href="#step-1-state" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>1. State &amp; Resources</a>
      <a href="#step-2-drag-drop" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>2. Drag &amp; Drop / Resize</a>
      <a href="#step-3-topbar" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>3. Topbar &amp; Views</a>
      <a href="#step-4-modal" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>4. Editor Modal &amp; Participants</a>
      <a href="#step-5-ai-chat" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>5. Conversational AI Chat</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Custom Elements</a>
      <a href="#props" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Properties &amp; Attributes</a>
      <a href="#events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Custom Events</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager API</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
      <a href="#full-example" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Full Production Template</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/vue" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Vue</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Vue 3 Component Guide</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler works seamlessly in Vue 3 via standard Custom Elements powered by Lit. Vue has first-class native support for custom elements, enabling direct reactive property binding with <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>:prop</code> and custom event listening with <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@event</code>.
      </p>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install &amp; Setup</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Install the core orchestration library and UI elements:</p>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/core @janus-scheduler/ui">npm install @janus-scheduler/core @janus-scheduler/ui</CodeBlock></div>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Configure Vite for Custom Elements</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Tell Vue to treat <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-*&gt;</code> tags as custom elements in <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>vite.config.ts</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock title="vite.config.ts" codeString={`import { defineConfig } from "vite"\nimport vue from "@vitejs/plugin-vue"\n\nexport default defineConfig({\n  plugins: [\n    vue({\n      template: {\n        compilerOptions: {\n          isCustomElement: (tag) => tag.startsWith("janus-"),\n        },\n      },\n    }),\n  ],\n})`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ defineConfig }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"vite"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> vue <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@vitejs/plugin-vue"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>// Configure Vite to recognize &lt;janus-*&gt; tags</span></div>
          <div><span style={{ color: '#7dd3fc' }}>isCustomElement</span>: (tag) <span style={{ color: '#a1a1aa' }}>=&gt;</span> tag.startsWith(<span style={{ color: '#a3e635' }}>"janus-"</span>)</div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Register Web Components</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</code> once in your entry point (<code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>main.ts</code>):</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock title="main.ts" codeString={`import { createApp } from "vue"\nimport "@janus-scheduler/ui"  // registers <janus-timeline>, <janus-scheduler>, <janus-topbar>\nimport App from "./App.vue"\n\ncreateApp(App).mount("#app")`}>
          <div><span style={{ color: '#f97316' }}>import</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/ui"</span>  <span style={{ color: '#52525b' }}>// registers &lt;janus-timeline&gt;, etc.</span></div>
        </CodeBlock>
      </div>

      {/* ── 60-SECOND QUICKSTART ─────────────────────────── */}
      <h2 id="quickstart" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>60-Second Quickstart</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Create a scheduler manager and render the auto-syncing <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>&lt;janus-timeline&gt;</code> custom element in Vue 3:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.vue" codeString={`<template>\n  <div style="height: 100vh; background: #09090b;">\n    <janus-timeline allow-create show-fab />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { SchedulerManager } from "@janus-scheduler/core"\n\nconst manager = new SchedulerManager()\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Conference Room Alpha", type: "room" })\n\nconst now = new Date()\nmanager.addEvent({\n  id: "evt-1",\n  title: "Sprint Architecture Kickoff",\n  startTime: now.toISOString(),\n  endTime: new Date(now.getTime() + 2 * 3600 * 1000).toISOString(),\n  resourceId: "alice",\n  color: "orange",\n})\n</script>`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>template</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>  <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline</span> allow-create show-fab <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>template</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
        </CodeBlock>
      </div>

      {/* ── STEP-BY-STEP TUTORIAL ─────────────────────────── */}
      <h2 id="step-by-step" style={{ margin: '48px 0 0', font: '700 28px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.022em', color: 'var(--janus-text)' }}>
        Step-by-Step Integration Tutorial
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Build a complete Vue 3 scheduling dashboard with Topbar navigation, drag-and-drop movement, edge resizing, and the participant creation modal.
      </p>

      {/* STEP 1 */}
      <h3 id="step-1-state" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 1: Managing Resources &amp; Timestamps with Vue 3 <code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>ref()</code>
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Declare a reactive <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>ref&lt;TimelineResource[]&gt;</code>. Pass it as a DOM property using <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>.prop</code> or <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>:resources</code>:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { ref } from "vue"\nimport type { TimelineResource, TimelineEvent } from "@janus-scheduler/core"\n\nconst now = new Date()\nnow.setHours(9, 0, 0, 0)\nconst startMs = now.getTime()\n\nconst resources = ref<TimelineResource[]>([\n  {\n    id: "res-1",\n    name: "Alex Fernando",\n    subtitle: "Principal Architect",\n    avatarType: "initials",\n    events: [\n      {\n        id: "evt-1",\n        title: "Sprint Review",\n        resourceId: "res-1",\n        startTime: "09:00",\n        endTime: "11:00",\n        startMs,\n        endMs: startMs + 2 * 3600000,\n        color: "orange"\n      }\n    ]\n  }\n])`}>
          <div><span style={{ color: '#f97316' }}>const</span> resources <span style={{ color: '#a1a1aa' }}>=</span> ref&lt;<span style={{ color: '#7dd3fc' }}>TimelineResource[]</span>&gt;([...])</div>
        </CodeBlock>
      </div>

      {/* STEP 2 */}
      <h3 id="step-2-drag-drop" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 2: Drag &amp; Drop Event Movement &amp; Resizing
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Listen to the DOM custom events <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@event-move</code> and <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>@event-resize</code>:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`// 1. Move Event Handler\nfunction onEventMove(e: CustomEvent<EventMoveDetail>) {\n  const detail = e.detail\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n  resources.value = resources.value.map(r => {\n    const rem = r.events.filter(ev => ev.id !== detail.event.id)\n    if (r.id === detail.newResourceId) {\n      return {\n        ...r,\n        events: [\n          ...rem,\n          { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }\n        ]\n      }\n    }\n    return { ...r, events: rem }\n  })\n}\n\n// 2. Resize Event Handler\nfunction onEventResize(e: CustomEvent<EventResizeDetail>) {\n  const detail = e.detail\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n  resources.value = resources.value.map(r =>\n    r.id === detail.resourceId\n      ? { ...r, events: r.events.map(ev => ev.id === detail.event.id ? { ...ev, startTime, endTime, startMs: newStartMs, endMs: newEndMs } : ev) }\n      : r\n  )\n}`}>
          <div><span style={{ color: '#52525b' }}>// Updates timestamps upon event drag-and-drop</span></div>
          <div><span style={{ color: '#f97316' }}>function</span> <span style={{ color: '#7dd3fc' }}>onEventMove</span>(e: <span style={{ color: '#7dd3fc' }}>CustomEvent&lt;EventMoveDetail&gt;</span>) {'{ ... }'}</div>
        </CodeBlock>
      </div>

      {/* STEP 3 */}
      <h3 id="step-3-topbar" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 3: Topbar Navigation &amp; View Switching
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Use <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-topbar&gt;</code> to switch between Timeline, Day, Week, and Month grids in Vue:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`<template>\n  <janus-topbar\n    :nav-label="currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })"\n    :day-name="currentDate.toLocaleString('default', { weekday: 'short' })"\n    :short-date="currentDate.toLocaleString('default', { month: 'short', day: 'numeric' })"\n    :view="currentView"\n    .views="['Timeline', 'Day', 'Week', 'Month']"\n    allow-create\n    @prev-click="navigateWeek(-7)"\n    @next-click="navigateWeek(7)"\n    @today-click="currentDate = new Date()"\n    @view-switch="(e) => currentView = e.detail.view"\n    @toggle-create="openCreateModal"\n  />\n\n  <janus-timeline v-if="currentView === 'Timeline'" :resources="resources" @event-move="onEventMove" />\n  <janus-month-grid v-else-if="currentView === 'Month'" />\n  <janus-day-grid v-else-if="currentView === 'Day'" />\n</template>`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-topbar</span></div>
          <div>  :view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"currentView"</span></div>
          <div>  .views<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"['Timeline', 'Day', 'Week', 'Month']"</span></div>
          <div>  @view-switch<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"(e) =&gt; currentView = e.detail.view"</span></div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 4 */}
      <h3 id="step-4-modal" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 4: Event Editor Modal with Participants (<code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>&lt;janus-scheduler&gt;</code>)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Render <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-scheduler&gt;</code> in a modal dialog with participant pickers:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`<div v-if="isModalOpen" class="modal-backdrop">\n  <div class="modal-card">\n    <janus-scheduler\n      :title="selectedEvent?.title || ''"\n      :start-time="selectedEvent?.startTime || '09:00'"\n      :end-time="selectedEvent?.endTime || '10:00'"\n      :active-color="selectedEvent?.color || 'orange'"\n      .participants="['Alice Fernando (alice@example.com)', 'Bob Wickrama', 'Conference Room Alpha']"\n      prevent-conflicts\n      @save="onSave"\n      @delete="onDelete"\n      @close="isModalOpen = false"\n    />\n  </div>\n</div>`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-scheduler</span></div>
          <div>  .participants<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"['Alice Fernando', 'Bob Wickrama']"</span></div>
          <div>  @save<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onSave"</span></div>
          <div><span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
        </CodeBlock>
      </div>

      {/* STEP 5 */}
      <h3 id="step-5-ai-chat" style={{ margin: '36px 0 0', font: '600 20px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Step 5: Conversational AI Scheduling (<code style={{ font: '500 18px/1 "JetBrains Mono", monospace' }}>&lt;janus-chat&gt;</code>)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Connect the NLP Chat Controller to the <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>&lt;janus-chat&gt;</code> sidebar:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock codeString={`import { ChatController } from "@janus-scheduler/nlp"\n\nconst controller = new ChatController({\n  onCommit: (event) => {\n    manager.addEvent(event)\n  }\n})\n\n// Pass controller.messages to <janus-chat .messages="controller.messages" />`}>
          <div><span style={{ color: '#f97316' }}>const</span> controller <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>ChatController</span>({'{ onCommit: (evt) => manager.addEvent(evt) }'})</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS TABLE ─────────────────────────── */}
      <h2 id="components" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Custom Elements</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 2.6fr' }}>
          <TH>Custom Element Tag</TH><TH>Description</TH>
          <TR2 c1="<janus-timeline>" c2="Horizontal multi-resource timeline with drag & drop, edge resizing, and collision detection." />
          <TR2 c1="<janus-scheduler>" c2="Event editor modal card with date/time pickers, participants, colors, and recurrence." />
          <TR2 c1="<janus-topbar>" c2="Header toolbar providing view switching, prev/next/today date pagination, and undo CTA." />
          <TR2 c1="<janus-month-grid>" c2="Classic 7-column monthly overview calendar." />
          <TR2 c1="<janus-day-grid>" c2="Single-day vertical time grid with hour slots." />
          <TR2 c1="<janus-week-grid>" c2="7-day multi-column vertical hour grid." />
          <TR2 c1="<janus-year-grid>" c2="12-month overview calendar with day density heatmaps." />
          <TR2 c1="<janus-chat>" c2="Conversational NLP scheduling sidebar with clarify chips and parse preview cards." isLast />
        </div>
      </div>

      {/* ── EVENTS TABLE ─────────────────────────── */}
      <h2 id="events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Custom Events</h2>
      <div style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1.3fr 2fr' }}>
          <TH>Event (@event)</TH><TH>Event Payload (e.detail)</TH><TH>Description</TH>
          <TR3 c1="@event-click" c2="TimelineEvent" c3="Fired when clicking an event block on the timeline grid." />
          <TR3 c1="@event-move" c2="EventMoveDetail" c3="Fired after dragging an event to a new time or resource track." />
          <TR3 c1="@event-resize" c2="EventResizeDetail" c3="Fired after dragging event resize handles." />
          <TR3 c1="@event-create" c2="EventCreateDetail" c3="Fired when dragging across an empty track interval." />
          <TR3 c1="@add-event" c2="void" c3="Fired when the Add FAB button is clicked." />
          <TR3 c1="@save" c2="SchedulerSaveData" c3="Fired when saving in the <janus-scheduler> modal." />
          <TR3 c1="@delete" c2="{ id, title }" c3="Fired when deleting an event from the modal." />
          <TR3 c1="@close" c2="void" c3="Fired when closing the modal dialog." isLast />
        </div>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager API</h2>
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
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  ViewType,\n  EventColor,\n} from "@janus-scheduler/core"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{ TimelineEvent, TimelineResource, EventMoveDetail, ViewType }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
        </CodeBlock>
      </div>

      {/* ── FULL EXAMPLE ─────────────────────────── */}
      <h2 id="full-example" style={{ margin: '48px 0 0', font: '700 26px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
        Full Production Template
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        A complete Vue 3 Single-File Component (<code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>App.vue</code>) with Topbar view switcher, drag &amp; drop, and modal event editing:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.vue" codeString={`<template>\n  <div style="height: 100vh; display: flex; flex-direction: column; background: #09090b; color: #fafafa;">\n    <janus-topbar\n      :nav-label="currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })"\n      :day-name="currentDate.toLocaleString('default', { weekday: 'short' })"\n      :short-date="currentDate.toLocaleString('default', { month: 'short', day: 'numeric' })"\n      :view="currentView"\n      .views="['Timeline', 'Day', 'Week', 'Month']"\n      allow-create\n      @prev-click="navigateWeek(-7)"\n      @next-click="navigateWeek(7)"\n      @today-click="currentDate = new Date()"\n      @view-switch="(e: any) => currentView = e.detail.view"\n      @toggle-create="openCreateModal"\n    />\n\n    <div style="flex: 1; position: relative; overflow: hidden;">\n      <janus-timeline\n        v-if="currentView === 'Timeline'"\n        :resources="resources"\n        allow-create\n        show-fab\n        prevent-conflicts\n        @event-click="onEventClick"\n        @event-move="onEventMove"\n        @add-event="openCreateModal"\n      />\n      <janus-month-grid v-else-if="currentView === 'Month'" />\n    </div>\n\n    <div v-if="isModalOpen" style="position: fixed; inset: 0; background: rgba(0,0,0,0.75); display: flex; align-items: center; justify-content: center; z-index: 1000;">\n      <div style="width: 100%; max-width: 540px; background: #18181b; border-radius: 16px; overflow: hidden;">\n        <janus-scheduler\n          :title="selectedEvent?.title || ''"\n          :start-time="selectedEvent?.startTime || '09:00'"\n          :end-time="selectedEvent?.endTime || '10:00'"\n          :active-color="selectedEvent?.color || 'orange'"\n          .participants="['Alice Fernando', 'Bob Wickrama', 'Conference Room Alpha']"\n          prevent-conflicts\n          @close="isModalOpen = false"\n          @save="onSave"\n        />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue"\nimport type { TimelineResource, TimelineEvent, EventMoveDetail, ViewType } from "@janus-scheduler/core"\n\nconst now = new Date()\nnow.setHours(9, 0, 0, 0)\nconst startMs = now.getTime()\n\nconst currentView = ref<ViewType>("Timeline")\nconst currentDate = ref(new Date())\nconst isModalOpen = ref(false)\nconst selectedEvent = ref<TimelineEvent | null>(null)\n\nconst resources = ref<TimelineResource[]>([\n  {\n    id: "res-1",\n    name: "Alex Fernando",\n    subtitle: "Principal Architect",\n    avatarType: "initials",\n    events: [\n      {\n        id: "evt-1",\n        title: "Architecture Planning",\n        resourceId: "res-1",\n        startTime: "09:00",\n        endTime: "11:00",\n        startMs,\n        endMs: startMs + 2 * 3600000,\n        color: "orange"\n      }\n    ]\n  }\n])\n\nfunction navigateWeek(days: number) {\n  const d = new Date(currentDate.value)\n  d.setDate(d.getDate() + days)\n  currentDate.value = d\n}\n\nfunction openCreateModal() {\n  selectedEvent.value = null\n  isModalOpen.value = true\n}\n\nfunction onEventClick(e: CustomEvent<TimelineEvent>) {\n  selectedEvent.value = e.detail\n  isModalOpen.value = true\n}\n\nfunction onEventMove(e: CustomEvent<EventMoveDetail>) {\n  const detail = e.detail\n  const newStartMs = new Date(detail.newStartTime).getTime()\n  const newEndMs = new Date(detail.newEndTime).getTime()\n  const startTime = new Date(newStartMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n  const endTime = new Date(newEndMs).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })\n\n  resources.value = resources.value.map(r => {\n    const rem = r.events.filter(ev => ev.id !== detail.event.id)\n    if (r.id === detail.newResourceId) {\n      return { ...r, events: [...rem, { ...detail.event, resourceId: detail.newResourceId, startTime, endTime, startMs: newStartMs, endMs: newEndMs }] }\n    }\n    return { ...r, events: rem }\n  })\n}\n\nfunction onSave() {\n  isModalOpen.value = false\n}\n</script>`}>
          <div><span style={{ color: '#f97316' }}>&lt;template&gt;</span> ... <span style={{ color: '#f97316' }}>&lt;/template&gt;</span></div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/frameworks/solid" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Solid</span>
        </Link>
        <Link to="/docs/api/janus-timeline" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>API Reference: Components</span>
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

function TR2({ c1, c2, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (
    <>
      <span style={{ padding: '10px 16px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
      <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c2}</span>
    </>
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
