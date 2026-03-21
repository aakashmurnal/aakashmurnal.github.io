import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolio';
import SectionWrapper from './SectionWrapper';

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [active, setActive] = useState(0);
  const totalSkills = skills.reduce((sum, c) => sum + c.items.length, 0);
  const maxItems = Math.max(...skills.map(c => c.items.length));
  const activeColor = skills[active].color;

  return (
    <SectionWrapper
      id="skills"
      label="Skills"
      title="Technical Arsenal"
      subtitle="Tools and technologies I've mastered over 8+ years of quality engineering"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Skills layout: sidebar + panel */}
        <div className="skills-layout">
          {/* Left sidebar tabs */}
          <div className="skills-sidebar">
            {skills.map((cat, i) => {
              const Icon = cat.icon;
              const pct = (cat.items.length / maxItems) * 100;
              return (
                <button
                  key={cat.title}
                  className={`skills-sidebar-tab${active === i ? ' active' : ''}`}
                  onClick={() => setActive(i)}
                  style={{ '--cat-color': cat.color }}
                >
                  <span className="skills-sidebar-icon"><Icon /></span>
                  <span className="skills-sidebar-info">
                    <span className="skills-sidebar-title">{cat.title}</span>
                    <span className="skills-sidebar-bar-track">
                      <span
                        className="skills-sidebar-bar-fill"
                        style={{ width: `${pct}%`, background: cat.color }}
                      />
                    </span>
                  </span>
                  <span className="skills-sidebar-badge">{cat.items.length}</span>
                </button>
              );
            })}
            <div className="skills-sidebar-total">
              <span className="skills-sidebar-total-num">{totalSkills}</span>
              <span>Total Skills</span>
            </div>
          </div>

          {/* Right content panel */}
          <div className="skills-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="skills-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ '--panel-accent': activeColor }}
              >
                <div className="skills-panel-header">
                  <div className="skills-panel-icon" style={{ background: activeColor }}>
                    {(() => { const Icon = skills[active].icon; return <Icon />; })()}
                  </div>
                  <div>
                    <h3 className="skills-panel-title">{skills[active].title}</h3>
                    <p className="skills-panel-count">{skills[active].items.length} tools & technologies</p>
                  </div>
                </div>

                <div className="skills-panel-items">
                  {skills[active].items.map((s, i) => (
                    <motion.div
                      className="skill-tile"
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      style={{ '--tile-accent': activeColor }}
                    >
                      <div className="skill-tile-icon">
                        {s.icon ? <s.icon /> : <span className="skill-tile-dot" style={{ background: activeColor }} />}
                      </div>
                      <span className="skill-tile-name">{s.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile tabs (shown only on small screens) */}
        <div className="skills-tabs-mobile">
          {skills.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                className={`skills-tab-mobile${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--cat-color': cat.color }}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
