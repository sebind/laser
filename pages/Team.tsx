import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, EnvelopeSimple } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import {
  alumniData,
  currentResearchers,
  institutions,
  principalInvestigator,
} from '../data/team';

type TeamTab = 'All' | 'Current' | 'Alumni';

const Team: React.FC = () => {
  const [tab, setTab] = useState<TeamTab>('All');

  const showCurrent = tab === 'All' || tab === 'Current';
  const showAlumni = tab === 'All' || tab === 'Alumni';

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            Researchers across
            <br />
            PSGIAS and PSGiTech
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            Physicists, doctoral scholars, and dissertation researchers investigating atomic scale
            materials design and thin film optoelectronics in Coimbatore.
          </p>
        </div>
      </section>

      {/* Principal Investigator Section (Nested radius: 24px outer - 16px pad = 8px inner) */}
      <Reveal as="section" className="py-12 sm:py-16 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <span className="caption-1 text-ink-accent">Principal investigator</span>
            <h2 className="heading-4 text-ink-primary">Group leadership</h2>
          </div>

          <article className="rounded-3xl border border-border-primary bg-surface-secondary p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden border border-border-primary bg-surface-tertiary aspect-[4/5] max-w-[320px]">
                <img
                  src={principalInvestigator.image}
                  alt="Dr. Sebin Devasia, Assistant Professor of Physics and Principal Investigator of the LASER Group"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="heading-3 text-ink-primary">{principalInvestigator.name}</h3>
                <p className="title-2 text-ink-accent">{principalInvestigator.title}</p>
                <div className="flex flex-col gap-1 pt-1">
                  {principalInvestigator.affiliations.map((aff) => (
                    <span key={aff} className="body-5 text-ink-secondary">
                      {aff}
                    </span>
                  ))}
                </div>
              </div>

              <p className="body-3 text-ink-secondary max-w-[65ch]">
                {principalInvestigator.bio}
              </p>

              {/* Domain tags — square/rounded-md labels instead of pill badges */}
              <div className="flex flex-wrap gap-2">
                {principalInvestigator.domains.map((domain) => (
                  <span
                    key={domain}
                    className="caption-4 rounded-md py-1 px-3 bg-surface-primary border border-border-primary text-ink-secondary"
                  >
                    {domain}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-border-primary flex flex-wrap items-center gap-3">
                <a
                  href={principalInvestigator.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Google Scholar</span>
                  <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                </a>
                <a
                  href={principalInvestigator.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Personal page &amp; CV</span>
                  <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                </a>
                <a
                  href={principalInvestigator.irinsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>IRINS faculty profile</span>
                  <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${principalInvestigator.primaryEmail}`}
                  className="btn-tertiary"
                >
                  <EnvelopeSimple size={16} weight="regular" aria-hidden="true" />
                  <span className="tabular-data">{principalInvestigator.primaryEmail}</span>
                </a>
              </div>
            </div>
          </article>

          {/* Dual Campus Institutional Affiliation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {institutions.map((inst) => (
              <div
                key={inst.shortName}
                className="rounded-2xl border border-border-primary bg-surface-subtle p-6 flex flex-col justify-between gap-4"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="caption-3 text-ink-accent">{inst.shortName}</span>
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="caption-4 text-ink-tertiary hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                    >
                      <span>Institution website</span>
                      <ArrowUpRight size={12} weight="regular" />
                    </a>
                  </div>
                  <h3 className="title-1 text-ink-primary">{inst.fullName}</h3>
                  <span className="caption-2 text-ink-tertiary">{inst.campus}</span>
                  <p className="body-6 text-ink-secondary pt-1">{inst.roleSummary}</p>
                </div>
                <div className="pt-3 border-t border-border-primary flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${inst.email}`}
                    className="caption-4 tabular-data text-ink-primary hover:text-ink-accent transition-colors duration-300 ease-weighted"
                  >
                    {inst.email}
                  </a>
                  <a
                    href={inst.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption-4 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-1"
                  >
                    <span>Map</span>
                    <ArrowUpRight size={12} weight="regular" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Filter Bar & Members / Alumni */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-primary">
            <h2 className="heading-4 text-ink-primary">Scholars and alumni</h2>
            <div className="rounded-2xl border border-border-primary bg-surface-subtle p-2 flex items-center gap-2 w-fit">
              {(['All', 'Current', 'Alumni'] as TeamTab[]).map((item) => {
                const active = tab === item;
                const label =
                  item === 'All'
                    ? 'All members'
                    : item === 'Current'
                    ? 'Current scholars'
                    : `Alumni (${alumniData.length})`;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTab(item)}
                    className={`rounded-lg py-2 px-3 transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                      active
                        ? 'button-sm bg-surface-secondary text-ink-primary border border-border-primary'
                        : 'title-4 text-ink-secondary hover:text-ink-primary'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Scholars (Squircle monogram avatars instead of circle Material icons!) */}
          {showCurrent && (
            <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentResearchers.map((member) => (
                <article
                  key={member.id}
                  className="rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          aria-hidden="true"
                          className="w-12 h-12 rounded-xl bg-surface-tertiary border border-border-primary flex items-center justify-center heading-6 tabular-data text-ink-accent shrink-0"
                        >
                          {member.initials}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <h3 className="heading-6 text-ink-primary">{member.name}</h3>
                          <span className="caption-1 text-ink-accent">{member.role}</span>
                        </div>
                      </div>

                      {member.emailSubject && (
                        <a
                          href={`mailto:seb@psgias.ac.in?subject=${encodeURIComponent(
                            member.emailSubject
                          )}`}
                          aria-label={`Contact ${member.name} via laboratory email`}
                          className="p-2 rounded-lg bg-surface-primary border border-border-primary text-ink-secondary hover:text-ink-primary hover:border-border-strong transition-colors duration-300 ease-weighted"
                        >
                          <EnvelopeSimple size={18} weight="regular" />
                        </a>
                      )}
                    </div>

                    <p className="body-6 text-ink-secondary">{member.summary}</p>
                  </div>

                  <div className="pt-4 border-t border-border-primary flex items-center justify-between gap-3">
                    <span className="caption-4 text-ink-tertiary">Research focus</span>
                    <span className="caption-3 text-ink-primary">{member.focus}</span>
                  </div>
                </article>
              ))}
            </Reveal>
          )}

          {/* Alumni Ledger */}
          {showAlumni && (
            <Reveal className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="heading-5 text-ink-primary">Masters dissertation alumni</h3>
                <span className="caption-4 tabular-data text-ink-tertiary">2024 to 2026</span>
              </div>

              <div className="rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
                {/* Desktop table header */}
                <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-surface-subtle border-b border-border-primary">
                  <span className="md:col-span-3 caption-3 text-ink-tertiary">Scholar</span>
                  <span className="md:col-span-3 caption-3 text-ink-tertiary">Institution</span>
                  <span className="md:col-span-2 caption-3 text-ink-tertiary">Cohort</span>
                  <span className="md:col-span-4 caption-3 text-ink-tertiary">
                    Dissertation topic
                  </span>
                </div>

                {alumniData.map((alum, idx) => (
                  <React.Fragment key={`${alum.name}-${idx}`}>
                    {idx > 0 && <div className="h-px bg-border-primary" />}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-6 items-baseline hover:bg-surface-tertiary transition-colors duration-300 ease-weighted">
                      <span className="md:col-span-3 body-4 text-ink-primary">{alum.name}</span>
                      <span className="md:col-span-3 caption-2 text-ink-secondary">
                        {alum.institution}
                      </span>
                      <span className="md:col-span-2 caption-4 tabular-data text-ink-accent">
                        {alum.roleYear}
                      </span>
                      <span className="md:col-span-4 body-6 text-ink-secondary">
                        {alum.project}
                      </span>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </Reveal>
          )}

          {/* Recruitment Callout */}
          <Reveal className="rounded-3xl border border-border-primary bg-surface-subtle p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-[680px] flex flex-col gap-2">
              <h2 className="heading-4 text-ink-primary">
                Interested in joining the laboratory?
              </h2>
              <p className="body-3 text-ink-secondary">
                We supervise doctoral candidates and Masters thesis students in computational
                condensed matter physics, machine learning potentials, and spray or evaporated thin
                film optoelectronics.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link to="/opportunities" className="btn-primary">
                <span>View open positions</span>
                <ArrowRight size={18} weight="regular" aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                <span>Contact Dr. Devasia</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Team;
