import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data/portfolio';
import SectionWrapper from './SectionWrapper';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionWrapper
      id="experience"
      label="Experience"
      title="Career Journey"
      subtitle="A timeline of growth from QA engineer to quality engineering leader"
    >
      <div className="timeline" ref={ref}>
        {experiences.map((exp, i) => (
          <motion.div
            className="timeline-item"
            key={exp.period}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-top">
                <span className="timeline-role">{exp.role}</span>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <p className="timeline-company">{exp.company}</p>
              <ul className="timeline-points">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="timeline-tech">
                {exp.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
