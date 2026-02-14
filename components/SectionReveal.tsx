import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const SectionReveal: React.FC<SectionRevealProps> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 }); // Trigger when 20% visible

    return (
        <section ref={ref} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay }} // "Fake heavy" ease (Expo out-ish)
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionReveal;
