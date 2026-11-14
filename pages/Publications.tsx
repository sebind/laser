import React, { useMemo, useState } from 'react';
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  FilePdf,
  MagnifyingGlass,
  X,
} from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { Publication, publicationsData } from '../data/publications';

type PubFilter = 'All' | 'Journal' | 'Conference';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<PubFilter>('All');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const journalCount = useMemo(
    () => publicationsData.filter((p) => p.type === 'Journal').length,
    []
  );
  const conferenceCount = useMemo(
    () => publicationsData.filter((p) => p.type === 'Conference').length,
    []
  );

  const filteredPublications = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return publicationsData.filter((pub) => {
      const matchesType = selectedType === 'All' || pub.type === selectedType;
      if (!matchesType) return false;
      if (!query) return true;
      return (
        pub.title.toLowerCase().includes(query) ||
        pub.authors.toLowerCase().includes(query) ||
        pub.journal.toLowerCase().includes(query) ||
        pub.category.toLowerCase().includes(query) ||
        String(pub.year).includes(query)
      );
    });
  }, [searchTerm, selectedType]);

  const groupedByYear = useMemo(() => {
    const map: Record<number, Publication[]> = {};
    for (const pub of filteredPublications) {
      if (!map[pub.year]) map[pub.year] = [];
      map[pub.year].push(pub);
    }
    return map;
  }, [filteredPublications]);

  const sortedYears = useMemo(
    () =>
      Object.keys(groupedByYear)
        .map(Number)
        .sort((a, b) => b - a),
    [groupedByYear]
  );

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors}. "${pub.title}." ${pub.journal}, ${pub.details} (${pub.year}).${
      pub.viewLink ? ` ${pub.viewLink}` : ''
    }`;
    navigator.clipboard?.writeText(citation);
    setCopiedId(pub.id);
    window.setTimeout(() => setCopiedId(null), 2400);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header & Interactive Counts */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
              Publications and
              <br />
              conference archive
            </h1>
            <p className="body-3 text-ink-secondary max-w-[680px]">
              Complete bibliographic record of peer reviewed journal articles and conference
              presentations from 2014 to 2026, with direct publisher links and full text PDFs.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => setSelectedType('All')}
              className={`rounded-2xl border p-4 text-left flex flex-col gap-1 transition-colors duration-300 ease-weighted active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                selectedType === 'All'
                  ? 'bg-surface-secondary border-border-accent'
                  : 'bg-surface-subtle border-border-primary hover:border-border-strong'
              }`}
            >
              <span className="heading-4 tabular-data text-ink-primary">
                {publicationsData.length}
              </span>
              <span className="caption-2 text-ink-secondary">Total works</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType(selectedType === 'Journal' ? 'All' : 'Journal')}
              className={`rounded-2xl border p-4 text-left flex flex-col gap-1 transition-colors duration-300 ease-weighted active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                selectedType === 'Journal'
                  ? 'bg-surface-secondary border-border-accent'
                  : 'bg-surface-subtle border-border-primary hover:border-border-strong'
              }`}
            >
              <span className="heading-4 tabular-data text-ink-primary">{journalCount}</span>
              <span className="caption-2 text-ink-secondary">Journal papers</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setSelectedType(selectedType === 'Conference' ? 'All' : 'Conference')
              }
              className={`rounded-2xl border p-4 text-left flex flex-col gap-1 transition-colors duration-300 ease-weighted active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                selectedType === 'Conference'
                  ? 'bg-surface-secondary border-border-accent'
                  : 'bg-surface-subtle border-border-primary hover:border-border-strong'
              }`}
            >
              <span className="heading-4 tabular-data text-ink-primary">{conferenceCount}</span>
              <span className="caption-2 text-ink-secondary">Proceedings</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-6 px-4 sm:px-8 border-b border-border-primary bg-surface-subtle">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-[480px]">
            <label htmlFor="pub-search" className="sr-only">
              Search publications by compound, title, journal, or author
            </label>
            <MagnifyingGlass
              size={18}
              weight="regular"
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
            />
            <input
              id="pub-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter by compound (Cs3Bi2I9, ZnO), author, journal, or year"
              className="body-6 w-full rounded-lg border border-border-primary bg-surface-secondary py-2 pl-10 pr-10 text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:border-border-accent focus:ring-2 focus:ring-border-accent transition-colors duration-300 ease-weighted"
            />
            {searchTerm && (
              <button
                type="button"
                aria-label="Clear search query"
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-ink-tertiary hover:text-ink-primary cursor-pointer"
              >
                <X size={16} weight="regular" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            {(['All', 'Journal', 'Conference'] as PubFilter[]).map((tab) => {
              const active = selectedType === tab;
              const label =
                tab === 'All'
                  ? `All (${publicationsData.length})`
                  : tab === 'Journal'
                  ? `Journals (${journalCount})`
                  : `Conferences (${conferenceCount})`;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedType(tab)}
                  className={`rounded-lg py-2 px-3 shrink-0 transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                    active
                      ? 'button-sm bg-action-primary text-ink-inverted'
                      : 'title-4 bg-surface-secondary border border-border-primary text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Year-Indexed Ledger */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          {/* B9: Composed Empty State */}
          {filteredPublications.length === 0 ? (
            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-8 sm:p-12 flex flex-col items-start gap-4 max-w-[680px]">
              <span className="caption-1 text-ink-accent">No matching entries</span>
              <h2 className="heading-5 text-ink-primary">
                Nothing matched &ldquo;{searchTerm}&rdquo; in {selectedType.toLowerCase()} records
              </h2>
              <p className="body-6 text-ink-secondary">
                Try searching for a chemical formula such as Cs3Bi2I9, ZnO, Ga2O3, Cu2FeSnS4, a
                method like DFT or SCAPS, or reset your active filters to browse the full archive.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedType('All');
                }}
                className="btn-primary"
              >
                <span>Show all {publicationsData.length} publications</span>
              </button>
            </div>
          ) : (
            sortedYears.map((year) => (
              <Reveal key={year} as="section" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-2 lg:sticky lg:top-24 flex items-baseline justify-between lg:flex-col gap-1">
                  <h2 className="heading-4 tabular-data text-ink-primary">{year}</h2>
                  <span className="caption-4 tabular-data text-ink-tertiary">
                    {groupedByYear[year].length}{' '}
                    {groupedByYear[year].length === 1 ? 'entry' : 'entries'}
                  </span>
                </div>

                <div className="lg:col-span-10 rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
                  {groupedByYear[year].map((pub, idx) => (
                    <React.Fragment key={pub.id}>
                      {idx > 0 && <div className="h-px bg-border-primary" />}
                      <article className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-surface-tertiary transition-colors duration-300 ease-weighted">
                        <div className="flex-1 min-w-0 flex flex-col gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="caption-3 rounded py-0.5 px-2 bg-surface-primary border border-border-primary text-ink-accent">
                              {pub.type}
                            </span>
                            <span className="caption-4 rounded py-0.5 px-2 bg-surface-subtle border border-border-primary text-ink-tertiary">
                              {pub.category}
                            </span>
                          </div>

                          {pub.viewLink ? (
                            <a
                              href={pub.viewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="title-1 text-ink-primary hover:text-ink-accent transition-colors duration-300 ease-weighted"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            <h3 className="title-1 text-ink-primary">{pub.title}</h3>
                          )}

                          <p className="body-6 text-ink-secondary">{pub.authors}</p>

                          {/* Zero italics per B1 — hierarchy via weight and color */}
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="body-4 text-ink-primary">{pub.journal}</span>
                            <span className="caption-5 text-ink-tertiary">·</span>
                            <span className="caption-2 tabular-data text-ink-tertiary">
                              {pub.details}
                            </span>
                          </div>
                        </div>

                        {/* Action controls — all borders full, never one-sided */}
                        <div className="flex flex-wrap md:flex-col items-stretch gap-2 shrink-0 md:w-32">
                          {pub.viewLink && (
                            <a
                              href={pub.viewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button-xsm inline-flex items-center justify-center gap-1 rounded-lg py-2 px-3 bg-surface-primary border border-border-primary text-ink-primary hover:border-border-strong active:scale-[0.98] transition-[transform,border-color] duration-300 ease-weighted"
                            >
                              <span>Publisher</span>
                              <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                            </a>
                          )}

                          {pub.pdfLink && (
                            <a
                              href={pub.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button-xsm inline-flex items-center justify-center gap-1 rounded-lg py-2 px-3 bg-action-primary text-ink-inverted hover:bg-action-hover active:scale-[0.98] transition-[transform,background-color] duration-300 ease-weighted"
                            >
                              <FilePdf size={14} weight="regular" aria-hidden="true" />
                              <span>Open PDF</span>
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={() => handleCopyCitation(pub)}
                            className="button-xsm inline-flex items-center justify-center gap-1 rounded-lg py-2 px-3 bg-surface-subtle border border-border-primary text-ink-secondary hover:text-ink-primary hover:border-border-strong active:scale-[0.98] transition-[transform,border-color,color] duration-300 ease-weighted cursor-pointer"
                          >
                            {copiedId === pub.id ? (
                              <>
                                <Check size={14} weight="regular" className="text-ink-success" />
                                <span>Citation copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} weight="regular" aria-hidden="true" />
                                <span>Copy citation</span>
                              </>
                            )}
                          </button>
                        </div>
                      </article>
                    </React.Fragment>
                  ))}
                </div>
              </Reveal>
            ))
          )}

          {/* Back to top */}
          {filteredPublications.length > 6 && (
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-secondary"
              >
                <ArrowUp size={16} weight="regular" aria-hidden="true" />
                <span>Return to top</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Calm confirmation toast (B8: calm and specific, no exclamation marks) */}
      {copiedId !== null && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 rounded-xl border border-border-accent bg-surface-secondary py-3 px-4 flex items-center gap-2"
        >
          <Check size={16} weight="regular" className="text-ink-accent" />
          <span className="caption-1 text-ink-primary">Citation copied to clipboard</span>
        </div>
      )}
    </div>
  );
};

export default Publications;
