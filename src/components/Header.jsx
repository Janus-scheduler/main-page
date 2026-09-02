import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import JanusLogo from './JanusLogo';

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const isDocs = location.pathname.includes('/docs');
  const isFaq = location.pathname === '/faq';
  const isFeatures = location.pathname === '/features';
  const isPackages = location.pathname === '/packages';
  const isAbout = location.pathname === '/about';
  const isHome = location.pathname === '/';

  // Global Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <>
    <div style={{
      position: 'sticky',
      top: 0,
      zIndex: 60,
      height: '56px',
      padding: '0 40px',
      display: 'flex',
      alignItems: 'center',
      gap: '26px',
      borderBottom: '1px solid var(--janus-border)',
      background: 'var(--janus-nav-bg)',
      backdropFilter: 'blur(14px)'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
        <JanusLogo size={24} />
        <span style={{ font: '700 15px/1 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
          Janus<span style={{ color: 'var(--janus-text-muted)', fontWeight: 500 }}>Scheduler</span>
        </span>
      </Link>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <NavLink to="/docs/getting-started" active={isDocs}>Docs</NavLink>
        <NavLink to="/features" active={isFeatures}>Features</NavLink>
        <NavLink to="/packages" active={isPackages}>Packages</NavLink>
        <NavLink to="/faq" active={isFaq}>FAQ</NavLink>
        <NavLink to="/about" active={isAbout}>About</NavLink>
      </div>
      
      <div style={{ flex: 1 }} />
      
      <button
        onClick={() => setSearchOpen(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          height: '34px',
          padding: '0 11px',
          width: '220px',
          border: '1.5px solid var(--janus-border)',
          borderRadius: '9px',
          background: 'var(--janus-surface)',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'border-color 0.15s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--janus-text-secondary)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--janus-border)'}
      >
        <span style={{ font: '400 13px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⌕</span>
        <span style={{ flex: 1, minWidth: 0, font: '400 13px/1 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Search the docs...</span>
        <span style={{ padding: '2px 5px', borderRadius: '5px', border: '1px solid var(--janus-border)', background: 'var(--janus-bg)', font: '500 10.5px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⌘K</span>
      </button>
      
      <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>v2.4.0</span>

      {/* Theme Toggle */}
      <div
        onClick={toggleTheme}
        style={{
          width: '56px',
          height: '34px',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          padding: '3px',
          gap: '2px',
          border: '1.5px solid var(--janus-border)',
          borderRadius: '9px',
          background: 'var(--janus-surface)',
          cursor: 'pointer'
        }}
        title="Switch theme"
      >
        <span style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          background: theme === 'light' ? 'var(--janus-bg)' : 'transparent',
          font: '400 12px/1 "JetBrains Mono", monospace',
          color: theme === 'light' ? 'var(--janus-text)' : 'var(--janus-text-muted)',
          boxShadow: theme === 'light' ? 'var(--janus-shadow-sm)' : 'none'
        }}>☀</span>
        <span style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          background: theme === 'dark' ? 'var(--janus-bg)' : 'transparent',
          font: '400 12px/1 "JetBrains Mono", monospace',
          color: theme === 'dark' ? 'var(--janus-text)' : 'var(--janus-text-muted)',
          boxShadow: theme === 'dark' ? 'var(--janus-shadow-sm)' : 'none'
        }}>☾</span>
      </div>
    </div>
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link 
      to={to} 
      style={{ 
        font: `${active ? '600' : '500'} 13.5px/1 "DM Sans", sans-serif`, 
        color: active ? 'var(--janus-accent-text)' : 'var(--janus-text-secondary)' 
      }}
    >
      {children}
    </Link>
  );
}
