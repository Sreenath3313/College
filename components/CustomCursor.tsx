import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
    const rippleIdRef = useRef(0);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleClick = (e: MouseEvent) => {
            const id = rippleIdRef.current++;
            setRipples(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== id));
            }, 600);
        };

        // Detect hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.style.cursor === 'pointer' ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.style.cursor === 'pointer'
            ) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('click', handleClick);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('click', handleClick);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Hide default cursor */}
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                        opacity: isClicking ? 0.6 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-8 h-8 rounded-full border-2 border-white"
                />
            </motion.div>

            {/* Glow Trail */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                    className="w-12 h-12 rounded-full bg-primary-500/20 blur-xl"
                />
            </motion.div>

            {/* Click Ripples */}
            {ripples.map(ripple => (
                <motion.div
                    key={ripple.id}
                    className="fixed top-0 left-0 pointer-events-none z-[9997] border-2 border-primary-500 rounded-full"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{ width: 80, height: 80, opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
