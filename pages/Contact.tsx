import React, { useState } from 'react';
import {
  ArrowUpRight,
  CaretDown,
  Check,
  Copy,
  EnvelopeSimple,
  MapPin,
  Phone,
} from '@phosphor-icons/react';
import Reveal from '../components/Reveal';
import { institutions } from '../data/team';

interface FormValues {
  name: string;
  email: string;
  campus: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  interest?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const mapEmbeds: Record<string, string> = {
  'PSG IAS':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.329773667825!2d77.0018!3d11.024607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f09cdb78b%3A0x7332ad3b2c6c1118!2sPSG%20Institute%20of%20Advanced%20Studies!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin',
  'PSG iTech':
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.654!2d77.0928!3d11.0658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8a655555555%3A0x1!2sPSG%20Institute%20of%20Technology%20and%20Applied%20Research!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin',
};

const Contact: React.FC = () => {
  const [selectedCampus, setSelectedCampus] = useState<'PSG IAS' | 'PSG iTech'>('PSG IAS');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    campus: 'seb@psgias.ac.in',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const copyValue = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(label);
    window.setTimeout(() => setCopiedField(null), 2400);
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) {
      next.name = 'Enter your full name.';
    }
    if (!values.email.trim()) {
      next.email = 'Enter an email address so we can reply.';
    } else if (!emailRegex.test(values.email.trim())) {
      next.email = 'Email format is invalid. Check for typos such as missing domain.';
    }
    if (!values.interest) {
      next.interest = 'Choose an inquiry topic.';
    }
    if (values.message.trim().length < 15) {
      next.message = 'Include at least a short note (15 characters or more) describing your inquiry.';
    }
    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const buildSubject = () =>
    encodeURIComponent(`LASER Group Inquiry: ${values.interest || 'Research'}`);
  const buildBody = () =>
    encodeURIComponent(
      `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\nTopic: ${
        values.interest
      }\n\nMessage:\n${values.message.trim()}`
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    window.location.href = `mailto:${values.campus}?subject=${buildSubject()}&body=${buildBody()}`;
    setSubmitted(true);
  };

  const activeInst =
    institutions.find((i) => i.shortName === selectedCampus) || institutions[0];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 border-b border-border-primary">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <h1 className="heading-1 hero-heading-gradient max-w-[680px]">
            Contact the laboratory
            <br />
            in Coimbatore
          </h1>
          <p className="body-3 text-ink-secondary max-w-[680px]">
            Reach Dr. Sebin Devasia at PSG Institute of Advanced Studies (Peelamedu) or PSG
            Institute of Technology and Applied Research (Neelambur) for collaborations, facility
            access, or student applications.
          </p>
        </div>
      </section>

