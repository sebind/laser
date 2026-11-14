import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

const NotFound: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[680px] rounded-3xl border border-border-primary bg-surface-secondary p-8 sm:p-12 flex flex-col gap-6">
          <span className="caption-3 tabular-data text-ink-accent">Error 404</span>
          <h1 className="heading-2 text-ink-primary">
            This page does not exist in the laboratory archive
          </h1>
          <p className="body-3 text-ink-secondary">
            The address may have moved or contains a typographical error. Return to the LASER Group
            home page or browse our peer reviewed publications directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link to="/" className="btn-primary">
              <ArrowLeft size={18} weight="regular" aria-hidden="true" />
              <span>Return to home</span>
            </Link>
            <Link to="/publications" className="btn-secondary">
              <span>Browse publications</span>
              <ArrowRight size={16} weight="regular" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
