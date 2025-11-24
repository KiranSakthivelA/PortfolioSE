import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Languages, Brain } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '5rem 1rem', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                        About Me
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: '#2563eb', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            padding: '2rem',
                        }}
                    >
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            I am an aspiring Software and Web Developer with a strong foundation in Electronics and Communication Engineering.
                            My journey is driven by a passion for technology and innovation.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            With a CGPA of 8.3 from Sri Ramakrishna Institute of Technology, I thrive in collaborative environments
                            and am eager to contribute to impactful projects.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
                    >
                        {[
                            { icon: <BookOpen size={24} />, title: 'Education', desc: 'B.E. ECE (2021–2025)', sub: 'CGPA: 8.3' },
                            { icon: <Languages size={24} />, title: 'Languages', desc: 'English, Tamil' },
                            { icon: <Brain size={24} />, title: 'Soft Skills', desc: 'Analytical Thinking, Time Management', sub: 'Teamwork, Active Listening' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                style={{
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    gridColumn: i === 2 ? 'span 2' : 'auto',
                                    transition: 'all 0.3s ease',
                                }}
                                whileHover={{ boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', borderColor: '#2563eb' }}
                            >
                                <div style={{ color: '#2563eb', marginBottom: '0.75rem' }}>{item.icon}</div>
                                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item.desc}</p>
                                {item.sub && <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{item.sub}</p>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
