import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolio';
import SectionWrapper from './SectionWrapper';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <SectionWrapper
      id="projects"
      label="Projects"
      title="Featured Work"
      subtitle="Frameworks, tools & systems I've built to drive quality at scale"
    >
      <div className="projects-grid" ref={ref}>
        {projects.map((p, i) => (
          <motion.div
            className="project-card"
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="project-gradient" style={{ background: p.gradient }} />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-impact">
                <strong>Impact: </strong>{p.impact}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
