import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PagePreloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10000] bg-secondary-950 flex flex-col items-center justify-center"
                >
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <motion.h1
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-6xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-orange-400 to-white"
                        >
                            SRIT
                        </motion.h1>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="w-64 md:w-96 h-1 bg-secondary-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary-500 to-orange-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Percentage */}
                    <motion.div
                        className="mt-6 text-primary-500 font-bold text-xl"
                        key={Math.floor(progress)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {Math.floor(progress)}%
                    </motion.div>

                    {/* Particle Burst on Complete */}
                    {progress === 100 && (
                        <motion.div
                            className="absolute inset-0 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 0.5 }}
                        >
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-primary-500 rounded-full"
                                    style={{
                                        left: '50%',
                                        top: '50%',
                                    }}
                                    initial={{ x: 0, y: 0, opacity: 1 }}
                                    animate={{
                                        x: Math.cos((i / 20) * Math.PI * 2) * 200,
                                        y: Math.sin((i / 20) * Math.PI * 2) * 200,
                                        opacity: 0,
                                    }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                />
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PagePreloader;
