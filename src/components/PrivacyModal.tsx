import React from 'react';
import { X, Shield } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#100A1B] border border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-purple-950/50 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-500/20 rounded-lg text-[#A855F7]">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#B8B0C8] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4 text-sm text-[#B8B0C8] leading-relaxed">
          <p>
            <strong className="text-white">XL over 3.0</strong> is committed to respecting visitor privacy and maintaining total transparency across all our digital platforms and brand touchpoints.
          </p>

          <h4 className="text-white font-semibold pt-2">1. Faceless Digital Hub & Analytics</h4>
          <p>
            This website serves as a central showcase for independent creative brands. We do not require visitors to register an account or provide personal information to browse our universe. Standard server log files and aggregated website traffic analytics may be processed solely to maintain technical functionality, security, and optimal performance.
          </p>

          <h4 className="text-white font-semibold pt-2">2. Communication & Email Enquiries</h4>
          <p>
            When you initiate contact through our direct business email links, your message and email address are used strictly for corresponding regarding potential collaborations, creative projects, or media inquiries. Your contact information is never sold, shared, or transferred to third parties.
          </p>

          <h4 className="text-white font-semibold pt-2">3. External Links & Third-Party Media</h4>
          <p>
            Our website contains links to official social media channels, music streaming platforms, and media portals. Clicking external links will direct you to third-party services which operate under their respective independent privacy policies.
          </p>

          <h4 className="text-white font-semibold pt-2">4. Updates to This Statement</h4>
          <p>
            This privacy policy is regularly reviewed to reflect changes in our digital infrastructure and relevant legal standards.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-purple-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#A855F7] text-white text-xs font-semibold uppercase tracking-wider hover:bg-purple-600 transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
