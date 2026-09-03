import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DocsLayout({ children, toc, currentPath }) {
  const [mobileDocsNavOpen, setMobileDocsNavOpen] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    setMobileDocsNavOpen(false);
    setMobileTocOpen(false);
  }, [currentPath]);

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)', overflowX: 'hidden' }}>
      <Header />

      {/* Mobile Docs Sub-Navigation Bar (Sticky below main header) */}
      <div className="docs-mobile-subbar">
        <button
          onClick={() => {
            setMobileDocsNavOpen(prev => !prev);
            setMobileTocOpen(false);
          }}
          aria-label="Toggle docs navigation"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 12px',
            border: '1.5px solid var(--janus-border)',
            borderRadius: '8px',
            background: mobileDocsNavOpen ? 'var(--janus-accent-tint)' : 'var(--janus-surface)',
            color: mobileDocsNavOpen ? 'var(--janus-accent-text)' : 'var(--janus-text)',
            font: '600 12.5px/1 "DM Sans", sans-serif',
            cursor: 'pointer'
          }}
        >
          <span>☰ Docs Menu</span>
          <span style={{ fontSize: '9px', opacity: 0.7 }}>{mobileDocsNavOpen ? '▲' : '▼'}</span>
        </button>

        {toc && (
          <button
            onClick={() => {
              setMobileTocOpen(prev => !prev);
              setMobileDocsNavOpen(false);
            }}
            aria-label="Toggle table of contents"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 12px',
              border: '1.5px solid var(--janus-border)',
              borderRadius: '8px',
              background: mobileTocOpen ? 'var(--janus-accent-tint)' : 'var(--janus-surface)',
              color: mobileTocOpen ? 'var(--janus-accent-text)' : 'var(--janus-text)',
              font: '500 12.5px/1 "DM Sans", sans-serif',
              cursor: 'pointer'
            }}
          >
            <span>On this page</span>
            <span style={{ fontSize: '9px', opacity: 0.7 }}>{mobileTocOpen ? '▲' : '▼'}</span>
          </button>
        )}
      </div>

      {/* Mobile Docs Navigation Accordion Panel */}
      {mobileDocsNavOpen && (
        <div style={{
          borderBottom: '1px solid var(--janus-border)',
          background: 'var(--janus-surface)',
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          maxHeight: '60vh',
          overflowY: 'auto'
        }}>
          <NavSection title="Guide">
            <NavItem active={currentPath === '/docs/getting-started'} href="/docs/getting-started">Getting started</NavItem>
          </NavSection>
          
          <NavSection title="Framework guides">
            <NavItem active={currentPath === '/docs/frameworks/react'} href="/docs/frameworks/react">React</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/angular'} href="/docs/frameworks/angular">Angular</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/solid'} href="/docs/frameworks/solid">Solid</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/vue'} href="/docs/frameworks/vue">Vue</NavItem>
          </NavSection>
          
          <NavSection title="API reference">
            {currentPath.includes('/docs/api/janus-') ? (
              <>
                <span style={{ padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-accent-tint)', font: '600 13.5px/1.3 "DM Sans", sans-serif', color: '#c2560a' }}>Components</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', padding: '4px 0 4px 10px', marginLeft: '10px', borderLeft: '1px solid var(--janus-border)' }}>
                  <SubNavItem active={currentPath === '/docs/api/janus-timeline'} href="/docs/api/janus-timeline">janus-timeline</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-month'} href="/docs/api/janus-month">janus-month</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-prompt'} href="/docs/api/janus-prompt">janus-prompt</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-event'} href="/docs/api/janus-event">janus-event</SubNavItem>
                </div>
              </>
            ) : (
              <NavItem href="/docs/api/janus-timeline">Components</NavItem>
            )}
            <NavItem active={currentPath === '/docs/api/scheduler-manager'} href="/docs/api/scheduler-manager" mono>SchedulerManager</NavItem>
            <NavItem active={currentPath === '/docs/api/store'} href="/docs/api/store" mono>Store</NavItem>
            <NavItem active={currentPath === '/docs/api/types'} href="/docs/api/types">Types</NavItem>
            <NavItem active={currentPath === '/docs/api/utilities'} href="/docs/api/utilities">Utilities</NavItem>
            <NavItem active={currentPath === '/docs/api/events'} href="/docs/api/events">Events</NavItem>
          </NavSection>
          
          <NavSection title="Topics">
            <NavItem active={currentPath === '/docs/topics/theming'} href="/docs/topics/theming">Theming</NavItem>
            <NavItem active={currentPath === '/docs/topics/nlp'} href="/docs/topics/nlp">Natural language</NavItem>
            <NavItem active={currentPath === '/docs/topics/google-calendar-sync'} href="/docs/topics/google-calendar-sync">Google Calendar sync</NavItem>
          </NavSection>

          <NavSection title="Agentic development">
            <NavItem active={currentPath === '/docs/agentic-development'} href="/docs/agentic-development">Skills &amp; AI setup</NavItem>
          </NavSection>
        </div>
      )}

      {/* Mobile TOC Accordion Panel */}
      {mobileTocOpen && toc && (
        <div style={{
          borderBottom: '1px solid var(--janus-border)',
          background: 'var(--janus-surface)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)', marginBottom: '4px' }}>On this page</span>
          <TableOfContents toc={toc} onLinkClick={() => setMobileTocOpen(false)} />
        </div>
      )}

      {/* Main Grid */}
      <div className="docs-layout-grid">
        
        {/* Left Sidebar (Desktop) */}
        <aside className="docs-sidebar-left">
          <NavSection title="Guide">
            <NavItem active={currentPath === '/docs/getting-started'} href="/docs/getting-started">Getting started</NavItem>
          </NavSection>
          
          <NavSection title="Framework guides">
            <NavItem active={currentPath === '/docs/frameworks/react'} href="/docs/frameworks/react">React</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/angular'} href="/docs/frameworks/angular">Angular</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/solid'} href="/docs/frameworks/solid">Solid</NavItem>
            <NavItem active={currentPath === '/docs/frameworks/vue'} href="/docs/frameworks/vue">Vue</NavItem>
          </NavSection>
          
          <NavSection title="API reference">
            {currentPath.includes('/docs/api/janus-') ? (
              <>
                <span style={{ padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-accent-tint)', font: '600 13.5px/1.3 "DM Sans", sans-serif', color: '#c2560a' }}>Components</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', padding: '4px 0 4px 10px', marginLeft: '10px', borderLeft: '1px solid var(--janus-border)' }}>
                  <SubNavItem active={currentPath === '/docs/api/janus-timeline'} href="/docs/api/janus-timeline">janus-timeline</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-month'} href="/docs/api/janus-month">janus-month</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-prompt'} href="/docs/api/janus-prompt">janus-prompt</SubNavItem>
                  <SubNavItem active={currentPath === '/docs/api/janus-event'} href="/docs/api/janus-event">janus-event</SubNavItem>
                </div>
              </>
            ) : (
              <NavItem href="/docs/api/janus-timeline">Components</NavItem>
            )}
            <NavItem active={currentPath === '/docs/api/scheduler-manager'} href="/docs/api/scheduler-manager" mono>SchedulerManager</NavItem>
            <NavItem active={currentPath === '/docs/api/store'} href="/docs/api/store" mono>Store</NavItem>
            <NavItem active={currentPath === '/docs/api/types'} href="/docs/api/types">Types</NavItem>
            <NavItem active={currentPath === '/docs/api/utilities'} href="/docs/api/utilities">Utilities</NavItem>
            <NavItem active={currentPath === '/docs/api/events'} href="/docs/api/events">Events</NavItem>
          </NavSection>
          
          <NavSection title="Topics">
            <NavItem active={currentPath === '/docs/topics/theming'} href="/docs/topics/theming">Theming</NavItem>
            <NavItem active={currentPath === '/docs/topics/nlp'} href="/docs/topics/nlp">Natural language</NavItem>
            <NavItem active={currentPath === '/docs/topics/google-calendar-sync'} href="/docs/topics/google-calendar-sync">Google Calendar sync</NavItem>
          </NavSection>

          <NavSection title="Agentic development">
            <NavItem active={currentPath === '/docs/agentic-development'} href="/docs/agentic-development">Skills &amp; AI setup</NavItem>
          </NavSection>
        </aside>

        {/* Main Content */}
        <main className="docs-main-content">
          {children}
        </main>

        {/* Right Sidebar (TOC on Desktop) */}
        <aside className="docs-sidebar-right">
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>On this page</span>
          <TableOfContents toc={toc} />
        </aside>

      </div>
    </div>
  );
}

