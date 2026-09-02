import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import { Link } from 'react-router-dom';

export default function SchedulerManagerPage() {
  const toc = (
    <>
      <a href="#overview" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Overview</a>
      <a href="#constructor" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Constructor &amp; Hooks</a>
      <a href="#methods" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Methods</a>
      <a href="#optimistic-updates" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Optimistic UI &amp; Rollback</a>
      <a href="#nlp-integration" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>NLP &amp; AI Integration</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/scheduler-manager" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>SchedulerManager</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>SchedulerManager</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        <code style={{ font: '600 14px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>SchedulerManager</code> is the primary controller class in <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/core</code>. It orchestrates state mutations, coordinates asynchronous backend synchronization hooks, executes automatic rollbacks on network failures, and bridges natural language input.
      </p>

      {/* ── OVERVIEW ─────────────────────────── */}
      <h2 id="overview" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Basic Initialization</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="scheduler.ts" codeString={`import { SchedulerManager } from "@janus-scheduler/core"\n\nexport const manager = new SchedulerManager({\n  onEventAdd: async (event) => {\n    const res = await fetch("/api/events", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(event),\n    })\n    if (!res.ok) throw new Error("Failed to persist event")\n  },\n  onEventUpdate: async (event) => {\n    await fetch(\`/api/events/\${event.id}\`, {\n      method: "PUT",\n      body: JSON.stringify(event),\n    })\n  },\n  onEventDelete: async ({ id }) => {\n    await fetch(\`/api/events/\${id}\`, { method: "DELETE" })\n  },\n  onError: ({ operation, error }) => {\n    console.error(\`\${operation} failed, state rolled back:\`, error)\n  },\n})`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{'}</div>
          <div>  onEventAdd: <span style={{ color: '#f97316' }}>async</span> (event) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} ... {'}'},</div>
          <div>  onEventUpdate: <span style={{ color: '#f97316' }}>async</span> (event) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} ... {'}'},</div>
          <div>  onEventDelete: <span style={{ color: '#f97316' }}>async</span> ({'{ id }'}) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} ... {'}'},</div>
          <div>  onError: ({'{ operation, error }'}) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'} ... {'}'},</div>
          <div>{'}'})</div>
        </CodeBlock>
      </div>

      {/* ── CONSTRUCTOR ─────────────────────────── */}
      <h2 id="constructor" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Constructor Hooks (SchedulerHooks)</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Pass optional async callback functions to sync user actions with your backend database or API:
      </p>
      
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr 2fr' }}>
          <TH>Hook Name</TH><TH>Signature</TH><TH>Description</TH>
          <TR3 c1="onEventAdd" c2="(event: Event) => Promise<void>" c3="Called immediately after an event is added." />
          <TR3 c1="onEventUpdate" c2="(event: Event) => Promise<void>" c3="Called after drag-move, resize, or modal edit." />
          <TR3 c1="onEventDelete" c2="({ id }: { id: string }) => Promise<void>" c3="Called when an event is deleted." />
          <TR3 c1="onResourceAdd" c2="(resource: Resource) => Promise<void>" c3="Called when a resource row is registered." />
          <TR3 c1="onResourceDelete" c2="({ id }: { id: string }) => Promise<void>" c3="Called when a resource row is removed." />
          <TR3 c1="onError" c2="(detail: HookError) => void" c3="Triggered when an async hook throws; rolls back store." isLast />
        </div>
      </div>

      {/* ── METHODS ─────────────────────────── */}
      <h2 id="methods" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Public Methods</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.8fr 2fr' }}>
          <TH>Method</TH><TH>Parameters</TH><TH>Description</TH>
          <TR3 c1="addEvent(data)" c2="data: EventData" c3="Creates and inserts a new Event into the store." />
          <TR3 c1="updateEvent(id, updates)" c2="id: string, updates: Partial<EventData>" c3="Updates an existing event with optimistic rollback." />
          <TR3 c1="deleteEvent(id)" c2="id: string" c3="Removes an event and its assignments." />
          <TR3 c1="addResource(data)" c2="data: ResourceData" c3="Registers a person, room, or equipment row." />
          <TR3 c1="updateResource(id, data)" c2="id: string, updates: Partial<ResourceData>" c3="Updates resource metadata or label." />
          <TR3 c1="deleteResource(id)" c2="id: string" c3="Deletes a resource row from the view." />
          <TR3 c1="addAssignment(data)" c2="data: AssignmentData" c3="Links an event to a resource row." />
          <TR3 c1="deleteAssignment(id)" c2="id: string" c3="Unlinks an event from a resource row." />
          <TR3 c1="setTimezone(tz)" c2="timezone: string" c3="Updates display timezone across all views." />
          <TR3 c1="clearAll()" c2="void" c3="Wipes all events, resources, and assignments." isLast />
        </div>
      </div>

      {/* ── OPTIMISTIC UPDATES ─────────────────────────── */}
      <h2 id="optimistic-updates" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Optimistic UI &amp; Rollback</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus operates on an <strong>Optimistic First</strong> principle. When a user drags or updates an event, the UI updates at 60fps immediately. If the async hook rejects or network fails:
      </p>
      
      <ol style={{ margin: '12px 0 0', paddingLeft: '20px', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <li>The internal undo action restores previous event state in the store.</li>
        <li>The grid repositions the event chip back to its original location.</li>
        <li><code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>onError</code> fires with the failed operation and error context.</li>
      </ol>

      <Callout type="tip" style={{ marginTop: '16px' }}>
        You don't need to write manual undo logic in your application. SchedulerManager manages the rollback stack automatically.
      </Callout>

      {/* ── NLP INTEGRATION ─────────────────────────── */}
      <h2 id="nlp-integration" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>NLP &amp; AI Integration</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        You can pass a custom <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>parsePrompt</code> hook to connect LLM APIs (OpenAI, Claude, Gemini) directly into the natural language bar:
      </p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`const manager = new SchedulerManager({\n  parsePrompt: async (userQuery) => {\n    const response = await fetch("/api/ai/parse-schedule", {\n      method: "POST",\n      body: JSON.stringify({ query: userQuery }),\n    })\n    return response.json() // returns EventDraft\n  },\n})`}>
          <div><span style={{ color: '#f97316' }}>const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{'}</div>
          <div>  parsePrompt: <span style={{ color: '#f97316' }}>async</span> (userQuery) <span style={{ color: '#a1a1aa' }}>=&gt;</span> {'{'}</div>
          <div>    <span style={{ color: '#f97316' }}>const</span> response <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>await</span> <span style={{ color: '#7dd3fc' }}>fetch</span>(<span style={{ color: '#a3e635' }}>"/api/ai/parse-schedule"</span>, {'{'} ... {'}'})</div>
          <div>    <span style={{ color: '#f97316' }}>return</span> response.json()</div>
          <div>  {'}'},</div>
          <div>{'}'})</div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/janus-event" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>&lt;janus-event&gt;</span>
        </Link>
        <Link to="/docs/api/store" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>Store Reference</span>
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
