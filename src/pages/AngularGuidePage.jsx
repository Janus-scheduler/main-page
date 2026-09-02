import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function AngularGuidePage() {
  const toc = (
    <>
      <a href="#install" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Install</a>
      <a href="#setup" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Setup</a>
      <a href="#basic-usage" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Basic Usage</a>
      <a href="#components" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Components</a>
      <a href="#inputs" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Inputs (Properties)</a>
      <a href="#outputs" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Outputs (Events)</a>
      <a href="#scheduler-manager" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>SchedulerManager</a>
      <a href="#theming" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Theming</a>
      <a href="#types" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Types</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/frameworks/angular" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Framework guides</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Angular</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Angular Component</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus Scheduler provides first-class Angular support via <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/angular</code>. The package contains thin, standalone Angular components that wrap the Lit Web Components from @janus-scheduler/ui. All components use OnPush change detection and Angular's modern signal-based input() / output() API.
      </p>

      {/* ── INSTALL ─────────────────────────── */}
      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Install the Janus Scheduler Angular package:</p>
      <div style={{ marginTop: '14px' }}><CodeBlock isInstallCommand codeString="npm install @janus-scheduler/angular">npm install @janus-scheduler/angular</CodeBlock></div>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        That's it. The Angular package re-exports everything you need from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/core</code> and <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/ui</code>. You never need to install or import from those packages directly.
      </p>
      <Callout type="tip" style={{ marginTop: '20px', padding: '20px 22px' }}>
        <span style={{ font: '600 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '10px' }}>Other package managers:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <CodeBlock isInstallCommand codeString="pnpm add @janus-scheduler/angular">pnpm add @janus-scheduler/angular</CodeBlock>
          <CodeBlock isInstallCommand codeString="yarn add @janus-scheduler/angular">yarn add @janus-scheduler/angular</CodeBlock>
        </div>
      </Callout>

      {/* ── SETUP ─────────────────────────── */}
      <h2 id="setup" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Setup</h2>
      <h3 style={{ margin: '20px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>CUSTOM_ELEMENTS_SCHEMA</h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Each Janus Angular component internally uses CUSTOM_ELEMENTS_SCHEMA so Angular does not complain about the underlying &lt;janus-*&gt; custom element tags. You do not need to add the schema yourself — the components are standalone and handle it internally.</p>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>No special providers or modules are required. Simply import the components into your standalone component or module:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock title="app.config.ts" codeString={`import { TimelineComponent, SchedulerComponent } from "@janus-scheduler/angular"\nimport { SchedulerManager } from "@janus-scheduler/angular"`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ TimelineComponent, SchedulerComponent }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/angular"</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/angular"</span></div>
        </CodeBlock>
      </div>

      {/* ── BASIC USAGE ─────────────────────────── */}
      <h2 id="basic-usage" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Basic Usage</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="app.component.ts" codeString={`@Component({\n  selector: "app-root",\n  standalone: true,\n  imports: [TimelineComponent, SchedulerComponent],\n  template: \`\n    <janus-timeline-ng\n      [resources]="resources"\n      [allowCreate]="true"\n      (eventClick)="onEventClick($event)"\n      (eventMove)="onEventMove($event)"\n      (addEvent)="onAddEvent()"\n    />\n    @if (showScheduler) {\n      <janus-scheduler-ng\n        [eventId]="selectedEventId"\n        (save)="onSave($event)"\n        (close)="showScheduler = false"\n      />\n    }\n  \`,\n})\nexport class AppComponent { ... }`}>
          <div><span style={{ color: '#f97316' }}>@Component</span>({'{'}</div>
          <div>  selector: <span style={{ color: '#a3e635' }}>"app-root"</span>,</div>
          <div>  standalone: <span style={{ color: '#7dd3fc' }}>true</span>,</div>
          <div>  imports: [TimelineComponent, SchedulerComponent],</div>
          <div>  template: <span style={{ color: '#a3e635' }}>{"`"}</span></div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-timeline-ng</span></div>
          <div>      [resources]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"resources"</span></div>
          <div>      [allowCreate]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"true"</span></div>
          <div>      (eventClick)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onEventClick($event)"</span></div>
          <div>      (eventMove)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onEventMove($event)"</span></div>
          <div>      (addEvent)<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"onAddEvent()"</span></div>
          <div>    <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>  <span style={{ color: '#a3e635' }}>{"`"}</span>,</div>
          <div>{'}'})</div>
          <div><span style={{ color: '#f97316' }}>export class</span> <span style={{ color: '#7dd3fc' }}>AppComponent</span> {'{ ... }'}</div>
        </CodeBlock>
      </div>

      {/* ── COMPONENTS ─────────────────────────── */}
      <h2 id="components" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Components</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 2fr' }}>
          <TH>Component</TH><TH>Selector</TH><TH>Description</TH>
          <TR3 c1="TimelineComponent" c2="<janus-timeline-ng>" c3="Horizontal timeline grid with drag-and-drop event creation, resizing, and moving." />
          <TR3 c1="MonthGridComponent" c2="<janus-month-grid-ng>" c3="Classic monthly calendar view." />
          <TR3 c1="DayGridComponent" c2="<janus-day-grid-ng>" c3="Single-day hour grid view." />
          <TR3 c1="WeekGridComponent" c2="<janus-week-grid-ng>" c3="Weekly hour grid view." />
          <TR3 c1="YearGridComponent" c2="<janus-year-grid-ng>" c3="Yearly overview." />
          <TR3 c1="SchedulerComponent" c2="<janus-scheduler-ng>" c3="Event editor modal." />
          <TR3 c1="TopbarComponent" c2="<janus-topbar-ng>" c3="Navigation bar with view switching." />
          <TR3 c1="AiBarComponent" c2="<janus-ai-bar-ng>" c3="AI-powered scheduling input bar." isLast />
        </div>
      </div>

      {/* ── INPUTS ─────────────────────────── */}
      <h2 id="inputs" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Inputs (Properties)</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>All inputs use Angular's signal-based input() API:</p>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 0.8fr 2fr' }}>
          <TH>Input</TH><TH>Type</TH><TH>Default</TH><TH>Description</TH>
          <TR4 c1="resources" c2="TimelineResource[]" c3="undefined" c4="Array of resource rows. If omitted, reads from the Zustand store." />
          <TR4 c1="allowCreate" c2="boolean" c3="false" c4="Enable drag-to-create on the timeline grid." />
          <TR4 c1="showFab" c2="boolean" c3="false" c4="Show the floating action button." />
          <TR4 c1="preventConflicts" c2="boolean" c3="false" c4="When true, double-bookings are blocked." />
          <TR4 c1="timezone" c2="string" c3="browser tz" c4="IANA timezone for display." isLast />
        </div>
      </div>

      {/* ── OUTPUTS ─────────────────────────── */}
      <h2 id="outputs" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Outputs (Events)</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Outputs use Angular's signal-based output() API. All CustomEvent payloads are automatically unwrapped — your handler receives the typed detail directly.</p>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 2.5fr' }}>
          <TH>Output</TH><TH>Payload Type</TH><TH>Description</TH>
          <TR3 c1="eventClick" c2="TimelineEvent" c3="An event chip was clicked." />
          <TR3 c1="eventMove" c2="EventMoveDetail" c3="Drag-and-drop move completed." />
          <TR3 c1="eventResize" c2="EventResizeDetail" c3="Drag resize completed." />
          <TR3 c1="eventCreate" c2="EventCreateDetail" c3="Drag-to-create completed." />
          <TR3 c1="addEvent" c2="void" c3="The add button was clicked." />
          <TR3 c1="viewChange" c2="{ view: ViewType }" c3="The calendar view changed." />
          <TR3 c1="conflictDetected" c2="{ message, action, detail }" c3="A scheduling conflict occurred." isLast />
        </div>
      </div>

      {/* ── SCHEDULER MANAGER ─────────────────────────── */}
      <h2 id="scheduler-manager" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>SchedulerManager</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>The SchedulerManager works identically across all frameworks. See the SchedulerManager reference for full documentation.</p>
      <Callout type="warning" style={{ marginTop: '14px' }}>The Angular wrapper uses tsc (not Vite). After editing source files, rebuild explicitly: <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>npm run build -w @janus-scheduler/angular</code></Callout>

      {/* ── THEMING ─────────────────────────── */}
      <h2 id="theming" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Theming</h2>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="styles.scss" codeString={`:root {\n  --janus-primary-color: #3b82f6;\n  --janus-primary-bg: #eff6ff;\n  --janus-primary-glow: rgba(59, 130, 246, 0.15);\n  --janus-primary-text: #1d4ed8;\n}`}>
          <div><span style={{ color: '#a1a1aa' }}>:root</span> {'{'}</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-color</span>: <span style={{ color: '#a3e635' }}>#3b82f6</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-bg</span>: <span style={{ color: '#a3e635' }}>#eff6ff</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-glow</span>: <span style={{ color: '#a3e635' }}>rgba(59, 130, 246, 0.15)</span>;</div>
          <div>  <span style={{ color: '#7dd3fc' }}>--janus-primary-text</span>: <span style={{ color: '#a3e635' }}>#1d4ed8</span>;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Or use the brandColor input on individual components:</p>
      <div style={{ marginTop: '10px' }}><CodeBlock codeString={"<janus-scheduler-ng [brandColor]=\"'#8b5cf6'\" />"}><div><span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>janus-scheduler-ng</span> [brandColor]<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"'#8b5cf6'"</span> <span style={{ color: '#a1a1aa' }}>/&gt;</span></div></CodeBlock></div>

      {/* ── TYPES ─────────────────────────── */}
      <h2 id="types" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Types</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Import all types from <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/angular</code>:</p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock codeString={`import type {\n  TimelineEvent,\n  TimelineResource,\n  EventMoveDetail,\n  EventResizeDetail,\n  EventCreateDetail,\n  SchedulerSaveData,\n  SchedulerDeleteData,\n  EventColor,\n  ViewType,\n  EventData,\n  ResourceData,\n  AssignmentData,\n} from "@janus-scheduler/angular"`}>
          <div><span style={{ color: '#f97316' }}>import type</span> {'{'}</div>
          <div>  TimelineEvent, TimelineResource,</div>
          <div>  EventMoveDetail, EventResizeDetail,</div>
          <div>  EventCreateDetail, SchedulerSaveData,</div>
          <div>  SchedulerDeleteData, EventColor,</div>
          <div>  ViewType, EventData, ResourceData, AssignmentData,</div>
          <div>{'}'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/angular"</span></div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/frameworks/react" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: React</span>
        </Link>
        <Link to="/docs/frameworks/solid" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: Solid</span>
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
