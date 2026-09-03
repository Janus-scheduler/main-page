import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const SEARCH_ITEMS = [
  // Getting Started
  {
    title: 'Getting Started',
    subtitle: 'Installation, quick start, architecture & mental model',
    category: 'Guides',
    path: '/docs/getting-started',
    keywords: ['install', 'setup', 'quickstart', 'npm', 'architecture', 'start', 'begin']
  },
  // Frameworks
  {
    title: 'React Guide',
    subtitle: 'Lit/React wrapper, hooks (useJanusChat), props, and callbacks',
    category: 'Frameworks',
    path: '/docs/frameworks/react',
    keywords: ['react', 'useJanusChat', 'jsx', 'hooks', 'wrapper', 'nextjs', 'remix', 'vite']
  },
  {
    title: 'Angular Guide',
    subtitle: 'Angular wrapper, custom elements schema, inputs and outputs',
    category: 'Frameworks',
    path: '/docs/frameworks/angular',
    keywords: ['angular', 'signals', 'components', 'inputs', 'outputs', 'ngmodule']
  },
  {
    title: 'SolidJS Guide',
    subtitle: 'Solid wrapper, createSignal integration, reactive primitives',
    category: 'Frameworks',
    path: '/docs/frameworks/solid',
    keywords: ['solid', 'solidjs', 'signals', 'jsx', 'createSignal', 'reactive']
  },
  {
    title: 'Vue Guide',
    subtitle: 'Vue 3 composition API, web components integration, props & emits',
    category: 'Frameworks',
    path: '/docs/frameworks/vue',
    keywords: ['vue', 'vue3', 'composition api', 'ref', 'reactive', 'vite', 'nuxt']
  },
  // Components
  {
    title: '<janus-timeline>',
    subtitle: 'High-performance resource timeline with horizontal and vertical virtualization',
    category: 'Components',
    path: '/docs/api/janus-timeline',
    keywords: ['timeline', 'resource', 'virtualization', 'drag', 'resize', 'zoom', 'rows']
  },
  {
    title: '<janus-month-grid>',
    subtitle: 'Calendar matrix view with multi-week scheduling and overflow pills',
    category: 'Components',
    path: '/docs/api/janus-month',
    keywords: ['month', 'grid', 'calendar', 'weeks', 'days', 'matrix', 'view']
  },
  {
    title: '<janus-prompt>',
    subtitle: 'AI natural language command bar for temporal scheduling commands',
    category: 'Components',
    path: '/docs/api/janus-prompt',
    keywords: ['prompt', 'ai', 'nlp', 'natural language', 'command bar', 'chat', 'authoring']
  },
  {
    title: '<janus-event>',
    subtitle: 'Interactive event modal editor with recurrence & conflict detection',
    category: 'Components',
    path: '/docs/api/janus-event',
    keywords: ['event', 'modal', 'editor', 'form', 'dialog', 'recurring', 'conflict']
  },
  // API Reference
  {
    title: 'SchedulerManager API',
    subtitle: 'Central controller, state machine, undo/redo and transactional actions',
    category: 'API Reference',
    path: '/docs/api/scheduler-manager',
    keywords: ['schedulermanager', 'manager', 'state machine', 'undo', 'redo', 'transaction', 'rollback']
  },
  {
    title: 'Store API',
    subtitle: 'Zustand-powered reactive state container and state selectors',
    category: 'API Reference',
    path: '/docs/api/store',
    keywords: ['store', 'zustand', 'state', 'subscribe', 'getState', 'selectors']
  },
  {
    title: 'TypeScript Types',
    subtitle: 'JanusEvent, Resource, Assignment, ViewType, and full type definitions',
    category: 'API Reference',
    path: '/docs/api/types',
    keywords: ['types', 'typescript', 'janusevent', 'resource', 'assignment', 'interfaces', 'typedefs']
  },
  {
    title: 'Utilities & Conflict Math',
    subtitle: 'Temporal calculations, timezone conversion, recurrence expansion',
    category: 'API Reference',
    path: '/docs/api/utilities',
    keywords: ['utilities', 'conflict', 'timezone', 'overlap', 'math', 'rfc5545', 'helpers']
  },
  {
    title: 'Events & Callbacks',
    subtitle: 'DOM CustomEvents: onEventChange, onEventClick, onConflictDetected',
    category: 'API Reference',
    path: '/docs/api/events',
    keywords: ['events', 'callbacks', 'customevent', 'onEventChange', 'onEventClick', 'dispatch']
  },
  // Topics
  {
    title: 'Theming & Design Tokens',
    subtitle: 'CSS custom properties, dark mode tokens, shadow DOM theme variables',
    category: 'Topics',
    path: '/docs/topics/theming',
    keywords: ['theming', 'theme', 'css', 'variables', 'tokens', 'colors', 'dark mode', 'customization']
  },
  {
    title: 'Natural Language Processing (NLP)',
    subtitle: 'Offline Chrono parser, intent classification, zero server roundtrips',
    category: 'Topics',
    path: '/docs/topics/nlp',
    keywords: ['nlp', 'natural language', 'ai', 'chrono', 'parser', 'offline', 'temporal']
  },
  {
    title: 'Google Calendar Sync',
    subtitle: 'Two-way synchronization, delta syncToken, batching, and OAuth tokens',
    category: 'Topics',
    path: '/docs/topics/google-calendar-sync',
    keywords: ['google calendar', 'sync', 'oauth', 'webhooks', 'delta', 'synctoken', 'integration']
  },
  {
    title: 'Agentic Development & AI Skills',
    subtitle: 'SKILL.md, agent prompt recipes, Claude Code, Cursor & Windsurf setup',
    category: 'Agentic Development',
    path: '/docs/agentic-development',
    keywords: ['agent', 'skill', 'claude', 'cursor', 'windsurf', 'copilot', 'ai', 'prompt', 'skill.md', 'agents.md', 'llm', 'antigravity']
  },
  // General Pages
  {
    title: 'Features Overview',
    subtitle: 'All 8 core architecture pillars and benchmark results',
    category: 'Pages',
    path: '/features',
    keywords: ['features', 'benchmarks', 'performance', 'virtualization', 'pillars']
  },
  {
    title: 'NPM Packages',
    subtitle: 'Package matrix, bundle sizes, framework wrapper artifacts',
    category: 'Pages',
    path: '/packages',
    keywords: ['packages', 'npm', 'bundlesize', 'core', 'ui', 'react', 'vue', 'angular', 'solid']
  },
  {
    title: 'Frequently Asked Questions (FAQ)',
    subtitle: 'Licensing, MIT license, team maintenance, and technical FAQ',
    category: 'Pages',
    path: '/faq',
    keywords: ['faq', 'questions', 'licence', 'mit', 'free', 'commercial', 'team', 'support']
  },
  {
    title: 'About Janus & Team',
    subtitle: 'Final year research project at University of Ruhuna, supervisor Dr. Rajitha Udawalpola',
    category: 'Pages',
    path: '/about',
    keywords: ['about', 'team', 'ruhuna', 'university', 'research', 'students', 'final year project']
  }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Filter items - returns ALL matching items without truncation
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return SEARCH_ITEMS; // Show all available items
    }
    return SEARCH_ITEMS.filter(item => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSubtitle = item.subtitle.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some(k => k.toLowerCase().includes(q));
      return matchTitle || matchSubtitle || matchCat || matchKeywords;
    });
  }, [query]);

  // Keep selected index in bounds
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Scroll active item into view
  useEffect(() => {
    if (resultsRef.current) {
      const activeEl = resultsRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          navigate(filteredItems[selectedIndex].path);
          onClose();
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 20px 20px',
        animation: 'fadeIn 0.15s ease'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          background: 'var(--janus-bg)',
          border: '1.5px solid var(--janus-border)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255,255,255,0.05)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(100vh - 100px)'
        }}
      >
        {/* Search Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 20px',
          borderBottom: '1.5px solid var(--janus-border)',
          background: 'var(--janus-surface)'
        }}>
          <span style={{ fontSize: '18px', color: 'var(--janus-accent-text)', lineHeight: 1 }}>⌕</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search documentation, components, API..."
            style={{
              flex: 1,
              border: 0,
              outline: 'none',
              background: 'transparent',
              font: '500 16px/1.4 "DM Sans", sans-serif',
              color: 'var(--janus-text)'
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                border: 0,
                background: 'transparent',
                color: 'var(--janus-text-muted)',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '4px'
              }}
            >
              ✕
            </button>
          )}
          <span style={{
            padding: '3px 7px',
            borderRadius: '6px',
            background: 'var(--janus-bg)',
            border: '1px solid var(--janus-border)',
            font: '500 11px/1 "JetBrains Mono", monospace',
            color: 'var(--janus-text-muted)'
          }}>
            ESC
          </span>
        </div>

        {/* Results List */}
        <div
          ref={resultsRef}
          className="jscroll"
          style={{
            overflowY: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px',
            flex: 1
          }}
        >
          {filteredItems.length === 0 ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--janus-text-secondary)' }}>
              <p style={{ margin: 0, font: '600 16px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>
                No results found for &ldquo;{query}&rdquo;
              </p>
              <p style={{ margin: '6px 0 0', font: '400 13.5px/1.4 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>
                Try searching for components, props, hooks, or topics.
              </p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const isFirstInGroup = idx === 0 || filteredItems[idx - 1].category !== item.category;

              return (
                <React.Fragment key={item.path + item.title}>
                  {isFirstInGroup && (
                    <div style={{
                      padding: '10px 14px 4px',
                      font: '600 10.5px/1 "JetBrains Mono", monospace',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--janus-text-muted)'
                    }}>
                      {item.category}
                    </div>
                  )}
                  <div
                    data-index={idx}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: isSelected ? 'var(--janus-surface)' : 'transparent',
                      border: isSelected ? '1px solid var(--janus-accent)' : '1px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      transition: 'all 0.1s ease'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          font: item.title.startsWith('<') ? '600 14px/1.2 "JetBrains Mono", monospace' : '600 14.5px/1.2 "DM Sans", sans-serif',
                          color: isSelected ? 'var(--janus-accent-text)' : 'var(--janus-text)'
                        }}>
                          {item.title}
                        </span>
                      </div>
                      <span style={{
                        font: '400 12px/1.4 "DM Sans", sans-serif',
                        color: 'var(--janus-text-secondary)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {item.subtitle}
                      </span>
                    </div>

                    <span style={{
                      font: '400 12px/1 "JetBrains Mono", monospace',
                      color: isSelected ? 'var(--janus-accent-text)' : 'var(--janus-text-muted)',
                      opacity: isSelected ? 1 : 0.4
                    }}>
                      ↵
                    </span>
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div style={{
          padding: '10px 18px',
          background: 'var(--janus-surface)',
          borderTop: '1px solid var(--janus-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          font: '400 11.5px/1 "JetBrains Mono", monospace',
          color: 'var(--janus-text-muted)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span><kbd style={{ padding: '2px 5px', borderRadius: '4px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>↑</kbd> <kbd style={{ padding: '2px 5px', borderRadius: '4px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>↓</kbd> navigate</span>
            <span><kbd style={{ padding: '2px 5px', borderRadius: '4px', background: 'var(--janus-bg)', border: '1px solid var(--janus-border)' }}>↵</kbd> select</span>
          </div>
          <span>Showing {filteredItems.length} results</span>
        </div>
      </div>
    </div>
  );
}
