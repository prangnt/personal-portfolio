export default function Header({ active, onNav }) {
  const links = [
    {
      id: 'about',
      label: 'About me',
      sub: [
        { id: 'about-summary', label: 'Summary' },
        { id: 'about-education', label: 'Education' },
        { id: 'about-experience', label: 'Experience' },
      ],
    },
    { id: 'projects', label: 'Projects' },
    { id: 'channel', label: 'Channel / Blog' },
    {
      id: 'contact',
      label: 'Contact me',
      sub: [
        { id: 'contact-line', label: 'LINE' },
        { id: 'contact-email', label: 'Email' },
        { id: 'contact-social', label: 'Social media' },
      ],
    },
  ];

  return (
    <header className="nk-header">
      <div className="nk-header-inner">
        <a className="nk-brand" onClick={() => onNav('top')}>natcha</a>
        <nav className="nk-nav">
          {links.map((l) => (
            <div key={l.id} className="nk-nav-item">
              <a
                className={`nk-nav-link ${l.sub ? 'has-caret' : ''} ${active === l.id ? 'active' : ''}`}
                onClick={() => onNav(l.id)}
              >
                {l.label}
              </a>
              {l.sub && (
                <div className="nk-dropdown">
                  {l.sub.map((s) => (
                    <a key={s.id} className="nk-dd-link" onClick={() => onNav(s.id)}>
                      <span className="nk-dd-dot"></span>
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button className="nk-cta" onClick={() => onNav('contact')}>Say hello</button>
      </div>
    </header>
  );
}
