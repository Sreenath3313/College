import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const timeline = [
    { year: "2008", title: "Foundation", desc: "SRIT established with a vision to redefine engineering education." },
    { year: "2012", title: "First Batch Graduates", desc: "100% placement record for the inaugural batch." },
    { year: "2015", title: "NAAC Accreditation", desc: "Awarded 'A' Grade for academic excellence." },
    { year: "2018", title: "Research Hub", desc: "Inauguration of Advanced IoT & AI Research Centers." },
    { year: "2021", title: "Autonomous Status", desc: "Granted UGC Autonomous status for curriculum innovation." },
    { year: "2024", title: "Global Partnerships", desc: "MoUs signed with leading international universities." },
    { year: "2025", title: "Future Ready", desc: "Launching B.Tech in Quantum Computing." }
];

const HistorySection = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

    return (
        <section ref={targetRef} className="relative h-[150vh] bg-secondary-950 text-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10 max-w-xs">
                    <h2 className="text-3xl md:text-5xl font-cinzel font-black uppercase tracking-tight text-white/20">
                        Our Legacy
                    </h2>
                    <div className="h-1 w-16 bg-primary-500 mt-4"></div>
                </div>

                <motion.div style={{ x }} className="flex gap-12 pl-10 pr-10 items-center h-full pt-10">
                    {/* Intro Spacer */}
                    <div className="w-[20vw] flex-shrink-0"></div>

                    {timeline.map((item, index) => (
                        <div key={index} className="relative flex-shrink-0 w-[300px] md:w-[450px] flex flex-col justify-center h-[40vh] border-l border-white/10 pl-8 group">
                            <span className="text-8xl font-black font-cinzel text-white/5 absolute -top-16 -left-6 z-0 select-none transition-colors group-hover:text-white/10">
                                {item.year}
                            </span>
                            <div className="relative z-10">
                                <span className="text-primary-500 font-bold text-lg block mb-2">{item.year}</span>
                                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{item.title}</h3>
                                <p className="text-secondary-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HistorySection;
