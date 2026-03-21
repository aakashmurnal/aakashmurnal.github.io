import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolio';
import { HiDocumentText } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import ResumeModal from './ResumeModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#akashmurnal" className="nav-logo" onClick={() => setMenuOpen(false)}>
            AM
          </a>
          <button
            className="nav-toggle"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span /><span /><span />
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <button
              className="nav-resume-btn"
              onClick={() => { setShowResume(true); setMenuOpen(false); }}
            >
              <HiDocumentText /> Resume
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </>
  );
}
