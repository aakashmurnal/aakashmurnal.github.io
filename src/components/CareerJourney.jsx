import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolio';
import SectionWrapper from './SectionWrapper';

const colors = ['#22c55e', '#14b8a6', '#22d3ee', '#a78bfa', '#8b5cf6', '#6366f1'];

/* Reverse so the timeline reads left (oldest) → right (newest) */
const timeline = [...experiences].reverse();

/* Compact role names for the track – full names shown in detail card */
const shortRoleMap = {
  'Software Engineer': 'Software Engineer',
  'Test and Implementation Engineer': 'Implementation Engr',
  'QA Automation Engineer': 'QA Automation Engr',
  'Lead Software Engineer - QE': 'Lead SWE - QE',
  'Test & Evaluation Engineer II': 'Test & Eval Engr II',
  'Senior Test Automation Engineer': 'Sr. Test Automation Engr',
};

export default function CareerJourney() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeIdx, setActiveIdx] = useState(timeline.length - 1); // default to latest
  const exp = timeline[activeIdx];
  const activeColor = colors[activeIdx % colors.length];

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Career Journey"
      subtitle="From software engineering foundations to quality engineering leadership"
    >
      {/* ── Horizontal roadmap track ── */}
      <div className="journey-track-wrap" ref={ref}>
        <div className="journey-track">
          {/* Background line */}
          <div className="journey-line" />
          <motion.div
            className="journey-line-fill"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />

          {timeline.map((e, i) => {
            const color = colors[i % colors.length];
            const isLast = i === timeline.length - 1;
            const isActive = i === activeIdx;
            const year = isLast ? 'NOW' : e.period.split(' - ')[0].split(' ').pop();
            const shortRole = shortRoleMap[e.role] || e.role;

            return (
              <motion.button
                key={e.period}
                className={`journey-node${isActive ? ' active' : ''}${isLast ? ' current' : ''}`}
                onClick={() => setActiveIdx(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                style={{ '--node-color': color }}
              >
                <span className="journey-node-year">{year}</span>
                <div className="journey-node-dot">
                  <div className="journey-node-dot-inner" />
                  {isLast && <span className="journey-pulse" />}
                </div>
                <span className="journey-node-role">{shortRole}</span>
                <span className="journey-node-company">
                  {e.company.split('(')[0].split(' - ')[0].replace(/\s+(Pvt|Ltd|Inc|Systems)\b.*/i, '').trim()}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Expanded detail card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          className="journey-detail"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ '--card-accent': activeColor }}
        >
          {/* Step indicator */}
          <div className="journey-step-indicator">
            {timeline.map((_, i) => (
              <button
                key={i}
                className={`journey-step-dot${i === activeIdx ? ' active' : ''}`}
                onClick={() => setActiveIdx(i)}
                style={{ '--dot-color': colors[i % colors.length] }}
              />
            ))}
          </div>

          <div className="journey-detail-top">
            <div>
              <h3 className="journey-detail-role">{exp.role}</h3>
              <p className="journey-detail-company">
                {(() => {
                  const parts = exp.company.split(') - ');
                  if (parts.length > 1) {
                    return <>{parts[0]}) - <strong>{parts.slice(1).join(') - ')}</strong></>;
                  }
                  const dash = exp.company.lastIndexOf(' - ');
                  if (dash > 0) {
                    return <>{exp.company.slice(0, dash)} - <strong>{exp.company.slice(dash + 3)}</strong></>;
                  }
                  return exp.company;
                })()}
              </p>
            </div>
            <div className="journey-detail-period-wrap">
              <span className="journey-detail-period">{exp.period}</span>
              {exp.contractNote && (
                <span className="journey-detail-contract">{exp.contractNote}</span>
              )}
            </div>
          </div>

          {exp.description && (
            <p className="journey-detail-desc">{exp.description}</p>
          )}

          <ul className="journey-detail-points">
            {exp.points.map((p, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: j * 0.06 }}
              >
                {p}
              </motion.li>
            ))}
          </ul>

          <div className="journey-detail-tech">
            {exp.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* Prev / Next navigation */}
          <div className="journey-detail-nav">
            <button
              className="journey-nav-btn"
              disabled={activeIdx === 0}
              onClick={() => setActiveIdx((p) => p - 1)}
            >
              ← Prev
            </button>
            <span className="journey-nav-counter">
              {activeIdx + 1} / {timeline.length}
            </span>
            <button
              className="journey-nav-btn"
              disabled={activeIdx === timeline.length - 1}
              onClick={() => setActiveIdx((p) => p + 1)}
            >
              Next →
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
