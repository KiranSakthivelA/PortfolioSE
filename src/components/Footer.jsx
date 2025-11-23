import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
            padding: '4rem 1rem 2rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <motion.div
                className="gradient-orb gradient-orb-purple"
                style={{ width: '400px', height: '400px', bottom: '-20%', right: '-10%' }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem',
                }}>
                    {/* About */}
                    <div>
                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            color: '#0f172a',
                            marginBottom: '1rem',
                        }}>
                            Kiran Sakthivel A
                        </h3>
                        <p style={{
                            color: '#64748b',
                            lineHeight: 1.7,
                            marginBottom: '1.5rem',
                        }}>
                            B.E. Electronics and Communication Engineering student passionate about full-stack development and innovative solutions.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[
                                { icon: <Mail size={20} />, href: 'mailto:kiransakthivela@gmail.com' },
                                { icon: <Phone size={20} />, href: 'tel:+919442173548' },
                                { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/kiran-sakthivel-a' },
                                { icon: <Github size={20} />, href: 'https://github.com/KiranSakthivelA' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'rgba(37, 99, 235, 0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#2563eb',
                                        transition: 'all 0.3s',
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                                        color: '#ffffff',
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: '#0f172a',
                            marginBottom: '1rem',
                        }}>
                            Quick Links
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    style={{
                                        color: '#64748b',
                                        fontSize: '0.9375rem',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                                    onMouseLeave={(e) => e.target.style.color = '#64748b'}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{
                            fontSize: '1.125rem',
                            fontWeight: 700,
                            color: '#0f172a',
                            marginBottom: '1rem',
                        }}>
                            Contact
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <p style={{ color: '#64748b', fontSize: '0.9375rem' }}>
                                <strong style={{ color: '#475569' }}>Email:</strong><br />
                                kiransakthivela@gmail.com
                            </p>
                            <p style={{ color: '#64748b', fontSize: '0.9375rem' }}>
                                <strong style={{ color: '#475569' }}>Phone:</strong><br />
                                +91-94421 73548
                            </p>
                            <p style={{ color: '#64748b', fontSize: '0.9375rem' }}>
                                <strong style={{ color: '#475569' }}>DOB:</strong><br />
                                29/02/2004
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #e2e8f0',
                    paddingTop: '2rem',
                    textAlign: 'center',
                }}>
                    <p style={{
                        color: '#64748b',
                        fontSize: '0.9375rem',
                    }}>
                        © {new Date().getFullYear()} Kiran Sakthivel A. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
