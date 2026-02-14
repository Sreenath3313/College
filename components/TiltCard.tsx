import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    maxTilt?: number;
    className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, maxTilt = 15, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const requestRef = useRef<number | null>(null);

    const springConfig = { stiffness: 300, damping: 20 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || requestRef.current) return;

        // Throttling with requestAnimationFrame
        requestRef.current = requestAnimationFrame(() => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate tilt
            const rotateXValue = ((y - centerY) / centerY) * -maxTilt;
            const rotateYValue = ((x - centerX) / centerX) * maxTilt;

            setRotateX(rotateXValue);
            setRotateY(rotateYValue);
            requestRef.current = undefined;
        });
    };

    const handleMouseLeave = () => {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            requestRef.current = undefined;
        }
        setRotateX(0);
        setRotateY(0);
    };

    useEffect(() => {
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: 'preserve-3d',
            }}
            className={`will-change-transform ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default React.memo(TiltCard);
