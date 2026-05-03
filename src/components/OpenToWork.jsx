export default function OpenToWork() {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Financial Advisor & Allianz Insurance Agent',
      blurb: 'Personal financial planning, savings, and Allianz insurance products — licensed and certified.',
      tag: 'Licensed',
      tagClass: 'nk-pill-sage',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
        </svg>
      ),
      title: 'Content Creator & Video Editor',
      blurb: 'Short-form videos, photo essays, and editing for personal brands and small businesses.',
      tag: '@pprangnt',
      tagClass: 'nk-pill-pink',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
          <path d="M9 14l2 2 4-4"/>
        </svg>
      ),
      title: 'Freelance Project Manager',
      blurb: 'End-to-end delivery for data, AI, and digital transformation projects — agile and reliable.',
      tag: '5+ years',
      tagClass: 'nk-pill-saffron',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Event Organizer & Facilitator',
      blurb: 'AI workshops, design-thinking sessions, and boardgame events — facilitation that lands.',
      tag: 'Workshop',
      tagClass: 'nk-pill-sage',
    },
  ];

  return (
    <section className="nk-section" id="open-to-work">
      <div className="nk-open-banner">
        <div className="nk-open-glow" aria-hidden="true"></div>
        <div className="nk-open-head">
          <span className="nk-open-pulse">
            <span className="nk-open-dot"></span>
            <span className="nk-open-ring"></span>
          </span>
          <span className="nk-eyebrow" style={{color:'var(--fg)'}}>Open to work</span>
        </div>
        <h2 className="nk-h2" style={{margin:'8px 0 8px'}}>What I can help with.</h2>
        <p className="nk-section-sub" style={{margin:'0 0 28px'}}>I take on a small handful of side engagements at a time. If any of these sound right, send me a note on LINE.</p>

        <div className="nk-open-grid">
          {services.map((s, i) => (
            <div className="nk-open-card" key={i}>
              <div className="nk-open-icon">{s.icon}</div>
              <div className="nk-open-text">
                <h4>{s.title}</h4>
                <p>{s.blurb}</p>
              </div>
              <span className={`nk-pill ${s.tagClass}`}>{s.tag}</span>
            </div>
          ))}
        </div>

        <div className="nk-open-cta">
          <a className="nk-btn nk-btn-primary" href="https://lin.ee/5cqTkDm" target="_blank" rel="noreferrer">Let's talk on LINE →</a>
          <a className="nk-btn nk-btn-ghost" href="mailto:personal@natcha.me">Email me</a>
        </div>
      </div>
    </section>
  );
}
