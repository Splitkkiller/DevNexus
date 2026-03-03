
import React from 'react';
import { ThemeColors } from '../types';
import { ScrollText, CheckCircle, AlertOctagon, Shield } from 'lucide-react';

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
                By accessing and using DevNexus ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <Shield className="w-5 h-5 text-blue-500" /> 2. Intellectual Property
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed mb-4`}>
                The Site and its original content, features and functionality are owned by DevNexus and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
              </p>
              <ul className={`list-disc pl-5 ${themeColors.textSecondary} space-y-2`}>
                <li>You may not duplicate, copy, or reuse any portion of the HTML/CSS/JS or visual design elements.</li>
                <li>Code snippets provided in the documentation are free to use under the MIT license.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4 flex items-center gap-2`}>
              <AlertOctagon className="w-5 h-5 text-red-500" /> 3. User Conduct
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed mb-4`}>
                You agree not to use the Service to:
              </p>
              <ul className={`list-disc pl-5 ${themeColors.textSecondary} space-y-2`}>
                <li>Upload or transmit content that is unlawful, harmful, threatening, abusive, or harassing.</li>
                <li>Impersonate any person or entity.</li>
                <li>Interfere with or disrupt the Service or servers/networks connected to the Service.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-xl font-bold ${themeColors.text} mb-4`}>
               4. Termination
            </h2>
            <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-xl`}>
              <p className={`${themeColors.textSecondary} leading-relaxed`}>
                We may terminate your access to the Site, without cause or notice, which may result in the forfeiture and destruction of all information associated with you. All provisions of this Agreement that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </section>

          <div className={`pt-8 border-t ${themeColors.cardBorder} text-center`}>
            <p className={`${themeColors.textSecondary} text-sm`}>
              Questions about the Terms of Service should be sent to <a href="#" className="text-brand-400 hover:underline">legal@devnexus.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
