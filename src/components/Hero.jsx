import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import Navbar from './Navbar';

import resume from '../assets/(24-11-25)_Original_Kiran _Sakthivel_A_Resume.pdf';

const Hero = () => {
    return (
        <>
            <Navbar />
            <section id="home" style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                padding: '8rem 1rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decorative gradient orbs */}
                <div style={{
                    position: 'absolute',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    top: '-200px',
                    right: '-100px',
                    filter: 'blur(60px)',
                }} />
                <div style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147, 197, 253, 0.2) 0%, transparent 70%)',
                    bottom: '-150px',
                    left: '-100px',
                    filter: 'blur(60px)',
                }} />

                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(255, 255, 255, 0.9)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: '50px',
                                marginBottom: '2rem',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                            }}
                        >
                            <Sparkles size={16} style={{ color: 'var(--primary)' }} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)' }}>
                                Welcome to my portfolio
                            </span>
                        </motion.div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                            fontWeight: 900,
                            background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            marginBottom: '1rem',
                            lineHeight: 1.1,
                            letterSpacing: '-0.02em',
                        }}>
                            Kiran Sakthivel A
                        </h1>

                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.5rem',
                            fontWeight: 500,
                        }}>
                            B.E. Electronics and Communication Engineering
                        </p>

                        <p style={{
                            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                            color: 'var(--primary)',
                            fontWeight: 700,
                            marginBottom: '2.5rem',
                        }}>
                            Aspiring Full Stack Developer
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                            <motion.a
                                href="#contact"
                                style={{
                                    padding: '1rem 2.5rem',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                                    color: 'white',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1rem',
                                    border: 'none',
                                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 12px 28px rgba(59, 130, 246, 0.4)',
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact Me <ArrowRight size={18} />
                            </motion.a>
                            <motion.a
                                href={resume}
                                download="Kiran_Sakthivel_A_Resume.pdf"
                                style={{
                                    padding: '1rem 2.5rem',
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'var(--primary)',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '1rem',
                                    border: '2px solid rgba(59, 130, 246, 0.3)',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    background: 'white',
                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Download Resume <Download size={18} />
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Hero;
