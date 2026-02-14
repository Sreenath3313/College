import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Navigation, Crosshair, Wifi } from 'lucide-react';

const CyberMap: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="contact" className="py-20 bg-secondary-950 overflow-hidden relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(15,23,42,0.9)_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Left Side: Text Content */}
                    <div className="w-full md:w-1/3 space-y-8">
                        <div>
                            <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block animate-pulse">
                                <Wifi size={14} className="inline mr-2" /> Live Connection
                            </span>
                            <h2 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter text-white mb-6">
                                Command <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-amber-500">Center</span>
                            </h2>
                            <p className="text-secondary-400 text-lg">
                                Locate our campus in the heart of Anantapur's educational hub.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: MapPin, text: "Rotarypuram Village, Bukkaraya Samudram, Anantapur - 515741", sub: "Global HQ" },
                                { icon: Phone, text: "+91 95055 05566", sub: "24/7 Support Line" },
                                { icon: Mail, text: "principal@srit.edu.in", sub: "Official Correspondence" }
                            ].map((item, i) => (
                                <div key={i} className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all cursor-crosshair">
                                    <div className="p-3 rounded-lg bg-secondary-900 border border-secondary-800 text-primary-500 group-hover:text-white group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-secondary-500 font-bold mb-1 group-hover:text-primary-500 transition-colors">{item.sub}</div>
                                        <div className="text-secondary-200 font-medium leading-relaxed group-hover:text-white transition-colors">{item.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-4 bg-primary-500/10 border border-primary-500/50 text-primary-400 hover:bg-primary-500 hover:text-white font-bold uppercase tracking-widest transition-all rounded-lg flex items-center justify-center gap-2 group">
                            <Navigation size={18} className="group-hover:rotate-45 transition-transform" />
                            Navigate to Campus
                        </button>
                    </div>

                    {/* Right Side: 3D Map Interface */}
                    <div className="w-full md:w-2/3 perspective-1000" style={{ perspective: "1000px" }}>
                        <motion.div
                            ref={ref}
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative h-[600px] w-full rounded-3xl border border-secondary-800 bg-secondary-900 shadow-2xl overflow-hidden group"
                        >
                            {/* Dark Mode Map Layer */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.6534575772396!2d77.63972687588147!3d14.731997273867606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ba49062eb13%3A0xc3c54d767104192b!2sSrinivasa%20Ramanujan%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(1) grayscale(1) contrast(1.2) brightness(0.8)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            ></iframe>

                            {/* UI Overlay - Scanlines */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20"></div>

                            {/* Holographic Overlay Elements */}
                            <div className="absolute inset-0 pointer-events-none z-20 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="border border-primary-500/30 bg-secondary-900/80 backdrop-blur-md px-4 py-2 rounded text-xs font-mono text-primary-400">
                                        LAT: 14.7319° N <br /> LNG: 77.6397° E
                                    </div>
                                    <Crosshair className="text-primary-500/50 animate-spin-slow" size={32} />
                                </div>

                                {/* Center Target */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-500/20 rounded-full flex items-center justify-center">
                                    <div className="w-24 h-24 border border-primary-500/40 rounded-full animate-ping opacity-20"></div>
                                    <div className="w-2 h-2 bg-primary-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="text-xs font-mono text-secondary-500">
                                        SYSTEM: ONLINE<br />
                                        STATUS: TRACKING
                                    </div>
                                    <div className="border border-primary-500/30 bg-secondary-900/80 backdrop-blur-md px-4 py-2 rounded text-xs font-mono text-primary-400">
                                        TARGET: SRIT CAMPUS
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Card" Effect */}
                            <div className="absolute top-4 right-4 z-30 transform translate-z-20">
                                {/* Optional floating badge */}
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberMap;
