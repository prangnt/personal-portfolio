import natchaImg from '../assets/natcha.jpg';

export default function Hero({ onNav }) {
  return (
    <section className="nk-hero" id="top">
      <div className="nk-hero-blob" aria-hidden="true"></div>
      <div className="nk-hero-grid">
        <div className="nk-hero-text">
          <span className="nk-eyebrow">Hello there ✿</span>
          <h1 className="nk-display nk-display-pm">
            Hi, I'm <em>Natcha</em>.<br/>
            A senior project manager.
          </h1>
          <p className="nk-lead">
            I bridge business goals and technical delivery for data &amp; AI projects.
            Five-plus years leading cross-functional teams across financial services,
            retail, and oil &amp; gas — and I write about the craft of getting things
            shipped on my channel.
          </p>
          <div className="nk-hero-actions">
            <button className="nk-btn nk-btn-primary" onClick={() => onNav('projects')}>See my work</button>
            <button className="nk-btn nk-btn-ghost" onClick={() => onNav('about')}>About me →</button>
          </div>
          <div className="nk-hero-meta">
            <span className="nk-hero-meta-item">
              <span className="nk-hero-meta-dot"></span>
              Bangkok, Thailand
            </span>
            <span className="nk-hero-meta-item">
              <span className="nk-hero-meta-dot" style={{background: 'var(--c-coral)'}}></span>
              Open to PM roles
            </span>
            <span className="nk-hero-meta-item">
              <span className="nk-hero-meta-dot" style={{background: 'var(--c-saffron-deep)'}}></span>
              EN · TH · 中文
            </span>
          </div>
        </div>
        <div className="nk-hero-photo">
          <div className="nk-photo-frame" style={{background:'#F7EDE2'}}>
            <img
              src={natchaImg}
              alt="Natcha Triratchatchawan"
              style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}
            />
          </div>
          <div className="nk-photo-tag">
            <span className="nk-tag-dot"></span>
            5+ yrs · 6 enterprise clients
          </div>
          <div className="nk-photo-quote">
            <span style={{fontSize:'10px'}}>★</span>
            First-Class Honors
          </div>
        </div>
      </div>
    </section>
  );
}
