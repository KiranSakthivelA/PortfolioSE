import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'EDUCATION', href: '#education' },
        { name: 'SKILLS', href: '#skills' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'EXPERIENCE', href: '#experience' },
        { name: 'CONTACT', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: scrolled ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 0',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <a href="#" style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--primary)',
                        letterSpacing: '0.05em',
                    }}>
                        KIRAN SAKTHIVEL A
                    </a>
                    <p style={{
                        fontSize: '0.625rem',
                        color: 'var(--text-muted)',
                        marginTop: '0.125rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                    }}>
                        B.E. ECE · Aspiring Full Stack Developer
                    </p>
                </div>

                <div style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                color: 'var(--text-secondary)',
                                fontWeight: 500,
                                transition: 'color 0.2s',
                                fontSize: '0.8125rem',
                                letterSpacing: '0.05em',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <button
                    style={{
                        background: 'none',
                        color: 'var(--text-main)',
                        display: 'block',
                        padding: '0.5rem',
                        marginRight: '-0.5rem',
                        cursor: 'pointer',
                        border: 'none',
                    }}
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '100vh',
                            background: 'var(--bg-card)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2rem',
                            zIndex: -1,
                            paddingTop: '80px',
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: 'var(--text-main)',
                                    letterSpacing: '0.05em',
                                    padding: '0.5rem 1rem',
                                }}
                                onClick={() => setIsOpen(false)}
                                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
