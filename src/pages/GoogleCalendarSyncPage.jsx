import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';
import CodeBlock from '../components/CodeBlock';
import Callout from '../components/Callout';

export default function GoogleCalendarSyncPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [copied, setCopied] = useState(false);

  const scenarios = [
    {
      title: 'Local Drag & Drop',
      subtitle: 'User shifts event on Janus canvas',
      badge: 'Optimistic Update',
      badgeColor: '#10b981',
      latency: '0 ms (instant UI) + 120 ms network',
      description: 'When an event is moved, Janus immediately repaints the canvas locally. The sync engine sends a PATCH request in the background. If successful, the new ETag is persisted.',
      janusEvent: {
        id: 'evt_9021',
        title: 'Q3 Strategy Review',
        start: '2026-09-03T14:00:00Z',
        end: '2026-09-03T15:30:00Z',
        resourceIds: ['alex.f', 'room-alpha'],
        status: 'synced',
        etag: '"33489129481"'
      },
      googlePayload: {
        summary: 'Q3 Strategy Review',
        start: { dateTime: '2026-09-03T14:00:00Z', timeZone: 'UTC' },
        end: { dateTime: '2026-09-03T15:30:00Z', timeZone: 'UTC' },
        attendees: [{ email: 'alex.f@company.com' }],
        location: 'Room Alpha',
        extendedProperties: {
          private: { janusResourceId: 'alex.f,room-alpha' }
        }
      },
      httpMethod: 'PATCH',
      endpoint: '/calendars/primary/events/evt_9021',
      resultState: '200 OK · ETag updated'
    },
    {
      title: 'Remote Webhook Ingestion',
      subtitle: 'External change from Google Calendar mobile app',
      badge: 'Incremental Delta',
      badgeColor: '#3b82f6',
      latency: '240 ms webhook delivery',
      description: 'An attendee accepts an invite or reschedules via Google Calendar. Google fires a push notification webhook. The sync engine queries changes since the last syncToken and updates the Zustand store.',
      janusEvent: {
        id: 'evt_4412',
        title: 'Weekly Engineering Standup',
        start: '2026-09-04T09:00:00Z',
        end: '2026-09-04T09:45:00Z',
        resourceIds: ['dev-team'],
        status: 'updated_remotely',
        etag: '"33489998124"'
      },
      googlePayload: {
        summary: 'Weekly Engineering Standup (Extended)',
        start: { dateTime: '2026-09-04T09:00:00Z', timeZone: 'UTC' },
        end: { dateTime: '2026-09-04T09:45:00Z', timeZone: 'UTC' },
        status: 'confirmed',
        updated: '2026-09-04T08:12:44.120Z'
      },
      httpMethod: 'GET (delta)',
      endpoint: '/calendars/primary/events?syncToken=CPD5qO7...==',
      resultState: 'Store updated · 1 event modified'
    },
    {
      title: 'Conflict & Auto-Rollback',
      subtitle: 'Simultaneous double-booking detected',
      badge: 'Automatic Rollback',
      badgeColor: '#ef4444',
      latency: 'Rollback in 140 ms',
      description: 'If two coordinators move conflicting events simultaneously, Google rejects the conditional update with HTTP 412 (Precondition Failed). Janus immediately rolls back the event to its pre-drag coordinates and triggers the onError hook.',
      janusEvent: {
        id: 'evt_7811',
        title: 'Client Pitch — Acme Corp',
        start: '2026-09-05T11:00:00Z',
        end: '2026-09-05T12:00:00Z',
        resourceIds: ['boardroom-1'],
        status: 'rolled_back',
        conflictReason: 'Precondition Failed: Resource locked'
      },
      googlePayload: {
        error: {
          code: 412,
          message: 'Precondition Failed: ETag mismatch on event evt_7811',
          status: 'PRECONDITION_FAILED'
        }
      },
      httpMethod: 'PUT',
      endpoint: '/calendars/primary/events/evt_7811 [If-Match: "33100..."]',
      resultState: '412 Precondition Failed · Restored snapshot'
    },
    {
      title: 'Recurring Exception',
      subtitle: 'Moving a single occurrence of an RRULE',
      badge: 'RFC 5545 Exception',
      badgeColor: '#f97316',
      latency: '110 ms network dispatch',
      description: 'Moving just one occurrence of a recurring series creates a linked exception in Google Calendar using recurringEventId and originalStartTime without breaking the parent RRULE sequence.',
      janusEvent: {
        id: 'evt_rec_09_single',
        recurringEventId: 'evt_rec_09',
        title: 'Design Critique (Shifted)',
        start: '2026-09-08T15:00:00Z',
        end: '2026-09-08T16:00:00Z',
        originalStartTime: '2026-09-08T13:00:00Z',
        isException: true
      },
      googlePayload: {
        recurringEventId: 'evt_rec_09',
        originalStartTime: { dateTime: '2026-09-08T13:00:00Z', timeZone: 'UTC' },
        start: { dateTime: '2026-09-08T15:00:00Z', timeZone: 'UTC' },
        end: { dateTime: '2026-09-08T16:00:00Z', timeZone: 'UTC' },
        summary: 'Design Critique (Shifted)'
      },
      httpMethod: 'POST',
      endpoint: '/calendars/primary/events (single instance exception)',
      resultState: '201 Created · Exception linked'
    }
  ];

  const currentScenario = scenarios[activeScenario];

  const handleCopy = () => {
    const text = JSON.stringify(currentScenario.googlePayload, null, 2);
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const toc = (
    <>
      <a href="#try-it">Interactive Simulator</a>
      <a href="#how-it-works">How Sync Works</a>
      <a href="#prerequisites">Google Cloud Setup</a>
      <a href="#install">Installation</a>
      <a href="#initialization">Initialization &amp; Config</a>
      <a href="#entry-points">Browser vs. Node</a>
      <a href="#env-vars">Environment Variables</a>
      <a href="#schema-mapping">Schema &amp; Field Mapping</a>
      <a href="#recurrence">Recurrence &amp; RRULE</a>
      <a href="#webhooks-incremental">Webhooks &amp; Delta Sync</a>
      <a href="#conflict-resolution">Conflict Resolution</a>
      <a href="#security">Security &amp; Rate Limits</a>
    </>
  );

  return (
    <DocsLayout currentPath="/docs/topics/google-calendar-sync" toc={toc}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
        <a href="/docs/getting-started" style={{ color: 'var(--janus-text-muted)', textDecoration: 'none' }}>Docs</a>
        <span>/</span>
        <span style={{ color: 'var(--janus-text-secondary)' }}>Topics</span>
        <span>/</span>
        <span style={{ color: 'var(--janus-text-secondary)' }}>Google Calendar sync</span>
      </div>

      {/* Main Title */}
      <h1 style={{ margin: '16px 0 0', font: '700 40px/1.1 "DM Sans", sans-serif', letterSpacing: '-0.028em', color: 'var(--janus-text)' }}>
        Google Calendar sync
      </h1>
      <p style={{ margin: '18px 0 0', maxWidth: '68ch', font: '400 16.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
        <code style={{ font: '600 14px/1 "JetBrains Mono", monospace', padding: '2px 6px', borderRadius: '5px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>@janus-scheduler/integrations</code> (also published as <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>@janus-scheduler/google-calendar</code>) provides a high-performance, bidirectional synchronization engine between Janus Scheduler and Google Calendar API v3. It features optimistic UI updates, incremental delta syncing via <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>syncToken</code>, automatic conflict rollbacks, and native RFC 5545 recurrence translation.
      </p>

      {/* Highlights Bar */}
      <div style={{ marginTop: '24px', background: 'var(--janus-surface)', borderRadius: '14px', padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px', font: '700 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--janus-accent)' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--janus-accent)' }}></span>
            Bidirectional Engine
          </span>
          <span style={{ font: '600 18px/1.35 "DM Sans", sans-serif', color: 'var(--janus-text)', letterSpacing: '-0.015em' }}>
            Zero-latency optimistic UI with enterprise reliability
          </span>
          <span style={{ font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            All operations are queued and reconciled without blocking client rendering or requiring exposed OAuth client secrets.
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>syncToken delta</span>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>RFC 5545 RRULE</span>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>auto-rollback</span>
          <span style={{ padding: '4px 10px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', color: 'var(--janus-text)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>offline queue</span>
        </div>
      </div>

      {/* ── INTERACTIVE SIMULATOR ─────────────────────────── */}
      <h2 id="try-it" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Interactive Simulator
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Select a synchronization lifecycle event to observe how the sync engine translates coordinates, manages network dispatches, and handles error boundaries.
      </p>

      <div style={{ marginTop: '18px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
        {/* Scenario Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {scenarios.map((sc, idx) => {
            const isActive = activeScenario === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveScenario(idx)}
                style={{
                  padding: '7px 14px',
                  borderRadius: '999px',
                  border: isActive ? '1.5px solid var(--janus-text)' : '1.5px solid var(--janus-border)',
                  background: isActive ? 'var(--janus-text)' : 'var(--janus-bg)',
                  color: isActive ? 'var(--janus-bg)' : 'var(--janus-text-secondary)',
                  font: '500 12px/1.3 "DM Sans", sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {sc.title}
              </button>
            );
          })}
        </div>

        {/* Selected Scenario Details */}
        <div style={{ marginTop: '16px', minHeight: '64px', padding: '16px 18px', borderRadius: '12px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>{currentScenario.title}</span>
              <span style={{ padding: '2px 8px', borderRadius: '6px', background: `${currentScenario.badgeColor}18`, color: currentScenario.badgeColor, font: '600 10.5px/1.4 "JetBrains Mono", monospace', border: `1px solid ${currentScenario.badgeColor}44` }}>
                {currentScenario.badge}
              </span>
            </div>
            <span style={{ font: '400 13px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{currentScenario.description}</span>
          </div>
          <span style={{ font: '500 11.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', background: 'var(--janus-surface)', padding: '5px 10px', borderRadius: '6px', border: '1px solid var(--janus-border)', flexShrink: 0 }}>
            ⏱ {currentScenario.latency}
          </span>
        </div>

        {/* Two Column Visualizer */}
        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {/* Left: Janus Internal State */}
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '260px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ font: '600 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>
                  Janus Local Store State
                </span>
                <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>
                  Zustand Store
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', borderRadius: '8px', background: 'var(--janus-surface)', border: '1px solid var(--janus-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ font: '600 13.5px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>{currentScenario.janusEvent.title}</span>
                  <span style={{ font: '400 10px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{currentScenario.janusEvent.id}</span>
                </div>
                <div style={{ display: 'flex', gap: '14px', font: '400 11.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>
                  <span>Start: <strong style={{ color: 'var(--janus-text)' }}>{currentScenario.janusEvent.start.split('T')[1]?.replace('Z', '') || '14:00'}</strong></span>
                  <span>End: <strong style={{ color: 'var(--janus-text)' }}>{currentScenario.janusEvent.end.split('T')[1]?.replace('Z', '') || '15:30'}</strong></span>
                </div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '4px', minHeight: '22px' }}>
                  {currentScenario.janusEvent.resourceIds?.length ? (
                    currentScenario.janusEvent.resourceIds.map((r, i) => (
                      <span key={i} style={{ padding: '2px 7px', borderRadius: '4px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>
                        👤 {r}
                      </span>
                    ))
                  ) : (
                    <span style={{ font: '400 10.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
                      Series Exception · {currentScenario.janusEvent.recurringEventId || 'No direct assignment'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', font: '400 11.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', marginTop: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Sync Status:</span>
                <strong style={{ color: currentScenario.badgeColor, fontFamily: '"JetBrains Mono", monospace' }}>{currentScenario.janusEvent.status}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Client ETag:</span>
                <span style={{ fontFamily: '"JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>{currentScenario.janusEvent.etag || 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Right: Google Calendar REST Output */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1.5px solid #27272a', background: '#18181b', display: 'flex', flexDirection: 'column', minHeight: '260px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #27272a', background: '#09090b' }}>
              <span style={{ font: '600 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a1a1aa' }}>
                Google API v3 · {currentScenario.httpMethod}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  height: '24px',
                  padding: '0 8px',
                  border: '1px solid #3f3f46',
                  borderRadius: '6px',
                  background: 'transparent',
                  color: '#a1a1aa',
                  font: '500 10.5px/1 "JetBrains Mono", monospace',
                  cursor: 'pointer'
                }}
              >
                {copied ? 'Copied' : 'Copy JSON'}
              </button>
            </div>
            
            <div style={{ padding: '8px 14px', background: '#121215', borderBottom: '1px solid #27272a', font: '400 11px/1.3 "JetBrains Mono", monospace', color: '#38bdf8' }}>
              {currentScenario.endpoint}
            </div>

            <pre style={{ margin: 0, padding: '14px 16px', font: '400 12px/1.65 "JetBrains Mono", monospace', color: '#e4e4e7', flex: 1, overflowX: 'auto', minHeight: '140px' }}>
              {JSON.stringify(currentScenario.googlePayload, null, 2)}
            </pre>

            <div style={{ padding: '8px 14px', borderTop: '1px solid #27272a', display: 'flex', justifyContent: 'space-between', background: '#09090b' }}>
              <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', color: '#10b981' }}>
                ✓ {currentScenario.resultState}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <h2 id="how-it-works" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        How Sync Works
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus isolates visual scheduling state from network latencies using an asynchronous 5-stage sync pipeline.
      </p>

      <div style={{ marginTop: '18px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '22px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr', alignItems: 'stretch', minWidth: '820px' }}>
          
          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ font: '600 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>01 · MUTATION</span>
            <span style={{ font: '600 13px/1.25 "DM Sans", sans-serif' }}>User Action</span>
            <p style={{ margin: 0, font: '400 11.5px/1.45 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Event dragged, resized, created or parsed via NLP.</p>
            <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>&lt;janus-timeline&gt;</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>

          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ font: '600 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>02 · OPTIMISTIC</span>
            <span style={{ font: '600 13px/1.25 "DM Sans", sans-serif' }}>Local State Commit</span>
            <p style={{ margin: 0, font: '400 11.5px/1.45 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Zustand store updates in 0ms; snapshot created for rollback.</p>
            <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>SchedulerManager</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>

          <div style={{ border: '1.5px solid var(--janus-accent)', borderRadius: '12px', background: 'var(--janus-accent-tint)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ font: '600 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-accent)' }}>03 · TRANSLATE</span>
            <span style={{ font: '600 13px/1.25 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>Schema Transform</span>
            <p style={{ margin: 0, font: '400 11.5px/1.45 "DM Sans", sans-serif', color: 'var(--janus-accent-content)' }}>JanusEvent mapped to Google Calendar v3 schema + RFC 5545.</p>
            <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-accent)' }}>GoogleSyncManager</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>

          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ font: '600 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>04 · DISPATCH</span>
            <span style={{ font: '600 13px/1.25 "DM Sans", sans-serif' }}>REST API / Queue</span>
            <p style={{ margin: 0, font: '400 11.5px/1.45 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>Non-blocking PATCH/POST with retry &amp; exponential jitter.</p>
            <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>HTTPS / OAuth 2</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>▶</span>
          </div>

          <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', background: 'var(--janus-bg)', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ font: '600 9.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: 'var(--janus-text-muted)' }}>05 · RECONCILE</span>
            <span style={{ font: '600 13px/1.25 "DM Sans", sans-serif' }}>Ack or Rollback</span>
            <p style={{ margin: 0, font: '400 11.5px/1.45 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>ETag saved on 200 OK. State restored instantly on 4xx/5xx.</p>
            <span style={{ font: '400 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>syncToken stored</span>
          </div>

        </div>
      </div>

      {/* ── 04 · PREREQUISITES / GOOGLE CLOUD SETUP (NEW) ──── */}
      <h2 id="prerequisites" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Prerequisites — Google Cloud Setup
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Before connecting Janus to Google Calendar, configure your project and OAuth credentials in the Google Cloud Console.
      </p>

      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '18px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '700 11px/1.4 "JetBrains Mono", monospace' }}>STEP 1</span>
            <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Create a Google Cloud Project &amp; Enable Calendar API</span>
          </div>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Visit the <a href="https://console.cloud.google.com" target="_blank" rel="noreferrer" style={{ color: 'var(--janus-accent-text)', textDecoration: 'none', fontWeight: 500 }}>Google Cloud Console ↗</a>, create or select a project, and navigate to <strong>APIs &amp; Services → Library</strong>. Search for <strong>Google Calendar API</strong> and click <strong>Enable</strong>.
          </p>
        </div>

        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '18px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '700 11px/1.4 "JetBrains Mono", monospace' }}>STEP 2</span>
            <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Create OAuth 2.0 Client Credentials</span>
          </div>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Navigate to <strong>APIs &amp; Services → Credentials → Create Credentials → OAuth Client ID</strong>:
          </p>
          <ul style={{ margin: '4px 0 0', paddingLeft: '20px', font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            <li><strong>Application Type:</strong> Web application</li>
            <li><strong>Authorized JavaScript origins:</strong> <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>http://localhost:5173</code>, <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>https://yourdomain.com</code></li>
            <li><strong>Authorized redirect URIs:</strong> <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>https://yourdomain.com/api/auth/google/callback</code></li>
          </ul>
        </div>

        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '18px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '700 11px/1.4 "JetBrains Mono", monospace' }}>STEP 3</span>
            <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Configure Minimal OAuth Scopes</span>
          </div>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Under <strong>OAuth consent screen → Scopes</strong>, add only the minimal required permissions:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
            <code style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>https://www.googleapis.com/auth/calendar.events</code>
            <code style={{ padding: '4px 8px', borderRadius: '6px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 11.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>https://www.googleapis.com/auth/calendar.readonly</code>
          </div>
        </div>

        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '18px', background: 'var(--janus-surface)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '700 11px/1.4 "JetBrains Mono", monospace' }}>STEP 4</span>
            <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Domain Verification for Webhooks</span>
          </div>
          <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Google Push Notification webhooks require that your webhook domain is verified under <strong>APIs &amp; Services → Domain Verification</strong> using Google Search Console verification.
          </p>
        </div>
      </div>

      {/* ── INSTALLATION ─────────────────────────── */}
      <h2 id="install" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Installation
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Install the integrations package alongside core:
      </p>
      <div style={{ marginTop: '14px' }}>
        <CodeBlock isInstallCommand codeString="npm install @janus-scheduler/integrations @janus-scheduler/core">
          npm install @janus-scheduler/integrations @janus-scheduler/core
        </CodeBlock>
      </div>

      {/* ── INITIALIZATION ─────────────────────────── */}
      <h2 id="initialization" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Initialization &amp; Config
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Instantiate <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>GoogleSyncManager</code> and connect it with your <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>SchedulerManager</code>:
      </p>
      
      <div style={{ marginTop: '16px' }}>
        <CodeBlock title="googleSync.ts" codeString={`import { SchedulerManager } from "@janus-scheduler/core";
import { GoogleSyncManager } from "@janus-scheduler/integrations";

// 1. Initialize Sync Manager
export const syncManager = new GoogleSyncManager({
  onRemoteChange: (change) => {
    console.log("Applied change from Google Calendar:", change);
  }
});

// 2. Connect with user Google credentials or backend proxy
await syncManager.connect({
  token: "ya29.a0AfB_...", // OAuth access token
  calendarId: "primary",
  timeZone: "UTC"
});

// 3. Attach to SchedulerManager mutations
export const manager = new SchedulerManager({
  onEventAdd: (event) => syncManager.handleLocalEventAdd(event),
  onEventUpdate: (event) => syncManager.handleLocalEventUpdate(event),
  onEventDelete: ({ id }) => syncManager.handleLocalEventDelete(id),
  onError: ({ operation, error }) => {
    console.warn(\`Google Sync failed during \${operation}. Rolled back.\`, error);
  }
});`}>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ SchedulerManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/core"</span>;</div>
          <div><span style={{ color: '#f97316' }}>import</span> {'{ GoogleSyncManager }'} <span style={{ color: '#f97316' }}>from</span> <span style={{ color: '#a3e635' }}>"@janus-scheduler/integrations"</span>;</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#a1a1aa' }}>// 1. Initialize Sync Manager</span></div>
          <div><span style={{ color: '#f97316' }}>export const</span> syncManager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>GoogleSyncManager</span>({'{'}</div>
          <div>{'  '}onRemoteChange<span style={{ color: '#a1a1aa' }}>:</span> (change) <span style={{ color: '#f97316' }}>=&gt;</span> {'{'}</div>
          <div>{'    '}console.<span style={{ color: '#7dd3fc' }}>log</span>(<span style={{ color: '#a3e635' }}>"Applied change from Google Calendar:"</span>, change);</div>
          <div>{'  }'}</div>
          <div>{'}'});</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#a1a1aa' }}>// 2. Connect with user Google credentials or backend proxy</span></div>
          <div><span style={{ color: '#f97316' }}>await</span> syncManager.<span style={{ color: '#7dd3fc' }}>connect</span>({'{'}</div>
          <div>{'  '}token<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"ya29.a0AfB_..."</span>, <span style={{ color: '#a1a1aa' }}>// OAuth access token</span></div>
          <div>{'  '}calendarId<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"primary"</span>,</div>
          <div>{'  '}timeZone<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"UTC"</span></div>
          <div>{'}'});</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#a1a1aa' }}>// 3. Attach to SchedulerManager mutations</span></div>
          <div><span style={{ color: '#f97316' }}>export const</span> manager <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>SchedulerManager</span>({'{'}</div>
          <div>{'  '}onEventAdd<span style={{ color: '#a1a1aa' }}>:</span> (event) <span style={{ color: '#f97316' }}>=&gt;</span> syncManager.<span style={{ color: '#7dd3fc' }}>handleLocalEventAdd</span>(event),</div>
          <div>{'  '}onEventUpdate<span style={{ color: '#a1a1aa' }}>:</span> (event) <span style={{ color: '#f97316' }}>=&gt;</span> syncManager.<span style={{ color: '#7dd3fc' }}>handleLocalEventUpdate</span>(event),</div>
          <div>{'  '}onEventDelete<span style={{ color: '#a1a1aa' }}>:</span> ({'{ id }'}) <span style={{ color: '#f97316' }}>=&gt;</span> syncManager.<span style={{ color: '#7dd3fc' }}>handleLocalEventDelete</span>(id),</div>
          <div>{'  '}onError<span style={{ color: '#a1a1aa' }}>:</span> ({'{ operation, error }'}) <span style={{ color: '#f97316' }}>=&gt;</span> {'{'}</div>
          <div>{'    '}console.<span style={{ color: '#7dd3fc' }}>warn</span>(<span style={{ color: '#a3e635' }}>{'"Google Sync failed during " + operation'}</span>, error);</div>
          <div>{'  }'}</div>
          <div>{'}'});</div>
        </CodeBlock>
      </div>

      {/* ── 07 · ENTRY POINTS — BROWSER VS NODE (NEW) ─────── */}
      <h2 id="entry-points" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Entry Points — Browser vs. Node
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus supports two deployment architectures depending on whether OAuth tokens are managed directly in the browser or delegated to a secure backend service.
      </p>

      <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Option A: Browser-only */}
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ font: '600 16px/1.25 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Option A: Browser-Only</span>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 10.5px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>SPA Mode</span>
          </div>
          <p style={{ margin: 0, font: '400 13px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Direct client-side HTTP calls to Google Calendar API v3 using a short-lived user OAuth access token. Ideal for single-user apps, internal tools, and dashboards with no backend infrastructure.
          </p>
          <div style={{ marginTop: '4px' }}>
            <CodeBlock title="clientApp.ts" codeString={`import { GoogleSyncManager } from "@janus-scheduler/integrations";

const sync = new GoogleSyncManager();
await sync.connect({
  token: userAccessToken,
  calendarId: "primary"
});`}>
              <div><span style={{ color: '#f97316' }}>const</span> sync <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>GoogleSyncManager</span>();</div>
              <div><span style={{ color: '#f97316' }}>await</span> sync.<span style={{ color: '#7dd3fc' }}>connect</span>({'{'}</div>
              <div>{'  '}token<span style={{ color: '#a1a1aa' }}>:</span> userAccessToken,</div>
              <div>{'  '}calendarId<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"primary"</span></div>
              <div>{'}'});</div>
            </CodeBlock>
          </div>
        </div>

        {/* Option B: Node Backend */}
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ font: '600 16px/1.25 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Option B: Node.js Backend Hub</span>
            <span style={{ padding: '3px 8px', borderRadius: '6px', background: 'var(--janus-accent-tint)', color: 'var(--janus-accent-text)', font: '600 10.5px/1 "JetBrains Mono", monospace' }}>Production</span>
          </div>
          <p style={{ margin: 0, font: '400 13px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Tokens and sync state live securely on your Node server. The server processes webhooks, manages rate-limiting queues, and broadcasts real-time delta events to connected clients via WebSockets.
          </p>
          <div style={{ marginTop: '4px' }}>
            <CodeBlock title="server.ts" codeString={`import { createJanusApp, wsHub } from "@janus-scheduler/integrations/server";

const app = createJanusApp({
  tokenStore: new EncryptedDbTokenStore(),
  stateStore: new RedisCalendarStateStore()
});

wsHub.attach(httpServer, { path: "/janus-sync" });`}>
              <div><span style={{ color: '#f97316' }}>const</span> app <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#7dd3fc' }}>createJanusApp</span>({'{'}</div>
              <div>{'  '}tokenStore<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>EncryptedDbTokenStore</span>(),</div>
              <div>{'  '}stateStore<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#f97316' }}>new</span> <span style={{ color: '#7dd3fc' }}>RedisCalendarStateStore</span>()</div>
              <div>{'}'});</div>
              <div>wsHub.<span style={{ color: '#7dd3fc' }}>attach</span>(httpServer, {'{'} path<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"/janus-sync"</span> {'}'});</div>
            </CodeBlock>
          </div>
        </div>
      </div>

      {/* TokenStore & StateStore Interfaces */}
      <h3 style={{ margin: '28px 0 0', font: '600 18px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
        Storage Interfaces (TokenStore &amp; CalendarStateStore)
      </h3>
      <p style={{ margin: '8px 0 0', maxWidth: '66ch', font: '400 14.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Implement these two pluggable interfaces to connect your database (PostgreSQL, MongoDB, DynamoDB, Redis) with the sync engine:
      </p>

      <div style={{ marginTop: '14px' }}>
        <CodeBlock title="storeInterfaces.ts" codeString={`export interface TokenStore {
  getAccessToken(userId: string): Promise<string>;
  getRefreshToken(userId: string): Promise<string>;
  saveTokens(userId: string, tokens: { access: string; refresh?: string; expiresAt: number }): Promise<void>;
}

export interface CalendarStateStore {
  getSyncToken(calendarId: string): Promise<string | null>;
  saveSyncToken(calendarId: string, syncToken: string): Promise<void>;
  getChannelToken(channelId: string): Promise<string | null>;
  saveChannel(channel: { id: string; resourceId: string; expiration: number }): Promise<void>;
}`}>
          <div><span style={{ color: '#f97316' }}>export interface</span> <span style={{ color: '#7dd3fc' }}>TokenStore</span> {'{'}</div>
          <div>{'  '}getAccessToken(userId<span style={{ color: '#a1a1aa' }}>:</span> string)<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;string&gt;;</div>
          <div>{'  '}getRefreshToken(userId<span style={{ color: '#a1a1aa' }}>:</span> string)<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;string&gt;;</div>
          <div>{'  '}saveTokens(userId<span style={{ color: '#a1a1aa' }}>:</span> string, tokens<span style={{ color: '#a1a1aa' }}>:</span> {'{ access: string; refresh?: string; expiresAt: number }'})<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;void&gt;;</div>
          <div>{'}'}</div>
          <div>&#8203;</div>
          <div><span style={{ color: '#f97316' }}>export interface</span> <span style={{ color: '#7dd3fc' }}>CalendarStateStore</span> {'{'}</div>
          <div>{'  '}getSyncToken(calendarId<span style={{ color: '#a1a1aa' }}>:</span> string)<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;string | null&gt;;</div>
          <div>{'  '}saveSyncToken(calendarId<span style={{ color: '#a1a1aa' }}>:</span> string, syncToken<span style={{ color: '#a1a1aa' }}>:</span> string)<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;void&gt;;</div>
          <div>{'  '}getChannelToken(channelId<span style={{ color: '#a1a1aa' }}>:</span> string)<span style={{ color: '#a1a1aa' }}>:</span> Promise&lt;string | null&gt;;</div>
          <div>{'}'}</div>
        </CodeBlock>
      </div>

      <Callout type="tip" style={{ marginTop: '16px' }}>
        <strong>AES-256-GCM Encryption:</strong> Always encrypt stored OAuth refresh tokens at rest using a dedicated 256-bit symmetric key (`TOKEN_ENCRYPTION_KEY`). The `@janus-scheduler/integrations` package exports helper utility `encryptToken()` and `decryptToken()` for seamless compliance.
      </Callout>

      {/* ── 08 · ENVIRONMENT VARIABLES (NEW) ─────────────── */}
      <h2 id="env-vars" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Environment Variables
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Required and optional configuration variables when running the Google Calendar synchronization service:
      </p>

      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 90px 140px minmax(240px, 1fr)', minWidth: '700px' }}>
          <span style={{ padding: '10px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Variable</span>
          <span style={{ padding: '10px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Required</span>
          <span style={{ padding: '10px 14px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Default</span>
          <span style={{ padding: '10px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Description</span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>GOOGLE_CLIENT_ID</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Yes</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            OAuth 2.0 Web Application Client ID from Google Cloud Console.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>GOOGLE_CLIENT_SECRET</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Yes (Server)</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            OAuth 2.0 Client Secret for server-side token exchange and refresh.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>GOOGLE_REDIRECT_URI</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Yes</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            OAuth callback endpoint matching Google Cloud Console authorized list.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>GOOGLE_WEBHOOK_URL</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Optional</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Public HTTPS endpoint where Google delivers calendar push notifications.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>TOKEN_ENCRYPTION_KEY</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '600 12px/1 "DM Sans", sans-serif', color: 'var(--janus-accent-text)' }}>Yes</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>—</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            32-byte hex string used for AES-256-GCM token storage encryption.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>JANUS_GCAL_CALENDAR_ID</code>
          </span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '500 12px/1 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Optional</span>
          <span style={{ padding: '12px 14px', borderBottom: '1px solid var(--janus-surface)', font: '400 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>"primary"</span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Target Google calendar identifier or room resource email.
          </span>
        </div>
      </div>

      <div style={{ marginTop: '16px' }}>
        <CodeBlock title=".env" codeString={`GOOGLE_CLIENT_ID="123456789-abcdefg.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx"
GOOGLE_REDIRECT_URI="https://app.yourdomain.com/api/auth/google/callback"
GOOGLE_WEBHOOK_URL="https://api.yourdomain.com/webhooks/google-calendar"
GOOGLE_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxxxxxxxxxxxxx"
TOKEN_ENCRYPTION_KEY="0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
JANUS_GCAL_CALENDAR_ID="primary"`}>
          <div>GOOGLE_CLIENT_ID<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"123456789-abcdefg.apps.googleusercontent.com"</span></div>
          <div>GOOGLE_CLIENT_SECRET<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx"</span></div>
          <div>GOOGLE_REDIRECT_URI<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"https://app.yourdomain.com/api/auth/google/callback"</span></div>
          <div>GOOGLE_WEBHOOK_URL<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"https://api.yourdomain.com/webhooks/google-calendar"</span></div>
          <div>TOKEN_ENCRYPTION_KEY<span style={{ color: '#a1a1aa' }}>=</span><span style={{ color: '#a3e635' }}>"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"</span></div>
        </CodeBlock>
      </div>

      <Callout type="warning" style={{ marginTop: '14px' }}>
        <strong>Important:</strong> Never expose <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>GOOGLE_CLIENT_SECRET</code> or <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>TOKEN_ENCRYPTION_KEY</code> to browser client bundles. Store them in secure server environment variables or secret vaults.
      </Callout>

      {/* ── SCHEMA MAPPING ─────────────────────────── */}
      <h2 id="schema-mapping" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Schema &amp; Field Mapping
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Janus events are automatically bidirectional-mapped to Google Calendar Event Resource v3:
      </p>

      <div style={{ marginTop: '16px', border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflowX: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 220px minmax(240px, 1fr)', minWidth: '680px' }}>
          <span style={{ padding: '10px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Janus Event Field</span>
          <span style={{ padding: '10px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Google Calendar Field</span>
          <span style={{ padding: '10px 18px', background: 'var(--janus-surface)', borderBottom: '1.5px solid var(--janus-border)', font: '600 10.5px/1.4 "JetBrains Mono", monospace', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--janus-text-secondary)' }}>Transformation &amp; Rules</span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>id</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>id</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Direct ID mapping or mapped via local ID index lookup table.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>title</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>summary</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Plain text string. Empty titles fall back to "(No title)".
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>start / end</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>start.dateTime / end.dateTime</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            ISO 8601 UTC timestamps. If <code style={{ font: '500 11px/1 "JetBrains Mono", monospace' }}>allDay: true</code>, converted to <code style={{ font: '500 11px/1 "JetBrains Mono", monospace' }}>start.date (YYYY-MM-DD)</code>.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>resourceIds</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>attendees / extendedProperties</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Human resources resolve to attendee emails; rooms and equipment are stored in <code style={{ font: '500 11px/1 "JetBrains Mono", monospace' }}>extendedProperties.private</code>.
          </span>

          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace' }}>recurrence</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', display: 'flex', alignItems: 'center' }}>
            <code style={{ font: '500 12.5px/1.4 "JetBrains Mono", monospace', color: 'var(--janus-accent-text)' }}>recurrence: ["RRULE:..."]</code>
          </span>
          <span style={{ padding: '12px 18px', borderBottom: '1px solid var(--janus-surface)', font: '400 13px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Standard RFC 5545 iCalendar rule strings with INTERVAL, BYDAY, UNTIL, COUNT.
          </span>
        </div>
      </div>

      {/* sendUpdates: "all" Warning Callout */}
      <Callout type="warning" style={{ marginTop: '16px' }}>
        <strong>⚠️ Real-Email Delivery Warning (`sendUpdates` parameter):</strong> When creating or updating Google Calendar events that contain attendee email addresses, passing <code style={{ font: '600 12px/1 "JetBrains Mono", monospace' }}>sendUpdates: "all"</code> triggers Google to dispatch <em>actual email invitation notifications</em> to all attendees. During development, testing, and staging, ensure your configuration sets <code style={{ font: '600 12px/1 "JetBrains Mono", monospace' }}>sendUpdates: "none"</code> to avoid accidental email spam.
      </Callout>

      {/* ── RECURRENCE & RRULE ─────────────────────────── */}
      <h2 id="recurrence" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Recurrence &amp; RRULE Handling
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Google Calendar stores recurring series as a single master event containing an <code style={{ font: '500 13.5px/1 "JetBrains Mono", monospace' }}>RRULE</code> array, while creating independent exception events for altered occurrences.
      </p>

      <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '6px' }}>Master Series Event</span>
          <p style={{ margin: 0, font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            The master event contains the recurrence rule, e.g. <code style={{ font: '500 11.5px/1 "JetBrains Mono", monospace' }}>RRULE:FREQ=WEEKLY;BYDAY=TU,TH;COUNT=10</code>. Modifying the series updates the master record.
          </p>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '600 13px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block', marginBottom: '6px' }}>Single Occurrence Exceptions</span>
          <p style={{ margin: 0, font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Dragging a single instance creates a child event with <code style={{ font: '500 11.5px/1 "JetBrains Mono", monospace' }}>recurringEventId</code> and <code style={{ font: '500 11.5px/1 "JetBrains Mono", monospace' }}>originalStartTime</code>, keeping the rest of the schedule intact.
          </p>
        </div>
      </div>

      {/* ── WEBHOOKS & DELTA SYNC ─────────────────────────── */}
      <h2 id="webhooks-incremental" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Webhooks &amp; Delta Sync
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        To sync external changes made in Google Calendar in real time, configure Google Push Notifications on your backend server:
      </p>

      <div style={{ marginTop: '16px' }}>
        <CodeBlock title="webhookHandler.ts (Node/Express backend)" codeString={`// 1. Subscribe to Google Calendar webhook channel
await calendar.events.watch({
  calendarId: "primary",
  requestBody: {
    id: "janus-channel-" + user.id,
    type: "web_hook",
    address: "https://api.yourdomain.com/webhooks/google-calendar",
    token: user.webhookSecretToken,
  }
});

// 2. Receive Push Notification
app.post("/webhooks/google-calendar", async (req, res) => {
  const resourceState = req.headers["x-goog-resource-state"]; // "sync" | "exists"
  if (resourceState === "exists") {
    // Notify connected Janus client via WebSocket / SSE to trigger delta pull
    websocketServer.to(userId).emit("gcal:delta");
  }
  res.status(200).send("OK");
});`}>
          <div><span style={{ color: '#a1a1aa' }}>// 1. Subscribe to Google Calendar webhook channel</span></div>
          <div><span style={{ color: '#f97316' }}>await</span> calendar.events.<span style={{ color: '#7dd3fc' }}>watch</span>({'{'}</div>
          <div>{'  '}calendarId<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"primary"</span>,</div>
          <div>{'  '}requestBody<span style={{ color: '#a1a1aa' }}>:</span> {'{'}</div>
          <div>{'    '}id<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"janus-channel-"</span> + user.id,</div>
          <div>{'    '}type<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"web_hook"</span>,</div>
          <div>{'    '}address<span style={{ color: '#a1a1aa' }}>:</span> <span style={{ color: '#a3e635' }}>"https://api.yourdomain.com/webhooks/google-calendar"</span>,</div>
          <div>{'    '}token<span style={{ color: '#a1a1aa' }}>:</span> user.webhookSecretToken,</div>
          <div>{'  }'}</div>
          <div>{'}'});</div>
        </CodeBlock>
      </div>

      <Callout type="tip" style={{ marginTop: '18px', padding: '18px 22px' }}>
        <strong>Handling 410 Gone:</strong> If Google responds with <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>410 (Gone)</code> on a delta sync, it means the cached <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>syncToken</code> has expired (usually after 30 days). The <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>GoogleSyncManager</code> automatically clears the token and executes a full sync reconciliation cleanly.
      </Callout>

      {/* ── CONFLICT RESOLUTION ─────────────────────────── */}
      <h2 id="conflict-resolution" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Conflict Resolution
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Configure how Janus behaves when a resource is simultaneously edited in both systems:
      </p>

      <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '600 13.5px/1.3 "DM Sans", sans-serif', color: 'var(--janus-accent)' }}>client-wins</span>
          <p style={{ margin: '8px 0 0', font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Default for interactive drag-and-drop. Local user interaction takes precedence and overwrites the remote Google Calendar record.
          </p>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '600 13.5px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>server-wins</span>
          <p style={{ margin: '8px 0 0', font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Google Calendar serves as the single source of truth. Any conflicting local edit is rolled back to remote state.
          </p>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px', background: 'var(--janus-surface)' }}>
          <span style={{ font: '600 13.5px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>manual-merge</span>
          <p style={{ margin: '8px 0 0', font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Fires <code style={{ font: '500 11.5px/1 "JetBrains Mono", monospace' }}>onConflict</code> callback with both records so your application can display a visual diff resolution modal.
          </p>
        </div>
      </div>

      {/* ── SECURITY & RATE LIMITS ─────────────────────────── */}
      <h2 id="security" style={{ margin: '48px 0 0', font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: 'var(--janus-text)' }}>
        Security &amp; Rate Limits
      </h2>
      <p style={{ margin: '12px 0 0', maxWidth: '66ch', font: '400 15.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
        Best practices for OAuth scoping and Google quota management:
      </p>

      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px 18px', background: 'var(--janus-surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <span style={{ font: '600 14px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block' }}>Minimal OAuth Scopes</span>
            <span style={{ font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
              Request only <code style={{ font: '500 12px/1 "JetBrains Mono", monospace' }}>https://www.googleapis.com/auth/calendar.events</code> instead of full calendar access to ensure strict least-privilege compliance.
            </span>
          </div>
          <span style={{ padding: '3px 9px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', flexShrink: 0 }}>
            OAuth 2.0
          </span>
        </div>

        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '12px', padding: '16px 18px', background: 'var(--janus-surface)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div>
            <span style={{ font: '600 14px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)', display: 'block' }}>Automatic Rate Limiting &amp; Batching</span>
            <span style={{ font: '400 12.5px/1.5 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
              Bulk updates automatically coalesce into Google Batch Requests (up to 50 operations per HTTP call) with randomized exponential jitter backoff on HTTP 429 / 403 rate limits.
            </span>
          </div>
          <span style={{ padding: '3px 9px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)', font: '500 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)', flexShrink: 0 }}>
            50 ops/batch
          </span>
        </div>
      </div>

      {/* Bottom Nav */}
      <div style={{ marginTop: '44px', paddingTop: '22px', borderTop: '1.5px solid var(--janus-border)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Link to="/docs/topics/nlp" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>← Previous</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Natural language</span>
        </Link>
        <Link to="/docs/getting-started" style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'flex-end', textAlign: 'right' }}>
          <span style={{ font: '400 11px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Next →</span>
          <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Getting started overview</span>
        </Link>
      </div>
    </DocsLayout>
  );
}
