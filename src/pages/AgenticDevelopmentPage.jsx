import React from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function AgenticDevelopmentPage() {
  const toc = (
    <>
      <a href="#why-agentic-skills" style={{ font: '600 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Why Agent Skills?</a>
      <a href="#quick-install" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Quick Install</a>
      <a href="#two-tiers" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Two-Tier Architecture</a>
      <a href="#tier-1" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>Tier 1: @janus-scheduler/app</a>
      <a href="#tier-2" style={{ font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)', paddingLeft: '12px' }}>Tier 2: Framework Wrappers</a>
      <a href="#critical-gotchas" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Critical Model Gotchas</a>
      <a href="#skill-spec" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Complete SKILL.md</a>
      <a href="#prompting-recipes" style={{ font: '400 12.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Prompting Recipes</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/agentic-development" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>Agentic development</span><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>AI Skills &amp; Setup</span>
      </div>

      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>
        Agentic Development with Janus
      </h1>
      <p style={{ margin: '18px 0 0', maxWidth: '66ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Empower AI coding agents (Claude Code, Cursor, Windsurf, GitHub Copilot, Antigravity) to write accurate, bug-free Janus Scheduler code on the first try.
      </p>

      {/* ── WHY AGENTIC SKILLS ─────────────────────────── */}
      <h2 id="why-agentic-skills" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Why Are Agent Skills Necessary?
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus Scheduler is a modern scheduling architecture. Because contemporary LLMs and coding assistants are trained on older snapshots of the web, they have no baseline training data for Janus APIs.
      </p>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Without a skill file, LLMs commonly hallucinate APIs — most frequently inventing non-existent methods like <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', color: '#f87171' }}>manager.store.subscribe(...)</code> or assuming there is a separate <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace', color: '#f87171' }}>@janus-scheduler/vue</code> wrapper.
      </p>

      <Callout type="info" style={{ marginTop: '18px' }}>
        By placing a <code style={{ font: '600 13px/1 "JetBrains Mono", monospace' }}>SKILL.md</code> in your repository, coding agents automatically load the exact package map, wiring rules, and common model gotchas whenever working with scheduler components.
      </Callout>

      {/* ── QUICK INSTALL ─────────────────────────── */}
      <h2 id="quick-install" style={{ margin: '44px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Quick Install
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Install the official Janus Scheduler skill into your project:
      </p>

      {/* Claude Code */}
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Claude Code (.claude/skills)
      </h3>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock isInstallCommand codeString="mkdir -p .claude/skills/janus-scheduler && curl -o .claude/skills/janus-scheduler/SKILL.md https://raw.githubusercontent.com/Janus-scheduler/main-page/main/site/skills/janus-scheduler/SKILL.md">
          mkdir -p .claude/skills/janus-scheduler && curl -o .claude/skills/janus-scheduler/SKILL.md https://raw.githubusercontent.com/Janus-scheduler/main-page/main/site/skills/janus-scheduler/SKILL.md
        </CodeBlock>
      </div>

      {/* Cursor & Windsurf */}
      <h3 style={{ margin: '24px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Cursor, Windsurf &amp; Copilot (AGENTS.md / CLAUDE.md)
      </h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Most editor agents read <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>AGENTS.md</code> or <code style={{ font: '500 13px/1 "JetBrains Mono", monospace' }}>CLAUDE.md</code> in your workspace root:
      </p>
      <div style={{ marginTop: '10px' }}>
        <CodeBlock isInstallCommand codeString="curl -o AGENTS.md https://raw.githubusercontent.com/Janus-scheduler/main-page/main/site/skills/janus-scheduler/SKILL.md">
          curl -o AGENTS.md https://raw.githubusercontent.com/Janus-scheduler/main-page/main/site/skills/janus-scheduler/SKILL.md
        </CodeBlock>
      </div>

      {/* ── TWO TIERS ─────────────────────────── */}
      <h2 id="two-tiers" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Two-Tier Architecture for Agents
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Instruct your AI agent to choose the right tier based on project complexity:
      </p>

      {/* Tier 1 */}
      <h3 id="tier-1" style={{ margin: '28px 0 0', font: '600 19px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Tier 1 — <code style={{ font: '600 16.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>@janus-scheduler/app</code> (Batteries Included)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Best when the agent needs to build a working calendar with minimal wiring. Mounts the Topbar, all 5 grid views, and the event editor in a single element:
      </p>
      <div style={{ marginTop: '12px' }}>
        <CodeBlock title="React App Example" codeString={`import { JanusApp } from "@janus-scheduler/app/react"\n\nconst resources = [\n  { id: "r1", name: "Alice Fernando", type: "person", email: "alice@example.com" },\n  { id: "r2", name: "Conference Room Alpha", type: "room", email: "" }\n]\n\nconst events = [\n  {\n    id: "e1",\n    title: "Sprint Standup",\n    startTime: "2026-09-03T09:00:00.000Z",\n    endTime: "2026-09-03T09:30:00.000Z",\n    resourceIds: ["r1"],\n    status: "confirmed"\n  }\n]\n\nexport default function App() {\n  return (\n    <div style={{ height: "100vh" }}>\n      <JanusApp\n        events={events}\n        resources={resources}\n        onChange={({ type, id, event }) => console.log(type, id, event?.title)}\n      />\n    </div>\n  )\n}`} />
      </div>

      {/* Tier 2 */}
      <h3 id="tier-2" style={{ margin: '32px 0 0', font: '600 19px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Tier 2 — Framework Wrappers (Full Control)
      </h3>
      <p style={{ margin: '10px 0 0', maxWidth: '66ch', font: '400 15px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Best when your team requires customized layouts, custom sidebar navigation, or specialized mutation handlers.
      </p>
      <div style={{ marginTop: '12px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1.6fr' }}>
          <TH>Framework</TH><TH>Package</TH><TH>Reactivity Primitive</TH>
          <TR3 c1="React" c2="@janus-scheduler/react" c3="useState / useReducer" />
          <TR3 c1="Angular" c2="@janus-scheduler/angular" c3="Angular Signals (signal<TimelineResource[]>)" />
          <TR3 c1="SolidJS" c2="@janus-scheduler/solid" c3="createSignal<TimelineResource[]>" />
          <TR3 c1="Vue 3" c2="@janus-scheduler/core + /ui" c3="ref<TimelineResource[]> / Custom Elements" isLast />
        </div>
      </div>

      {/* ── CRITICAL GOTCHAS ─────────────────────────── */}
      <h2 id="critical-gotchas" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Top Model Gotchas &amp; Corrections
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        The Janus skill equips models to avoid these specific pitfalls:
      </p>

      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <GotchaCard 
          error="manager.store.subscribe(...) is not a function" 
          cause="Models attempt to manually subscribe to the internal Zustand store." 
          fix="The UI components already observe the store internally. In custom wrapper setups, pass reactive signals or props directly to <Timeline resources={...} />." 
        />
        <GotchaCard 
          error="Events snap back to original position after dragging" 
          cause="The host component did not update state or call SchedulerManager on move/resize." 
          fix="Handle onEventMove and onEventResize callbacks by updating your resource array and calculating new startMs / endMs timestamps." 
        />
        <GotchaCard 
          error="Package '@janus-scheduler/vue' not found" 
          cause="Models guess that a dedicated Vue wrapper package exists." 
          fix="Vue 3 directly consumes Web Components with @janus-scheduler/ui and @janus-scheduler/core." 
        />
        <GotchaCard 
          error="Reassigning events prop does not re-render <JanusApp>" 
          cause="Events and resources seed the store once on mount." 
          fix="Call ref.current?.load({ events, resources }) on the JanusApp element ref to reload new data." 
        />
      </div>

      {/* ── SKILL SPEC ─────────────────────────── */}
      <h2 id="skill-spec" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Complete SKILL.md Specification
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Here is the full skill document you can copy into your repository:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="SKILL.md" codeString={`---
name: janus-scheduler
description: Use when writing or debugging code that uses @janus-scheduler packages (@janus-scheduler/app, /react, /angular, /solid, /core, /ui, /nlp, /integrations) — a framework-agnostic scheduling and calendar component library built on Lit web components with a Zustand store. Covers which package to install, correct wiring, and the API details models commonly get wrong. Triggers on: janus-scheduler, janus-app, janus-timeline, JanusApp, SchedulerManager, schedulerStore.
---

# Janus Scheduler

Scheduling/calendar component library. Version: 2.0.0.
Architecture: one Zustand store (@janus-scheduler/core) -> Lit web components (@janus-scheduler/ui) -> thin per-framework wrappers.

## Which package to install
- Batteries-included app: \`@janus-scheduler/app\`
- React control: \`@janus-scheduler/react\`
- Angular control: \`@janus-scheduler/angular\`
- SolidJS control: \`@janus-scheduler/solid\`
- Vue: \`@janus-scheduler/app\` or \`@janus-scheduler/ui\` (no dedicated /vue package)

## Core Rule
The UI never mutates the store directly without host acknowledgement. In framework wrappers, listen to onEventMove and onEventResize to persist changes.`} />
      </div>

      {/* ── PROMPTING RECIPES ─────────────────────────── */}
      <h2 id="prompting-recipes" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Prompting Recipes for AI Assistants
      </h2>
      <p style={{ margin: '14px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Copy these prompt patterns when directing your agent:
      </p>

      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <PromptRecipe 
          goal="Scaffold a Full React Scheduler with Multi-View & Topbar"
          prompt="Using @janus-scheduler/react, create a dashboard with <Topbar> view switching between Timeline and MonthGrid. Connect onEventMove and onEventResize to recalculate startMs/endMs timestamps."
        />
        <PromptRecipe 
          goal="Add Double-Booking Conflict Prevention"
          prompt="Configure Janus Scheduler to strictly prevent double bookings. Set preventConflicts={true} on <Timeline> and <Scheduler> modal, and handle validation errors with manager.onError rollback."
        />
        <PromptRecipe 
          goal="Enable Natural Language AI Chat Assistant"
          prompt="Add natural language scheduling to my component using useJanusChat from @janus-scheduler/react and render <Chat messages={messages} onChatSubmit={submit} /> in a slide-out drawer."
        />
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/topics/google-calendar-sync" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Google Calendar sync</span>
        </Link>
        <Link to="/docs/getting-started" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Getting started</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

/* ── Helper UI components ─────────────────────────── */
function GotchaCard({ error, cause, fix }) {
  return (
    <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ padding: '3px 7px', borderRadius: '5px', background: 'rgba(239, 68, 68, 0.15)', color: '#f87171', font: '600 11px/1 "JetBrains Mono", monospace' }}>Error</span>
        <code style={{ font: '600 13.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{error}</code>
      </div>
      <div style={{ font: '400 14px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        <strong style={{ color: 'var(--janus-text)' }}>Cause:</strong> {cause}
      </div>
      <div style={{ font: '400 14px/1.6 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>
        <strong style={{ color: 'var(--janus-text)' }}>Fix:</strong> {fix}
      </div>
    </div>
  );
}

function PromptRecipe({ goal, prompt }) {
  return (
    <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: '#18181b', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span style={{ font: '600 14px/1.3 "DM Sans", sans-serif', color: '#fafafa' }}>{goal}</span>
      <div style={{ font: '400 13.5px/1.6 "JetBrains Mono", monospace', color: '#a3e635', background: '#09090b', padding: '10px 14px', borderRadius: '8px', border: '1px solid #27272a' }}>
        "{prompt}"
      </div>
    </div>
  );
}

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
