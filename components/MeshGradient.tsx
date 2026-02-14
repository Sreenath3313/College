import React from 'react';
import { motion } from 'framer-motion';

const MeshGradient: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-500/20 rounded-full blur-[100px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -60, 0],
                    opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-orange-400/20 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 100, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-[20%] right-[20%] w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[100px] mix-blend-screen"
            />
        </div>
    );
};

export default MeshGradient;
