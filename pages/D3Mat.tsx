import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Certificate, FilePdf } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { d3matEditions } from '../data/news';

const D3Mat: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            D³Mat computational
            <br />
            materials workshops
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            Digital Discovery and Design of Materials (D³Mat) is our recurring training initiative
            at PSG Institute of Advanced Studies equipping students and researchers with practical
            first principles simulation skills.
          </p>
        </div>
      </section>

      {/* Editions Showcase */}
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          {d3matEditions.map((edition) => (
            <Reveal
              key={edition.id}
              as="article"
              className="rounded-3xl border border-border-primary bg-surface-secondary p-4 sm:p-8 flex flex-col gap-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Nested radius: 24px - 16px = 8px on mobile; sm:p-8 (>=32px) allows rounded-xl */}
                <div className="lg:col-span-6 rounded-lg sm:rounded-xl overflow-hidden border border-border-primary bg-surface-tertiary aspect-[16/10]">
                  <img
                    src={edition.image}
                    alt={`${edition.title} group photograph at PSG Institute of Advanced Studies`}
                    width={720}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="lg:col-span-6 flex flex-col gap-4 px-2 sm:px-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="caption-3 rounded py-0.5 px-2 bg-surface-primary border border-border-primary text-ink-accent">
                      {edition.edition}
                    </span>
                    <span className="caption-4 tabular-data text-ink-tertiary">
                      {edition.date}
                    </span>
                  </div>

                  <h2 className="heading-4 text-ink-primary">{edition.title}</h2>
                  <p className="caption-1 text-ink-secondary">{edition.location}</p>
                  <p className="body-3 text-ink-secondary">{edition.description}</p>

                  {/* Software Tools */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {edition.tools.map((tool) => (
                      <span
                        key={tool}
                        className="caption-4 tabular-data rounded-md py-1 px-3 bg-surface-primary border border-border-primary text-ink-secondary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={edition.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Visit D³Mat portal</span>
                      <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                    </a>

                    {edition.brochureUrl && (
                      <a
                        href={edition.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FilePdf size={16} weight="regular" aria-hidden="true" />
                        <span>Brochure PDF</span>
                      </a>
                    )}

                    {edition.certificatesUrl && (
                      <a
                        href={edition.certificatesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Certificate size={16} weight="regular" aria-hidden="true" />
                        <span>Participant certificates</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Technical Curriculum Ledger */}
              <div className="pt-6 border-t border-border-primary grid grid-cols-1 md:grid-cols-12 gap-6 items-start px-2 sm:px-0">
                <div className="md:col-span-4 flex flex-col gap-1">
                  <span className="caption-1 text-ink-accent">Workshop syllabus</span>
                  <h3 className="heading-6 text-ink-primary">
                    Modules covered during the training
                  </h3>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {edition.curriculum.map((mod, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-border-primary bg-surface-primary p-4 flex flex-col gap-2"
                    >
                      <span className="caption-3 tabular-data text-ink-accent">0{idx + 1}</span>
                      <p className="body-6 text-ink-secondary">{mod}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          {/* Host / Next Edition Callout */}
          <Reveal className="rounded-2xl border border-border-primary bg-surface-subtle p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-[600px] flex flex-col gap-2">
              <h2 className="heading-5 text-ink-primary">
                Host a collaborative DFT training session or inquire about future editions
              </h2>
              <p className="body-6 text-ink-secondary">
                Departments across Coimbatore and Tamil Nadu interested in joint atomistic
                modelling modules can coordinate directly with the LASER Group.
              </p>
            </div>
            <Link to="/contact" className="btn-secondary shrink-0">
              <span>Coordinate with us</span>
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default D3Mat;
