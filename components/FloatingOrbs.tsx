import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface FloatingOrbsProps {
    count?: number;
}

const FloatingOrbs: React.FC<FloatingOrbsProps> = ({ count = 6 }) => {
    // Reduce count on low-power devices could be added here, but for now we clamp typical usage
    const safeCount = Math.min(count, 10);

    const orbs = useMemo(() => Array.from({ length: safeCount }, (_, i) => ({
        id: i,
        // Slightly reduced max size to reduce paint area
        size: Math.random() * 150 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 20, // Slower duration = less CPU usage per frame
        delay: Math.random() * 5,
        color: i % 2 === 0 ? 'from-primary-500/10 to-orange-400/10' : 'from-blue-500/10 to-purple-500/10' // Reduced opacity
    })), [safeCount]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu translate-z-0">
            {orbs.map((orb) => (
                <motion.div
                    key={orb.id}
                    className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl will-change-transform`}
                    style={{
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        opacity: 0.8,
                    }}
                    animate={{
                        x: [0, 30, -30, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 1.05, 0.95, 1], // Reduced scale variance
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        delay: orb.delay,
                        ease: 'linear', // Linear is cheaper to calculate than easeInOut
                    }}
                />
            ))}
        </div>
    );
};

export default React.memo(FloatingOrbs);
