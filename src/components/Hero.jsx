import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';
import { HiArrowDown, HiCalendar, HiShieldCheck } from 'react-icons/hi';
import { FaRocket, FaTools } from 'react-icons/fa';
const profileImg = import.meta.env.BASE_URL + 'profile/akash.png';

const statIcons = {
  calendar: HiCalendar,
  rocket: FaRocket,
  shield: HiShieldCheck,
  tools: FaTools,
};

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const duration = 1600;
          const step = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value">
      {count}<span className="suffix">{suffix}</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="hero" id="akashmurnal">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.div variants={item} className="hero-photo">
          <div className="hero-photo-ring">
            <img src={profileImg} alt="Akash Murnal" className="hero-photo-img" />
          </div>
        </motion.div>

        <motion.div variants={item} className="hero-badge">
          <span className="dot" />
          Open to opportunities
        </motion.div>

        <motion.h1 variants={item} className="hero-name">
          Akash <span className="gradient">Murnal</span>
        </motion.h1>

        <motion.p variants={item} className="hero-role">
          SDET II | Lead QA Engineer | Staff QA Engineer
        </motion.p>

        <motion.p variants={item} className="hero-desc">
          8+ years driving end-to-end quality strategy across Cyber Security, Aerospace,
          HR, Education and SaaS platforms - from test architecture to high-confidence releases at scale.
        </motion.p>

        <motion.div variants={item} className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects <HiArrowDown />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get In Touch
          </a>
        </motion.div>

        <motion.div variants={item} className="stats-row">
          {stats.map((s) => {
            const Icon = statIcons[s.icon];
            return (
              <div className="stat-item" key={s.label}>
                {Icon && <div className="stat-icon"><Icon /></div>}
                <Counter target={s.value} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
