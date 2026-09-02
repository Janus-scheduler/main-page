import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  const [copiedBibtex, setCopiedBibtex] = React.useState(false);

  const bibtexText = `@techreport{janus2026scheduler,
  title       = {Janus Scheduler: A Framework-Agnostic Scheduling Component},
  author      = {Gunasinghe, M. and Nishshanka, N. and Kumara, C. and Athapaththu, V.},
  institution = {University of Ruhuna},
  year        = {2026}
}`;

  const copyBibtex = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(bibtexText).then(() => {
        setCopiedBibtex(true);
        setTimeout(() => setCopiedBibtex(false), 2000);
      }).catch(() => {});
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', background: 'var(--janus-bg)', color: 'var(--janus-text)' }}>
      <Header />

      {/* STORY */}
      <header className="grid-header" style={{ padding: '72px 40px 0', display: 'grid', gap: '56px', alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ font: '500 11px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>
            About the project
          </span>
          <h1 style={{ margin: 0, maxWidth: '22ch', font: '700 54px/1.06 "DM Sans", sans-serif', letterSpacing: '-0.03em' }}>
            A high-performance scheduling component designed from first principles
          </h1>
          <p style={{ margin: 0, maxWidth: '62ch', font: '400 16.5px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
            Janus was developed as an undergraduate final-year research and development project at the Faculty of Engineering, University of Ruhuna. Modern web applications demand responsive, complex scheduling and timeline interfaces, yet existing options are often tightly coupled to single frameworks, bloated by heavy dependencies, or dependent on remote servers for basic conflict detection and temporal math.
          </p>
          <p style={{ margin: 0, maxWidth: '62ch', font: '400 16.5px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
            Janus solves this with a headless, framework-agnostic core built on custom elements, accompanied by first-class wrappers for React, Angular, Solid, and Vue. By executing range algebra, RFC 5545 recurrence expansion, client-side NLP parsing, and bidirectional sync entirely in the browser, Janus delivers predictable 60fps virtualization with 63,000+ events while maintaining zero backend lock-in.
          </p>
        </div>

        <aside style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', background: 'var(--janus-surface)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', boxShadow: 'var(--janus-shadow)' }}>
          <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>
            Core Architecture
          </span>
          <p style={{ margin: 0, font: '400 14.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            Janus is built on a clean dual-layer architecture: a zero-dependency headless core engine managing temporal algorithms, recurrence rules, and conflict detection, completely decoupled from DOM rendering.
          </p>
          <p style={{ margin: 0, font: '400 14.5px/1.65 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>
            This strict boundary allows complex scheduling logic to run portably across any modern UI framework (React, Angular, Solid, and Vue) with zero server overhead and optimal client-side execution.
          </p>
          <div style={{ paddingTop: '14px', borderTop: '1px solid var(--janus-border)', display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-border)', font: '500 11px/1.35 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>MIT licence</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-border)', font: '500 11px/1.35 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>Open source</span>
            <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-bg)', border: '1.5px solid var(--janus-border)', font: '500 11px/1.35 "JetBrains Mono", monospace', color: 'var(--janus-text-secondary)' }}>University of Ruhuna</span>
          </div>
        </aside>
      </header>

      {/* GOALS */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>What we set out to prove</h2>
        </div>
        <div className="grid-4" style={{ display: 'grid', gap: '12px' }}>
          <GoalCard num="01" title="Framework independence" text="One rendering core, consumed identically from four frameworks (React, Angular, Solid, Vue)." />
          <GoalCard num="02" title="No backend required" text="Everything — including parsing and conflict detection — runs in the browser, offline." />
          <GoalCard num="03" title="Correct time handling" text="UTC storage, zoned display, and a test suite that crosses daylight-saving boundaries." />
          <GoalCard num="04" title="Honest scope" text="Every limitation documented where a developer will meet it, not buried in an issue." />
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>The team</h2>
        </div>
        <div className="grid-4" style={{ display: 'grid', gap: '12px' }}>
          <TeamCard name="Manusha Gunasinghe" role="member" avatar="/manusha-gunasinghe.png" />
          <TeamCard name="Nethmi Nishshanka" role="member" avatar="/nethmi-nishshanka.png" />
          <TeamCard name="Chathura Kumara" role="member" avatar="/chathura-kumara.png" />
          <TeamCard name="Vidumini Athapaththu" role="member" avatar="/vidumini-athapaththu.png" />
        </div>
      </section>

      {/* SUPERVISOR */}
      <section style={{ padding: '32px 40px 0' }}>
        <div className="grid-supervisor" style={{ background: '#09090b', borderRadius: '14px', padding: '32px 34px', display: 'grid', gap: '26px', alignItems: 'center' }}>
          <img 
            src="/rajitha-udawalpola.png" 
            alt="Dr. Rajitha Udawalpola" 
            style={{ 
              width: '96px', 
              height: '96px', 
              borderRadius: '999px', 
              border: '1.5px solid #3f3f46', 
              objectFit: 'cover', 
              boxShadow: '0 4px 14px rgba(0,0,0,0.3)' 
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ font: '700 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f97316' }}>Supervisor</span>
            <span style={{ font: '600 24px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.018em', color: '#fafafa' }}>Dr. Rajitha Udawalpola</span>
            <span style={{ font: '400 13.5px/1.5 "DM Sans", sans-serif', color: '#a1a1aa' }}>Department of Electrical and Information Engineering, Faculty of Engineering · University of Ruhuna</span>
            <p style={{ margin: '4px 0 0', maxWidth: '76ch', font: '400 13.5px/1.6 "DM Sans", sans-serif', color: '#e4e4e7' }}>
              Supervised the project from proposal through to submission, and pushed hardest on the two things that turned out to matter most: measuring performance rather than claiming it, and writing down what the library will not do.
            </p>
          </div>
        </div>
      </section>

      {/* ENGINEERING PRACTICE */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Engineering practice</h2>
        </div>
        <div className="grid-5" style={{ display: 'grid', gap: '12px' }}>
          <EngCard 
            title="ESLint" 
            desc="Typed lint rules, no warnings permitted on main." 
            icon={<EslintIcon />}
            iconBg="rgba(99, 102, 241, 0.08)"
            iconBorder="rgba(99, 102, 241, 0.25)"
          />
          <EngCard 
            title="Prettier" 
            desc="One formatting decision, never discussed again." 
            icon={<PrettierIcon />}
            iconBg="rgba(247, 185, 62, 0.08)"
            iconBorder="rgba(247, 185, 62, 0.25)"
          />
          <EngCard 
            title="Husky" 
            desc="Pre-commit hooks: lint, unit tests, size budget." 
            icon={<HuskyIcon />}
            iconBg="rgba(234, 88, 12, 0.08)"
            iconBorder="rgba(234, 88, 12, 0.25)"
          />
          <EngCard 
            title="SonarQube" 
            desc="Quality gate at 85% coverage, zero blockers." 
            icon={<SonarQubeIcon />}
            iconBg="rgba(2, 132, 199, 0.08)"
            iconBorder="rgba(2, 132, 199, 0.25)"
          />
          <EngCard 
            title="GitHub Actions" 
            desc="Matrix build, benchmarks, provenance-signed release." 
            icon={<GitHubActionsIcon />}
            iconBg="rgba(37, 99, 235, 0.08)"
            iconBorder="rgba(37, 99, 235, 0.25)"
          />
        </div>
      </section>


      {/* REPORT */}
      <section style={{ padding: '64px 40px 0' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h2 style={{ margin: 0, font: '700 30px/1.15 "DM Sans", sans-serif', letterSpacing: '-0.025em' }}>Academic report</h2>
        </div>
        <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', overflow: 'hidden', boxShadow: 'var(--janus-shadow)' }}>
          <div className="grid-report" style={{ display: 'grid' }}>
            <div style={{ padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'var(--janus-bg)' }}>
              <span style={{ font: '500 10.5px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--janus-text-muted)' }}>Abstract</span>
              <p style={{ margin: 0, font: '400 14.5px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                Scheduling interfaces on the web are usually delivered as framework-specific components, which forces a rewrite whenever the host application changes stack, and commonly assume a server for conflict resolution and natural-language input. This work presents Janus Scheduler, a framework-agnostic scheduling component library built on custom elements, with a headless core that performs range algebra, recurrence expansion and timezone-aware conflict detection entirely on the client.
              </p>
              <p style={{ margin: 0, font: '400 14.5px/1.7 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)', textWrap: 'pretty' }}>
                We further show that useful natural-language event entry does not require a large language model: a quantised static embedding table with a nearest-neighbour classifier achieves 96.4% intent accuracy and 0.93 entity F1 on a corpus of 1,000 British-English scheduling utterances, at a median parse cost of 0.8 ms and a 38 kB artefact. Evaluation against four commercial and three open-source alternatives shows a 94% reduction in first-paint time at 63,000+ events.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', paddingTop: '6px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>web components</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>client-side NLP</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>virtualisation</span>
                <span style={{ padding: '4px 10px', borderRadius: '999px', background: 'var(--janus-surface)', color: 'var(--janus-text-secondary)', font: '500 11px/1.35 "JetBrains Mono", monospace' }}>temporal correctness</span>
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--janus-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: '12px', borderBottom: '1px solid var(--janus-border)', background: 'var(--janus-bg)' }}>
                <span style={{ font: '600 15px/1.3 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>Janus Scheduler: a framework-agnostic scheduling component with client-side language understanding</span>
                <div style={{ display: 'flex', gap: '9px', marginTop: '4px' }}>
                  <button style={{ height: '40px', padding: '0 16px', border: 0, borderRadius: '9px', background: 'var(--janus-accent)', color: '#ffffff', font: '600 13.5px/1 "DM Sans", sans-serif', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ font: '400 12px/1 "JetBrains Mono", monospace' }}>↓</span>Download PDF · 2.4 MB
                  </button>
                </div>
              </div>
              <div style={{ background: '#18181b', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderBottom: '1px solid #27272a', background: '#09090b' }}>
                  <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a1a1aa' }}>Cite this work · BibTeX</span>
                  <button onClick={copyBibtex} style={{ height: '26px', padding: '0 9px', border: '1.5px solid #27272a', borderRadius: '9px', background: 'transparent', color: copiedBibtex ? '#f97316' : '#a1a1aa', font: '500 11px/1 "JetBrains Mono", monospace', cursor: 'pointer', transition: 'all 0.15s ease' }}>
                    {copiedBibtex ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <pre style={{ margin: 0, padding: '16px 18px', font: '400 11.5px/1.8 "JetBrains Mono", monospace', color: '#e4e4e7', overflowX: 'auto' }}>
                  <div><span style={{ color: '#f97316' }}>@techreport</span>{`{janus2026scheduler`}<span style={{ color: '#a1a1aa' }}>,</span></div>
                  <div>  <span style={{ color: '#7dd3fc' }}>title</span>       <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#a3e635' }}>{`{Janus Scheduler: A Framework-Agnostic`}</span></div>
                  <div>                 <span style={{ color: '#a3e635' }}>{`Scheduling Component}`}</span><span style={{ color: '#a1a1aa' }}>,</span></div>
                  <div>  <span style={{ color: '#7dd3fc' }}>author</span>      <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#a3e635' }}>{`{Gunasinghe, M. and Nishshanka, N. and`}</span></div>
                  <div>                 <span style={{ color: '#a3e635' }}>{`Kumara, C. and Athapaththu, V.}`}</span><span style={{ color: '#a1a1aa' }}>,</span></div>
                  <div>  <span style={{ color: '#7dd3fc' }}>institution</span> <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#a3e635' }}>{`{University of Ruhuna}`}</span><span style={{ color: '#a1a1aa' }}>,</span></div>
                  <div>  <span style={{ color: '#7dd3fc' }}>year</span>        <span style={{ color: '#a1a1aa' }}>=</span> <span style={{ color: '#7dd3fc' }}>{`{2026}`}</span></div>
                  <div>{`}`}</div>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Subcomponents for Landing Page
function GoalCard({ num, title, text }) {
  return (
    <div style={{ border: '1.5px solid var(--janus-border)', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '9px', background: 'var(--janus-bg)' }}>
      <span style={{ font: '500 10px/1 "JetBrains Mono", monospace', letterSpacing: '0.08em', color: '#f97316' }}>Goal {num}</span>
      <span style={{ font: '600 16px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>{title}</span>
      <p style={{ margin: 0, font: '400 13.5px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{text}</p>
    </div>
  );
}

function TeamCard({ name, role, desc, avatar }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div 
      style={{ 
        border: '1.5px solid', 
        borderColor: hovered ? 'var(--janus-accent)' : 'var(--janus-border)', 
        borderRadius: '14px', 
        padding: '22px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '14px', 
        background: 'var(--janus-bg)',
        boxShadow: hovered ? 'var(--janus-shadow)' : 'none',
        transition: 'all 0.1s ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          style={{
            width: '76px',
            height: '76px',
            borderRadius: '999px',
            border: '1.5px solid var(--janus-border)',
            objectFit: 'cover'
          }}
        />
      ) : (
        <div style={{ width: '76px', height: '76px', borderRadius: '999px', border: '1.5px solid var(--janus-border)', background: 'repeating-linear-gradient(135deg, var(--janus-surface) 0 5px, var(--janus-bg) 5px 10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: '500 9px/1 "JetBrains Mono", monospace', color: 'var(--janus-text-muted)' }}>
          photo
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ font: '600 16px/1.25 "DM Sans", sans-serif', letterSpacing: '-0.01em', color: 'var(--janus-text)' }}>{name}</span>
        <span style={{ font: '500 11.5px/1.4 "JetBrains Mono", monospace', color: '#c2560a' }}>{role}</span>
      </div>
      {desc && <p style={{ margin: 0, font: '400 13px/1.6 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{desc}</p>}
      <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--janus-surface)', display: 'flex', gap: '7px' }}>
        <SocialBtn label="GH" />
        <SocialBtn label="in" />
      </div>
    </div>
  );
}

function SocialBtn({ label }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href="#" 
      style={{ 
        width: '30px', 
        height: '30px', 
        border: '1.5px solid', 
        borderColor: hovered ? 'var(--janus-text)' : 'var(--janus-border)', 
        borderRadius: '9px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        font: '600 10px/1 "JetBrains Mono", monospace', 
        color: hovered ? 'var(--janus-text)' : 'var(--janus-text-secondary)',
        transition: 'all 0.1s ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
}

function EngCard({ title, desc, icon, iconBg, iconBorder }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div 
      style={{ 
        border: '1.5px solid', 
        borderColor: hovered ? 'var(--janus-accent)' : 'var(--janus-border)', 
        borderRadius: '14px', 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px', 
        background: 'var(--janus-bg)',
        boxShadow: hovered ? 'var(--janus-shadow)' : 'none',
        transition: 'all 0.15s ease'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ 
        width: '40px', 
        height: '40px', 
        borderRadius: '10px', 
        border: `1.5px solid ${iconBorder || 'var(--janus-border)'}`, 
        background: iconBg || 'var(--janus-surface)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {icon}
      </div>
      <span style={{ font: '600 14.5px/1.25 "DM Sans", sans-serif', color: 'var(--janus-text)' }}>{title}</span>
      <p style={{ margin: 0, font: '400 12.5px/1.55 "DM Sans", sans-serif', color: 'var(--janus-text-secondary)' }}>{desc}</p>
    </div>
  );
}

const EslintIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <polygon points="12,2 21,7.5 21,16.5 12,22 3,16.5 3,7.5" fill="rgba(99, 102, 241, 0.12)" stroke="#6366f1" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M8.5 12.5L11 15L15.5 9.5" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PrettierIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="7" height="4" rx="2" fill="#EA5E5E" />
    <rect x="12" y="4" width="9" height="4" rx="2" fill="#F7B93E" />
    <rect x="3" y="10" width="13" height="4" rx="2" fill="#56B3B4" />
    <rect x="18" y="10" width="3" height="4" rx="1.5" fill="#1A2B34" />
    <rect x="3" y="16" width="6" height="4" rx="2" fill="#F7B93E" />
    <rect x="11" y="16" width="10" height="4" rx="2" fill="#EA5E5E" />
  </svg>
);

const HuskyIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4L9 7H15L19 4L17.5 11L19.5 16L15 20L12 18L9 20L4.5 16L6.5 11L5 4Z" fill="rgba(234, 88, 12, 0.1)" />
    <circle cx="9" cy="11.5" r="1" fill="#ea580c" />
    <circle cx="15" cy="11.5" r="1" fill="#ea580c" />
    <path d="M12 13V15.5" />
  </svg>
);

const SonarQubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="6" cy="18" r="2.5" fill="#0284c7" />
    <path d="M6 12C9.31 12 12 14.69 12 18" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 6.5C12.35 6.5 17.5 11.65 17.5 18" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6 1C15.39 1 23 8.61 23 18" stroke="#0284c7" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.4" />
  </svg>
);

const GitHubActionsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="6" r="2.5" fill="rgba(37, 99, 235, 0.12)" />
    <circle cx="19" cy="6" r="2.5" fill="rgba(37, 99, 235, 0.12)" />
    <circle cx="12" cy="18" r="2.5" fill="#2563eb" />
    <path d="M5 8.5V11C5 13 6.5 14.5 8.5 15.5L10 16.5" />
    <path d="M19 8.5V11C19 13 17.5 14.5 15.5 15.5L14 16.5" />
  </svg>
);

