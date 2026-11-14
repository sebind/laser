import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, EnvelopeSimple } from '@phosphor-icons/react';
import ThemeSelect from './ThemeSelect';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-primary bg-surface-subtle">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Group Identity & Dual Affiliation */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 w-fit text-ink-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent rounded-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 3L20 12L12 21L4 12L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  className="text-ink-accent"
                />
                <circle cx="12" cy="12" r="2" className="fill-ink-accent" />
              </svg>
              <span className="title-2 text-ink-primary">LASER Group</span>
            </Link>

            <p className="body-6 text-ink-secondary max-w-[480px]">
              Laboratory for Advanced Simulations and Energy Materials Research. Combining density
              functional theory, machine learning potentials, and thin film synthesis across two PSG
              campuses in Coimbatore, India.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://www.psgias.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="caption-1 text-ink-primary hover:text-ink-accent inline-flex items-center gap-1 w-fit transition-colors duration-300 ease-weighted"
              >
                <span>PSG Institute of Advanced Studies (PSGIAS)</span>
                <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
              </a>
              <a
                href="https://www.psgitech.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="caption-1 text-ink-primary hover:text-ink-accent inline-flex items-center gap-1 w-fit transition-colors duration-300 ease-weighted"
              >
                <span>PSG Institute of Technology and Applied Research (PSGiTech)</span>
                <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Focused Main Paths (No 4-column link farm!) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h2 className="title-4 text-ink-primary">Laboratory</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  to="/research"
                  className="body-6 text-ink-secondary hover:text-ink-primary transition-colors duration-300 ease-weighted"
                >
                  Research areas
                </Link>
              </li>
              <li>
                <Link
                  to="/publications"
                  className="body-6 text-ink-secondary hover:text-ink-primary transition-colors duration-300 ease-weighted"
                >
                  Publications archive
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="body-6 text-ink-secondary hover:text-ink-primary transition-colors duration-300 ease-weighted"
                >
                  People and alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/d3mat"
                  className="body-6 text-ink-secondary hover:text-ink-primary transition-colors duration-300 ease-weighted"
                >
                  D³Mat workshop
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="body-6 text-ink-secondary hover:text-ink-primary transition-colors duration-300 ease-weighted"
                >
                  News and calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Settings */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h2 className="title-4 text-ink-primary">Direct contact</h2>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:seb@psgias.ac.in"
                className="body-6 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-2 transition-colors duration-300 ease-weighted"
              >
                <EnvelopeSimple size={16} weight="regular" className="text-ink-accent shrink-0" />
                <span className="tabular-data">seb@psgias.ac.in</span>
              </a>
              <a
                href="mailto:sebin@psgitech.ac.in"
                className="body-6 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-2 transition-colors duration-300 ease-weighted"
              >
                <EnvelopeSimple size={16} weight="regular" className="text-ink-accent shrink-0" />
                <span className="tabular-data">sebin@psgitech.ac.in</span>
              </a>
            </div>
            <div className="pt-1 flex flex-col gap-3 items-start">
              <Link to="/opportunities" className="btn-secondary">
                <span>Open positions</span>
              </Link>
              <ThemeSelect />
            </div>
          </div>
        </div>

        {/* Bottom bar with legal & academic notice links (B10) */}
        <div className="pt-6 border-t border-border-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="caption-5 text-ink-tertiary">
            © 2026 LASER Group · PSG Institute of Advanced Studies &amp; PSG Institute of Technology
            and Applied Research.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/privacy"
              className="caption-4 text-ink-tertiary hover:text-ink-primary transition-colors duration-300 ease-weighted"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="caption-4 text-ink-tertiary hover:text-ink-primary transition-colors duration-300 ease-weighted"
            >
              Terms of academic use
            </Link>
            <Link
              to="/contact"
              className="caption-4 text-ink-tertiary hover:text-ink-primary transition-colors duration-300 ease-weighted"
            >
              Campus map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
