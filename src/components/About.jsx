import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCog, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import profileImg from '../../projectImageVideo/profile/akash.png';

const cards = [
  { icon: <HiCog />, title: 'Test Architecture', desc: 'Scalable UI & API automation with Robot Framework, Selenium, Playwright' },
  { icon: <HiLightningBolt />, title: 'CI/CD Quality Gates', desc: 'Release readiness & pipeline stability with Jenkins, GitLab CI, Docker' },
  { icon: <HiShieldCheck />, title: 'Cloud-Native QA', desc: 'End-to-end testing across AWS Cloud & On-Prem environments' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <SectionWrapper id="about" label="About" title="Who I Am">
      <motion.div
        ref={ref}
        className="about-grid"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="about-avatar">
          <div className="avatar-ring">
            <img src={profileImg} alt="Akash Murnal" className="avatar-img" />
          </div>
        </div>

        <div className="about-text">
          <p>
            I&rsquo;m an SDET II / Lead / Staff QA Engineer with <strong>8+ years</strong> of
            experience driving end-to-end quality strategy across Cyber Security, Aerospace, HR,
            Education and SaaS platforms. I specialize in test automation architecture (UI &amp; API), CI/CD
            quality gates, and cloud-native QA across AWS and on-prem environments.
          </p>
          <p>
            From leading QA initiatives and stabilizing flaky pipelines to reducing defect leakage,
            I partner with engineering and product teams to deliver high-confidence releases at scale.
            Strong advocate of shift-left &amp; shift-right testing, and AI-assisted automation.
          </p>

          <div className="about-cards">
            {cards.map((c) => (
              <div className="about-card" key={c.title}>
                <div className="about-card-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
