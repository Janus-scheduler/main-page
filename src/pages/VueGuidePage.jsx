import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function VueGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#setup" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Setup</a>
      <a href="#basic-usage" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Basic Usage</a>
      <a href="#composables" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Composables</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#events" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Events</a>
      <a href="#conflict-management" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Conflict Management</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/vue" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Vue</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Vue Component</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler works with Vue by using the Lit Web Components directly  no dedicated wrapper package is needed. Vue has excellent native support for custom elements, so you simply import the web components and the core API, then use them in your templates.
      </p>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Data state (events, resources, assignments) lives in the Zustand store managed by SchedulerManager  not in Vue's reactivity system. This keeps the architecture clean and avoids double-binding issues.
      </p>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Since Vue uses the web components directly, install core and ui:</p>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/core @janus-scheduler/ui">npm install @janus-scheduler/core @janus-scheduler/ui</CodeBlock></div>
      <Callout type="tip" style={{ marginTop: '20px', padding: '20px 22px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '10px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/core @janus-scheduler/ui">pnpm add @janus-scheduler/core @janus-scheduler/ui</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/core @janus-scheduler/ui">yarn add @janus-scheduler/core @janus-scheduler/ui</CodeBlock>
        </div>
      </Callout>

      {/* ── SETUP ─────────────────────────── */}
      <h2 id="setup" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Setup</h2>
      <h3 style={{ margin: '20px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Configure Vue for Custom Elements</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Tell Vue to treat &lt;janus-*&gt; tags as custom elements so it doesn't try to resolve them as Vue components. Add this to your Vite config:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock title="vite.config.ts" codeString={`import { defineConfig } from "vite"\nimport vue from "@vitejs/plugin-vue"\n\nexport default defineConfig({\n  plugins: [\n    vue({\n      template: {\n        compilerOptions: {\n          // Treat <janus-*> as custom elements\n          isCustomElement: (tag) => tag.startsWith("janus-"),\n        },\n      },\n    }),\n  ],\n})`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ defineConfig }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"vite"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> vue <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@vitejs/plugin-vue"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export default</span> <span style={{ color: '#7dd3fc' }}>defineConfig</span>({'{'}</div>
          <div>  plugins: [</div>
          <div>    <span style={{ color: '#7dd3fc' }}>vue</span>({'{'}</div>
          <div>      template: {'{'}</div>
          <div>        compilerOptions: {'{'}</div>
          <div>          isCustomElement: (tag) <span style={{ color: '#a1a1aa' }}>=&gt;</span> tag.startsWith(<span style={{ color: '#a3e635' }}>"janus-"</span>),</div>
          <div>        {'}'},</div>
          <div>      {'}'},</div>
          <div>    {'}'}),</div>
          <div>  ],</div>
          <div>{'}'})</div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Register the Web Components</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import @janus-scheduler/ui once in your entry point to register all custom elements:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock title="main.ts" codeString={`import { createApp } from "vue"\nimport "@janus-scheduler/ui"  // registers <janus-timeline>, <janus-scheduler>, etc.\nimport App from "./App.vue"\n\ncreateApp(App).mount("#app")`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ createApp }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"vue"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/ui"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> App <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"./App.vue"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#7dd3fc' }}>createApp</span>(App).mount(<span style={{ color: '#a3e635' }}>"#app"</span>)</div>
        </CodeBlock>
      </div>

      {/* ── BASIC USAGE ─────────────────────────── */}
      <h2 id="basic-usage" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Basic Usage</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="App.vue" codeString={`<template>\n  <div style="height: 100vh">\n    <janus-timeline\n      ref="timelineRef"\n      @event-click="onEventClick"\n      @event-move="onEventMove"\n      @add-event="onAddEvent"\n    />\n    <janus-scheduler\n      v-if="showScheduler"\n      :event-id="selectedEventId"\n      @save="onSave"\n      @close="showScheduler = false"\n    />\n  </div>\n</template>\n\n<script setup lang="ts">\nimport { ref } from "vue"\nimport { SchedulerManager, getBrowserTimezone, zonedInputToISO } from "@janus-scheduler/core"\nimport type { TimelineEvent, EventMoveDetail, SchedulerSaveData } from "@janus-scheduler/core"\n\nconst showScheduler = ref(false)\nconst selectedEventId = ref<string | null>(null)\n\nconst manager = new SchedulerManager({\n  onEventAdd: async (event) => {\n    await fetch("/api/events", { method: "POST", body: JSON.stringify(event) })\n  },\n  onError: ({ operation }) => { alert(\`\${operation} failed.\`) },\n})\n\n// Seed data\nmanager.addResource({ id: "alice", name: "Alice Fernando", type: "person" })\nmanager.addResource({ id: "room-a", name: "Room A", type: "room" })\n\nconst today = new Date().toISOString().split("T")[0]\nconst tz = getBrowserTimezone()\n\nmanager.addEvent({\n  id: "evt-1",\n  title: "Design Review",\n  startTime: zonedInputToISO(today, "09:00", tz),\n  endTime: zonedInputToISO(today, "11:30", tz),\n  resourceId: "alice",\n})\nmanager.addAssignment({ id: "a1", eventId: "evt-1", resourceId: "alice" })\n\nfunction onEventClick(e: CustomEvent<TimelineEvent>) {\n  selectedEventId.value = e.detail.id\n  showScheduler.value = true\n}\n\nfunction onEventMove(e: CustomEvent<EventMoveDetail>) {\n  manager.updateEvent(e.detail.event.id, {\n    startTime: e.detail.newStartTime,\n    endTime: e.detail.newEndTime,\n  })\n}\n\nfunction onAddEvent() {\n  selectedEventId.value = null\n  showScheduler.value = true\n}\n\nfunction onSave(e: CustomEvent<SchedulerSaveData>) {\n  const data = e.detail\n  if (data.id) manager.updateEvent(data.id, { title: data.title })\n  showScheduler.value = false\n}\n</script>`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>template</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>  <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline</span></div>
          <div>    ref<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timelineRef"</span></div>
          <div>    @event-click<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onEventClick"</span></div>
          <div>  <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>  <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-scheduler</span></div>
          <div>    v-if<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"showScheduler"</span></div>
          <div>    :event-id<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"selectedEventId"</span></div>
          <div>    @save<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onSave"</span></div>
          <div>  <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>template</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>script</span> setup lang<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"ts"</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ ref }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"vue"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>function</span> <span style={{ color: '#7dd3fc' }}>onEventClick</span>(e: CustomEvent<span style={{ color: '#a1a1aa' }}>&lt;</span>TimelineEvent<span style={{ color: '#a1a1aa' }}>&gt;</span>) {'{'}</div>
          <div>  selectedEventId.value <span style={{ color: '#a1a1aa' }}>=</span> e.detail.id</div>
          <div>  showScheduler.value <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#7dd3fc' }}>true</span></div>
          <div>{'}'}</div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>script</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Important: Event Handling in Vue</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Since Vue uses the web components directly (no wrapper), callbacks receive raw DOM CustomEvent objects. You must access .detail to get the payload:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`<script setup lang="ts">\n// ✅ Vue — you receive the raw CustomEvent\nfunction onEventClick(e: CustomEvent<TimelineEvent>) {\n  const event = e.detail  // ← unwrap manually\n  console.log("Clicked:", event.title)\n}\n\n// ❌ This is wrong in Vue (works in React/Solid/Angular wrappers, not Vue)\n// function onEventClick(event: TimelineEvent) { ... }\n</script>`}>
          <div><span style={{ color: '#52525b' }}>// ✅ Vue — you receive the raw CustomEvent</span></div>
          <div><span style={{ color: '#f97316' }}>function</span> <span style={{ color: '#7dd3fc' }}>onEventClick</span>(e: CustomEvent<span style={{ color: '#a1a1aa' }}>&lt;</span>TimelineEvent<span style={{ color: '#a1a1aa' }}>&gt;</span>) {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>const</span> event <span style={{ color: '#a1a1aa' }}>=</span> e.detail</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Setting Properties (Not Attributes)</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Some props like resources (arrays/objects) must be set as properties, not HTML attributes. Use Vue's .prop modifier or the : binding with ref:</p>
      <div style={{ marginTop: '20px' }}>
        <CodeBlock codeString={`<template>\n  <janus-timeline ref="timelineRef" />\n</template>\n\n<script setup lang="ts">\nimport { ref, onMounted, watch } from "vue"\n\nconst timelineRef = ref<HTMLElement | null>(null)\nconst myResources = ref([\n  { id: "alice", name: "Alice Fernando", type: "person" },\n  { id: "room-a", name: "Room A", type: "room" },\n])\n\n// Set complex properties after mount\nonMounted(() => {\n  if (timelineRef.value) {\n    (timelineRef.value as any).resources = myResources.value\n  }\n})\n\n// Watch for changes\nwatch(myResources, (newVal) => {\n  if (timelineRef.value) {\n    (timelineRef.value as any).resources = newVal\n  }\n}, { deep: true })\n</script>`}>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>script</span> setup lang<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"ts"</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ ref, onMounted, watch }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"vue"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> timelineRef <span style={{ color: '#a1a1aa' }}>=</span> ref<span style={{ color: '#a1a1aa' }}>&lt;</span>HTMLElement | <span style={{ color: '#7dd3fc' }}>null</span><span style={{ color: '#a1a1aa' }}>&gt;</span>(<span style={{ color: '#7dd3fc' }}>null</span>)</div>
          <div><span style={{ color: '#7dd3fc' }}>onMounted</span>(() <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>if</span> (timelineRef.value) {'{'}</div>
          <div>    (timelineRef.value <span style={{ color: '#f97316' }}>as any</span>).resources <span style={{ color: '#a1a1aa' }}>=</span> myResources.value</div>
          <div>  {'}'}</div>
          <div>{'}'})</div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;/</span><span style={{ color: '#7dd3fc' }}>script</span><span style={{ color: '#a1a1aa' }}>&gt;</span></div>
        </CodeBlock>
      </div>

      {/* ── COMPOSABLES ─────────────────────────── */}
      <h2 id="composables" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Composables</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>We recommend creating a composable for the SchedulerManager to keep your components clean:</p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`// composables/useSchedulerManager.ts\nimport { SchedulerManager, getBrowserTimezone, zonedInputToISO } from "@janus-scheduler/core"\n\nexport interface HookError {\n  operation: string\n  message: string\n}\n\nexport function useSchedulerManager(onError: (err: HookError) => void) {\n  const manager = new SchedulerManager({\n    onEventAdd: async (event) => {\n      await fetch("/api/events", { method: "POST", body: JSON.stringify(event) })\n    },\n    onError: ({ operation, error }) => {\n      const message = error instanceof Error ? error.message : "An unexpected error occurred"\n      onError({ operation, message })\n    },\n  })\n  return manager\n}`}>
          <div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>useSchedulerManager</span>(onError: (err: HookError) <span style={{ color: '#a1a1aa' }}>=&gt;</span> <span style={{ color: '#a3e635' }}>void</span>) {'{'}</div>
          <div>  <span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{ ... }'})</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> manager</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS ─────────────────────────── */}
      <h2 id="components" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components (Web Component Tags)</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr' }}>
          <TH>Tag</TH><TH>Description</TH>
          <TR2 c1="<janus-timeline>" c2="Horizontal timeline grid with drag-and-drop." />
          <TR2 c1="<janus-month-grid>" c2="Monthly calendar view." />
          <TR2 c1="<janus-day-grid>" c2="Single-day hour grid view." />
          <TR2 c1="<janus-week-grid>" c2="Weekly hour grid view." />
          <TR2 c1="<janus-year-grid>" c2="Yearly overview." />
          <TR2 c1="<janus-scheduler>" c2="Event editor modal." />
          <TR2 c1="<janus-topbar>" c2="Navigation bar with view switching." />
          <TR2 c1="<janus-ai-bar>" c2="AI-powered scheduling input." />
          <TR2 c1="<janus-chat>" c2="Natural language chat interface." isLast />
        </div>
      </div>

      {/* ── EVENTS ─────────────────────────── */}
      <h2 id="events" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Custom Events Reference</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
          <TH>Event Name</TH><TH>Payload Type</TH><TH>Fired By</TH>
          <TR3 c1="event-click" c2="TimelineEvent" c3="Timeline, MonthGrid" />
          <TR3 c1="event-move" c2="EventMoveDetail" c3="Timeline" />
          <TR3 c1="event-resize" c2="EventResizeDetail" c3="Timeline" />
          <TR3 c1="event-create" c2="EventCreateDetail" c3="Timeline" />
          <TR3 c1="add-event" c2="void" c3="Timeline, MonthGrid" />
          <TR3 c1="view-change" c2="{ view: ViewType }" c3="Timeline, MonthGrid, YearGrid" />
          <TR3 c1="save" c2="SchedulerSaveData" c3="Scheduler" />
          <TR3 c1="delete" c2="SchedulerDeleteData" c3="Scheduler" />
          <TR3 c1="close" c2="void" c3="Scheduler" isLast />
        </div>
      </div>

      {/* ── CONFLICT MANAGEMENT ─────────────────────────── */}
      <h2 id="conflict-management" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Conflict Management</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock codeString={`<!-- Mode 1: Visual warnings (default) -->\n<janus-timeline />\n\n<!-- Mode 2: Hard blocking -->\n<janus-timeline prevent-conflicts="true" />`}>
          <div><span style={{ color: '#52525b' }}>&lt;!-- Mode 1: Visual warnings (default) --&gt;</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#52525b' }}>&lt;!-- Mode 2: Hard blocking --&gt;</span></div>
          <div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline</span> prevent-conflicts<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"true"</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
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
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import types from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/core</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  SchedulerDeleteData,\n  EventColor,\n  ViewType,\n  EventData,\n  ResourceData,\n  AssignmentData,\n  SchedulerHooks,\n} from "@janus-scheduler/core"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent, TimelineResource,</div>
          <div>  EventMoveDetail, EventResizeDetail,</div>
          <div>  EventCreateDetail, SchedulerSaveData,</div>
          <div>  SchedulerDeleteData, EventColor,</div>
          <div>  ViewType, EventData, ResourceData, AssignmentData,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
        </CodeBlock>
      </div>
      <Callout type="warning" style={{ marginTop: '14px' }}>Unlike React, Angular, and Solid (which have wrapper packages that re-export types), Vue imports types directly from @janus-scheduler/core. This is the intended approach.</Callout>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/frameworks/solid" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Solid</span>
        </Link>
        <Link to="/docs/api/janus-timeline" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>&lt;janus-timeline&gt;</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

function TH({ children }) {
  return <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>{children}</span>;
}

function TR2({ c1, c2, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (<>
    <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
    <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c2}</span>
  </>);
}

function TR3({ c1, c2, c3, isLast }) {
  const border = isLast ? 'none' : '1px solid var(--janus-border)';
  return (<>
    <span style={{ padding: '10px 18px', font: '500 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-text)', borderBottom: border }}>{c1}</span>
    <span style={{ padding: '10px 14px', font: '400 13px/1.45 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)', borderBottom: border }}>{c2}</span>
    <span style={{ padding: '10px 14px', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', borderBottom: border }}>{c3}</span>
  </>);
}
