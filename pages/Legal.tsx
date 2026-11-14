import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

interface LegalProps {
  mode: 'privacy' | 'terms';
}

const Legal: React.FC<LegalProps> = ({ mode }) => {
  const isPrivacy = mode === 'privacy';

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
        <div>
          <Link to="/" className="btn-tertiary">
            <ArrowLeft size={16} weight="regular" aria-hidden="true" />
            <span>Back to home</span>
          </Link>
        </div>

        <article className="max-w-[680px] flex flex-col gap-6">
          <span className="caption-1 text-ink-accent">
            {isPrivacy ? 'Privacy notice' : 'Academic terms'}
          </span>
          <h1 className="heading-2 text-ink-primary">
            {isPrivacy ? 'Privacy policy' : 'Terms of academic use'}
          </h1>

          {isPrivacy ? (
            <div className="flex flex-col gap-4">
              <p className="body-3 text-ink-secondary">
                The LASER Group web portal at PSG Institute of Advanced Studies and PSG Institute
                of Technology and Applied Research does not sell, trade, or profile visitor data.
                No third party advertising trackers are loaded on this website.
              </p>
              <p className="body-3 text-ink-secondary">
                Appearance preferences (System, Dark, or Light theme) are stored solely inside your
                local browser storage so pages render consistently across visits.
              </p>
              <p className="body-3 text-ink-secondary">
                When you contact the laboratory via email or subscribe to the quarterly preprint
                digest, your name, email address, and academic message are used exclusively by Dr.
                Sebin Devasia and the LASER Group to respond to your research or student inquiry.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="body-3 text-ink-secondary">
                All bibliographic metadata, computational figures, and workshop materials hosted on
                this portal are provided for scholarly communication, student training, and
                noncommercial academic reference.
              </p>
              <p className="body-3 text-ink-secondary">
                Full text PDFs linked in the Publications archive remain subject to the copyright
                and open access or author archiving policies of their respective publishers (ACS,
                RSC, Elsevier, IOP Publishing, and AIP Publishing). Please cite the original
                journal DOI when referencing any work.
              </p>
              <p className="body-3 text-ink-secondary">
                Inquiries regarding dataset reuse, DFT input structures, or joint institutional
                proposals across PSGIAS and PSGiTech can be directed to seb@psgias.ac.in.
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default Legal;
