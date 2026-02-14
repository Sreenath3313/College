import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2,
    prefix = "",
    suffix = "",
    className = ""
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = React.useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(end);
        }
    }, [isInView, end, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            setDisplayValue(Math.floor(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <div ref={ref} className={className}>
            {prefix}{displayValue}{suffix}
        </div>
    );
};

export default AnimatedCounter;
