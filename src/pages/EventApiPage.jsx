import React, { useState } from 'react';
import DocsLayout from '../layouts/DocsLayout';
import { Link } from 'react-router-dom';

export default function EventApiPage() {
  const [copied, setCopied] = useState(false);

  const copyTag = () => {
    if (navigator.clipboard) navigator.clipboard.writeText('<janus-event></janus-event>').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const toc = (
    <>
      <a href="#preview">Component preview</a>
      <a href="#properties">Properties</a>
      <a href="#events">Events</a>
      <a href="#limitation">Limitation</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/api/janus-event" toc={toc}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="#" style={{ color: 'var(--janus-text-muted)' }}>Docs</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>API reference</a><span>/</span><a href="#" style={{ color: 'var(--janus-text-muted)' }}>Components</a><span>/</span><span style={{ color: 'var(--janus-text-secondary)' }}>janus-event</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '16px' }}>
        <h1 style={{ margin: 0, font: '700 36px/1.1 "JetBrains Mono", monospace', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>&lt;janus-event&gt;</h1>
        <button onClick={copyTag} style={{ height: '30px', padding: '0 10px', border: '1.5px solid var(--janus-border)', borderRadius: '9px', background: 'var(--janus-bg)', color: 'var(--janus-text-secondary)', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', transition: 'all 0.1s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--janus-text-secondary)'; e.currentTarget.style.color = 'var(--janus-text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--janus-border)'; e.currentTarget.style.color = 'var(--janus-text-secondary)'; }}
        >
          {copied ? 'Copied' : 'Copy tag'}
        </button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '14px' }}>
        <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>@janus-scheduler/ui</span>
        <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>since v1.0</span>
        <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: '#c2560a', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>stable</span>
      </div>

      <p style={{ margin: '18px 0 0', maxWidth: '70ch', font: '400 16px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        Interactive event editor modal and form component. Handles full lifecycle management for scheduled items  including recurrence rules, participant allocation, color theming, and multi-resource conflict detection.
      </p>

      {/* Component preview */}
      <div id="preview" style={{ marginTop: '26px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--janus-shadow)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Component preview</span>
          <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>&lt;janus-event&gt;</span>
        </div>
        <div style={{ padding: '16px', background: 'var(--janus-bg)', display: 'flex', justifyContent: 'center' }}>
          <div className="jscroll" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', overflowY: 'auto', maxHeight: '320px', maxWidth: '580px', width: '100%', background: '#ffffff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <img 
              src="/janus-event-preview.png" 
              alt="Janus Event Modal Component Preview" 
              style={{ 
                width: '100%', 
                display: 'block',
                objectFit: 'contain'
              }} 
            />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderTop: '1px solid var(--janus-border)', background: 'var(--janus-bg)' }}>
          <span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>prevent-conflicts="true" · auto-validate="live" · timezone="Asia/Colombo"</span>
          <div style={{ display: 'flex', gap: '7px' }}>
            <span style={{ padding: '3px 9px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>Recurrence rules</span>
            <span style={{ padding: '3px 9px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>Scrollable modal</span>
          </div>
        </div>
      </div>

      <div id="properties" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '48px 0 0' }}>
        <h2 style={{ margin: 0, font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Properties</h2>
        <span style={{ font: '400 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>9 of 9 · attribute names are kebab-case</span>
      </div>
      <div className="jscroll" style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 224px 118px 88px minmax(300px, 1fr)', minWidth: '100%' }}>
          <PropHeader>Name</PropHeader>
          <PropHeader>Type</PropHeader>
          <PropHeader>Default</PropHeader>
          <PropHeader>Req.</PropHeader>
          <PropHeader>Description</PropHeader>
          
          <PropRow name="event-id" type="string | null" def="null" req="no" desc="Existing event identifier for editing, or null when creating a new event." />
          <PropRow name="title" type="string" def='""' req="no" desc="Initial title text pre-filled into the modal input." />
          <PropRow name="start-date" type="string" def='""' req="no" desc="Event start date string in YYYY-MM-DD format." />
          <PropRow name="start-time" type="string" def='""' req="no" desc="Event start time string in HH:MM 24-hour format." />
          <PropRow name="end-time" type="string" def='""' req="no" desc="Event end time string in HH:MM 24-hour format." />
          <PropRow name="participants" type="string[]" def="[]" req="no" desc="Resource IDs assigned to this event." />
          <PropRow name="active-color" type="EventColor" def='"primary"' req="no" desc="Color token chosen for the event chip and border." />
          <PropRow name="all-day" type="boolean" def="false" req="no" desc="When true, converts the event to span full calendar day cells." />
          <PropRow name="prevent-conflicts" type="boolean" def="false" req="no" desc="Blocks commit action if participant or room overlaps exist." />
        </div>
      </div>

      <div id="events" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', margin: '48px 0 0' }}>
        <h2 style={{ margin: 0, font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em' }}>Events</h2>
      </div>
      <div className="jscroll" style={{ marginTop: '14px', border: '1.5px solid var(--janus-border)', borderRadius: '14px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 224px minmax(300px, 1fr)', minWidth: '100%' }}>
          <PropHeader>Name</PropHeader>
          <PropHeader>Detail type</PropHeader>
          <PropHeader>Description</PropHeader>
          
          <EventRow name="save" type="SchedulerSaveData" desc="Fired with normalized event payload when the user clicks Save." />
          <EventRow name="delete" type="SchedulerDeleteData" desc="Fired with the target event ID when the user clicks Delete." />
          <EventRow name="close" type="void" desc="Fired when the modal is dismissed or cancelled." />
          <EventRow name="conflict-detected" type="{ conflicts: ConflictDetail[] }" desc="Fired when double-booking constraints are violated." />
        </div>
      </div>
      
      <div id="limitation" style={{ marginTop: '32px', border: '1.5px dashed var(--janus-text-muted)', borderRadius: '14px', background: '#18181b', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '5px', height: '5px', background: '#fafafa' }} />
          <span style={{ font: '700 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fafafa' }}>Limitation</span>
        </div>
        <p style={{ margin: 0, maxWidth: '76ch', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: '#e4e4e7' }}>
          <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px' }}>&lt;janus-event&gt;</span> renders within a native shadow DOM overlay. When embedding inside custom shadow roots, ensure CSS inheritance is permitted for custom property overrides.
        </p>
      </div>

      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/api/janus-prompt" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>&lt;janus-prompt&gt;</span>
        </Link>
        <Link to="/docs/getting-started" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>Guide Overview</span>
        </Link>
      </div>
    </DocsLayout>
  );
}

function PropHeader({ children }) {
  return (
    <span style={{ position: 'sticky', top: 0, zIndex: 2, padding: '9px 16px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '500 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>
      {children}
    </span>
  );
}

function PropRow({ name, type, def, req, desc }) {
  return (
    <>
      <span style={{ padding: '10px 16px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
        <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{name}</code>
      </span>
      <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
        <span style={{ padding: '2px 7px', borderRadius: '6px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{type}</span>
      </span>
      <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        {def}
      </span>
      <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
        {req === 'yes' ? (
          <span style={{ padding: '2px 6px', borderRadius: '999px', background: 'var(--janus-accent-tint)', color: '#c2560a', font: '700 9.5px/1.3 "JetBrains Mono", monospace', letterSpacing: '0.06em', textTransform: 'uppercase' }}>yes</span>
        ) : (
          <span style={{ font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>no</span>
        )}
      </span>
      <span style={{ padding: '10px 16px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        {desc}
      </span>
    </>
  );
}

function EventRow({ name, type, desc }) {
  return (
    <>
      <span style={{ padding: '10px 16px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
        <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text)' }}>{name}</code>
      </span>
      <span style={{ padding: '10px 12px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
        <span style={{ padding: '2px 7px', borderRadius: '6px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)', font: '400 11.5px/1.5 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>{type}</span>
      </span>
      <span style={{ padding: '10px 16px 10px 12px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        {desc}
      </span>
    </>
  );
}
