
import React, { useState } from 'react';
import { ThemeColors } from '../types';
import { Mail, MapPin, Phone, Send, CheckCircle, MessageSquare } from 'lucide-react';

interface ContactProps {
  themeColors: ThemeColors;
}

export const Contact: React.FC<ContactProps> = ({ themeColors }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex items-center gap-4`}>
        <div className="p-3 bg-brand-600/20 rounded-xl">
          <Mail className="w-8 h-8 text-brand-500" />
        </div>
        <div>
          <h1 className={`text-2xl font-bold ${themeColors.text}`}>Contact Us</h1>
          <p className={themeColors.textSecondary}>Get in touch with the DevNexus team</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-xl font-bold ${themeColors.text} mb-4`}>We'd love to hear from you</h2>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                Whether you have a question about the documentation, found a bug in the playground, or just want to say hi, we're here to help.
              </p>
            </div>

            <div className="space-y-4">
              <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl flex items-start gap-4`}>
                <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-bold ${themeColors.text}`}>Support</h3>
                  <p className={`text-sm ${themeColors.textSecondary} mb-2`}>For technical issues and feedback</p>
                  <a href="mailto:support@devnexus.com" className="text-brand-400 hover:underline">support@devnexus.com</a>
                </div>
              </div>

              <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl flex items-start gap-4`}>
                <div className="bg-green-500/10 p-3 rounded-lg text-green-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-bold ${themeColors.text}`}>Office</h3>
                  <p className={`text-sm ${themeColors.textSecondary}`}>
                    123 Developer Way<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${themeColors.card} border ${themeColors.cardBorder} p-8 rounded-2xl shadow-lg`}>
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className={`text-2xl font-bold ${themeColors.text} mb-2`}>Message Sent!</h3>
                <p className={themeColors.textSecondary}>Thanks for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className={`block text-xs font-bold ${themeColors.textSecondary} uppercase tracking-wider mb-2`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className={`block text-xs font-bold ${themeColors.textSecondary} uppercase tracking-wider mb-2`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className={`block text-xs font-bold ${themeColors.textSecondary} uppercase tracking-wider mb-2`}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all`}
                    placeholder="Feature Request / Bug Report"
                  />
                </div>
                <div>
                  <label className={`block text-xs font-bold ${themeColors.textSecondary} uppercase tracking-wider mb-2`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all resize-none`}
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
