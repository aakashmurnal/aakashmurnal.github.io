import { useEffect } from 'react';
import { HiX, HiDownload } from 'react-icons/hi';
import resumePdf from '../../projectImageVideo/resume/AKASH_MURNAL_8YOE.pdf';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h3>Resume</h3>
          <div className="resume-modal-actions">
            <a
              href={resumePdf}
              download="AKASH_MURNAL_8YOE.pdf"
              className="resume-btn-download"
            >
              <HiDownload /> Download
            </a>
            <button className="resume-btn-close" onClick={onClose} aria-label="Close">
              <HiX />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe src={resumePdf} title="Resume" />
        </div>
      </div>
    </div>
  );
}
