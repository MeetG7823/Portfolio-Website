import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';

export default function ResumePage({ onBackToPortfolio }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="resume-page-wrapper"
    >
      <div className="resume-container">
        {/* Simple floating actions */}
        <div className="resume-simple-actions no-print">
          <button onClick={onBackToPortfolio} className="simple-btn" title="Back to Portfolio">
            <ArrowLeft size={16} /> <span>Back</span>
          </button>

          <a 
            href="/Meet_Gondalia_Resume.pdf" 
            download="Meet_Gondalia_Resume.pdf" 
            className="simple-btn primary"
            title="Download PDF"
          >
            <Download size={16} /> <span>Download</span>
          </a>
        </div>

        <div className="pdf-embed-wrapper glass-panel">
          <iframe 
            src="/Meet_Gondalia_Resume.pdf" 
            title="Meet Gondalia Resume PDF"
            className="pdf-iframe"
          />
        </div>
      </div>
    </motion.div>
  );
}
