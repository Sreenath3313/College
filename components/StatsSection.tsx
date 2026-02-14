import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { label: "Placement Rate", value: 95, suffix: "%" },
    { label: "Highest Package", value: 24, suffix: " LPA" },
    { label: "Patents Filed", value: 50, suffix: "+" },
    { label: "Research Grants", value: 12, suffix: " Cr" },
];

const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <span ref={ref} className="flex">
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

const StatsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000')" }}>
            {/* Parallax Overlay */}
            <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 group"
                        >
                            <div className="text-5xl md:text-6xl font-black mb-4 flex items-baseline justify-center text-white drop-shadow-lg">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="h-1 w-12 bg-primary-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                            <div className="text-sm md:text-base font-bold uppercase tracking-widest text-primary-100/80 group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
