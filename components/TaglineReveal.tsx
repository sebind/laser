import React, { useEffect, useRef, useState } from 'react';

interface TaglineRevealProps {
  lines: string[];
  caption?: string;
}

/**
 * Mandatory B11 Tagline Reveal Section:
 * - Minimum two lines of text, capped at 680px with meaningful phrase breaks
 * - Uses Heading 2 from B1 text styles
 * - Words start at ~30% opacity and transition individually in reading order
 *   on the B7 base curve as they cross a progressive viewport trigger line
 * - Throttled via requestAnimationFrame & gated by IntersectionObserver
 * - Respects prefers-reduced-motion (shows full color immediately)
 */
const TaglineReveal: React.FC<TaglineRevealProps> = ({ lines, caption }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeWordCount, setActiveWordCount] = useState<number>(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const structuredLines = lines.map((line) => line.trim().split(/\s+/));
  const totalWords = structuredLines.reduce((sum, arr) => sum + arr.length, 0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setReducedMotion(true);
      setActiveWordCount(totalWords);
      return;
    }

    const section = containerRef.current;
    if (!section) return;

    let inViewport = false;
    let rafId: number | null = null;

    const computeProgress = () => {
      rafId = null;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      /* Start activating when top enters lower 82% of viewport, complete by 34% */
      const startY = vh * 0.82;
      const endY = vh * 0.34;
      const rawProgress = (startY - rect.top) / (startY - endY);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      const nextCount = Math.round(clamped * totalWords);

      setActiveWordCount((prev) => Math.max(prev, nextCount));
    };

    const scheduleUpdate = () => {
      if (!inViewport || rafId !== null) return;
      rafId = window.requestAnimationFrame(computeProgress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          inViewport = entry.isIntersecting;
          if (inViewport) {
            scheduleUpdate();
          }
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '80px 0px 80px 0px' }
    );

    observer.observe(section);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [totalWords]);

  let wordCursor = 0;

  return (
    <section
      ref={containerRef}
      aria-label="Research philosophy"
      className="py-20 sm:py-24 px-4 sm:px-8 border-y border-border-primary bg-surface-subtle surface-grain"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[680px] flex flex-col gap-6">
          {caption && (
            <p className="caption-1 text-ink-accent">{caption}</p>
          )}
          <h2 className="heading-2 text-ink-primary">
            {structuredLines.map((words, lineIndex) => (
              <span key={lineIndex} className="block">
                {words.map((word, wIndex) => {
                  const index = wordCursor++;
                  const isActive = reducedMotion || index < activeWordCount;
                  return (
                    <React.Fragment key={`${lineIndex}-${wIndex}`}>
                      <span
                        className={`inline-block transition-opacity duration-300 ease-weighted ${
                          isActive ? 'opacity-100' : 'opacity-30'
                        }`}
                      >
                        {word}
                      </span>
                      {wIndex < words.length - 1 ? ' ' : ''}
                    </React.Fragment>
                  );
                })}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default TaglineReveal;
