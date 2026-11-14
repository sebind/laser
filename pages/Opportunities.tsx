import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, EnvelopeSimple } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';

const tracks = [
  {
    num: '01',
    title: 'DFT calculations in heterogeneous and solar catalysis',
    level: 'Masters dissertation · Research internship',
    campus: 'PSG IAS & PSG iTech',
    summary:
      'Compute adsorption free energies, transition barriers, and interfacial charge transfer across alloy nanoparticles and 2D heterostructures for green hydrogen evolution.',
  },
  {
    num: '02',
    title: 'Ab initio electronic structure of semiconductor interfaces',
    level: 'Doctoral track · Masters dissertation',
    campus: 'PSG IAS & PSG iTech',
    summary:
      'Model band offsets, defect transition levels, and carrier transport across chalcogenide and halide perovskite heterojunctions.',
  },
  {
    num: '03',
    title: 'Machine learning interatomic potentials for disordered materials',
    level: 'Doctoral track · Computational internship',
    campus: 'PSG iTech & PSG IAS',
    summary:
      'Train graph neural networks and MLIPs on plane wave DFT datasets to simulate disordered thermoelectrics and metal halide radiation detectors.',
  },
  {
    num: '04',
    title: 'Lead free halide and chalcogenide thin film photodetectors',
    level: 'Experimental dissertation · Research associate',
    campus: 'Nano Lab · PSG IAS Peelamedu',
    summary:
      'Synthesize Cs3Bi2I9, bismuth sulfide, and doped oxide thin films by ultrasonic spray pyrolysis or evaporation and measure spectral photoresponse.',
  },
];

const preparationList = [
  'Academic background in Physics, Materials Science, Chemistry, Nanotechnology, or Chemical Engineering',
  'Foundational coursework in quantum mechanics and solid state physics',
  'Comfort with Linux command line environments and Python scientific libraries for computational tracks',
  'Curiosity for connecting electronic structure predictions with laboratory measurements',
];

const Opportunities: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            Open research tracks
            <br />
            and thesis positions
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            We welcome doctoral applicants, Masters dissertation students, and motivated
            undergraduate interns across PSG Institute of Advanced Studies and PSG Institute of
            Technology and Applied Research.
          </p>
        </div>
      </section>

      {/* Numbered Research Tracks (2x2 asymmetric / structured ledger, zero gradient bars) */}
      <Reveal
        as="section"
        className="py-12 sm:py-20 px-4 sm:px-8 border-b border-border-primary"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
          <div className="max-w-[680px] flex flex-col gap-2">
            <span className="caption-1 text-ink-accent">Current topics</span>
            <h2 className="heading-3 text-ink-primary">
              Four research directions open for incoming scholars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => (
              <article
                key={track.num}
                className="rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="heading-5 tabular-data text-ink-accent">{track.num}</span>
                    <span className="caption-4 rounded py-0.5 px-2 bg-surface-primary border border-border-primary text-ink-tertiary">
                      {track.campus}
                    </span>
                  </div>
                  <h3 className="heading-5 text-ink-primary">{track.title}</h3>
                  <p className="body-6 text-ink-secondary">{track.summary}</p>
                </div>

                <div className="pt-4 border-t border-border-primary flex items-center justify-between gap-3">
                  <span className="caption-2 text-ink-tertiary">{track.level}</span>
                  <a
                    href={`mailto:seb@psgias.ac.in?subject=${encodeURIComponent(
                      `Application — ${track.title}`
                    )}`}
                    className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                  >
                    <span>Apply for track</span>
                    <ArrowRight size={14} weight="regular" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Preparation & Application Protocol */}
      <Reveal as="section" className="py-12 sm:py-20 px-4 sm:px-8 bg-surface-subtle">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="caption-1 text-ink-accent">Candidate preparation</span>
              <h2 className="heading-4 text-ink-primary">What helps you succeed in the lab</h2>
            </div>

            <ul className="flex flex-col gap-4">
              {preparationList.map((req, idx) => (
                <li
                  key={idx}
                  className="rounded-xl border border-border-primary bg-surface-secondary p-4 flex items-start gap-3"
                >
                  <Check
                    size={18}
                    weight="regular"
                    className="text-ink-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="body-6 text-ink-secondary">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="caption-1 text-ink-accent">Direct application</span>
              <h3 className="heading-5 text-ink-primary">Send your CV and topic preference</h3>
              <p className="body-6 text-ink-secondary">
                Email your curriculum vitae, academic transcripts if applying for a dissertation,
                and three sentences describing which track aligns with your goals.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:seb@psgias.ac.in?subject=Research%20Application%20%E2%80%94%20LASER%20Group"
                className="btn-primary w-full"
              >
                <EnvelopeSimple size={18} weight="regular" aria-hidden="true" />
                <span>Email seb@psgias.ac.in</span>
              </a>
              <a
                href="mailto:sebin@psgitech.ac.in?subject=Research%20Application%20%E2%80%94%20LASER%20Group"
                className="btn-secondary w-full"
              >
                <EnvelopeSimple size={18} weight="regular" aria-hidden="true" />
                <span>Email sebin@psgitech.ac.in</span>
              </a>
              <Link to="/contact" className="btn-tertiary justify-center w-full">
                <span>Or use the structured inquiry form</span>
                <ArrowRight size={16} weight="regular" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Opportunities;
