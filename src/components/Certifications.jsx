import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../data/portfolio';
import { HiAcademicCap, HiShieldCheck, HiExternalLink } from 'react-icons/hi';
import { FaAws, FaPython } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';

const certIcons = {
  'AWS Certified Solutions Architect - Associate': FaAws,
  'Foundations of Operationalizing MITRE ATT&CK': HiShieldCheck,
  'Python (Basic) Certificate': FaPython,
};

const certColors = {
  'AWS Certified Solutions Architect - Associate': '#ff9900',
  'Foundations of Operationalizing MITRE ATT&CK': '#6366f1',
  'Python (Basic) Certificate': '#3776ab',
};

const education = [
  { degree: 'Bachelor of Engineering', field: 'Electronics & Communications Engineering', school: 'Ballari Institute of Technology and Management', year: '2012 - 2016', icon: '🎓' },
  { degree: 'Pre-University (10+2)', field: 'Science', school: 'Smiore Composite PU College', year: '2010 - 2012', icon: '📚' },
  { degree: 'Grade 1 to 10', field: '', school: 'Rashtrotthana Vidya Kendra', year: '2001 - 2010', icon: '🏫' },
];

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="certifications" label="Credentials" title="Certifications & Education">
      <div ref={ref}>
        {/* ── Certification cards ── */}
        <div className="certs-grid">
          {certifications.map((c, i) => {
            const Card = c.link ? motion.a : motion.div;
            const linkProps = c.link ? { href: c.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            const Icon = certIcons[c.title];
            const color = certColors[c.title] || 'var(--primary)';
            return (
              <Card
                className="cert-card"
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ '--cert-color': color }}
                {...linkProps}
              >
                <div className="cert-card-top">
                  <div className="cert-icon">{Icon && <Icon />}</div>
                  {c.link && <HiExternalLink className="cert-link-icon" />}
                </div>
                <h4>{c.title}</h4>
                <p className="cert-issuer">{c.subtitle}</p>
                <span className="cert-badge">Verified</span>
              </Card>
            );
          })}
        </div>

        {/* ── Education ── */}
        <div className="edu-section">
          <h3 className="edu-heading">
            <HiAcademicCap /> Education
          </h3>
          <div className="edu-grid">
            {education.map((e, i) => (
              <motion.div
                className="edu-card"
                key={e.school}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              >
                <div className="edu-card-header">
                  <span className="edu-emoji">{e.icon}</span>
                  <span className="edu-year">{e.year}</span>
                </div>
                <h4>{e.degree}</h4>
                {e.field && <p className="edu-field">{e.field}</p>}
                <p className="edu-school">{e.school}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
