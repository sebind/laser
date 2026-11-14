import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import ThemeSelect from './ThemeSelect';

interface NavLinkItem {
  label: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'Publications', path: '/publications' },
  { label: 'Team', path: '/team' },
  { label: 'News', path: '/news' },
  { label: 'D3Mat', path: '/d3mat' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* B10: Skip to content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary"
      >
        Skip to main content
      </a>

      {/* B7: Floating compact navigation bar off the top edge */}
      <header className="sticky top-4 z-40 px-4 pointer-events-none">
        <div className="mx-auto w-full lg:w-fit pointer-events-auto rounded-2xl border border-border-primary bg-surface-nav backdrop-blur-md p-2 flex items-center justify-between gap-2 lg:gap-4 transition-colors duration-300 ease-weighted">
          {/* Brand mark — nested radius: 16px outer - 8px padding = 8px (rounded-lg) */}
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg py-2 px-3 text-ink-primary hover:bg-surface-secondary transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M12 3L20 12L12 21L4 12L12 3Z"
                stroke="currentColor"
                strokeWidth="1.75"
                className="text-ink-accent"
              />
              <path
                d="M4 12H20M12 3V21"
                stroke="currentColor"
                strokeWidth="1.25"
                className="text-ink-tertiary"
              />
              <circle cx="12" cy="12" r="2" className="fill-ink-accent" />
            </svg>
            <span className="body-4 text-ink-primary whitespace-nowrap">LASER Group</span>
          </Link>

          {/* Desktop navigation links */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-lg py-2 px-3 transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent inline-flex items-center gap-1 ${
                    active
                      ? 'body-4 bg-surface-secondary text-ink-primary'
                      : 'title-4 text-ink-secondary hover:text-ink-primary hover:bg-surface-secondary'
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden="true"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-ink-accent"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/opportunities"
              aria-current={isActive('/opportunities') ? 'page' : undefined}
              className="btn-header"
            >
              <span>Open positions</span>
            </Link>
          </div>

          {/* Mobile animated menu toggle (48x48 touch target >= 44x44 requirement) */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden relative z-50 flex w-12 h-12 items-center justify-center rounded-lg bg-surface-secondary border border-border-primary text-ink-primary hover:border-border-strong active:scale-[0.98] transition-[transform,border-color,background-color] duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line
                x1="3"
                y1="7"
                x2="17"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className={`origin-center transition-transform duration-500 ease-weighted motion-reduce:transition-none ${
                  menuOpen ? 'translate-y-[3px] rotate-45' : ''
                }`}
              />
              <line
                x1="3"
                y1="13"
                x2="17"
                y2="13"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className={`origin-center transition-transform duration-500 ease-weighted motion-reduce:transition-none ${
                  menuOpen ? '-translate-y-[3px] -rotate-45' : ''
                }`}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* B7: Full-height mobile menu panel with staggered 24px (Spacing-300) entrance */}
      <div
        id="mobile-navigation-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-30 min-h-dvh bg-surface-primary/95 backdrop-blur-xl px-6 pt-24 pb-8 flex flex-col justify-between lg:hidden transition-opacity duration-300 ease-weighted ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {[...navLinks, { label: 'Open positions', path: '/opportunities' }].map(
            (item, idx) => {
              const active = isActive(item.path);
              /* Step 45ms apart, 8 items => max delay 315ms (< 400ms cap) */
              const delay = Math.min(idx * 45, 350);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${delay}ms` : '0ms' }}
                  className={`flex items-center justify-between rounded-xl p-3 border transition-[transform,opacity,background-color,border-color] duration-500 ease-weighted motion-reduce:transform-none ${
                    menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  } ${
                    active
                      ? 'bg-surface-secondary border-border-accent text-ink-primary heading-6'
                      : 'bg-surface-subtle border-border-primary text-ink-secondary hover:text-ink-primary title-1'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {active && (
                      <span
                        aria-hidden="true"
                        className="w-2 h-2 rounded-full bg-ink-accent"
                      />
                    )}
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight size={18} weight="regular" className="text-ink-tertiary" />
                </Link>
              );
            }
          )}
        </nav>

        <div className="pt-6 border-t border-border-primary flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="caption-2 text-ink-tertiary">PSGIAS &amp; PSGiTech · Coimbatore</p>
            <ThemeSelect />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
