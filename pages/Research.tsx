import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FilePdf } from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { assetUrl } from '../src/utils/assetUrl';

type SectionId = 'dft' | 'ai-ml' | 'opto' | 'materials';

const sections: { id: SectionId; num: string; label: string }[] = [
  { id: 'dft', num: '01', label: 'First principles DFT' },
  { id: 'ai-ml', num: '02', label: 'Machine learning potentials' },
  { id: 'opto', num: '03', label: 'Optoelectronics & sensors' },
  { id: 'materials', num: '04', label: 'Material systems' },
];

const Research: React.FC = () => {
  const [activeId, setActiveId] = useState<SectionId>('dft');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '') as SectionId;
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  /* B7: IntersectionObserver instead of window scroll listener */
  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id as SectionId);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: SectionId) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            Computational theory and
            <br />
            thin film device physics
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            Across PSG Institute of Advanced Studies and PSG Institute of Technology and Applied
            Research, we combine plane wave electronic structure calculations, machine learning
            interatomic potentials, and laboratory film deposition to design functional energy
            materials.
          </p>

          {/* Compact horizontal jump bar (Nested radius: 16px outer - 8px pad = 8px inner) */}
          <nav
            aria-label="Research domains"
            className="w-full sm:w-fit rounded-2xl border border-border-primary bg-surface-subtle p-2 flex items-center gap-2 overflow-x-auto"
          >
            {sections.map((sec) => {
              const selected = activeId === sec.id;
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => jumpTo(sec.id)}
                  aria-current={selected ? 'location' : undefined}
                  className={`rounded-lg py-2 px-3 shrink-0 inline-flex items-center gap-2 transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                    selected
                      ? 'body-4 bg-surface-secondary text-ink-primary border border-border-primary'
                      : 'title-4 text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  <span className="caption-4 tabular-data text-ink-accent">{sec.num}</span>
                  <span>{sec.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </section>

      {/* 01. First Principles DFT */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-b border-border-primary"
      >
        <div
          id="dft"
          className="scroll-mt-24 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="caption-3 tabular-data text-ink-accent">01</span>
              <span className="caption-1 text-ink-tertiary">Electronic structure theory</span>
            </div>
            <h2 className="heading-3 text-ink-primary">
              First principles density functional theory
            </h2>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              We solve the Kohn Sham equations for periodic crystals, surfaces, and low dimensional
              heterostructures to predict structural stability, band alignments, optical absorption
              coefficients, and catalytic reaction barriers before synthesis.
            </p>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              By mapping charge density difference distributions and projected densities of states,
              we identify how dopants, vacancies, and heterojunction interfaces govern carrier
              separation in solar fuel catalysts and plasmonic substrates.
            </p>

            {/* Representative Publications */}
            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4">
              <span className="title-4 text-ink-primary">Representative publications</span>
              <div className="h-px bg-border-primary" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <a
                    href="https://doi.org/10.1021/acsaenm.6c00868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="body-4 text-ink-primary hover:text-ink-accent inline-flex items-baseline gap-1 transition-colors duration-300 ease-weighted"
                  >
                    <span>
                      Rational Design of Star-Shaped Donor−Acceptor Organic Small-Molecule/GCN
                      Heterostructures for Superior Photocatalytic Hydrogen Evolution
                    </span>
                    <ArrowUpRight size={14} weight="regular" className="shrink-0" />
                  </a>
                  <span className="caption-5 text-ink-tertiary">
                    ACS Applied Engineering Materials · 2026
                  </span>
                </div>
                <div className="h-px bg-border-primary" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a
                      href="https://www.sciencedirect.com/science/article/pii/S0169433225008748"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-4 text-ink-primary hover:text-ink-accent inline-flex items-baseline gap-1 transition-colors duration-300 ease-weighted"
                    >
                      <span>
                        High Aspect Ratio ZnO Nanorods for Improved Photoelectrochemical (PEC)
                        Water Splitting Performances
                      </span>
                      <ArrowUpRight size={14} weight="regular" className="shrink-0" />
                    </a>
                    <a
                      href={assetUrl('/pdfs/2025_ApplSurfSci_znonrds.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="caption-3 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1"
                    >
                      <FilePdf size={14} weight="regular" />
                      <span>PDF</span>
                    </a>
                  </div>
                  <span className="caption-5 text-ink-tertiary">
                    Applied Surface Science · 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-3">
              <div className="rounded-lg overflow-hidden bg-[#000000] border border-border-primary aspect-[3/4]">
                <img
                  src={assetUrl('/images/dft.png')}
                  alt="Charge density difference plot showing electron accumulation and depletion contours between an adsorbed molecule and a 2D substrate"
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="px-1 flex items-center justify-between gap-2">
                <span className="caption-2 text-ink-secondary">
                  Interfacial charge redistribution contour
                </span>
                <span className="caption-4 tabular-data text-ink-tertiary">DFT · PBE / HSE</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      {/* 02. AI & Machine Learning Potentials */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-b border-border-primary bg-surface-subtle"
      >
        <div
          id="ai-ml"
          className="scroll-mt-24 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-5 order-2 lg:order-1">
            <figure className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-3">
              <div className="rounded-lg overflow-hidden bg-[#000000] border border-border-primary aspect-square">
                <img
                  src={assetUrl('/images/ml.png')}
                  alt="Closed loop workflow connecting materials databases, crystal graph representations, neural network models, and property prediction"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="px-1 flex items-center justify-between gap-2">
                <span className="caption-2 text-ink-secondary">
                  Closed loop crystal graph screening pipeline
                </span>
                <span className="caption-4 tabular-data text-ink-tertiary">GNN · MLIP</span>
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="caption-3 tabular-data text-ink-accent">02</span>
              <span className="caption-1 text-ink-tertiary">Atomistic machine learning</span>
            </div>
            <h2 className="heading-3 text-ink-primary">
              Machine learning interatomic potentials and screening
            </h2>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              Standard Kohn Sham DFT scales cubically with electron count, restricting simulations
              of configurationally disordered alloys, amorphous grain boundaries, and thermal
              transport. We train equivariant graph neural networks and machine learning
              interatomic potentials (MLIPs) on curated ab initio force datasets.
            </p>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              These surrogate models retain near DFT force fidelity across tens of thousands of
              atoms, allowing our group to map lattice thermal conductivity in disordered
              chalcogenide thermoelectrics and screen metal halide compositions for ionizing
              radiation detection.
            </p>

            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4">
              <span className="title-4 text-ink-primary">Active projects and invited lectures</span>
              <div className="h-px bg-border-primary" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="body-4 text-ink-primary">
                    DFT and MLIPs for disordered chalcogenide thermoelectrics
                  </span>
                  <span className="caption-5 text-ink-tertiary">
                    Doctoral research · Ms. Aswathy A R, LASER Group
                  </span>
                </div>
                <div className="h-px bg-border-primary" />
                <div className="flex flex-col gap-1">
                  <span className="body-4 text-ink-primary">
                    Machine learning interatomic potentials: Closing the gap between scale and
                    accuracy
                  </span>
                  <span className="caption-5 text-ink-tertiary">
                    Invited FDP lecture · SIMAT Palakkad · June 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 03. Optoelectronics & Photodetectors */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-b border-border-primary"
      >
        <div
          id="opto"
          className="scroll-mt-24 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="caption-3 tabular-data text-ink-accent">03</span>
              <span className="caption-1 text-ink-tertiary">Thin film synthesis &amp; devices</span>
            </div>
            <h2 className="heading-3 text-ink-primary">
              Optoelectronics, solar cells, and self powered photodetectors
            </h2>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              In the Nano Lab at PSG Institute of Advanced Studies, we translate theoretical
              candidates into thin film devices using ultrasonic spray pyrolysis, chemical bath
              deposition, rapid iodization, and thermal evaporation.
            </p>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              Alongside fabrication, we model carrier drift diffusion and interface defect
              recombination using SCAPS 1D to understand practical efficiency limits in earth
              abundant kesterite and chalcogenide heterojunctions.
            </p>

            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4">
              <span className="title-4 text-ink-primary">Representative device studies</span>
              <div className="h-px bg-border-primary" />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0925346724007158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-4 text-ink-primary hover:text-ink-accent inline-flex items-baseline gap-1 transition-colors duration-300 ease-weighted"
                    >
                      <span>
                        In situ grown Bi2S3 nanorods in Cs3Bi2I9 thin films as broadband
                        self-driven photodetector with improved photostability
                      </span>
                      <ArrowUpRight size={14} weight="regular" className="shrink-0" />
                    </a>
                    <a
                      href={assetUrl('/pdfs/2024_OpticalMat.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="caption-3 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1"
                    >
                      <FilePdf size={14} weight="regular" />
                      <span>PDF</span>
                    </a>
                  </div>
                  <span className="caption-5 text-ink-tertiary">Optical Materials · 2024</span>
                </div>
                <div className="h-px bg-border-primary" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0022369725006468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="body-4 text-ink-primary hover:text-ink-accent inline-flex items-baseline gap-1 transition-colors duration-300 ease-weighted"
                    >
                      <span>
                        Optimization of Hole Transport Layers for Cu2FeSnS4 Solar Cells via
                        SCAPS-1D Simulation
                      </span>
                      <ArrowUpRight size={14} weight="regular" className="shrink-0" />
                    </a>
                    <a
                      href={assetUrl('/pdfs/2025_JPCS_scaps.pdf')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="caption-3 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1"
                    >
                      <FilePdf size={14} weight="regular" />
                      <span>PDF</span>
                    </a>
                  </div>
                  <span className="caption-5 text-ink-tertiary">
                    Journal of Physics and Chemistry of Solids · 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-3">
              <div className="rounded-lg overflow-hidden bg-[#000000] border border-border-primary aspect-square">
                <img
                  src={assetUrl('/images/opto.png')}
                  alt="Planar thin film photodetector architecture showing broadband light absorption, electron hole pair separation across grain boundaries, and pulsed photocurrent output"
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="px-1 flex items-center justify-between gap-2">
                <span className="caption-2 text-ink-secondary">
                  Broadband planar photodetector mechanism
                </span>
                <span className="caption-4 tabular-data text-ink-tertiary">UV to NIR</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>

      {/* 04. Material Systems Specification Grid (2x2 asymmetric bento, zero stock images) */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 bg-surface-subtle"
      >
        <div id="materials" className="scroll-mt-24 max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-[680px] flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="caption-3 tabular-data text-ink-accent">04</span>
                <span className="caption-1 text-ink-tertiary">Compound families</span>
              </div>
              <h2 className="heading-3 text-ink-primary">
                Material systems investigated in our group
              </h2>
            </div>
            <Link to="/publications" className="btn-secondary shrink-0">
              <span>Search papers by compound</span>
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <article className="md:col-span-7 rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="caption-3 tabular-data text-ink-accent">
                  Cs3Bi2I9 · BiI3 · SbI3
                </span>
                <h3 className="heading-5 text-ink-primary">
                  Lead free halide perovskite derivatives
                </h3>
                <p className="body-6 text-ink-secondary">
                  Zero dimensional and layered bismuth and antimony halides offering high optical
                  absorption cross sections, ambient moisture resilience, and low dark current for
                  visible and X ray photodetection without lead toxicity.
                </p>
              </div>
              <span className="caption-4 text-ink-tertiary">
                Ultrasonic spray pyrolysis · In situ crystallization · Thermal evaporation
              </span>
            </article>

            <article className="md:col-span-5 rounded-2xl border border-border-primary bg-surface-primary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="caption-3 tabular-data text-ink-accent">
                  Cu2FeSnS4 · AgSbS2 · Sn6Sb10S21
                </span>
                <h3 className="heading-5 text-ink-primary">
                  Earth abundant chalcogenides
                </h3>
                <p className="body-6 text-ink-secondary">
                  Ternary and quaternary metal sulfides engineered for thin film solar absorbers
                  and disordered low thermal conductivity thermoelectrics.
                </p>
              </div>
              <span className="caption-4 text-ink-tertiary">
                DFT + MLIPs · Chemical bath growth · SCAPS 1D
              </span>
            </article>

            <article className="md:col-span-5 rounded-2xl border border-border-primary bg-surface-primary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="caption-3 tabular-data text-ink-accent">
                  β Ga2O3 · ZnO:Al · ZnFe2O4
                </span>
                <h3 className="heading-5 text-ink-primary">
                  Wide bandgap oxides and spinels
                </h3>
                <p className="body-6 text-ink-secondary">
                  Solar blind ultraviolet detectors, transparent conducting electrodes, dual
                  acceptor doped homojunctions, and polaron hopping spinel thermoelectrics.
                </p>
              </div>
              <span className="caption-4 text-ink-tertiary">
                Defect physics · Co doping · Spray pyrolysis
              </span>
            </article>

            <article className="md:col-span-7 rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <span className="caption-3 tabular-data text-ink-accent">
                  gCN / TRZ · Pd Ag · TiO2:Fe
                </span>
                <h3 className="heading-5 text-ink-primary">
                  2D heterostructures and alloy nanocatalysts
                </h3>
                <p className="body-6 text-ink-secondary">
                  Donor acceptor organic junctions on graphitic carbon nitride and bimetallic
                  nanoparticle catalysts designed via free energy and d band center calculations
                  for clean hydrogen evolution.
                </p>
              </div>
              <span className="caption-4 text-ink-tertiary">
                Interfacial charge transfer · Formic acid dehydrogenation · Water splitting
              </span>
            </article>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Research;
