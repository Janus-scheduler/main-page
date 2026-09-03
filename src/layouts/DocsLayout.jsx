import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DocsLayout({ children, toc, currentPath }) {
  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)' }}>
      <Header />
      
      <div style={{ display: 'grid', gridTemplateColumns: '272px 1fr 232px' }}>
        
        {/* Left Sidebar */}
        <aside style={{ borderRight: '1px solid var(--janus-border)', padding: '26px 20px 40px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
        <main style={{ padding: '34px 44px 44px', minWidth: 0 }}>
          {children}
        </main>

        {/* Right Sidebar (TOC) */}
        <aside style={{ borderLeft: '1px solid var(--janus-border)', padding: '34px 22px 40px', display: 'flex', flexDirection: 'column', gap: '12px', alignSelf: 'start', position: 'sticky', top: '56px', maxHeight: 'calc(100vh - 70px)', overflowY: 'auto' }}>
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
        textDecoration: 'none'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

export function TableOfContents({ toc }) {
  const items = React.useMemo(() => {
    if (!toc) return [];
    if (Array.isArray(toc)) return toc;
    
    // If toc is a React element / Fragment, parse its <a> children
    const extracted = [];
    const children = React.Children.toArray(toc.props?.children || toc);
    
    children.forEach((child) => {
      if (React.isValidElement(child)) {
        const href = child.props?.href || '';
        const id = href.startsWith('#') ? href.slice(1) : href;
        const label = child.props?.children;
        const hasIndent = child.props?.style?.paddingLeft || child.props?.style?.marginLeft;
        if (label && typeof label === 'string') {
          extracted.push({
            id,
            label,
            indent: Boolean(hasIndent)
          });
        }
      }
    });
    
    return extracted;
  }, [toc]);

  const [activeId, setActiveId] = React.useState(items[0]?.id || '');
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
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
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
      const scrollPosition = window.scrollY + 120;
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
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
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
