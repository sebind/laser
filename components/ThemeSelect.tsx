import React, { useEffect, useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export type ThemeMode = 'system' | 'dark' | 'light';

const applyTheme = (mode: ThemeMode) => {
  const prefersLight =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: light)').matches;
  const resolved = mode === 'system' ? (prefersLight ? 'light' : 'dark') : mode;
  document.documentElement.setAttribute('data-theme', resolved);
};

const ThemeSelect: React.FC = () => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('laser-theme-mode') as ThemeMode | null;
      if (saved === 'dark' || saved === 'light' || saved === 'system') return saved;
    } catch {
      /* ignore storage access errors */
    }
    return 'system';
  });

  useEffect(() => {
    applyTheme(mode);
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onSystemChange = () => {
      if (mode === 'system') applyTheme('system');
    };
    mq.addEventListener('change', onSystemChange);
    return () => mq.removeEventListener('change', onSystemChange);
  }, [mode]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = e.target.value as ThemeMode;
    setMode(next);
    try {
      localStorage.setItem('laser-theme-mode', next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent('laser-theme-change', { detail: next }));
  };

  useEffect(() => {
    const syncListener = (e: Event) => {
      const detail = (e as CustomEvent<ThemeMode>).detail;
      if (detail) setMode(detail);
    };
    window.addEventListener('laser-theme-change', syncListener);
    return () => window.removeEventListener('laser-theme-change', syncListener);
  }, []);

  return (
    <div className="relative inline-flex items-center">
      <label htmlFor="laser-theme-select" className="sr-only">
        Appearance mode
      </label>
      <select
        id="laser-theme-select"
        value={mode}
        onChange={handleChange}
        className="caption-1 appearance-none rounded-lg bg-surface-secondary border border-border-primary py-2 pl-3 pr-8 text-ink-secondary hover:text-ink-primary hover:border-border-strong transition-colors duration-300 ease-weighted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-accent cursor-pointer"
      >
        <option value="system">Theme: System</option>
        <option value="dark">Theme: Dark</option>
        <option value="light">Theme: Light</option>
      </select>
      <CaretDown
        size={14}
        weight="regular"
        aria-hidden="true"
        className="pointer-events-none absolute right-3 text-ink-tertiary"
      />
    </div>
  );
};

export default ThemeSelect;
