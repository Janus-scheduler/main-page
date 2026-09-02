import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const [openId, setOpenId] = useState('0-0');

  const groups = [
    { name: 'General', note: 'Licence, cost, who is behind it.', items: [
      { q: 'What exactly is Janus Scheduler?', a: 'A scheduling component library: a resource timeline and month grid, plus the state machine behind them. It renders and manipulates a schedule in the browser and hands changes back to you as events. It is not a booking system, a calendar server, or an availability engine — those remain yours to build, which is why the surface stays small enough to learn in an afternoon.', link: 'Read the introduction' },
      { q: 'Is it really free for commercial use?', a: 'Yes. MIT licence, no feature gating, no seat count, no attribution requirement. There is no paid tier that unlocks the timeline, because there is no paid tier. The project is funded by being a university project rather than a business.', link: 'Read the licence' },
      { q: 'Who maintains it, and what happens after the degree?', a: 'Four students at the University of Ruhuna, supervised by Dr. Rajitha Udawalpola, plus 41 outside contributors. After submission the repository stays where it is under the same licence; two of us intend to keep maintaining it. If that changes we will say so on the README rather than let it go quiet.', link: 'Meet the team' }
    ] },
    { name: 'Technical', note: 'Frameworks, size, rendering.', items: [
      { q: 'Which frameworks are supported?', a: 'React, Angular, Solid and Vue all have first-class support. All four are thin shells over the same custom elements, so anything that renders HTML can use Janus directly — the wrapper only makes props and events feel native.', hasCode: true, code: 'npm i @janus-scheduler/vue', link: 'Framework guides' },
      { q: 'Does it need a backend?', a: 'No. Parsing, layout, recurrence expansion and conflict detection all run on the client, and the component works with the network switched off. You supply an array of events; where they come from is your business.', link: 'Read the architecture note' },
      { q: 'How does it stay fast with 63,000+ events?', a: 'Both axes are virtualised and layout runs as a single pass over typed arrays, so cost tracks what is on screen rather than what is in the store. Recurrence expansion happens in a worker. The benchmark suite is in the repository so you can reproduce the numbers rather than take ours.', link: 'See the benchmarks' }
    ] },
    { name: 'Natural language', note: 'What the parser is, and is not.', items: [
      { q: 'Is there a large language model in here?', a: 'No. It is a quantised static embedding table with a nearest-neighbour classifier over 240 labelled prototypes — about 38 kB, fetched once. That is why it parses in under a millisecond and works offline, and also why it handles one intent per sentence and nothing conversational.', link: 'How the parser works' },
      { q: 'Which languages does it understand?', a: 'British English only. American spellings are normalised, so "organize" and "organise" both work, but no other language artefact ships today and we would rather publish none than publish a bad one.', link: 'Entity reference' },
      { q: 'Can I use my own parser or an LLM instead?', a: 'Yes, and several people do. The parser implements a documented interface; send the string wherever you like and hand back a structured event. Nothing else in the library depends on our implementation.', hasCode: true, code: 'scheduler.parser = myParser', link: 'Parser interface' }
    ] },
    { name: 'Google Calendar', note: 'Sync behaviour and its one requirement.', items: [
      { q: 'Is the sync two-way?', a: 'Yes. An incremental sync token pulls remote changes on a 30-second poll, local edits push straight back, and merging is field-level — a title edited on one side and a time moved on the other will not overwrite each other.', link: 'Sync documentation' },
      { q: 'Do I need a server for it?', a: 'A small one, yes. The adapter needs a token endpoint you host, because Janus will not hold a client secret in the browser. It is about thirty lines; a reference implementation is in the repository.', link: 'Token endpoint guide' },
      { q: 'What happens if the same event changes on both sides?', a: 'Last write wins, per field, with the remote timestamp as the tiebreak. You can replace the merge function if your domain needs different rules — for instance, treating the calendar as authoritative for times but never for titles.', link: 'Conflict policy' }
    ] },
    { name: 'Data and customisation', note: 'Storage, styling, custom content.', items: [
      { q: 'How should I store events?', a: 'However you already store data. Janus reads an array and emits changes; it has no opinion about your database, and no persistence layer of its own. Store instants as UTC and it will render them correctly in any display zone.', link: 'Data shapes' },
      { q: 'Can I restyle it to match our design system?', a: 'Twelve CSS custom properties cover colour, radius, density and typography, and they inherit through the shadow boundary. Global stylesheets and utility classes do not reach inside — that is deliberate, and it is what lets internal markup change without breaking your build.', hasCode: true, code: '--janus-accent: #f97316', link: 'Theming and tokens' },
      { q: 'Can I render my own content inside an event block?', a: 'Yes, via the renderEvent hook or a slot, depending on framework. That is the supported escape hatch for anything the tokens do not cover; reaching into the shadow DOM is not.', link: 'Custom rendering' }
    ] },
    { name: 'Support', note: 'Bugs, releases, expectations.', items: [
      { q: 'How do I report a bug?', a: 'Open an issue with a reproduction — a CodeSandbox or a failing test is ideal. Median response last quarter was three days and the slowest was eleven; we would rather tell you that than promise same-day.', link: 'Open an issue' },
      { q: 'Is commercial support available?', a: 'No. There is no support contract, no SLA and no phone number. If your deployment needs guaranteed response times, a commercial vendor is the honest answer, and we say so in the comparison above.', link: 'Compare alternatives' },
      { q: 'How often do you release, and how stable is the API?', a: 'Minor releases roughly every six weeks, patches as needed, semantic versioning enforced by a type-level API snapshot in CI. Nothing has been removed without a deprecation period since v1.0, and the changelog records every behavioural change, not just the flattering ones.', link: 'Read the changelog' }
    ] }
  ];

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)' }}>
      <Header />

      <header style={{ padding: '64px 40px 36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>FAQ and comparison</span>
        <h1 style={{ margin: 0, maxWidth: '24ch', font: '700 50px/1.07 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>
          How Janus compares, and where it does not
        </h1>
        <p style={{ margin: 0, maxWidth: '72ch', font: '400 17px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
          The table below was compiled in August 2026 from public documentation and pricing pages. Where a competitor does something better, the row says so — a comparison that only flatters us would not be worth publishing.
        </p>
      </header>

      {/* COMPARISON */}
      <section style={{ padding: '0 40px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-bg)', overflowX: 'auto', scrollbarWidth: 'thin' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 232px repeat(4, 258px)', minWidth: 'max-content' }}>
            
            <span style={{ position: 'sticky', left: 0, zIndex: 3, padding: '14px 20px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', borderRight: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Criterion</span>
            <span style={{ padding: '14px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1.5px solid var(--janus-accent)', display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ font: '700 14px/1.2 "DM Sans", sans-serif', color: 'var(--janus-accent-content)', letterSpacing: '-0.01em' }}>Janus Scheduler</span><span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>v2.4.0</span></span>
            <span style={{ padding: '14px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ font: '600 14px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.01em' }}>FullCalendar</span><span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>v6.1</span></span>
            <span style={{ padding: '14px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ font: '600 14px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.01em' }}>Bryntum</span><span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>v6.0</span></span>
            <span style={{ padding: '14px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ font: '600 14px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.01em' }}>Syncfusion</span><span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>2026 vol 2</span></span>
            <span style={{ padding: '14px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ font: '600 14px/1.2 "DM Sans", sans-serif', letterSpacing: '-0.01em' }}>DHTMLX</span><span style={{ font: '400 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>v7.2</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Licence</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>MIT</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>MIT + paid</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Commercial</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Commercial</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Commercial</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Cost for a team of five</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Free</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>from $480/yr</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>from $3,500</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>from $2,495/yr</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>from $1,299</span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Framework-agnostic core</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Web Components</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>JS core + wrappers</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>JS core + wrappers</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Per-framework builds</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>JS core + wrappers</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Bundle size · min+gzip</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>14.2 kB</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≈ 78 kB</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≈ 340 kB</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≈ 290 kB</span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>≈ 210 kB</span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Resource timeline</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Included</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Premium only</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Best in class</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Included</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Included</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Gantt / dependencies</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Out of scope</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>No</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Full Gantt</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Full Gantt</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Separate product</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Timezone-aware storage</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>UTC + display zone</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Plugin required</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Yes</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Yes</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Partial</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Recurrence editing UI</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Engine only</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Basic</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Full editor</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Full editor</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Full editor</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Natural-language entry</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>On-device</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>No</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>No</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Cloud AI add-on</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>No</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Works without a backend</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✓</span><span style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Fully offline</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Yes</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>CRUD manager assumed</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Data manager assumed</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Backend samples</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Accessibility audit published</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Self-assessed</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Self-assessed</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Third-party VPAT</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Third-party VPAT</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Self-assessed</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderBottom: '1px solid var(--janus-surface)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Commercial support SLA</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>✕</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>Community only</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Paid tiers</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Included</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>24 × 5</span></span>
            <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>✓</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Paid tiers</span></span>

            <span style={{ position: 'sticky', left: 0, zIndex: 2, padding: '12px 20px', background: 'var(--janus-bg)', borderRight: '1.5px solid var(--janus-border)', font: '500 13px/1.4 "DM Sans", sans-serif' }}>Years in production</span>
            <span style={{ padding: '12px 18px', background: 'var(--janus-accent-tint)', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ font: '600 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>~</span><span style={{ font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-content)' }}>1</span></span>
            <span style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>14</span>
            <span style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>12</span>
            <span style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>24</span>
            <span style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', font: '400 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>20</span>
          </div>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px', font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ color: 'var(--janus-text-secondary)' }}>✓</span>supported</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px', font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ color: 'var(--janus-text-secondary)' }}>~</span>partial, or conditions apply</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '7px', font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}><span style={{ color: 'var(--janus-text-secondary)' }}>✕</span>not available</span>
          <span style={{ flex: 1 }}></span>
          <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>scroll horizontally for all five ▸</span>
        </div>
      </section>

      {/* WEAKER */}
      <section style={{ padding: '56px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: '44px', alignItems: 'start' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Where Janus is weaker today</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '76ch' }}>
            <p style={{ margin: 0, font: '400 16px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
              Bryntum's timeline is better than ours. It has had twelve years of edge cases poured into it, and if you need dependency arrows, baselines or a full Gantt, you should buy it rather than wait for us — those are not on our roadmap at all.
            </p>
            <p style={{ margin: 0, font: '400 16px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
              Syncfusion and Bryntum both publish third-party accessibility audits. Ours is a self-assessment against WCAG 2.2 AA, run by the people who wrote the code, which is worth less. We are seeking funding for an external audit and will publish the result whatever it says.
            </p>
            <p style={{ margin: 0, font: '400 16px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
              There is no recurrence editing interface, no commercial support contract, and no telephone number to ring at two in the morning. Issues are answered by four people who also have a degree to finish; median response last quarter was three days, and the slowest was eleven. If a scheduling failure would cost your business real money, that risk is yours to weigh, and paying a vendor is a legitimate answer to it.
            </p>
            <p style={{ margin: 0, font: '400 16px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
              Finally, Janus has been in production for about a year, across perhaps two hundred deployments we know of. FullCalendar has fourteen years and millions. Maturity is not a feature we can ship — only accumulate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '22px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Frequently asked questions</h2>
          <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>18 questions · six groups</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
          {groups.map((grp, gi) => (
            <div key={gi} style={{ display: 'grid', gridTemplateColumns: '212px 1fr', gap: '32px', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', position: 'sticky', top: '76px' }}>
                <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>{grp.name}</span>
                <span style={{ font: '400 12px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>{grp.note}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--janus-border)' }}>
                {grp.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  const isOpen = openId === key;
                  
                  return (
                    <div key={key} style={{ borderBottom: '1px solid var(--janus-border)', background: isOpen ? 'var(--janus-bg)' : 'transparent' }}>
                      <div 
                        onClick={() => setOpenId(isOpen ? null : key)} 
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', padding: '16px 0', cursor: 'pointer' }}
                      >
                        <span style={{ font: isOpen ? '600 16px/1.45 "DM Sans", sans-serif' : '500 16px/1.45 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>
                          {item.q}
                        </span>
                        <span style={{ 
                          flex: 'none', width: '26px', height: '26px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          font: '500 14px/1 "JetBrains Mono", monospace', 
                          background: isOpen ? 'var(--janus-accent)' : 'transparent', 
                          color: isOpen ? '#ffffff' : 'var(--janus-text-secondary)',
                          border: isOpen ? 'none' : '1.5px solid var(--janus-border)' 
                        }}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                      
                      {isOpen && (
                        <div style={{ padding: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '78ch' }}>
                          <p style={{ margin: 0, font: '400 14.5px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                            {item.a}
                          </p>
                          {item.hasCode && (
                            <span style={{ alignSelf: 'flex-start', padding: '6px 10px', borderRadius: '9px', background: 'var(--janus-surface)', border: '1.5px solid var(--janus-border)', font: '400 12.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>
                              {item.code}
                            </span>
                          )}
                          <Link to="#" style={{ font: '600 12.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>
                            {item.link} →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '34px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ font: '700 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.02em' }}>Question not answered here?</span>
            <span style={{ maxWidth: '60ch', font: '400 14.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
              Open a discussion on GitHub. If it turns out to be a common one, it ends up on this page.
            </span>
          </div>
          <div style={{ display: 'flex', gap: '10px', flex: 'none' }}>
            <button className="janus-btn-primary" style={{ height: '44px', padding: '0 20px', border: 0, borderRadius: '9px', background: 'var(--janus-accent)', color: '#ffffff', font: '600 14px/1 "DM Sans", sans-serif', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--janus-accent-hover)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--janus-accent)'}>
              Start a discussion
            </button>
            <button className="janus-btn-secondary" style={{ height: '44px', padding: '0 20px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text)', font: '600 14px/1 "DM Sans", sans-serif', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--janus-surface)'} onMouseLeave={(e) => e.currentTarget.style.background = 'var(--janus-bg)'}>
              Read the docs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
