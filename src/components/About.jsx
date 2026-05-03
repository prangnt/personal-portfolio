import React from 'react';

export default function About() {
  const [tab, setTab] = React.useState('summary');
  const tabs = [
    { id: 'summary', label: 'Summary' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
  ];

  // Allow deep-link from header dropdown
  React.useEffect(() => {
    const handler = (e) => {
      if (e.detail && e.detail.tab) setTab(e.detail.tab);
    };
    window.addEventListener('about:settab', handler);
    return () => window.removeEventListener('about:settab', handler);
  }, []);

  return (
    <section className="nk-section" id="about">
      <div className="nk-section-head">
        <span className="nk-eyebrow">About me</span>
        <h2 className="nk-h2">A few notes on who I am, in three parts.</h2>
      </div>
      <div className="nk-tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`about-${t.id}`}
            role="tab"
            aria-selected={tab === t.id}
            className={`nk-tab ${tab === t.id ? 'active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'summary' && <Summary />}
      {tab === 'education' && <Education />}
      {tab === 'experience' && <Experience />}
    </section>
  );
}

function Summary() {
  return (
    <div className="nk-about-summary">
      <p>
        I'm a results-driven project manager with <strong>5+ years</strong> of experience bridging
        business requirements and technical delivery for data and AI projects.
      </p>
      <p>
        I lead cross-functional teams of 8–12 specialists — developers, data scientists, BI analysts —
        through agile delivery. I'm comfortable with enterprise stakeholders, aggressive timelines,
        and the messy middle where business goals meet technical reality.
      </p>

      <div className="nk-stat-row">
        <div className="nk-stat"><strong>5+</strong><span>years in PM &amp; data</span></div>
        <div className="nk-stat"><strong>6+</strong><span>enterprise clients led</span></div>
        <div className="nk-stat"><strong>60+</strong><span>BI dashboards shipped</span></div>
        <div className="nk-stat"><strong>3.68</strong><span>GPA · Gold Medal</span></div>
      </div>

      <div className="nk-pillar-grid">
        <div className="nk-pillar">
          <div className="nk-pillar-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/>
            </svg>
          </div>
          <h5>Project &amp; Operation Management</h5>
          <p>End-to-end ownership, agile delivery, change management, and day-to-day operations oversight.</p>
        </div>
        <div className="nk-pillar">
          <div className="nk-pillar-icon" style={{background: 'var(--c-sage-soft)', color: 'var(--c-sage-deep)'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
            </svg>
          </div>
          <h5>Stakeholder &amp; Client Management</h5>
          <p>Enterprise client engagement, executive presentations, requirement negotiation across multi-stakeholder teams.</p>
        </div>
        <div className="nk-pillar">
          <div className="nk-pillar-icon" style={{background: 'var(--c-saffron-soft)', color: 'var(--c-saffron-deep)'}}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
          </div>
          <h5>Analytical &amp; Technical</h5>
          <p>SQL, BI tools (Looker Studio), Microsoft Office, Asana — and the data instinct to know what to ask.</p>
        </div>
      </div>

      <div className="nk-skills-block">
        <span className="nk-eyebrow">Core competencies</span>
        <div className="nk-skills-grid">
          <div className="nk-skill-group">
            <h5>Methods</h5>
            <div className="nk-skill-tags">
              <span className="nk-skill-tag">Agile</span>
              <span className="nk-skill-tag">Sprint planning</span>
              <span className="nk-skill-tag">Retrospectives</span>
              <span className="nk-skill-tag">Design thinking</span>
              <span className="nk-skill-tag">Risk mitigation</span>
              <span className="nk-skill-tag">Resource management</span>
              <span className="nk-skill-tag">Process optimization</span>
            </div>
          </div>
          <div className="nk-skill-group">
            <h5>Tools</h5>
            <div className="nk-skill-tags">
              <span className="nk-skill-tag">Asana</span>
              <span className="nk-skill-tag">SQL</span>
              <span className="nk-skill-tag">Looker Studio</span>
              <span className="nk-skill-tag">Google Data Studio</span>
              <span className="nk-skill-tag">Excel</span>
              <span className="nk-skill-tag">PowerPoint</span>
              <span className="nk-skill-tag">Word</span>
            </div>
          </div>
          <div className="nk-skill-group">
            <h5>Domains</h5>
            <div className="nk-skill-tags">
              <span className="nk-skill-tag">Data platforms</span>
              <span className="nk-skill-tag">ML / AI delivery</span>
              <span className="nk-skill-tag">Business intelligence</span>
              <span className="nk-skill-tag">Digital transformation</span>
              <span className="nk-skill-tag">RPA &amp; OCR</span>
              <span className="nk-skill-tag">Inventory systems</span>
            </div>
          </div>
          <div className="nk-skill-group">
            <h5>Languages</h5>
            <div className="nk-lang-row">
              <div className="nk-lang">
                <span>Thai</span>
                <span className="nk-lang-bar"><i style={{width:'100%'}}></i></span>
                <small>Native</small>
              </div>
              <div className="nk-lang">
                <span>English</span>
                <span className="nk-lang-bar"><i style={{width:'85%'}}></i></span>
                <small>Proficient</small>
              </div>
              <div className="nk-lang">
                <span>中文</span>
                <span className="nk-lang-bar"><i style={{width:'30%'}}></i></span>
                <small>Beginner</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="nk-timeline">
      <EduItem
        years="Aug 2015 – May 2019"
        degree="Bachelor of Business Administration"
        major="Major in Management Information Systems (MIS)"
        org="Chulalongkorn University"
        honour="First-Class Honors with Gold Medal · GPAX 3.68"
        bullets={[
          'Facilitator of Design Thinking — PEA × RISE, CU Innovation Hub, NIA, and others.',
          'Head of Youth for Next Step — co-organizer and volunteer in rural development camps.',
        ]}
      />
    </div>
  );
}

function EduItem({ years, degree, major, org, honour, bullets }) {
  return (
    <div className="nk-timeline-item">
      <span className="nk-timeline-year">{years}</span>
      <div className="nk-timeline-body">
        <span className="nk-timeline-role">
          {degree} <span className="nk-timeline-org">— {org}</span>
        </span>
        <p style={{margin: '4px 0 0', fontSize: '15px'}}>{major}</p>
        {honour && <span className="nk-edu-honour">★ {honour}</span>}
        {bullets && (
          <ul className="nk-timeline-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

function Experience() {
  const roles = [
    {
      years: 'Oct 2022 – Nov 2025',
      role: 'Senior Project Manager',
      org: 'Thinking Machines Data Science',
      bullets: [
        'Led 6+ enterprise clients across Financial Services, Retail, and Oil & Gas — translating business objectives, user needs, and technical requirements into Data Platform and ML/AI solutions.',
        'Managed cross-functional teams of 8–12 specialists (developers, data scientists, BI analysts) through full software delivery lifecycles.',
        'Ran sprint planning, progress reviews, and retrospectives — keeping technical delivery aligned with aggressive timelines and customer satisfaction goals.',
        'Authored project plans defining scope, deliverables, timelines, and resourcing — bridging business strategy and technical execution.',
      ],
    },
    {
      years: 'Oct 2021 – Sep 2022',
      role: 'Business and Integration Architecture Sr Analyst',
      org: 'Accenture Solution',
      bullets: [
        'Assessed operational workflows, surfaced improvement opportunities, and shipped solutions that lifted process efficiency.',
        'Collaborated across teams to design Oracle-based Store Inventory Management aligned with specific business requirements.',
        'Ran client meetings, presentations, and technical documentation; prepared test scenarios to validate solution effectiveness.',
      ],
    },
    {
      years: 'Apr 2020 – Sep 2021',
      role: 'Business Intelligence',
      org: 'Shopee Thailand',
      bullets: [
        'Partnered with Marketing on data-driven strategies and customer-focused initiatives that reduced acquisition costs by 20% monthly.',
        'Created 60+ automated analytics dashboards (internal tools + Google Data Studio) for real-time KPI monitoring.',
        'Translated insight into action — visualizations that directly influenced campaign strategy and effectiveness.',
      ],
    },
    {
      years: 'June 2019 – Apr 2020',
      role: 'Associate Advisory',
      org: 'KPMG Thailand',
      bullets: [
        'Redesigned the company\'s billing strategy and retrained the AP team — cut manual receivables work by 90% via an invoice placement system using a website, OCR, and RPA.',
        'Owned client relationships through digital transformation projects: weekly progress reviews, executive alignment.',
        'Drafted comprehensive project documentation and delivered exec-level presentations that secured follow-on engagements.',
      ],
    },
  ];

  return (
    <div className="nk-timeline">
      {roles.map((r, i) => (
        <div className="nk-timeline-item" key={i}>
          <span className="nk-timeline-year">{r.years}</span>
          <div className="nk-timeline-body">
            <span className="nk-timeline-role">
              {r.role} <span className="nk-timeline-org">— {r.org}</span>
            </span>
            <ul className="nk-timeline-bullets">
              {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

