import React, { useEffect, useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { ShinyButton } from './shiny-button';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyKShmQAyH8k_H57mfrhdYDA1LNB6tX-6thj6Cds7WZBKk5hzuFzwGPMNKwmkipIjG9/exec';

interface ContactFormProps {
  defaultService?: string | null;
  onSubmitted?: () => void;
  idPrefix?: string;
}

const INPUT_CLASS =
  'w-full px-4 py-3 rounded-xl text-sm bg-white/80 dark:bg-[#111330]/80 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all';

const LABEL_CLASS =
  'block text-xs font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-1.5';

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = null,
  onSubmitted,
  idPrefix = 'contact',
}) => {
  const [selectedService, setSelectedService] = useState<string>(defaultService ?? '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setSelectedService(defaultService ?? '');
  }, [defaultService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('services', selectedService || 'General Inquiry');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setSubmitStatus('success');
      form.reset();
      setSelectedService(defaultService ?? '');

      if (onSubmitted) {
        setTimeout(() => {
          onSubmitted();
          setSubmitStatus('idle');
        }, 1800);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`${idPrefix}-service`} className={LABEL_CLASS}>
          What do you need help with?
        </label>
        <div className="relative">
          <select
            id={`${idPrefix}-service`}
            name="services"
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={`${INPUT_CLASS} appearance-none pr-10 cursor-pointer`}
          >
            <option value="" disabled className="bg-white dark:bg-[#111330] text-gray-500">
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option
                key={service.id}
                value={service.title}
                className="bg-white dark:bg-[#111330] text-gray-900 dark:text-white"
              >
                {service.title}
              </option>
            ))}
            <option
              value="General Inquiry / Not sure yet"
              className="bg-white dark:bg-[#111330] text-gray-900 dark:text-white"
            >
              General Inquiry / Not sure yet
            </option>
          </select>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-name`} className={LABEL_CLASS}>
            Full Name
          </label>
          <input
            type="text"
            id={`${idPrefix}-name`}
            name="name"
            required
            placeholder="Your full name"
            className={INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-email`} className={LABEL_CLASS}>
            Work Email
          </label>
          <input
            type="email"
            id={`${idPrefix}-email`}
            name="email"
            required
            placeholder="you@company.com"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${idPrefix}-company`} className={LABEL_CLASS}>
            Company or Brand <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="text"
            id={`${idPrefix}-company`}
            name="company"
            placeholder="Your company name"
            className={INPUT_CLASS}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className={LABEL_CLASS}>
            Phone / WhatsApp <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            id={`${idPrefix}-phone`}
            name="phone"
            placeholder="+91 98765 43210"
            className={INPUT_CLASS}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${idPrefix}-message`} className={LABEL_CLASS}>
          Project Details
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={4}
          placeholder="Tell us what you are looking to build, improve, or launch."
          className={`${INPUT_CLASS} resize-none`}
        />
      </div>

      <div className="pt-1">
        <ShinyButton
          type="submit"
          disabled={isSubmitting || submitStatus === 'success'}
          className="w-full py-3.5 text-[15px] flex justify-center items-center"
        >
          {isSubmitting
            ? 'Sending...'
            : submitStatus === 'success'
              ? 'Inquiry Sent'
              : 'Send Message'}
        </ShinyButton>
      </div>

      {submitStatus === 'success' && (
        <div className="flex items-center justify-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          <span>Thanks for reaching out. We will get back to you within one business day.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong while sending. Please email us directly at hello@ajtrix.com.
        </p>
      )}
    </form>
  );
};
