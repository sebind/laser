import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CaretDown,
  CaretLeft,
  CaretRight,
  Check,
  Copy,
  FilePdf,
} from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { labEvents, NewsCategory, newsData } from '../data/news';

type FilterLabel = 'All updates' | 'Conferences' | 'Publications' | 'Grants';

const filterMap: Record<FilterLabel, NewsCategory | null> = {
  'All updates': null,
  Conferences: 'Conference',
  Publications: 'Publication',
  Grants: 'Grant',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const News: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterLabel>('All updates');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  /* Interactive calendar state — defaults to September 2026 where D3Mat workshop sits, or current month */
  const [calendarDate, setCalendarDate] = useState<Date>(() => new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  /* Validated digest form state */
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [subscribedEmail, setSubscribedEmail] = useState<string | null>(null);

  const filteredNews = newsData.filter((item) => {
    const target = filterMap[activeFilter];
    return target === null ? true : item.category === target;
  });

  const featured =
    activeFilter === 'All updates' || activeFilter === 'Conferences'
      ? filteredNews.find((n) => Boolean(n.featuredImage)) ?? null
      : null;

  const feedItems = featured
    ? filteredNews.filter((n) => n.id !== featured.id)
    : filteredNews;

  const handleCopyCitation = (id: string, citation: string) => {
    navigator.clipboard?.writeText(citation);
    setCopiedId(id);
    window.setTimeout(() => setCopiedId(null), 2400);
  };

  const handleDigestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError('Enter an academic or institutional email address.');
      return;
    }
    if (!emailPattern.test(trimmed)) {
      setEmailError('Email format is invalid. Use a valid address such as scholar@university.edu.');
      return;
    }
    setEmailError(null);
    setSubscribedEmail(trimmed);
    setEmail('');
  };

  const calYear = calendarDate.getFullYear();
  const calMonth = calendarDate.getMonth();
  const calMonth1 = calMonth + 1;
  const monthLabel = calendarDate.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });
  const firstWeekday = new Date(calYear, calMonth, 1).getDay();
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

  const monthEvents = labEvents.filter(
    (ev) => ev.year === calYear && ev.month === calMonth1
  );
  const dayEvents =
    selectedDay !== null ? monthEvents.filter((ev) => ev.date === selectedDay) : [];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            Laboratory news, talks,
            <br />
            and research milestones
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            Recent peer reviewed releases, invited lectures, competitive grants, and workshops from
            the LASER Group at PSGIAS and PSGiTech.
          </p>

          {/* Filter Tabs (Nested radius: 16px - 8px = 8px) */}
          <div className="w-full sm:w-fit rounded-2xl border border-border-primary bg-surface-subtle p-2 flex items-center gap-2 overflow-x-auto">
            {(Object.keys(filterMap) as FilterLabel[]).map((label) => {
              const target = filterMap[label];
              const count =
                target === null
                  ? newsData.length
                  : newsData.filter((n) => n.category === target).length;
              const active = activeFilter === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveFilter(label)}
                  className={`rounded-lg py-2 px-3 shrink-0 inline-flex items-center gap-2 transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer ${
                    active
                      ? 'button-sm bg-surface-secondary text-ink-primary border border-border-primary'
                      : 'title-4 text-ink-secondary hover:text-ink-primary'
                  }`}
                >
                  <span>{label}</span>
                  <span className="caption-4 tabular-data text-ink-tertiary">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Two-Column Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 8 Columns: Featured Workshop + Chronological Ledger */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {featured && (
              <Reveal
                as="article"
                className="rounded-3xl border border-border-primary bg-surface-secondary p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-5 rounded-xl overflow-hidden border border-border-primary bg-surface-tertiary aspect-[4/3]">
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    width={480}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-7 flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="caption-3 text-ink-accent">{featured.category}</span>
                    <span className="caption-4 tabular-data text-ink-tertiary">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="heading-5 text-ink-primary">{featured.title}</h2>
                  <p className="body-6 text-ink-secondary">{featured.description}</p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    {featured.internalLink && (
                      <Link to={featured.internalLink} className="btn-primary">
                        <span>Workshop overview</span>
                        <ArrowRight size={16} weight="regular" aria-hidden="true" />
                      </Link>
                    )}
                    {featured.pdfUrl && (
                      <a
                        href={featured.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <FilePdf size={16} weight="regular" aria-hidden="true" />
                        <span>Brochure PDF</span>
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            )}

            {/* Chronological Ledger with Inline Progressive Disclosure (no modals!) */}
            <div className="rounded-2xl border border-border-primary bg-surface-secondary overflow-hidden">
              {feedItems.map((item, idx) => {
                const isExpanded = expandedId === item.id;
                return (
                  <React.Fragment key={item.id}>
                    {idx > 0 && <div className="h-px bg-border-primary" />}
                    <article className="p-6 flex flex-col gap-3 hover:bg-surface-tertiary transition-colors duration-300 ease-weighted">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="caption-3 rounded py-0.5 px-2 bg-surface-primary border border-border-primary text-ink-accent">
                            {item.category}
                          </span>
                          {item.location && (
                            <span className="caption-4 text-ink-tertiary">{item.location}</span>
                          )}
                        </div>
                        <span className="caption-4 tabular-data text-ink-tertiary">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="title-1 text-ink-primary">{item.title}</h3>
                      <p className="body-6 text-ink-secondary">{item.description}</p>

                      {item.details && isExpanded && (
                        <div className="rounded-xl border border-border-primary bg-surface-primary p-4 mt-1">
                          <p className="body-6 text-ink-secondary">{item.details}</p>
                        </div>
                      )}

                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        {item.linkUrl && (
                          <a
                            href={item.linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="caption-1 text-ink-primary hover:text-ink-accent inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                          >
                            <span>{item.linkText || 'Open external link'}</span>
                            <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                          </a>
                        )}

                        {item.pdfUrl && (
                          <a
                            href={item.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="caption-1 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted"
                          >
                            <FilePdf size={15} weight="regular" aria-hidden="true" />
                            <span>PDF</span>
                          </a>
                        )}

                        {item.citation && (
                          <button
                            type="button"
                            onClick={() => handleCopyCitation(item.id, item.citation!)}
                            className="caption-1 text-ink-secondary hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted cursor-pointer"
                          >
                            {copiedId === item.id ? (
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
                        )}

                        {item.details && (
                          <button
                            type="button"
                            aria-expanded={isExpanded}
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                            className="caption-1 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1 transition-colors duration-300 ease-weighted cursor-pointer"
                          >
                            <span>{isExpanded ? 'Hide session notes' : 'Session notes'}</span>
                            <CaretDown
                              size={14}
                              weight="regular"
                              className={`transition-transform duration-300 ease-weighted ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    </article>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Right 4 Columns: Interactive Calendar & Validated Digest Form */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            {/* Calendar Card */}
            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="title-3 text-ink-primary">{monthLabel}</h2>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={() => {
                      setCalendarDate(new Date(calYear, calMonth - 1, 1));
                      setSelectedDay(null);
                    }}
                    className="p-2 rounded-lg bg-surface-primary border border-border-primary text-ink-secondary hover:text-ink-primary cursor-pointer"
                  >
                    <CaretLeft size={16} weight="regular" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => {
                      setCalendarDate(new Date(calYear, calMonth + 1, 1));
                      setSelectedDay(null);
                    }}
                    className="p-2 rounded-lg bg-surface-primary border border-border-primary text-ink-secondary hover:text-ink-primary cursor-pointer"
                  >
                    <CaretRight size={16} weight="regular" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <span key={d} className="caption-4 text-ink-tertiary py-1">
                    {d}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {Array.from({ length: firstWeekday }).map((_, i) => (
                  <span key={`empty-${i}`} className="h-8" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const day = idx + 1;
                  const hasEv = monthEvents.some((ev) => ev.date === day);
                  const selected = selectedDay === day;
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(selected ? null : day)}
                      className={`h-8 rounded-lg tabular-data caption-4 flex flex-col items-center justify-center relative transition-colors duration-300 ease-weighted cursor-pointer ${
                        selected
                          ? 'bg-action-primary text-ink-inverted'
                          : hasEv
                          ? 'bg-surface-primary border border-border-accent text-ink-primary'
                          : 'text-ink-secondary hover:bg-surface-tertiary hover:text-ink-primary'
                      }`}
                    >
                      <span>{day}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-border-primary flex flex-col gap-3">
                {selectedDay !== null ? (
                  dayEvents.length > 0 ? (
                    dayEvents.map((ev, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-surface-primary border border-border-primary p-3 flex flex-col gap-1"
                      >
                        <span className="body-4 text-ink-primary">{ev.title}</span>
                        <span className="caption-5 text-ink-tertiary">{ev.time}</span>
                      </div>
                    ))
                  ) : (
                    <p className="caption-2 text-ink-tertiary">
                      No public talks recorded on {monthLabel.split(' ')[0]} {selectedDay}. Regular
                      Nano Lab hours run Monday to Friday, 08:30 to 16:30 IST.
                    </p>
                  )
                ) : (
                  <>
                    <span className="caption-3 text-ink-tertiary">Recent calendar milestones</span>
                    {labEvents.slice(0, 3).map((ev, i) => (
                      <div key={i} className="flex flex-col gap-0.5">
                        <span className="body-5 text-ink-primary">{ev.title}</span>
                        <span className="caption-5 tabular-data text-ink-tertiary">
                          {ev.year} · {ev.time}
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Quarterly Digest Form with Client-Side Validation */}
            <div className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 className="title-3 text-ink-primary">Quarterly preprint digest</h2>
                <p className="caption-2 text-ink-secondary">
                  Receive a calm summary when new papers, D³Mat workshop dates, or thesis openings
                  are posted.
                </p>
              </div>

              {subscribedEmail ? (
                <div className="rounded-lg border border-border-primary bg-surface-primary p-4 flex flex-col gap-2">
                  <span className="body-4 text-ink-primary">
                    Digest subscription recorded for {subscribedEmail}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSubscribedEmail(null)}
                    className="caption-1 text-ink-accent hover:text-ink-primary w-fit cursor-pointer"
                  >
                    Use a different email address
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleDigestSubmit} className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="digest-email" className="caption-1 text-ink-primary">
                      Institutional email
                    </label>
                    <input
                      id="digest-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError(null);
                      }}
                      aria-invalid={Boolean(emailError)}
                      aria-describedby={emailError ? 'digest-email-error' : undefined}
                      placeholder="researcher@psgias.ac.in"
                      className={`body-6 w-full rounded-lg border py-2 px-3 bg-surface-primary text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-border-accent ${
                        emailError ? 'border-ink-error' : 'border-border-primary'
                      }`}
                    />
                    {emailError && (
                      <p id="digest-email-error" className="caption-5 text-ink-error pt-1">
                        {emailError}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <span>Subscribe to quarterly digest</span>
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default News;
