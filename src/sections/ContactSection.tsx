import React, { useState } from 'react';
import { Mail, Copy, ExternalLink, Send, Check, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Badge } from '../components/Badge';
import { Toast } from '../components/Toast';
import { LinkedInIcon, GitHubIcon } from '../components/Icons';
import { sendContactEmail } from '../utils/emailService';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Form Field State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // UI Status State: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationError) setValidationError(null);
    if (status === 'error' || status === 'success') setStatus('idle');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setValidationError('Please enter your name.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setValidationError('Please enter a valid email address.');
      return false;
    }
    if (!formData.message.trim()) {
      setValidationError('Please enter a message.');
      return false;
    }
    setValidationError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while sending
    if (status === 'loading') return;

    if (!validateForm()) return;

    setStatus('loading');

    try {
      // Direct EmailJS Background API Request (NO mail application, NO popup, NO mailto)
      const result = await sendContactEmail(formData);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setValidationError(result.error || 'Something went wrong while sending your message. Please try again or use Email Directly.');
      }
    } catch {
      setStatus('error');
      setValidationError('Something went wrong while sending your message. Please try again or use Email Directly.');
    }
  };

  // Button Label & Icon logic strictly matching required states
  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <>
            <span>Sending...</span>
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
          </>
        );
      case 'success':
        return (
          <>
            <span>Message Sent ✓</span>
            <Check className="w-4 h-4 text-emerald-400" />
          </>
        );
      case 'error':
        return (
          <>
            <span>Try Again</span>
            <AlertCircle className="w-4 h-4 text-red-300" />
          </>
        );
      default:
        return (
          <>
            <span>Send Message →</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        );
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F4F4F0] dark:bg-[#0A0A0A] text-[#111111] dark:text-white relative overflow-hidden transition-colors duration-200 border-t border-[#E5E5DF] dark:border-neutral-800">
      {/* Ambient Radial Background Highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Recruiter Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Badge variant="dark" className="border-neutral-800 text-blue-400 mx-auto">
            08 // START A CONVERSATION
          </Badge>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-[#111111] dark:text-white leading-[1.08]">
            LET'S TALK
          </h2>

          <p className="text-lg sm:text-2xl text-[#666660] dark:text-neutral-400 font-normal">
            Have a project, opportunity, or idea worth discussing? Let's connect.
          </p>
        </div>

        {/* Recruiter Quick Contact Bar (1-Click Direct Access) */}
        <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-neutral-950 border border-[#E5E5DF] dark:border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono shadow-xs">
          <div className="flex items-center gap-2 text-[#111111] dark:text-neutral-300">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold text-[#111111] dark:text-white">Looking to connect?</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Me</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#F4F4F0] dark:bg-neutral-800 hover:bg-[#E5E5DF] dark:hover:bg-neutral-700 text-[#111111] dark:text-white rounded-full transition-colors flex items-center gap-1.5 border border-[#E5E5DF] dark:border-neutral-700"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-[#F4F4F0] dark:bg-neutral-800 hover:bg-[#E5E5DF] dark:hover:bg-neutral-700 text-[#111111] dark:text-white rounded-full transition-colors flex items-center gap-1.5 border border-[#E5E5DF] dark:border-neutral-700"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-[#111111] dark:text-white" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Form Left + Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* LEFT: Recruiter Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#141414] border border-[#E5E5DF] dark:border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl transition-colors duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E5DF] dark:border-neutral-800">
              <div className="flex items-center gap-2 text-[#111111] dark:text-white font-display font-bold text-lg">
                <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>SEND A MESSAGE</span>
              </div>
              <span className="text-[11px] font-mono text-[#666660] dark:text-neutral-400">
                Direct Background API Delivery
              </span>
            </div>

            {/* Validation or API Error Banner */}
            {(validationError || status === 'error') && (
              <div className="p-3 bg-red-50 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-mono rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                <span>{validationError || 'Something went wrong while sending your message. Please try again or use Email Directly.'}</span>
              </div>
            )}

            {/* Polished Success Banner */}
            {status === 'success' && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-mono rounded-xl flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Your message has been sent successfully. Thanks for reaching out!</span>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[10px] underline font-bold hover:text-emerald-950 dark:hover:text-white cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[#111111] dark:text-neutral-300 font-medium block">
                    NAME <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 bg-[#F4F4F0] dark:bg-[#1E1E1E] text-[#111111] dark:text-white placeholder-[#888880] dark:placeholder-neutral-500 rounded-xl border border-[#E5E5DF] dark:border-neutral-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[#111111] dark:text-neutral-300 font-medium block">
                    EMAIL <span className="text-blue-600 dark:text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 bg-[#F4F4F0] dark:bg-[#1E1E1E] text-[#111111] dark:text-white placeholder-[#888880] dark:placeholder-neutral-500 rounded-xl border border-[#E5E5DF] dark:border-neutral-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[#111111] dark:text-neutral-300 font-medium block">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. UI/UX Designer Opportunity"
                  className="w-full px-4 py-3 bg-[#F4F4F0] dark:bg-[#1E1E1E] text-[#111111] dark:text-white placeholder-[#888880] dark:placeholder-neutral-500 rounded-xl border border-[#E5E5DF] dark:border-neutral-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[#111111] dark:text-neutral-300 font-medium block">
                  MESSAGE <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the project, role, or idea..."
                  className="w-full px-4 py-3 bg-[#F4F4F0] dark:bg-[#1E1E1E] text-[#111111] dark:text-white placeholder-[#888880] dark:placeholder-neutral-500 rounded-xl border border-[#E5E5DF] dark:border-neutral-700 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="group w-full sm:w-auto px-8 py-3.5 bg-[#111111] dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-sans font-medium text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {getButtonContent()}
                </button>

                {/* Separate Mailto Fallback Action */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#666660] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white underline font-mono flex items-center gap-1 transition-colors"
                >
                  <span>Email Directly →</span>
                </a>
              </div>
            </form>
          </div>

          {/* RIGHT: Direct Details & Social Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 bg-white dark:bg-[#141414] border border-[#E5E5DF] dark:border-neutral-800 rounded-3xl space-y-3 shadow-xl transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 uppercase">DIRECT EMAIL</span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1 bg-[#F4F4F0] dark:bg-neutral-800 hover:bg-[#E5E5DF] dark:hover:bg-neutral-700 text-[#111111] dark:text-white text-[11px] font-mono rounded-full transition-colors flex items-center gap-1 cursor-pointer border border-[#E5E5DF] dark:border-neutral-700"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="font-mono text-sm font-bold text-[#111111] dark:text-white tracking-tight">
                {PERSONAL_INFO.email}
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Compose Mailto →</span>
              </a>
            </div>

            {/* Social Grid: LinkedIn & GitHub */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-[#141414] hover:bg-[#F4F4F0] dark:hover:bg-neutral-800 border border-[#E5E5DF] dark:border-neutral-800 rounded-2xl transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-display font-medium text-sm text-[#111111] dark:text-white">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666660] dark:text-neutral-400 group-hover:text-[#111111] dark:group-hover:text-white transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-[#141414] hover:bg-[#F4F4F0] dark:hover:bg-neutral-800 border border-[#E5E5DF] dark:border-neutral-800 rounded-2xl transition-all flex items-center justify-between group shadow-xs"
              >
                <div className="flex items-center gap-2.5">
                  <GitHubIcon className="w-5 h-5 text-[#111111] dark:text-white" />
                  <span className="font-display font-medium text-sm text-[#111111] dark:text-white">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#666660] dark:text-neutral-400 group-hover:text-[#111111] dark:group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Toast message="Email address copied to clipboard!" isVisible={copied} />
    </section>
  );
};
