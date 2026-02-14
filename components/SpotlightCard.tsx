import React, { useRef, useState, useEffect } from 'react';

interface SpotlightCardProps {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    children,
    className = "",
    spotlightColor = "rgba(249, 115, 22, 0.15)"
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const requestRef = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || requestRef.current) return;

        // Throttling with requestAnimationFrame
        requestRef.current = requestAnimationFrame(() => {
            if (!divRef.current) return;
            const rect = divRef.current.getBoundingClientRect();
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            requestRef.current = undefined;
        });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => {
        if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
            requestRef.current = undefined;
        }
        setOpacity(0);
    };

    useEffect(() => {
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Spotlight Effect - using separate layer to avoid repainting children */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 will-change-[opacity]"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
                }}
            />
            {children}
        </div>
    );
};

export default React.memo(SpotlightCard);
