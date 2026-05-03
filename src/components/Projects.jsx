export default function Projects() {
  const items = [
    {
      id: 1,
      num: '01',
      title: 'Enterprise data platform for a Tier-1 bank',
      tag: 'Financial services',
      year: '2024',
      blurb: 'Led a 12-person team delivering a unified data platform — from discovery through production rollout across three business units.',
      stats: [{v: '12', l: 'team size'}, {v: '14 mo', l: 'timeline'}, {v: '3', l: 'business units'}],
      tagClass: 'nk-pill-sage',
      grad: 'linear-gradient(135deg,#84A59D 0%,#B6CBC5 100%)',
    },
    {
      id: 2,
      num: '02',
      title: 'ML demand forecasting for a national retailer',
      tag: 'Retail · ML/AI',
      year: '2024',
      blurb: 'Coordinated data scientists and store ops to deliver SKU-level forecasting — replacing a spreadsheet process used across 200+ stores.',
      stats: [{v: '200+', l: 'stores'}, {v: '8', l: 'specialists'}, {v: 'SKU', l: 'granularity'}],
      tagClass: 'nk-pill-pink',
      grad: 'linear-gradient(135deg,#F28482 0%,#F5CAC3 100%)',
    },
    {
      id: 3,
      num: '03',
      title: 'Oracle Store Inventory Management',
      tag: 'Retail · Oracle',
      year: '2022',
      blurb: 'Designed Oracle-based inventory workflows with the architecture team — aligning system behavior with the realities of store-floor operations.',
      stats: [{v: 'Oracle', l: 'platform'}, {v: 'Multi-team', l: 'collaboration'}, {v: 'E2E', l: 'rollout'}],
      tagClass: 'nk-pill-saffron',
      grad: 'linear-gradient(135deg,#F6BD60 0%,#FBE3B6 100%)',
    },
    {
      id: 4,
      num: '04',
      title: 'Marketing analytics & CAC reduction',
      tag: 'BI · E-commerce',
      year: '2021',
      blurb: 'Built 60+ Looker / Data Studio dashboards for Marketing — and the analytics partnership that cut customer acquisition cost by 20% monthly.',
      stats: [{v: '60+', l: 'dashboards'}, {v: '−20%', l: 'CAC monthly'}, {v: 'Real-time', l: 'KPI views'}],
      tagClass: 'nk-pill-sage',
      grad: 'linear-gradient(135deg,#F5CAC3 0%,#F6BD60 100%)',
    },
    {
      id: 5,
      num: '05',
      title: 'Invoice automation with OCR + RPA',
      tag: 'Digital transformation',
      year: '2020',
      blurb: 'Redesigned billing strategy for a Big Four practice — a web app + OCR + RPA stack that removed 90% of manual receivables work.',
      stats: [{v: '−90%', l: 'manual work'}, {v: 'OCR + RPA', l: 'stack'}, {v: 'Web', l: 'front door'}],
      tagClass: 'nk-pill-pink',
      grad: 'linear-gradient(135deg,#84A59D 0%,#F6BD60 100%)',
    },
    {
      id: 6,
      num: '06',
      title: 'Oil & gas data initiative',
      tag: 'Energy · Data',
      year: '2023',
      blurb: 'Worked with operations and engineering to scope a data foundation for downstream reporting — translating field requirements into a roadmap.',
      stats: [{v: 'Field', l: 'discovery'}, {v: 'Roadmap', l: 'output'}, {v: 'Cross-fn', l: 'team'}],
      tagClass: 'nk-pill-saffron',
      grad: 'linear-gradient(135deg,#F28482 0%,#F6BD60 100%)',
    },
  ];

  return (
    <section className="nk-section" id="projects">
      <div className="nk-section-head">
        <span className="nk-eyebrow">Projects</span>
        <h2 className="nk-h2">Selected work — bridging business and technical delivery.</h2>
        <p className="nk-section-sub">A look at projects I've led across data platforms, ML/AI, and digital transformation. Names are anonymised under client NDAs.</p>
      </div>
      <div className="nk-projects-grid">
        {items.map((p) => (
          <article className="nk-project" key={p.id}>
            <div className="nk-project-thumb" style={{background: p.grad}}>
              <span className="nk-project-num">{p.num} / {String(items.length).padStart(2,'0')}</span>
              <span className="nk-project-title-large">{p.title}</span>
            </div>
            <div className="nk-project-body">
              <div className="nk-project-stat-row">
                {p.stats.map((s, i) => (
                  <div className="nk-project-stat" key={i}>
                    <strong>{s.v}</strong>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
              <p>{p.blurb}</p>
              <div className="nk-project-meta">
                <span className={`nk-pill ${p.tagClass}`}>{p.tag}</span>
                <span className="nk-meta-date">{p.year}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