function NavSection({ title, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <span style={{ padding: '0 10px 8px', font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>
        {title}
      </span>
      {children}
    </div>
  );
}

function NavItem({ href, active, children, mono }) {
  const [hovered, setHovered] = React.useState(false);
  
  if (active) {
    return (
      <span style={{ padding: '8px 10px', borderRadius: '9px', background: 'var(--janus-accent-tint)', font: `600 13.5px/1.3 ${mono ? '"JetBrains Mono", monospace' : '"DM Sans", sans-serif'}`, color: '#c2560a' }}>
        {children}
      </span>
    );
  }
  
  return (
    <a 
      href={href} 
      style={{ 
        padding: '7px 10px', 
        borderRadius: '9px', 
        font: `400 13.5px/1.3 ${mono ? '"JetBrains Mono", monospace' : '"DM Sans", sans-serif'}`, 
        color: hovered ? 'var(--janus-text)' : 'var(--janus-text-secondary)',
        background: hovered ? 'var(--janus-surface)' : 'transparent',
        transition: 'all 0.1s ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function SubNavItem({ href, active, children }) {
  const [hovered, setHovered] = React.useState(false);
  
  if (active) {
    return (
      <span style={{ 
        padding: '5px 8px', 
        borderRadius: '6px', 
        background: 'var(--janus-surface)', 
        font: '500 12.5px/1.3 "JetBrains Mono", monospace', 
        color: 'var(--janus-text)' 
      }}>
        {children}
      </span>
    );
  }
  
  return (
    <a 
      href={href} 
      style={{ 
        padding: '5px 8px', 
        borderRadius: '6px', 
        font: '400 12.5px/1.3 "JetBrains Mono", monospace', 
        color: hovered ? 'var(--janus-text)' : 'var(--janus-text-secondary)',
        background: hovered ? 'var(--janus-surface)' : 'transparent',
        transition: 'all 0.1s ease',
        display: 'block'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

function TableOfContents({ toc, onLinkClick }) {
  const [activeId, setActiveId] = React.useState('');

  const items = React.useMemo(() => {
    if (!toc) return [];
    
    let rawChildren = [];
    if (React.isValidElement(toc)) {
      if (toc.type === React.Fragment) {
        rawChildren = React.Children.toArray(toc.props.children);
      } else {
        rawChildren = [toc];
      }
    } else if (Array.isArray(toc)) {
      rawChildren = toc;
    }

    return rawChildren
      .filter(child => React.isValidElement(child) && child.props.href)
      .map(child => {
        const href = child.props.href || '';
        const id = href.replace('#', '');
        const label = child.props.children;
        const indent = (child.props.style && child.props.style.paddingLeft) ? true : false;
        return { id, label, indent };
      });
  }, [toc]);

  const hasMountedHashRef = React.useRef(false);

  // Scroll to hash only ONCE on initial mount
  React.useEffect(() => {
    if (hasMountedHashRef.current) return;
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      hasMountedHashRef.current = true;
      setActiveId(hash);
      setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 110;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const itemsKey = React.useMemo(() => items.map(i => i.id).join(','), [items]);

  // Scroll spy listener
  React.useEffect(() => {
    if (!items.length) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
      let currentActive = items[0]?.id || '';
      
      for (const item of items) {
        if (!item.id) continue;
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top) {
            currentActive = item.id;
          }
        }
      }
      setActiveId(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itemsKey]);

  const handleClick = (e, id) => {
    e.preventDefault();
    if (!id) return;
    setActiveId(id);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
    if (onLinkClick) onLinkClick();
  };

  if (!items.length) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <a
            key={item.id || item.label}
            href={`#${item.id || ''}`}
            onClick={(e) => handleClick(e, item.id)}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '12.5px',
              lineHeight: 1.4,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--janus-accent-text, #c2560a)' : (item.indent ? 'var(--janus-text-secondary)' : 'var(--janus-text-muted)'),
              paddingLeft: item.indent ? '14px' : '0',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.color = 'var(--janus-text)';
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.color = item.indent ? 'var(--janus-text-secondary)' : 'var(--janus-text-muted)';
            }}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
