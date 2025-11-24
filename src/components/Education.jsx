import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Engineering',
            field: 'Electronics and Communication Engineering',
            institution: 'Sri Ramakrishna Institute of Technology',
            period: '2021 - 2025',
            cgpa: 'CGPA 8.3',
            icon: <GraduationCap size={32} />,
            gradient: 'linear-gradient(135deg, #1e40af, #2563eb)',
        },
        {
            degree: 'HSC',
            institution: 'Sindhi Vidyalaya Matric Higher Secondary School',
            period: '2020 - 2021',
            score: 'Secured 85.2%',
            icon: <Award size={32} />,
            gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
        },
        {
            degree: 'SSLC',
            institution: 'Sindhi Vidyalaya Matric Higher Secondary School',
            period: '2018 - 2019',
            score: 'Secured 86.2%',
            icon: <Award size={32} />,
            gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
        },
    ];

    return (
        <section id="education" style={{
            padding: '3rem 1rem',
            background: 'var(--bg-main)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                        color: 'var(--text-main)',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                    }}>
                        Education
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.125rem',
                        lineHeight: 1.7
                    }}>
                        Academic background and achievements
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '1.25rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, rotateY: -20 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -8, rotateY: 3 }}
                            className="glass-strong"
                            style={{
                                borderRadius: '24px',
                                padding: '2.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <motion.div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '5px',
                                background: edu.gradient,
                            }}
                                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <motion.div
                                style={{
                                    background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                    padding: '1.25rem',
                                    borderRadius: '16px',
                                    color: '#2563eb',
                                    boxShadow: '0 8px 20px -6px rgba(37, 99, 235, 0.25)',
                                    display: 'inline-flex',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    {edu.icon}
                                </div>
                            </motion.div>

                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 800,
                                background: edu.gradient,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '0.5rem',
                                lineHeight: 1.3,
                            }}>
                                {edu.degree}
                            </h3>

                            {edu.field && (
                                <p style={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#2563eb',
                                    marginBottom: '0.75rem',
                                }}>
                                    {edu.field}
                                </p>
                            )}

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                marginBottom: '0.5rem',
                                lineHeight: 1.6,
                            }}>
                                {edu.institution}
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                flexWrap: 'wrap',
                                marginTop: '1rem',
                            }}>
                                <span style={{
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(37, 99, 235, 0.08)',
                                    color: '#1e40af',
                                    borderRadius: '8px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                }}>
                                    {edu.period}
                                </span>
                                {(edu.cgpa || edu.score) && (
                                    <span style={{
                                        padding: '0.5rem 1rem',
                                        background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                                        color: '#166534',
                                        borderRadius: '8px',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                        border: '1px solid #86efac',
                                    }}>
                                        {edu.cgpa || edu.score}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
