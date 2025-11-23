import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {

    return (
        <section id="contact" style={{
            padding: '3rem 1rem',
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                        fontWeight: 900,
                        color: '#0f172a',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                    }}>
                        Get In Touch
                    </h2>
                    <p style={{
                        color: '#64748b',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.125rem',
                        lineHeight: 1.7
                    }}>
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', width: '100%' }}
                    >
                        {[
                            { icon: <Mail size={24} />, title: 'Email', value: 'kiransakthivela@gmail.com', href: 'mailto:kiransakthivela@gmail.com', color: '#2563eb' },
                            { icon: <Phone size={24} />, title: 'Phone', value: '+91-94421 73548', href: 'tel:+919442173548', color: '#7c3aed' },
                            { icon: <Linkedin size={24} />, title: 'LinkedIn', value: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/kiran-sakthivel-a-9472b0283', color: '#3b82f6' },
                            { icon: <Github size={24} />, title: 'GitHub', value: 'View GitHub Profile', href: 'https://github.com/KiranSakthivelA', color: '#1f2937' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)' }}
                                className="glass-card"
                                style={{
                                    borderRadius: '20px',
                                    padding: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    flex: '1',
                                    minWidth: '200px',
                                }}
                            >
                                <div style={{
                                    background: `linear-gradient(135deg, ${item.color}15, ${item.color}25)`,
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    color: item.color,
                                    flexShrink: 0,
                                    boxShadow: `0 8px 20px -6px ${item.color}33`,
                                }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '0.25rem', fontSize: '1rem' }}>{item.title}</h3>
                                    <a href={item.href} style={{
                                        color: '#64748b',
                                        fontSize: '0.875rem',
                                        transition: 'color 0.3s',
                                        wordBreak: 'break-word',
                                    }}
                                        onMouseEnter={(e) => e.target.style.color = item.color}
                                        onMouseLeave={(e) => e.target.style.color = '#64748b'}>
                                        {item.value}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
