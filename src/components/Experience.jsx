import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Users, Target, Trophy } from 'lucide-react';

const Experience = () => {
    const internship = {
        role: 'Internship',
        company: 'Unotronix, Coimbatore',
        period: 'Dec 10, 2022 - Dec 24, 2022',
        note: 'Completed for academic credits (14 days, non-paid)',
        achievements: [
            'Collaborated on the design and development of 5+ electronic enclosures and cabinets, improving product efficiency by 10%',
            'Assisted in optimizing manufacturing processes, reducing production errors by 15%',
            'Conducted material research that contributed to a 12% improvement in design innovation and durability',
        ],
        icon: <Briefcase size={28} />,
        gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
    };

    const leadership = [
        {
            title: 'Team Leader',
            organization: 'MAPATHON 2023',
            description: 'Led the team to success and honored as Notable Participant',
            icon: <Trophy size={24} />,
        },
        {
            title: 'Event Organizer',
            organization: 'TECHATHON 2023',
            description: 'Served as one of the event organizers for the technical event',
            icon: <Users size={24} />,
        },
        {
            title: 'Event Organizer',
            organization: 'CORNUCOPIA 2024',
            description: 'Served as one of the event organizers for the department symposium',
            icon: <Target size={24} />,
        },
    ];

    return (
        <section id="experience" style={{
            padding: '3rem 1rem',
            background: 'var(--bg-main)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
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
                        Experience & Leadership
                    </h2>
                </motion.div>

                {/* Internship */}
                <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-strong"
                        style={{
                            borderRadius: '24px',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '6px',
                            background: internship.gradient,
                        }}></div>

                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                padding: '1.5rem',
                                borderRadius: '20px',
                                color: '#2563eb',
                                boxShadow: '0 10px 30px -8px rgba(37, 99, 235, 0.3)',
                                flexShrink: 0,
                            }}>
                                {internship.icon}
                            </div>

                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <h3 style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    fontWeight: 800,
                                    color: 'var(--text-main)',
                                    marginBottom: '0.5rem',
                                }}>
                                    {internship.role}
                                </h3>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    marginBottom: '1rem',
                                    flexWrap: 'wrap',
                                }}>
                                    <span style={{ fontSize: '1.125rem', fontWeight: 600, color: '#2563eb' }}>
                                        {internship.company}
                                    </span>
                                    <span style={{
                                        padding: '0.375rem 0.875rem',
                                        background: 'rgba(37, 99, 235, 0.08)',
                                        color: '#1e40af',
                                        borderRadius: '8px',
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                    }}>
                                        {internship.period}
                                    </span>
                                </div>
                                {internship.note && (
                                    <div style={{
                                        padding: '0.5rem 1rem',
                                        background: 'rgba(147, 197, 253, 0.15)',
                                        borderLeft: '3px solid #3b82f6',
                                        borderRadius: '6px',
                                        marginBottom: '1rem',
                                    }}>
                                        <span style={{ fontSize: '0.875rem', color: '#1e40af', fontStyle: 'italic' }}>
                                            {internship.note}
                                        </span>
                                    </div>
                                )}
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {internship.achievements.map((achievement, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            fontSize: '1rem',
                                            lineHeight: 1.6,
                                        }}>
                                            <span style={{
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                background: '#2563eb',
                                                marginTop: '0.5rem',
                                                flexShrink: 0,
                                            }}></span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Leadership */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}>
                    {leadership.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-strong"
                            style={{
                                borderRadius: '24px',
                                padding: '2.5rem',
                                textAlign: 'center',
                            }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{
                                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                                width: '80px',
                                height: '80px',
                                borderRadius: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: '#2563eb',
                                boxShadow: '0 8px 20px -6px rgba(37, 99, 235, 0.25)',
                            }}>
                                {item.icon}
                            </div>
                            <h4 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                marginBottom: '0.5rem',
                            }}>
                                {item.title}
                            </h4>
                            <p style={{
                                color: '#2563eb',
                                fontSize: '1rem',
                                fontWeight: 600,
                                marginBottom: '0.75rem',
                            }}>
                                {item.organization}
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9375rem',
                                lineHeight: 1.6,
                            }}>
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
