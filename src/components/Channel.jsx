import SocialIcons from './SocialIcons.jsx';

export default function Channel() {
  const channels = [
    {
      id: 'personal',
      eyebrow: 'Personal · @pprangnt',
      title: 'Lifestyle',
      blurb: 'Outfits, cafés, books, and the occasional travel reel — the soft side of the work.',
      accent: 'linear-gradient(135deg,#F6BD60,#F28482)',
      links: [
        { kind: 'TikTok',    icon: 'TikTok',    handle: '@pprangnt', href: 'https://www.tiktok.com/@pprangnt' },
        { kind: 'Instagram', icon: 'Instagram', handle: '@pprangnt', href: 'https://www.instagram.com/pprangnt' },
        { kind: 'Facebook',  icon: 'Facebook',  handle: '/pprangnt', href: 'https://www.facebook.com/pprangnt' },
        { kind: 'Lemon8',    icon: 'Lemon8',    handle: '@pprangnt', href: 'https://s.lemon8-app.com/s/GgsRZcmbfc' },
      ],
    },
    {
      id: 'money',
      eyebrow: 'Financial advisor · Money Mind by Prang',
      title: 'Money Mind by Prang',
      blurb: 'A small channel where I share what I learn about money — saving, investing, and the everyday decisions in between.',
      accent: 'linear-gradient(135deg,#84A59D,#5F8079)',
      links: [
        { kind: 'TikTok',    icon: 'TikTok',    handle: '@moneymindbyprang',   href: 'https://www.tiktok.com/@moneymindbyprang' },
        { kind: 'Instagram', icon: 'Instagram', handle: '@moneymindbyprang',   href: 'https://www.instagram.com/moneymindbyprang' },
        { kind: 'Facebook',  icon: 'Facebook',  handle: 'Money Mind by Prang', href: 'https://www.facebook.com/share/1Dg6R3dV9p/?mibextid=wwXIfr' },
      ],
    },
    {
      id: 'working',
      eyebrow: 'ช่องพิเศษ · @pprangntworking',
      title: 'Prang\'s Journey (ปรางค์ไปทำอะไรมาบ้าง?)',
      blurb: 'A side channel for my exploration and new experiences.',
      accent: 'linear-gradient(135deg,#F28482,#F5CAC3)',
      links: [
        { kind: 'TikTok', icon: 'TikTok', handle: '@pprangntworking', href: 'https://www.tiktok.com/@pprangntworking?_r=1&_t=ZS-95sMDXWWVMY' },
      ],
    },
    {
      id: 'pmbuddy',
      eyebrow: 'PM knowledge · PMBuddy',
      title: 'PMBuddy',
      blurb: 'Bite-sized project management tips, frameworks, and real-world lessons — across all major platforms.',
      accent: 'linear-gradient(135deg,#F6BD60,#84A59D)',
      links: [
        { kind: 'TikTok',    icon: 'TikTok',    handle: '@pmbuddy',  href: 'https://vt.tiktok.com/ZSM4ySKfV/' },
        { kind: 'Instagram', icon: 'Instagram', handle: '@pmbuddy',  href: 'https://www.instagram.com/reel/DG7bD6JSgA1/?igsh=eHZoazR0MDNxa3pw' },
        { kind: 'YouTube',   icon: 'YouTube',   handle: '@pmbuddy',  href: 'https://youtube.com/shorts/e5Kqx6f1RYE?feature=share' },
        { kind: 'Facebook',  icon: 'Facebook',  handle: 'PMBuddy',   href: 'https://www.facebook.com/share/r/1Xu3SeQjki/' },
      ],
    },
  ];

  return (
    <section className="nk-section" id="channel">
      <div className="nk-section-head">
        <span className="nk-eyebrow">My channels · blog</span>
        <h2 className="nk-h2">My channels represent my interests.</h2>
        <p className="nk-section-sub">A personal channel for the everyday, a financial-advisor channel for what I learn about money, and a side channel for working notes.</p>
      </div>

      <div className="nk-channels-stack">
        {channels.map((c) => (
          <article className="nk-channel-block" key={c.id}>
            <div className="nk-channel-block-head">
              <div className="nk-channel-block-accent" style={{background: c.accent}}></div>
              <div className="nk-channel-block-text">
                <span className="nk-eyebrow">{c.eyebrow}</span>
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
              </div>
            </div>
            <div className="nk-channel-icons">
              {c.links.map((p, i) => {
                const Icon = SocialIcons[p.icon];
                return (
                  <a className="nk-channel-icon-card" key={i} href={p.href} target="_blank" rel="noreferrer">
                    <div className="nk-channel-icon-glyph">
                      <Icon width="24" height="24" />
                    </div>
                    <div className="nk-channel-icon-text">
                      <span className="nk-channel-icon-kind">{p.kind}</span>
                      <span className="nk-channel-icon-handle">{p.handle}</span>
                    </div>
                    <span className="nk-channel-icon-arrow">↗</span>
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
