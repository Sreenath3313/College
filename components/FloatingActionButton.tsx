import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
            {/* Quick Apply Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: 'spring', stiffness: 200 }}
            >
                <Link
                    to="/admissions"
                    className="group relative w-16 h-16 bg-primary-500 rounded-full shadow-2xl shadow-primary-500/50 flex items-center justify-center hover:scale-110 transition-transform"
                >
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-primary-500 rounded-full opacity-50 blur-md"
                    />
                    <Zap className="text-white relative z-10" size={24} />
                    <span className="absolute right-full mr-4 bg-secondary-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                        Quick Apply
                    </span>
                </Link>
            </motion.div>

            {/* Scroll to Top */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={scrollToTop}
                        className="group relative w-16 h-16 bg-secondary-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
                    >
                        <ArrowUp className="text-white" size={24} />
                        <span className="absolute right-full mr-4 bg-secondary-900 text-white px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                            Back to Top
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActionButton;
