import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionWrapper from './SectionWrapper';

const SERVICE_ID = 'service_portfolio';
const TEMPLATE_ID = 'template_contact';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactItems = [
  { icon: <HiMail />, title: 'Email', text: 'murnalakash@gmail.com', href: 'mailto:murnalakash@gmail.com' },
  { icon: <HiPhone />, title: 'Phone', text: '+91-9686049299', href: 'tel:+919686049299' },
  { icon: <HiLocationMarker />, title: 'Location', text: 'Bengaluru, Karnataka, India' },
  { icon: <FaLinkedin />, title: 'LinkedIn', text: 'linkedin.com/in/akash-murnal', href: 'https://www.linkedin.com/in/akash-murnal/' },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <SectionWrapper
      id="contact"
      label="Contact"
      title="Let's Connect"
      subtitle="Open to discussing quality engineering, automation challenges, or collaborations"
    >
      <motion.div
        className="contact-grid"
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-info">
          {contactItems.map((c) => {
            const inner = (
              <>
                <div className="contact-icon">{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </>
            );
            return c.href ? (
              <a
                className="contact-item"
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {inner}
              </a>
            ) : (
              <div className="contact-item" key={c.title}>
                {inner}
              </div>
            );
          })}
        </div>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Your Name" required />
            <input type="email" name="from_email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button
            type="submit"
            className="btn-submit"
            disabled={status === 'sending'}
            style={
              status === 'sent' ? { background: '#22c55e' } :
              status === 'error' ? { background: '#ef4444' } : {}
            }
          >
            {status === 'sending' ? 'Sending...' :
             status === 'sent' ? '✓ Message Sent!' :
             status === 'error' ? '✗ Failed, try again' :
             'Send Message'}
          </button>
        </form>
      </motion.div>
    </SectionWrapper>
  );
}
