import React, { useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Settings, PenTool, Database, Zap, Globe, Microscope, HardHat, Building2, FlaskConical, Atom, Dna } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// -- DATA --
const departments = [
    {
        id: 'cse',
        name: "Computer Science",
        code: "CSE",
        icon: Code2,
        desc: "Driving the digital future with AI, Machine Learning, and Cloud Computing.",
        specializations: ["Artificial Intelligence", "Data Science", "Cyber Security", "IoT"],
        color: "from-blue-600 via-cyan-500 to-teal-400",
        img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000",
        stats: { students: 720, faculty: 45, placement: "98%" }
    },
    {
        id: 'ece',
        name: "Electronics & Comm.",
        code: "ECE",
        icon: Cpu,
        desc: "Innovating at the intersection of hardware, VLSI, and legacy-defining communication systems.",
        specializations: ["VLSI Design", "Embedded Systems", "Robotics", "Signal Processing"],
        color: "from-orange-600 via-red-500 to-pink-500",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
        stats: { students: 480, faculty: 32, placement: "94%" }
    },
    {
        id: 'eee',
        name: "Electrical & Electronics",
        code: "EEE",
        icon: Zap,
        desc: "Powering the world with sustainable energy solutions, smart grids, and EV technology.",
        specializations: ["Power Systems", "Control Systems", "Renewable Energy", "Electric Vehicles"],
        color: "from-yellow-500 via-amber-500 to-orange-600",
        img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1000",
        stats: { students: 240, faculty: 20, placement: "90%" }
    },
    {
        id: 'mech',
        name: "Mechanical Engg.",
        code: "MECH",
        icon: Settings,
        desc: "Designing the machines of tomorrow with advanced robotics, automation, and 3D printing.",
        specializations: ["Robotics", "Thermal Engineering", "CAD/CAM", "Industrial Automation"],
        color: "from-slate-600 via-gray-500 to-zinc-400",
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000",
        stats: { students: 240, faculty: 25, placement: "88%" }
    },
    {
        id: 'civil',
        name: "Civil Engineering",
        code: "CIVIL",
        icon: Building2,
        desc: "Building the sustainable infrastructure and smart cities that define our future skylines.",
        specializations: ["Structural Engg", "Transportation", "Environmental Engg", "Geotechnical"],
        color: "from-emerald-600 via-green-500 to-teal-500",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
        stats: { students: 240, faculty: 22, placement: "85%" }
    }
];

// -- COMPONENTS --

const TiltCard = ({ dept, index }: { dept: any, index: number }) => {
    const navigate = useNavigate();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
    const brightness = useTransform(mouseY, [-0.5, 0.5], [1.2, 0.8]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ rotateX, rotateY, perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => navigate(`/department/${dept.id}`)}
            className="relative h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer group"
        >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 bg-secondary-900">
                <motion.img
                    src={dept.img}
                    alt={dept.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ scale: 1.1 }}
                    whileHover={{ scale: 1.2, transition: { duration: 10, ease: "linear" } }}
                />
            </div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70`} />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Content Container */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                {/* Top Section: Icon & Stats */}
                <div className="flex justify-between items-start translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white shadow-lg">
                        <dept.icon size={28} />
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                        <span className="text-white font-bold text-lg">{dept.stats.placement} <span className="text-xs font-normal opacity-70 block">Placement</span></span>
                    </div>
                </div>

                {/* Bottom Section: Title & Description */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                        {dept.code}
                    </span>
                    <h2 className="text-4xl font-heading font-black text-white uppercase leading-none mb-3 drop-shadow-lg">
                        {dept.name}
                    </h2>
                    <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-6 group-hover:line-clamp-none transition-all duration-500">
                        {dept.desc}
                    </p>

                    {/* Specializations Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {dept.specializations.slice(0, 3).map((spec: string, i: number) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-white/90 px-2 py-1 bg-black/30 rounded border border-white/10">
                                {spec}
                            </span>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-primary-400 transition-colors group/link">
                        Explore Department <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Departments: React.FC = () => {
    return (
        <div className="bg-secondary-950 min-h-screen text-white pb-20 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
                {/* Background GFX */}
                <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-secondary-900 to-secondary-950 overflow-hidden z-0">
                    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[0%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                            Academic Excellence
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black uppercase tracking-tighter leading-none mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            Schools of <br /> Innovation.
                        </h1>
                        <p className="text-secondary-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Discover our world-class departments where theory meets practice.
                            From AI to Sustainable Energy, we are shaping the architects of the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. DEPARTMENTS GRID */}
            <section className="relative z-10 pb-32">
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {departments.map((dept, index) => (
                            <TiltCard key={dept.id} dept={dept} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CENTERS OF EXCELLENCE (NEW FEATURE) */}
            <section className="py-24 bg-secondary-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Advanced Research</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight text-white">
                                Centers of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-amber-500">Excellence</span>
                            </h2>
                        </div>
                        <p className="text-secondary-400 max-w-md text-right hidden md:block">
                            State-of-the-art facilities dedicated to research in emerging technologies and industrial applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "AI & Robotics", icon: Cpu, desc: "Specialized lab for autonomous systems and humanoid robotics research." },
                            { title: "Green Energy", icon: Zap, desc: "Focusing on solar, wind, and smart grid technologies for a sustainable future." },
                            { title: "IoT & Smart Cities", icon: Globe, desc: "Developing interconnected systems for urban automation and sensing." }
                        ].map((center, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-500 mb-6">
                                    <center.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{center.title}</h3>
                                <p className="text-secondary-400 leading-relaxed">{center.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CTA SECTION */}
            <section className="py-20 bg-secondary-900 border-t border-secondary-800">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-black uppercase tracking-tight mb-8">
                        Not sure which path to choose?
                    </h2>
                    <p className="text-secondary-400 max-w-xl mx-auto mb-10 text-lg">
                        Talk to our academic counselors to find the program that aligns with your passion and career goals.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link to="/admissions" className="bg-primary-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-primary-500 transition-all shadow-lg hover:shadow-orange-500/20">
                            Admission Enquiry
                        </Link>
                        <button className="px-8 py-4 rounded-full border border-secondary-700 font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Departments;
