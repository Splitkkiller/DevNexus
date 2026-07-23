import React from 'react';
import { ThemeColors } from '../types';
import { ScrollText, CheckCircle, AlertOctagon, Shield, Ban, Lock, Scale } from 'lucide-react';

interface TermsProps {
  themeColors: ThemeColors;
}

export const Terms: React.FC<TermsProps> = ({ themeColors }) => {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex items-center gap-4`}>
        <div className="p-3 bg-brand-600/20 rounded-xl">
          <ScrollText className="w-8 h-8 text-brand-500" />
        </div>
        <div>
          <h1 className={`text-2xl font-bold ${themeColors.text}`}>Terms of Service</h1>
          <p className={themeColors.textSecondary}>Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <CheckCircle className="w-5 h-5 text-green-500" /> 1. Acceptance of Terms
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                By accessing and using DevNexus ("the Service"), you unconditionally accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, you are strictly prohibited from using or accessing this platform. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <Shield className="w-5 h-5 text-blue-500" /> 2. Intellectual Property
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed mb-4`}>
                The Site and its original content, features, interactive quiz modules, and functionality are owned by DevNexus and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <ul className={`list-disc pl-5 ${themeColors.textSecondary} space-y-2`}>
                <li>You may not duplicate, copy, reverse-engineer, or reuse any portion of the HTML/CSS/JS, underlying backend architectures, or visual design elements.</li>
                <li>Code snippets explicitly provided in the documentation or educational examples are free to use under the MIT license, unless stated otherwise.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <AlertOctagon className="w-5 h-5 text-orange-500" /> 3. Prohibited User Conduct
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed mb-4`}>
                To maintain a safe and functional environment for all developers, you explicitly agree NOT to engage in any of the following restricted activities:
              </p>
              <ul className={`list-disc pl-5 ${themeColors.textSecondary} space-y-2`}>
                <li><strong className={themeColors.text}>Malicious Actions:</strong> Upload or transmit content that contains software viruses, Trojan horses, or any other computer code designed to interrupt, destroy, or limit the functionality of the Service.</li>
                <li><strong className={themeColors.text}>Exploitation:</strong> Attempt to probe, scan, or test the vulnerability of our system or network, or breach security or authentication measures without proper authorization.</li>
                <li><strong className={themeColors.text}>Impersonation:</strong> Impersonate any person, entity, or DevNexus staff member, or falsely state your affiliation with a person or entity.</li>
                <li><strong className={themeColors.text}>Disruption:</strong> Interfere with or disrupt the Service, servers, or networks connected to the Service, or disobey any requirements, procedures, policies, or regulations of connected networks.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <Ban className="w-5 h-5 text-red-500" /> 4. System Abuse & Data Extraction
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed mb-4`}>
                Any automated or manual circumvention of our platform's intended use is strictly forbidden. Violating these terms will result in an immediate and permanent IP ban.
              </p>
              <ul className={`list-disc pl-5 ${themeColors.textSecondary} space-y-2`}>
                <li><strong className={themeColors.text}>Scraping:</strong> The use of automated systems (e.g., spiders, robots, crawlers, or scrapers) to extract data, quiz questions, or user information from the Service is strictly prohibited.</li>
                <li><strong className={themeColors.text}>API Abuse:</strong> Bypassing rate limits, spamming requests, or attempting to access undocumented internal APIs will result in immediate termination.</li>
                <li><strong className={themeColors.text}>Cheating & Automation:</strong> Utilizing scripts, extensions, or third-party tools to automatically solve quizzes, farm XP, or manipulate leaderboard standings.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <Lock className="w-5 h-5 text-indigo-500" /> 5. Account Security
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify DevNexus immediately of any unauthorized use of your account or any other breach of security. Selling, trading, or sharing premium account access with unauthorized third parties constitutes a material breach of these terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <Scale className="w-5 h-5 text-brand-500" /> 6. Termination & Liability
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl space-y-4`}>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                We may terminate or suspend your access to the Site instantly, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service. Upon termination, your right to use the Service will cease immediately, resulting in the permanent forfeiture of all accumulated data, streaks, and account status.
              </p>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                In no event shall DevNexus, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the Service.
              </p>
            </div>
          </section>

          <div className={`pt-8 border-t ${themeColors.cardBorder} text-center`}>
            <p className={`${themeColors.textSecondary} text-sm`}>
              Questions about the Terms of Service should be sent to <a href="mailto:legal@devnexus.com" className="text-brand-400 hover:text-brand-300 transition-colors hover:underline">legal@devnexus.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
