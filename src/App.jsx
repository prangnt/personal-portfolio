import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Channel from './components/Channel.jsx';
import OpenToWork from './components/OpenToWork.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [active, setActive] = React.useState('top');

  const onNav = (id) => {
    const subToParent = {
      'about-summary': 'about',
      'about-education': 'about',
      'about-experience': 'about',
      'contact-line': 'contact',
      'contact-email': 'contact',
      'contact-social': 'contact',
    };
    const targetSection = subToParent[id] || id;

    if (id.startsWith('about-')) {
      const tabId = id.replace('about-', '');
      window.dispatchEvent(new CustomEvent('about:settab', { detail: { tab: tabId } }));
    }

    setActive(targetSection);

    if (targetSection === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id) || document.getElementById(targetSection);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const ids = ['about', 'projects', 'channel', 'contact'];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = 'top';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="nk-page" data-screen-label="Portfolio · Natcha">
      <Header active={active} onNav={onNav} />
      <Hero onNav={onNav} />
      <OpenToWork />
      <About />
      <Projects />
      <Channel />
      <Contact />
      <Footer />
    </div>
  );
}
