import SocialIcons from './SocialIcons.jsx';

export default function Contact() {
  return (
    <section className="nk-section" id="contact">
      <div className="nk-section-head">
        <span className="nk-eyebrow">Contact me</span>
        <h2 className="nk-h2">Let's chat.</h2>
        <p className="nk-section-sub">For timely communication, LINE is preferred. Email is best suited for more detailed correspondence.</p>
      </div>

      <div className="nk-contact-hero">
        <div className="nk-contact-primary" id="contact-line">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <div style={{width:40,height:40,borderRadius:10,background:'rgba(255,255,255,0.18)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <SocialIcons.Line width="22" height="22" />
            </div>
            <span className="nk-eyebrow" style={{color:'rgba(255,255,255,0.85)'}}>LINE · primary</span>
          </div>
          <h3>Add me on LINE — it's the fastest way to reach me.</h3>
          <p>I check it daily. Quick questions, intros, "are you free for coffee" — all welcome.</p>

          <div className="nk-line-row">
            <div className="nk-line-qr">
              <img src="https://qr-official.line.me/gs/M_232ajhcy_GW.png?oat_content=qr" alt="LINE QR code" />
              <span>Scan to add</span>
            </div>
            <div className="nk-line-actions">
              <a className="nk-line-cta" href="https://lin.ee/5cqTkDm" target="_blank" rel="noreferrer">
                <SocialIcons.Line width="16" height="16" />
                Add LINE friend →
              </a>
              <a className="nk-line-link" href="https://lin.ee/5cqTkDm" target="_blank" rel="noreferrer">lin.ee/5cqTkDm</a>
            </div>
          </div>
        </div>

        <div className="nk-contact-secondary">
          <a className="nk-contact-card" id="contact-email" href="mailto:personal@natcha.me">
            <div className="ico"><SocialIcons.Email width="22" height="22" /></div>
            <div className="text">
              <span className="label">Email</span>
              <span className="handle">personal@natcha.me</span>
            </div>
            <span style={{color:'var(--fg-subtle)'}}>↗</span>
          </a>
          <a className="nk-contact-card" href="https://www.linkedin.com/in/natchatr" target="_blank" rel="noreferrer">
            <div className="ico" style={{background:'#E6F0F9', color:'#0A66C2'}}>
              <SocialIcons.LinkedIn width="22" height="22" />
            </div>
            <div className="text">
              <span className="label">LinkedIn</span>
              <span className="handle">linkedin.com/in/natchatr</span>
            </div>
            <span style={{color:'var(--fg-subtle)'}}>↗</span>
          </a>
        </div>
      </div>

    </section>
  );
}
