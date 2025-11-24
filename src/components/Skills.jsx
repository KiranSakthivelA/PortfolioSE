import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, FileCode, Terminal } from 'lucide-react';

const Skills = () => {
    const skills = [
        { name: 'Java', icon: <Code2 size={32} /> },
        { name: 'JavaScript', icon: <FileCode size={32} /> },
        { name: 'HTML', icon: <Layout size={32} /> },
        { name: 'CSS', icon: <Terminal size={32} /> },
        { name: 'SQL', icon: <Database size={32} /> },
    ];

    return (
        <section id="skills" style={{
            padding: '3rem 1rem',
            background: 'var(--bg-main)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            position: 'relative',
            border: '1px solid var(--border)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: 900,
                        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        marginBottom: '0.5rem',
                    }}>
                        Technical Skills
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                        Technologies I work with
                    </p>
                </motion.div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            style={{
                                background: 'var(--bg-card)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(59, 130, 246, 0.2)',
                                borderRadius: '30px',
                                padding: '2rem 1.5rem',
                                textAlign: 'center',
                                minWidth: '140px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.1)',
                            }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '1rem',
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                {skill.icon}
                            </div>

                            <h3 style={{
                                fontWeight: 600,
                                fontSize: '1.125rem',
                                color: 'var(--text-main)',
                            }}>
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