      {/* Main Split */}
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 5 Columns: Dual Campus Details & Interactive Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {institutions.map((inst) => (
              <div
                key={inst.shortName}
                className="rounded-2xl border border-border-primary bg-surface-secondary p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="caption-3 text-ink-accent">{inst.shortName}</span>
                    <h2 className="title-2 text-ink-primary">{inst.fullName}</h2>
                    <span className="caption-2 text-ink-tertiary">{inst.campus}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyValue(inst.address, `${inst.shortName} address`)}
                    className="p-2 rounded-lg bg-surface-primary border border-border-primary text-ink-secondary hover:text-ink-primary cursor-pointer"
                    title="Copy campus address"
                  >
                    {copiedField === `${inst.shortName} address` ? (
                      <Check size={16} weight="regular" className="text-ink-success" />
                    ) : (
                      <Copy size={16} weight="regular" />
                    )}
                  </button>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    weight="regular"
                    className="text-ink-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="body-6 text-ink-secondary">{inst.address}</span>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-border-primary">
                  <a
                    href={`mailto:${inst.email}`}
                    className="body-5 tabular-data text-ink-primary hover:text-ink-accent inline-flex items-center gap-2 transition-colors duration-300 ease-weighted"
                  >
                    <EnvelopeSimple size={16} weight="regular" className="text-ink-accent" />
                    <span>{inst.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyValue(inst.email, inst.email)}
                    className="caption-4 text-ink-tertiary hover:text-ink-primary cursor-pointer"
                  >
                    {copiedField === inst.email ? 'Copied' : 'Copy email'}
                  </button>
                </div>

                {inst.phone && (
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-border-primary">
                    <a
                      href="tel:+914224344000"
                      className="body-5 tabular-data text-ink-primary hover:text-ink-accent inline-flex items-center gap-2 transition-colors duration-300 ease-weighted"
                    >
                      <Phone size={16} weight="regular" className="text-ink-accent" />
                      <span>{inst.phone}</span>
                    </a>
                    <span className="caption-5 text-ink-tertiary">Mon to Fri · 08:30 to 16:30</span>
                  </div>
                )}
              </div>
            ))}

            {/* Campus Map Card (Nested radius: 24px - 16px = 8px) */}
            <div className="rounded-3xl border border-border-primary bg-surface-secondary p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {(['PSG IAS', 'PSG iTech'] as const).map((campus) => (
                    <button
                      key={campus}
                      type="button"
                      onClick={() => setSelectedCampus(campus)}
                      className={`rounded-lg py-1 px-3 transition-colors duration-300 ease-weighted cursor-pointer ${
                        selectedCampus === campus
                          ? 'button-xsm bg-action-primary text-ink-inverted'
                          : 'caption-4 bg-surface-primary border border-border-primary text-ink-secondary hover:text-ink-primary'
                      }`}
                    >
                      {campus}
                    </button>
                  ))}
                </div>
                <a
                  href={activeInst.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caption-4 text-ink-accent hover:text-ink-primary inline-flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ArrowUpRight size={12} weight="regular" />
                </a>
              </div>

              <div className="rounded-lg overflow-hidden border border-border-primary aspect-video bg-surface-tertiary">
                <iframe
                  title={`${activeInst.fullName} campus location`}
                  src={mapEmbeds[selectedCampus]}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Inquiry Form */}
          <Reveal className="lg:col-span-7 rounded-3xl border border-border-primary bg-surface-secondary p-6 sm:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="caption-1 text-ink-accent">Direct message</span>
              <h2 className="heading-4 text-ink-primary">Prepare an email inquiry</h2>
              <p className="body-6 text-ink-secondary">
                Complete the fields below to format a structured inquiry directly to Dr. Sebin
                Devasia via your mail client or webmail.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl border border-border-accent bg-surface-primary p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="heading-6 text-ink-primary">
                    Message draft prepared for {values.campus}
                  </h3>
                  <p className="body-6 text-ink-secondary">
                    Your mail application was prompted with your message addressed to{' '}
                    <span className="tabular-data text-ink-primary">{values.campus}</span>. If no
                    desktop mail client is configured, use Gmail web or copy the text below.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${
                      values.campus
                    }&su=${buildSubject()}&body=${buildBody()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Open in Gmail web</span>
                    <ArrowUpRight size={16} weight="regular" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      copyValue(
                        `To: ${values.campus}\nSubject: LASER Group Inquiry: ${values.interest}\n\nName: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
                        'Draft'
                      )
                    }
                    className="btn-secondary"
                  >
                    <Copy size={16} weight="regular" aria-hidden="true" />
                    <span>{copiedField === 'Draft' ? 'Draft copied' : 'Copy full draft'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setValues({
                        name: '',
                        email: '',
                        campus: 'seb@psgias.ac.in',
                        interest: '',
                        message: '',
                      });
                    }}
                    className="btn-tertiary"
                  >
                    <span>Write another note</span>
                  </button>
                </div>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="title-4 text-ink-primary">
                      Full name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                      placeholder="Ananya Krishnan"
                      className={`body-6 w-full rounded-lg border py-2 px-3 bg-surface-primary text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-border-accent ${
                        errors.name ? 'border-ink-error' : 'border-border-primary'
                      }`}
                    />
                    {errors.name && (
                      <p id="err-name" className="caption-5 text-ink-error">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="title-4 text-ink-primary">
                      Academic or work email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      placeholder="ananya@iitm.ac.in"
                      className={`body-6 w-full rounded-lg border py-2 px-3 bg-surface-primary text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-border-accent ${
                        errors.email ? 'border-ink-error' : 'border-border-primary'
                      }`}
                    />
                    {errors.email && (
                      <p id="err-email" className="caption-5 text-ink-error">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-campus" className="title-4 text-ink-primary">
                      Recipient desk
                    </label>
                    <div className="relative">
                      <select
                        id="contact-campus"
                        name="campus"
                        value={values.campus}
                        onChange={handleChange}
                        className="body-6 w-full appearance-none rounded-lg border border-border-primary py-2 pl-3 pr-10 bg-surface-primary text-ink-primary focus:outline-none focus:ring-2 focus:ring-border-accent cursor-pointer"
                      >
                        <option value="seb@psgias.ac.in">
                          PSG IAS · Peelamedu (seb@psgias.ac.in)
                        </option>
                        <option value="sebin@psgitech.ac.in">
                          PSG iTech · Neelambur (sebin@psgitech.ac.in)
                        </option>
                      </select>
                      <CaretDown
                        size={16}
                        weight="regular"
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-interest" className="title-4 text-ink-primary">
                      Inquiry topic
                    </label>
                    <div className="relative">
                      <select
                        id="contact-interest"
                        name="interest"
                        value={values.interest}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.interest)}
                        aria-describedby={errors.interest ? 'err-interest' : undefined}
                        className={`body-6 w-full appearance-none rounded-lg border py-2 pl-3 pr-10 bg-surface-primary text-ink-primary focus:outline-none focus:ring-2 focus:ring-border-accent cursor-pointer ${
                          errors.interest ? 'border-ink-error' : 'border-border-primary'
                        }`}
                      >
                        <option value="" disabled>
                          Select topic
                        </option>
                        <option value="Doctoral or Internship Application">
                          Doctoral or internship application
                        </option>
                        <option value="DFT & ML Research Collaboration">
                          DFT and ML research collaboration
                        </option>
                        <option value="Nano Lab Facility Access">Nano Lab facility access</option>
                        <option value="D3Mat Workshop Inquiry">D³Mat workshop inquiry</option>
                        <option value="General Academic Inquiry">General academic inquiry</option>
                      </select>
                      <CaretDown
                        size={16}
                        weight="regular"
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
                      />
                    </div>
                    {errors.interest && (
                      <p id="err-interest" className="caption-5 text-ink-error">
                        {errors.interest}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="title-4 text-ink-primary">
                    Project context or message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    placeholder="Share your material system of interest, timeline, or proposed collaboration."
                    className={`body-6 w-full resize-y rounded-lg border py-2 px-3 bg-surface-primary text-ink-primary placeholder:text-ink-tertiary focus:outline-none focus:ring-2 focus:ring-border-accent ${
                      errors.message ? 'border-ink-error' : 'border-border-primary'
                    }`}
                  />
                  {errors.message && (
                    <p id="err-message" className="caption-5 text-ink-error">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button type="submit" className="btn-primary">
                    <span>Compose email message</span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
