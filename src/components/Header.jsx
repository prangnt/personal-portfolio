import React from 'react';

export default function Header({ active, onNav }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    {
      id: 'about',
      label: 'About me',
      sub: [
        { id: 'about-summary', label: 'Summary' },
        { id: 'about-education', label: 'Education' },
        { id: 'about-experience', label: 'Experiences' },
      ],
    },
    { id: 'projects', label: 'Projects' },
    { id: 'channel', label: 'Channel / Blog' },
    { id: 'contact', label: 'Contact me' },
  ];

  const handleNav = (id) => {
    setMenuOpen(false);
    onNav(id);
  };

  return (
    <header className="nk-header">
      <div className="nk-header-inner">
        <a className="nk-brand" onClick={() => handleNav('top')}>natcha</a>
        <button
          type="button"
          className={`nk-nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nk-nav ${menuOpen ? 'open' : ''}`}>
          {links.map((l) => (
            <div key={l.id} className="nk-nav-item">
              <a
                className={`nk-nav-link ${l.sub ? 'has-caret' : ''} ${active === l.id ? 'active' : ''}`}
                onClick={() => handleNav(l.id)}
              >
                {l.label}
              </a>
              {l.sub && (
                <div className="nk-dropdown">
                  {l.sub.map((s) => (
                    <a key={s.id} className="nk-dd-link" onClick={() => handleNav(s.id)}>
                      <span className="nk-dd-dot"></span>
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
