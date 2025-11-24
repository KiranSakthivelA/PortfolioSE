import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, TrendingUp, ShieldCheck, Eye } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Live Portfolio Website',
            description: 'Personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.',
            icon: <ExternalLink size={24} />,
            tags: ['React', 'Framer Motion', 'Responsive Design'],
            link: 'https://kiran-sakthivel-a-portfolio-cine.vercel.app',
        },
        {
            title: 'Event Website — CORNUCOPIA 2024',
            description: 'A responsive event website designed to streamline registration and information dissemination for our college annual event.',
            icon: <ExternalLink size={24} />,
            tags: ['Web Development', 'UI/UX', 'Responsive'],
            link: 'https://cornucopia2024.neocities.org/Cornucopia\'24_Website/',
        },
        {
            title: 'Vehicle Number Plate Detection',
            description: 'Automated system for detecting and recognizing vehicle number plates using computer vision and image processing techniques.',
            icon: <Eye size={24} />,
            tags: ['Image Processing', 'Computer Vision', 'Python'],
        },
        {
            title: 'Fingerprint-Based Car Ignition',
            description: 'Biometric security system for vehicles to prevent unauthorized access using fingerprint authentication.',
            special: 'Patent Pending',
            icon: <ShieldCheck size={24} />,
            tags: ['Embedded Systems', 'Security', 'IoT'],
        },
        {
            title: 'Animal Detection in Railway Tracks',
            description: 'YOLO-based detection system to prevent wildlife accidents on railway tracks using real-time object detection.',
            icon: <TrendingUp size={24} />,
            tags: ['YOLO', 'AI', 'Safety', 'Deep Learning'],
            link: 'https://ymerdigital.com/uploads/YMER2312B7.pdf',
        },
    ];

    return (
        <section id="projects" style={{
            padding: '3rem 1rem',
            background: 'var(--bg-main)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
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
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '0.5rem',
                    }}>
                        Featured Projects
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                        Innovative solutions built with modern technologies
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: `0 8px 20px rgba(59, 130, 246, 0.15)` }}
                            className="glass-strong"
                            style={{
                                borderRadius: '24px',
                                padding: '2rem',
                                cursor: project.link ? 'pointer' : 'default',
                            }}
                            onClick={() => project.link && window.open(project.link, '_blank')}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '1.25rem',
                            }}>
                                {project.icon}
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                color: 'var(--text-main)',
                                marginBottom: '0.75rem',
                            }}>
                                {project.title}
                            </h3>

                            {project.special && (
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.375rem 0.75rem',
                                    background: '#FFF3CD',
                                    borderRadius: '6px',
                                    marginBottom: '1rem',
                                    border: '1px solid #FFC107',
                                }}>
                                    <Award size={14} style={{ color: '#856404' }} />
                                    <span style={{ color: '#856404', fontSize: '0.75rem', fontWeight: 600 }}>
                                        {project.special}
                                    </span>
                                </div>
                            )}

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9375rem',
                                lineHeight: 1.6,
                                marginBottom: '1.5rem',
                            }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: '0.375rem 0.75rem',
                                            background: 'var(--bg-secondary)',
                                            color: 'var(--text-secondary)',
                                            borderRadius: '6px',
                                            fontSize: '0.75rem',
                                            fontWeight: 500,
                                            border: '1px solid var(--border-light)',
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
