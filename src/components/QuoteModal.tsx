import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Residential Gardens',
    budget: '$10,000 - $25,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Stub — swap in a real API endpoint before going live
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: 'Residential Gardens',
      budget: '$10,000 - $25,000',
      message: '',
    });
    setSubmitted(false);
  };

  const handleDetailedClose = () => {
    onClose();
    // Clear the form once the close animation completes
    setTimeout(resetForm, 300);
  };

  // Keep focus inside the modal while open, restore it on close
  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus = document.activeElement as HTMLElement | null;

    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    dialog.addEventListener('keydown', handleTabKey);
    return () => {
      dialog.removeEventListener('keydown', handleTabKey);
      previousFocus?.focus();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading-quote"
        >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleDetailedClose}
              className="absolute inset-0 bg-dark-brown/70 backdrop-blur-md"
            />

            <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-warm-beige border border-light-beige p-8 shadow-2xl"
          >
            <button
              onClick={handleDetailedClose}
              id="close-quote-modal-btn"
              className="absolute top-4 right-4 rounded-full p-2 text-warm-brown hover:text-dark-brown hover:bg-light-beige/30 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3
                    id="modal-heading-quote"
                    className="font-serif text-2xl font-bold text-dark-brown"
                  >
                    Request a Design Consultation
                  </h3>
                  <p className="mt-1 text-sm text-warm-brown">
                    Share your vision with us, and let us design a sanctuary that elevates your
                    architecture.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="quote-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-brown"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Eleanor Roosevelt"
                    className="w-full rounded-lg border border-light-beige bg-brand-white px-4 py-3 text-sm text-dark-brown outline-none transition-all duration-200 focus:border-golden-brown focus:ring-1 focus:ring-golden-brown"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="quote-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-brown"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. eleanor@example.com"
                    className="w-full rounded-lg border border-light-beige bg-brand-white px-4 py-3 text-sm text-dark-brown outline-none transition-all duration-200 focus:border-golden-brown focus:ring-1 focus:ring-golden-brown"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label
                    htmlFor="quote-service"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-brown"
                  >
                    Service Focus
                  </label>
                  <select
                    id="quote-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg border border-light-beige bg-brand-white px-4 py-3 text-sm text-dark-brown outline-none transition-all duration-200 focus:border-golden-brown focus:ring-1 focus:ring-golden-brown"
                  >
                    <option value="Residential Gardens">Residential Gardens</option>
                    <option value="Architectural Landscaping">Architectural Landscaping</option>
                    <option value="Public Parks & Plazas">Public Parks & Plazas</option>
                    <option value="Conceptual Masterplanning">Conceptual Masterplanning</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label
                    htmlFor="quote-budget"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-brown"
                  >
                    Estimated Project Budget
                  </label>
                  <select
                    id="quote-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-lg border border-light-beige bg-brand-white px-4 py-3 text-sm text-dark-brown outline-none transition-all duration-200 focus:border-golden-brown focus:ring-1 focus:ring-golden-brown"
                  >
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $75,000">$25,000 - $75,000</option>
                    <option value="$75,000 - $150,000">$75,000 - $150,000</option>
                    <option value="$150,000+">$150,000+ (Premium Estate)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="quote-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-dark-brown"
                  >
                    Tell Us About Your Site & Vision
                  </label>
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe size, terrain, features you like (stone walkways, water, custom decks)..."
                    className="w-full rounded-lg border border-light-beige bg-brand-white px-4 py-3 text-sm text-dark-brown outline-none transition-all duration-200 focus:border-golden-brown focus:ring-1 focus:ring-golden-brown resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-quote-btn"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-golden-brown px-6 py-3.5 text-sm font-semibold text-brand-white transition-colors duration-200 hover:bg-darker-brown disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Creating Proposal Blueprint...
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Consultation Request
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 space-y-4"
              >
                <div className="rounded-full bg-golden-brown/10 p-4 text-golden-brown">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-dark-brown">
                  Proposal Inquiry Forwarded
                </h3>
                <p className="max-w-sm text-sm text-warm-brown">
                  Thank you,{' '}
                  <strong className="font-semibold text-dark-brown">{formData.name}</strong>. Our
                  senior landscape architect will review your site description for a{' '}
                  <strong className="font-semibold">{formData.service}</strong> consultation package
                  setup. Expect a premium blueprint proposal at{' '}
                  <span className="font-semibold">{formData.email}</span> within 2 business days.
                </p>
                <button
                  onClick={handleDetailedClose}
                  id="success-dismiss-btn"
                  className="mt-6 rounded-lg bg-golden-brown px-8 py-2.5 text-sm font-semibold text-brand-white transition-colors hover:bg-darker-brown cursor-pointer"
                >
                  Return to Studio
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
