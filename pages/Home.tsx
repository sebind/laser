import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  ChartScatter,
  FilePdf,
  Flask,
  Graph,
} from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import TaglineReveal from '../components/TaglineReveal';
import { publicationsData } from '../data/publications';
import { faqItems } from '../data/faq';
import { assetUrl } from '../src/utils/assetUrl';

const Home: React.FC = () => {
  const recentPapers = publicationsData.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* =====================================================================
          1. HERO SECTION (A2 #1-5, B5)
          - No eyebrow tag / pulsing dot
          - Heading 1 with approved left-to-right text gradient, no periods, max-w 680px
          - Subheadline max-w 680px naming both PSGIAS & PSGiTech
          - ONE primary CTA above the fold
          - Proof strip directly beside claim + authentic DFT figure
          ===================================================================== */}
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy, Single CTA, Proof Signal */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
              Designing energy and
              <br />
              optoelectronic materials
              <br />
              from first principles
            </h1>

            <p className="body-3 text-ink-secondary max-w-[680px]">
              The LASER Group at PSG Institute of Advanced Studies and PSG Institute of Technology
              and Applied Research combines density functional theory, machine learning potentials,
              and thin film experiments to build lead free semiconductors, catalysts, and
              photodetectors.
            </p>

            {/* Single Primary Action above the fold (A4, A8) */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link to="/research" className="btn-primary">
                <span>Explore research areas</span>
                <ArrowRight size={18} weight="regular" aria-hidden="true" />
              </Link>
            </div>

            {/* Proof Signal directly supporting the claim (A2 #4) */}
            <div className="pt-6 mt-2 border-t border-border-primary grid grid-cols-3 gap-4 sm:gap-8 max-w-[680px]">
              <div className="flex flex-col gap-1">
                <span className="heading-5 text-ink-primary tabular-data">
                  {publicationsData.length}
                </span>
                <span className="caption-2 text-ink-tertiary">
                  Peer reviewed papers and proceedings
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="heading-5 text-ink-primary tabular-data">2</span>
                <span className="caption-2 text-ink-tertiary">
                  PSG research campuses in Coimbatore
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="heading-5 text-ink-primary tabular-data">UGC DAE</span>
                <span className="caption-2 text-ink-tertiary">
                  CSR funded collaborative research
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Scientific Figure (Nested radius: 24px - 16px = 8px) */}
          <div className="lg:col-span-5">
            <figure className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-4">
              <div className="rounded-lg overflow-hidden bg-[#000000] border border-border-primary aspect-[4/5] flex items-center justify-center">
                <img
                  src={assetUrl('/images/dft.png')}
                  alt="Charge density difference isosurface map calculated via density functional theory showing electron accumulation and depletion across a catalytic surface"
                  width={600}
                  height={750}
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="flex items-start justify-between gap-4 px-1">
                <div className="flex flex-col gap-1">
                  <span className="title-4 text-ink-primary">
                    Ab initio charge transfer mapping
                  </span>
                  <span className="caption-5 text-ink-tertiary">
                    Plane wave DFT · Quantum ESPRESSO workflow
                  </span>
                </div>
                <span className="caption-4 tabular-data text-ink-accent shrink-0 pt-0.5">
                  Δρ(r)
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PROBLEM TO SOLUTION (A2 #6) — Asymmetric Editorial Split
          ===================================================================== */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-t border-border-primary bg-surface-subtle"
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <p className="caption-1 text-ink-accent">Why theory meets synthesis</p>
            <h2 className="heading-3 text-ink-primary">
              Closing the gap between atomic equations and working thin films
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              Discovering air stable solar absorbers, selective hydrogen catalysts, or low noise
              photodetectors purely by laboratory trial and error consumes months of precursor
              synthesis and furnace cycles. Conversely, purely theoretical crystal predictions
              often stall when phase segregation or point defects appear during deposition.
            </p>
            <p className="body-3 text-ink-secondary max-w-[65ch]">
              At the LASER Group, computational screening and experimental deposition operate in a
              single loop. We compute electronic band alignments, defect formation energies, and
              phonon stability first, then grow and test promising bismuth halides, chalcogenides,
              and doped oxides in the Nano Lab at PSG Institute of Advanced Studies while mentoring
              computational cohorts across PSG Institute of Technology and Applied Research.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-2">
                <span className="title-4 text-ink-primary">PSG Institute of Advanced Studies</span>
                <p className="body-6 text-ink-secondary">
                  Peelamedu campus · Nano Lab ultrasonic spray pyrolysis, thermal evaporation, and
                  optoelectronic device testing.
                </p>
              </div>
              <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-2">
                <span className="title-4 text-ink-primary">
                  PSG Institute of Technology and Applied Research
                </span>
                <p className="body-6 text-ink-secondary">
                  Neelambur campus · Department of Physics electronic structure modelling, MLIP
                  training, and thesis supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* =====================================================================
          3. OUTCOME-DRIVEN RESEARCH PILLARS / BENEFITS (A2 #7)
          Asymmetric Bento Grid (7/5 + 5/7) — NO 3 equal columns!
          ===================================================================== */}
      <Reveal as="section" className="py-16 sm:py-24 px-4 sm:px-8 border-t border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="max-w-[680px] flex flex-col gap-3">
            <p className="caption-1 text-ink-accent">Core research capabilities</p>
            <h2 className="heading-3 text-ink-primary">
              Four domains where our simulations and devices deliver measurable outcomes
            </h2>
          </div>

          {/* Row 1: 7 cols + 5 cols */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <article className="lg:col-span-7 rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-tertiary border border-border-primary flex items-center justify-center text-ink-accent">
                  <Atom size={20} weight="regular" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-ink-primary">
                  Predict semiconductor stability before synthesis
                </h3>
                <p className="body-3 text-ink-secondary max-w-[60ch]">
                  <strong className="body-1 text-ink-primary">
                    Resolve electronic structure early:
                  </strong>{' '}
                  we solve Kohn Sham density functional theory equations to obtain accurate band
                  structures, optical absorption spectra, and charge transfer pathways across 2D
                  heterostructures and bulk crystals prior to chemical growth.
                </p>
              </div>
              <div className="pt-4 border-t border-border-primary flex flex-wrap items-center justify-between gap-3">
                <span className="caption-4 tabular-data text-ink-tertiary">
                  Quantum ESPRESSO · Band alignment · Defect levels
                </span>
                <Link
                  to="/research#dft"
                  className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                >
                  <span>DFT methodology</span>
                  <ArrowRight size={14} weight="regular" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="lg:col-span-5 rounded-2xl border border-border-primary bg-surface-subtle p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-secondary border border-border-primary flex items-center justify-center text-ink-accent">
                  <Graph size={20} weight="regular" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-ink-primary">
                  Scale quantum accuracy with machine learning potentials
                </h3>
                <p className="body-3 text-ink-secondary">
                  <strong className="body-1 text-ink-primary">
                    Simulate thousands of disordered atoms:
                  </strong>{' '}
                  neural network interatomic potentials trained on DFT trajectories unlock
                  disordered chalcogenide thermoelectrics and metal halide radiation detectors.
                </p>
              </div>
              <div className="pt-4 border-t border-border-primary flex items-center justify-between gap-3">
                <span className="caption-4 tabular-data text-ink-tertiary">
                  MLIPs · Graph neural networks
                </span>
                <Link
                  to="/research#ai-ml"
                  className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                >
                  <span>AI workflows</span>
                  <ArrowRight size={14} weight="regular" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>

          {/* Row 2: 5 cols + 7 cols (Zig-zag asymmetry) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <article className="lg:col-span-5 rounded-2xl border border-border-primary bg-surface-subtle p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-secondary border border-border-primary flex items-center justify-center text-ink-accent">
                  <ChartScatter size={20} weight="regular" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-ink-primary">
                  Validate catalytic sites for clean hydrogen
                </h3>
                <p className="body-3 text-ink-secondary">
                  <strong className="body-1 text-ink-primary">
                    Pinpoint active surface energetics:
                  </strong>{' '}
                  adsorption free energy profiles on Pd Ag alloys, ZnO nanorods, and organic gCN
                  junctions explain high selectivity hydrogen evolution.
                </p>
              </div>
              <div className="pt-4 border-t border-border-primary flex items-center justify-between gap-3">
                <span className="caption-4 tabular-data text-ink-tertiary">
                  HER · PEC water splitting · SERS
                </span>
                <Link
                  to="/publications"
                  className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                >
                  <span>Catalysis papers</span>
                  <ArrowRight size={14} weight="regular" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article className="lg:col-span-7 rounded-2xl border border-border-primary bg-surface-secondary p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-tertiary border border-border-primary flex items-center justify-center text-ink-accent">
                  <Flask size={20} weight="regular" aria-hidden="true" />
                </div>
                <h3 className="heading-5 text-ink-primary">
                  Replace toxic lead in photodetectors and solar cells
                </h3>
                <p className="body-3 text-ink-secondary max-w-[60ch]">
                  <strong className="body-1 text-ink-primary">
                    Build air stable thin film devices:
                  </strong>{' '}
                  we deposit Cs3Bi2I9 perovskite derivatives, Bi2S3 nanorod composites, AgSbS2,
                  Cu2FeSnS4, and doped Ga2O3 films for broadband self powered photodetectors and UV
                  sensors.
                </p>
              </div>
              <div className="pt-4 border-t border-border-primary flex flex-wrap items-center justify-between gap-3">
                <span className="caption-4 tabular-data text-ink-tertiary">
                  Ultrasonic spray · Thermal evaporation · SCAPS 1D
                </span>
                <Link
                  to="/research#opto"
                  className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                >
                  <span>Device research</span>
                  <ArrowRight size={14} weight="regular" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Reveal>

      {/* =====================================================================
          4. MANDATORY TAGLINE REVEAL SECTION (B11)
          Word-by-word scroll illumination in reading order
          ===================================================================== */}
      <TaglineReveal
        caption="Laboratory manifesto"
        lines={[
          'Every durable energy device begins as an electronic wave function.',
          'We compute atomic forces first so every film deposited in the lab',
          'moves closer to clean power and low noise light detection.',
        ]}
      />

      {/* =====================================================================
          5. HOW IT WORKS — THREE STAGES (A2 #8)
          Numbered specification rows instead of generic icon cards
          ===================================================================== */}
      <Reveal as="section" className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="max-w-[680px] flex flex-col gap-3">
            <p className="caption-1 text-ink-accent">Research workflow</p>
            <h2 className="heading-3 text-ink-primary">
              Three connected stages from crystal file to characterized device
            </h2>
          </div>

          <div className="rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 items-start">
              <div className="md:col-span-2">
                <span className="heading-4 tabular-data text-ink-accent">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="heading-6 text-ink-primary">
                  Compute electronic and defect structure
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="body-3 text-ink-secondary">
                  Construct bulk, surface, and interface supercells and evaluate formation
                  enthalpies, band edges, carrier effective masses, and charge density difference
                  maps with plane wave DFT.
                </p>
              </div>
            </div>

            <div className="h-px bg-border-primary" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 items-start">
              <div className="md:col-span-2">
                <span className="heading-4 tabular-data text-ink-accent">02</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="heading-6 text-ink-primary">
                  Train interatomic potentials and device models
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="body-3 text-ink-secondary">
                  Extend quantum accuracy to disordered lattices and finite temperatures using
                  machine learning interatomic potentials alongside 1D solar cell heterojunction
                  transport simulations.
                </p>
              </div>
            </div>

            <div className="h-px bg-border-primary" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 p-6 sm:p-8 items-start">
              <div className="md:col-span-2">
                <span className="heading-4 tabular-data text-ink-accent">03</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="heading-6 text-ink-primary">
                  Synthesize thin films and measure photoresponse
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="body-3 text-ink-secondary">
                  Deposit candidate halide, sulfide, and oxide thin films by ultrasonic spray
                  pyrolysis or evaporation, followed by XRD, Raman, optical, and self powered
                  photodetector testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* =====================================================================
          6. PROOF & RECENT HIGHLIGHTS (A2 #9)
          Real peer-reviewed outputs + D3Mat 2026 Workshop showcase
          ===================================================================== */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-t border-border-primary bg-surface-subtle"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-[680px] flex flex-col gap-3">
              <p className="caption-1 text-ink-accent">Selected output · 2025 to 2026</p>
              <h2 className="heading-3 text-ink-primary">
                Recent peer reviewed papers and community training
              </h2>
            </div>
            <Link to="/publications" className="btn-secondary shrink-0">
              <span>Browse all {publicationsData.length} publications</span>
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Recent papers ledger */}
            <div className="lg:col-span-7 rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
              {recentPapers.map((pub, index) => (
                <React.Fragment key={pub.id}>
                  {index > 0 && <div className="h-px bg-border-primary" />}
                  <article className="p-6 flex flex-col gap-3 hover:bg-surface-tertiary transition-colors duration-300 ease-weighted">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="caption-3 text-ink-accent">{pub.journal}</span>
                      <span className="caption-4 tabular-data text-ink-tertiary">{pub.year}</span>
                    </div>
                    <h3 className="title-2 text-ink-primary">{pub.title}</h3>
                    <p className="caption-2 text-ink-secondary">{pub.authors}</p>
                    <div className="pt-1 flex flex-wrap items-center gap-4">
                      {pub.viewLink && (
                        <a
                          href={pub.viewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="caption-1 text-ink-primary hover:text-ink-accent inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                        >
                          <span>Publisher page</span>
                          <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                        </a>
                      )}
                      {pub.pdfLink && (
                        <a
                          href={pub.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="caption-1 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                        >
                          <FilePdf size={15} weight="regular" aria-hidden="true" />
                          <span>Full text PDF</span>
                        </a>
                      )}
                    </div>
                  </article>
                </React.Fragment>
              ))}
            </div>

            {/* Right 5 cols: D3Mat Workshop & PI Highlight (Nested radius: 24px - 16px = 8px) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <article className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden aspect-[16/10] bg-surface-tertiary border border-border-primary">
                  <img
                    src="https://d3mat-ws.github.io/media/gallery/group-01.jpg"
                    alt="Participants and speakers at the inaugural D3Mat 2026 computational materials workshop at PSG Institute of Advanced Studies"
                    width={640}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-2 pb-2 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="caption-3 text-ink-accent">D³Mat Workshop Series</span>
                    <span className="caption-4 tabular-data text-ink-tertiary">Sep 25, 2026</span>
                  </div>
                  <h3 className="heading-6 text-ink-primary">
                    Training the next cohort in atomistic simulations at PSG IAS
                  </h3>
                  <p className="body-6 text-ink-secondary">
                    Hands on DFT and crystal modeling training with Quantum ESPRESSO, BURAI, VESTA,
                    and XCrySDen organized by the LASER Group.
                  </p>
                  <div className="pt-2">
                    <Link
                      to="/d3mat"
                      className="caption-1 text-ink-primary hover:text-ink-accent inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                    >
                      <span>Explore D³Mat archive</span>
                      <ArrowRight size={14} weight="regular" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>

              <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex items-center gap-4">
                <img
                  src={assetUrl('/images/pi.png')}
                  alt="Portrait of Dr. Sebin Devasia, Principal Investigator of the LASER Group"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-16 h-16 rounded-xl object-cover border border-border-primary shrink-0"
                />
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="title-3 text-ink-primary">Dr. Sebin Devasia</span>
                  <span className="caption-2 text-ink-secondary">
                    Assistant Professor of Physics · PSGIAS &amp; PSGiTech
                  </span>
                  <Link
                    to="/team"
                    className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 w-fit pt-1 transition-colors duration-300 ease-weighted"
                  >
                    <span>Meet the group</span>
                    <ArrowRight size={14} weight="regular" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* =====================================================================
          7. FREQUENTLY ASKED QUESTIONS (A2 #10)
          Side-by-side editorial index (NOT an accordion chevron stack!)
          ===================================================================== */}
      <Reveal as="section" className="py-16 sm:py-24 px-4 sm:px-8 border-t border-border-primary">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3 lg:sticky lg:top-24">
            <p className="caption-1 text-ink-accent">Questions and answers</p>
            <h2 className="heading-3 text-ink-primary">
              Working with the LASER Group
            </h2>
            <p className="body-6 text-ink-secondary">
              Practical details for prospective doctoral scholars, dissertation interns, and
              external experimental collaborators.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqItems.map((item, idx) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-3"
              >
                <div className="flex items-baseline gap-3">
                  <span className="caption-4 tabular-data text-ink-accent shrink-0">
                    0{idx + 1}
                  </span>
                  <h3 className="title-2 text-ink-primary">{item.question}</h3>
                </div>
                <p className="body-6 text-ink-secondary pl-6">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* =====================================================================
          8. RISK REVERSAL & FINAL CTA (A2 #11-12)
          Identical primary CTA to Hero + calm risk reversal
          ===================================================================== */}
      <Reveal
        as="section"
        className="py-16 sm:py-24 px-4 sm:px-8 border-t border-border-primary bg-surface-subtle"
      >
        <div className="max-w-[1200px] mx-auto rounded-3xl border border-border-primary bg-surface-secondary p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-[680px] flex flex-col gap-3">
            <h2 className="heading-3 text-ink-primary">
              Start a research conversation or explore open student projects
            </h2>
            <p className="body-3 text-ink-secondary">
              No formal portal barrier: send a brief note with your background or collaboration
              question, and Dr. Sebin Devasia replies directly regarding thesis windows, PhD
              fellowships, or joint DFT and synthesis studies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link to="/research" className="btn-primary">
              <span>Explore research areas</span>
              <ArrowRight size={18} weight="regular" aria-hidden="true" />
            </Link>
            <Link to="/opportunities" className="btn-secondary">
              <span>View open positions</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default Home;
