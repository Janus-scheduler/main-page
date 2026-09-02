import React from 'react';
import DocsLayout from '../layouts/DocsLayout';
import SegmentedControl from '../components/SegmentedControl';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';
import { Link } from 'react-router-dom';

export default function GettingStartedPage() {
  const [framework, setFramework] = React.useState('React');
  const [pkgManager, setPkgManager] = React.useState('npm');
  
  const pkgs = {
    React: '@janus-scheduler/react', 
    Angular: '@janus-scheduler/angular',
    Solid: '@janus-scheduler/solid', 
    Vue: '@janus-scheduler/vue'
  };
  
  const verbs = { npm: 'npm install', pnpm: 'pnpm add', yarn: 'yarn add' };
  const cmd = `${verbs[pkgManager]} ${pkgs[framework]}`;

  const toc = (
    <>
      <a href="#which-package">Which package do I need?</a>
      <a href="#install">Install</a>
      <a href="#core-concepts">Core concepts</a>
      <a href="#event" style={{ paddingLeft: '12px' }}>Event</a>
      <a href="#resource" style={{ paddingLeft: '12px' }}>Resource</a>
      <a href="#assignment" style={{ paddingLeft: '12px' }}>Assignment</a>
      <a href="#first-scheduler">Your first scheduler</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/getting-started" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>Guide</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Getting started</span>
      </div>
      
      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>Getting started</h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Janus ships as a set of Lit Web Components with thin wrappers for React, Angular, Solid and Vue. This page installs the right package for your stack, explains the three objects the scheduler is built from, and gets a working timeline on screen in about twenty lines.
      </p>

      <h2 id="which-package" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Which package do I need?</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1.9fr 0.7fr' }}>
          <span style={{ padding: '9px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Package</span>
          <span style={{ padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Install it when</span>
          <span style={{ padding: '9px 18px 9px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Size</span>

          <PkgRow pkg="/react · /vue · /solid · /angular" desc="You are building in one of those frameworks. Pulls in core and ui for you." size="14.2 kB" tag="start here" />
          <PkgRow pkg="@janus-scheduler/ui" desc="Core Lit custom elements. Included automatically by framework wrappers." size="11.8 kB" />
          <PkgRow pkg="@janus-scheduler/core" desc="You want the state machine, parser and conflict logic without any DOM — headless, or on a server." size="6.4 kB" />
          <PkgRow pkg="@janus-scheduler/integrations" desc="You need two-way Google Calendar sync. Optional, and needs a token endpoint of your own." size="3.1 kB" isLast />
        </div>
      </div>

      <h2 id="install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Install</h2>
      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)' }}>
          {['React', 'Angular', 'Solid', 'Vue'].map(fw => (
            <span key={fw} onClick={() => setFramework(fw)} style={{
              padding: '13px 17px', font: '500 13px/1 "DM Sans", sans-serif', cursor: 'pointer',
              color: framework === fw ? 'var(--janus-text)' : 'var(--janus-text-secondary)',
              background: framework === fw ? 'var(--janus-bg)' : 'transparent',
              boxShadow: framework === fw ? 'inset 0 -2px 0 var(--janus-accent)' : 'none'
            }}>{fw}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid var(--janus-border)', background: 'var(--janus-bg)' }}>
          <SegmentedControl options={['npm', 'pnpm', 'yarn']} defaultOption={pkgManager} onChange={setPkgManager} />
          <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{pkgs[framework]}</span>
        </div>
        <CodeBlock isInstallCommand codeString={cmd}>{cmd}</CodeBlock>
      </div>

      <h2 id="core-concepts" style={{ margin: '52px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Core concepts</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Three objects, and one join between them. Everything else in the API is a view over these.
      </p>
      
      <div style={{ marginTop: '18px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        <div id="event"><ConceptCard title="Event" type="{ id, start, end, title }" desc="Something that happens between two UTC instants. Carries a title, an optional recurrence rule and your own payload." /></div>
        <div id="resource"><ConceptCard title="Resource" type="{ id, name, parentId? }" desc="A row in the timeline: a person, a room, a machine. Resources may nest one level for grouping." /></div>
        <div id="assignment"><ConceptCard title="Assignment" type="{ eventId, resourceId }" desc="The join that puts an event on a resource. One event can be assigned to many resources; conflicts are detected per assignment." /></div>
      </div>

      <div style={{ marginTop: '12px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '22px 24px', display: 'grid', gridTemplateColumns: '1fr 116px 1fr 116px 1fr', alignItems: 'center' }}>
        <div style={{ border: '1.5px solid var(--janus-accent)', borderRadius: '9px', background: 'var(--janus-accent-tint)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ font: '600 13px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Event</span>
          <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>Design sync · 10:00–11:00</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>1 ─ n</span>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px' }}><span style={{ flex: 1, height: '1.5px', background: 'var(--janus-text-muted)' }}></span><span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
        </div>
        <div style={{ border: '1.5px solid var(--janus-text)', borderRadius: '9px', background: 'var(--janus-bg)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ font: '600 13px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Assignment</span>
          <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>eventId + resourceId</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
          <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>n ─ 1</span>
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '4px', padding: '0 8px' }}><span style={{ flex: 1, height: '1.5px', background: 'var(--janus-text-muted)' }}></span><span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span></div>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ font: '600 13px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Resource</span>
          <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Room A · seats 8</span>
        </div>
      </div>

      <h2 id="first-scheduler" style={{ margin: '52px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>Your first scheduler</h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Pass resources, events and assignments; handle the drop event to persist a move. Nothing else is required — the component owns layout, virtualisation and conflict detection.
      </p>

      <div style={{ marginTop: '18px' }}>
        <CodeBlock title="Calendar.tsx" codeString={`import { JanusScheduler } from '@janus-scheduler/react'\nimport '@janus-scheduler/ui/theme.css'\n\nconst resources = [\n  { id: 'alex', name: 'Alex Fernando' },\n  { id: 'room-a', name: 'Room A' }\n]\n\nexport function Calendar({ events, assignments }) {\n  return (\n    <JanusScheduler\n      view="timeline"\n      timeZone="Asia/Colombo"\n      resources={resources}\n      events={events}\n      assignments={assignments}\n      snapMinutes={15}\n      onEventDrop={async (change) => {\n        await persist(change) // reject to roll back\n      }}\n    />\n  )\n}`}>
          <div><span style={{ color: '#f97316' }}>import</span> {"{ JanusScheduler }"} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/react'</span></div>
          <div><span style={{ color: '#f97316' }}>import</span> <span style={{ color: '#a3e635' }}>'@janus-scheduler/ui/theme.css'</span></div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>const</span> resources <span style={{ color: '#a1a1aa' }}>=</span> [</div>
          <div>  {"{ id"}<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>'alex'</span><span style={{ color: '#a1a1aa' }}>,</span> {"name"}<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>'Alex Fernando'</span> {"}"}<span style={{ color: '#a1a1aa' }}>,</span></div>
          <div>  {"{ id"}<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>'room-a'</span><span style={{ color: '#a1a1aa' }}>,</span> {"name"}<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>'Room A'</span> {"}"}</div>
          <div>]</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export function</span> <span style={{ color: '#7dd3fc' }}>Calendar</span>({"({ events"}<span style={{ color: '#a1a1aa' }}>,</span> {"assignments }) {"}</div>
          <div>  <span style={{ color: '#f97316' }}>return</span> (</div>
          <div>    <span style={{ color: '#a1a1aa' }}>&lt;</span><span style={{ color: '#7dd3fc' }}>JanusScheduler</span></div>
          <div>      view<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"timeline"</span></div>
          <div>      timeZone<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"Asia/Colombo"</span></div>
          <div>      resources<span style={{ color: '#a1a1aa' }}>=</span>{"{resources}"}</div>
          <div>      events<span style={{ color: '#a1a1aa' }}>=</span>{"{events}"}</div>
          <div>      assignments<span style={{ color: '#a1a1aa' }}>=</span>{"{assignments}"}</div>
          <div>      snapMinutes<span style={{ color: '#a1a1aa' }}>=</span>{"{"}<span style={{ color: '#7dd3fc' }}>15</span>{"}"}</div>
          <div>      onEventDrop<span style={{ color: '#a1a1aa' }}>=</span>{"{"}<span style={{ color: '#f97316' }}>async</span> {"(change) "} <span style={{ color: '#a1a1aa' }}>=&gt;</span> {"{"}</div>
          <div>        <span style={{ color: '#f97316' }}>await</span> persist(change) <span style={{ color: '#52525b' }}>// reject to roll back</span></div>
          <div>      {"}}"}</div>
          <div>    <span style={{ color: '#a1a1aa' }}>/&gt;</span></div>
          <div>  )</div>
          <div>{"}"}</div>
        </CodeBlock>
      </div>

      <div style={{ marginTop: '20px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 14px', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Expected result</span>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>localhost:5173</span>
        </div>
        <div style={{ background: 'var(--janus-bg)', padding: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '132px 1fr', border: '1.5px solid var(--janus-border)', borderRadius: '9px', overflow: 'hidden' }}>
            <div style={{ borderRight: '1.5px solid var(--janus-border)' }}>
              <div style={{ height: '26px', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}></div>
              <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Alex Fernando</div>
              <div style={{ height: '42px', display: 'flex', alignItems: 'center', padding: '0 12px', font: '500 12px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Room A</div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ height: '26px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', background: 'var(--janus-surface)', borderBottom: '1px solid var(--janus-border)' }}>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>09:00</span>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>10:00</span>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>11:00</span>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>12:00</span>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>13:00</span>
                <span style={{ paddingLeft: '7px', display: 'flex', alignItems: 'center', borderLeft: '1px solid var(--janus-border)', font: '500 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>14:00</span>
              </div>
              <div style={{ position: 'relative', height: '84px' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', pointerEvents: 'none' }}>
                  <span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span><span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span><span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span><span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span><span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span><span style={{ borderLeft: '1px solid var(--janus-surface)' }}></span>
                </div>
                <div style={{ position: 'absolute', top: '42px', left: 0, right: 0, height: '1px', background: 'var(--janus-surface)' }}></div>
                <div style={{ position: 'absolute', top: '6px', left: '17%', width: '30%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '5px 9px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Design sync</span>
                </div>
                <div style={{ position: 'absolute', top: '48px', left: '17%', width: '30%', height: '30px', borderRadius: '9px', background: 'var(--janus-accent-tint)', border: '1.5px solid var(--janus-accent)', padding: '5px 9px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ font: '600 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Design sync</span>
                </div>
                <div style={{ position: 'absolute', top: '48px', left: '56%', width: '22%', height: '30px', borderRadius: '9px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', padding: '5px 9px', display: 'flex', alignItems: 'center' }}>
                  <span style={{ font: '500 11px/1.2 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Held</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: '10px 14px', borderTop: '1px solid var(--janus-border)', background: 'var(--janus-bg)' }}>
          <span style={{ font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>One event assigned to two resources appears on both rows and moves as one.</span>
        </div>
      </div>

      <div style={{ marginTop: '26px' }}>
        <Callout variant="tip" title="Tip">
          Return a promise from <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12.5px' }}>onEventDrop</span> and Janus keeps the optimistic position until it settles — if it rejects, the block animates back and the conflict state is restored.
        </Callout>
      </div>

      <div style={{ marginTop: '12px' }}>
        <Callout variant="warning" title="Warning">
          Mutating the <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12.5px' }}>events</span> array in place bypasses change detection. Always pass a new reference, and keep ids stable across renders.
        </Callout>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Introduction</span>
        </Link>
        <Link to="/docs/frameworks/react" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Framework guide: React</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

function PkgRow({ pkg, desc, size, tag, isLast }) {
  return (
    <>
      <span style={{ padding: '12px 18px', borderBottom: isLast ? 'none' : '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
        <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{pkg}</code>
        {tag && <span style={{ padding: '2px 6px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '700 9.5px/1.3 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tag}</span>}
      </span>
      <span style={{ padding: '12px 14px', borderBottom: isLast ? 'none' : '1px solid var(--janus-surface)', font: '400 13.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{desc}</span>
      <span style={{ padding: '12px 18px 12px 14px', borderBottom: isLast ? 'none' : '1px solid var(--janus-surface)', font: '400 12.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{size}</span>
    </>
  );
}

function ConceptCard({ title, desc, type }) {
  return (
    <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px', background: 'var(--janus-bg)' }}>
      <span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>{title}</span>
      <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{desc}</p>
      <span style={{ font: '400 11px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{type}</span>
    </div>
  );
}
