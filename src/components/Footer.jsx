import SocialIcons from './SocialIcons.jsx';

export default function Footer() {
  const tinyIcons = ['Line', 'Email', 'Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'Facebook'];
  return (
    <footer className="nk-footer">
      <div className="nk-footer-inner">
        <span className="nk-footer-brand">natcha</span>
        <span className="nk-footer-meta">© 2026 Natcha Triratchatchawan · Made slowly in Bangkok</span>
        <div className="nk-footer-socials">
          {tinyIcons.map((i) => {
            const Icon = SocialIcons[i];
            return <a key={i} className="nk-footer-social"><Icon width="16" height="16" /></a>;
          })}
        </div>
      </div>
    </footer>
  );
}
