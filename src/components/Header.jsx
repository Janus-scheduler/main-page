import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import SearchModal from './SearchModal';
import JanusLogo from './JanusLogo';

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isDocs = location.pathname.includes('/docs');
  const isFaq = location.pathname === '/faq';
  const isFeatures = location.pathname === '/features';
  const isPackages = location.pathname === '/packages';
  const isAbout = location.pathname === '/about';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        borderBottom: '1px solid var(--janus-border)',
        background: 'var(--janus-nav-bg)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      }}>
        {/* Main Bar */}
        <div style={{
          height: '56px',
          padding: '0 20px',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
            <JanusLogo size={24} />
            <span style={{ font: '700 15px/1 "DM Sans", sans-serif', letterSpacing: '-0.02em', color: 'var(--janus-text)' }}>
              Janus<span style={{ color: 'var(--janus-text-muted)', fontWeight: 500 }}>Scheduler</span>
            </span>
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="janus-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <NavLink to="/docs/getting-started" active={isDocs}>Docs</NavLink>
            <NavLink to="/features" active={isFeatures}>Features</NavLink>
            <NavLink to="/packages" active={isPackages}>Packages</NavLink>
            <NavLink to="/faq" active={isFaq}>FAQ</NavLink>
            <NavLink to="/about" active={isAbout}>About</NavLink>
          </div>
          
          <div className="janus-desktop-nav" style={{ flex: 1 }} />
          
          {/* Desktop Search Button */}
          <button
            onClick={() => setSearchOpen(true)}
            className="janus-desktop-nav"
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
          
          <span className="janus-desktop-nav" style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11.5px/1.35 "JetBrains Mono", monospace' }}>v2.4.0</span>

          {/* Desktop Theme Toggle */}
          <div
            onClick={toggleTheme}
            className="janus-desktop-nav"
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

          {/* Mobile Right Action Bar */}
          <div className="janus-mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search docs"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid var(--janus-border)',
                borderRadius: '9px',
                background: 'var(--janus-surface)',
                color: 'var(--janus-text)',
                font: '400 16px/1 "JetBrains Mono", monospace',
                cursor: 'pointer'
              }}
            >
              ⌕
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              style={{
                width: '38px',
                height: '38px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4.5px',
                border: '1.5px solid var(--janus-border)',
                borderRadius: '9px',
                background: 'var(--janus-surface)',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <span style={{ width: '17px', height: '1.5px', background: 'var(--janus-text)', transition: 'transform 0.2s', transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ width: '17px', height: '1.5px', background: 'var(--janus-text)', opacity: mobileMenuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ width: '17px', height: '1.5px', background: 'var(--janus-text)', transition: 'transform 0.2s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div style={{
            borderTop: '1px solid var(--janus-border)',
            background: 'var(--janus-bg)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
          }}>
            {/* Mobile Search trigger bar */}
            <button
              onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                height: '42px',
                padding: '0 14px',
                border: '1.5px solid var(--janus-border)',
                borderRadius: '9px',
                background: 'var(--janus-surface)',
                cursor: 'pointer',
                textAlign: 'left',
                marginBottom: '10px'
              }}
            >
              <span style={{ font: '400 14px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⌕</span>
              <span style={{ flex: 1, font: '400 14px/1 "DM Sans", sans-serif', color: 'var(--janus-text-muted)' }}>Search documentation...</span>
              <span style={{ padding: '2px 6px', borderRadius: '5px', border: '1px solid var(--janus-border)', background: 'var(--janus-bg)', font: '500 10px/1.3 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>⌘K</span>
            </button>

            <MobileNavLink to="/docs/getting-started" active={isDocs} onClick={() => setMobileMenuOpen(false)}>Docs &amp; Getting Started</MobileNavLink>
            <MobileNavLink to="/features" active={isFeatures} onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
            <MobileNavLink to="/packages" active={isPackages} onClick={() => setMobileMenuOpen(false)}>Packages</MobileNavLink>
            <MobileNavLink to="/docs/agentic-development" active={location.pathname === '/docs/agentic-development'} onClick={() => setMobileMenuOpen(false)}>Agentic Development (AI Skills)</MobileNavLink>
            <MobileNavLink to="/faq" active={isFaq} onClick={() => setMobileMenuOpen(false)}>FAQ</MobileNavLink>
            <MobileNavLink to="/about" active={isAbout} onClick={() => setMobileMenuOpen(false)}>About &amp; Team</MobileNavLink>

            {/* Bottom Row: Theme & GitHub */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '14px', paddingTop: '16px', borderTop: '1px solid var(--janus-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ font: '500 12px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>Theme:</span>
                <div
                  onClick={toggleTheme}
                  style={{
                    width: '68px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '3px',
                    gap: '2px',
                    border: '1.5px solid var(--janus-border)',
                    borderRadius: '9px',
                    background: 'var(--janus-surface)',
                    cursor: 'pointer'
                  }}
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

              <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>
                v2.4.0
              </span>
            </div>
          </div>
        )}
      </nav>

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
        color: active ? 'var(--janus-accent-text)' : 'var(--janus-text-secondary)',
        transition: 'color 0.15s ease'
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--janus-text)'}
      onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--janus-accent-text)' : 'var(--janus-text-secondary)'}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, active, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '42px',
        padding: '0 12px',
        borderRadius: '8px',
        font: '500 14.5px/1 "DM Sans", sans-serif',
        color: active ? 'var(--janus-accent-text)' : 'var(--janus-text)',
        background: active ? 'var(--janus-accent-tint)' : 'transparent',
        textDecoration: 'none'
      }}
    >
      {children}
    </Link>
  );
}
