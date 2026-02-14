import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800", // Events
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", // Lab
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800", // Graduation
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b955?q=80&w=800", // Seminar
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800", // Library
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800", // Sports
];

const CampusGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section ref={containerRef} className="py-32 bg-secondary-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 mb-20 text-center">
                <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-6">
                    Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">SRIT</span>
                </h2>
                <p className="text-secondary-400 text-xl max-w-2xl mx-auto">
                    Beyond academics, SRIT is a vibrant community of thinkers, creators, and athletes.
                </p>
            </div>

            <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 h-[800px] overflow-hidden">

                {/* Column 1 - Moves Up */}
                <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
                    <div className="h-64 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-96 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[1]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[2]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                </motion.div>

                {/* Column 2 - Moves Down */}
                <motion.div style={{ y: y2 }} className="-mt-32 flex flex-col gap-8">
                    <div className="h-80 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[3]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-80 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[4]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-80 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[5]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                </motion.div>

                {/* Column 3 - Moves Up */}
                <motion.div style={{ y: y3 }} className="hidden md:flex flex-col gap-8">
                    <div className="h-96 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[2]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-64 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                </motion.div>

                {/* Column 4 - Moves Down */}
                <motion.div style={{ y: y4 }} className="hidden md:flex -mt-20 flex-col gap-8">
                    <div className="h-64 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[5]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                    <div className="h-80 rounded-2xl overflow-hidden bg-secondary-800 relative group">
                        <img src={images[1]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Campus Life" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CampusGallery;
