import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Zap, PenTool, Home, BookOpen, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const departments = [
    {
        id: 'cse',
        name: 'Computer Science',
        icon: Code,
        color: 'from-blue-500 to-cyan-400',
        stats: '180 Seats',
        desc: 'Cutting-edge curriculum in AI, ML, and Data Science.',
        img: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=600'
    },
    {
        id: 'ece',
        name: 'Electronics & Comm.',
        icon: Cpu,
        color: 'from-orange-500 to-red-400',
        stats: '120 Seats',
        desc: 'Focus on VLSI, IoT, and Embedded Systems.',
        img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600'
    },
    {
        id: 'eee',
        name: 'Electrical Engg.',
        icon: Zap,
        color: 'from-yellow-400 to-orange-500',
        stats: '60 Seats',
        desc: 'Modern labs for Power Systems and Control.',
        img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600'
    },
    {
        id: 'mech',
        name: 'Mechanical Engg.',
        icon: PenTool,
        color: 'from-slate-500 to-gray-400',
        stats: '60 Seats',
        desc: 'Robotics and Advanced Manufacturing focus.',
        img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=600"
    },
    {
        id: 'civil',
        name: 'Civil Engineering',
        icon: Home,
        color: 'from-emerald-500 to-green-400',
        stats: '60 Seats',
        desc: 'Sustainable infrastructure and Smart Cities.',
        img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=600'
    }
];

const SpotlightCard = ({ dept, index }: { dept: any, index: number }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();
    const isLarge = index === 0;
    const Icon = dept.icon;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 0.99 }}
            onClick={() => navigate(`/department/${dept.id}`)}
            className={`relative overflow-hidden group cursor-pointer rounded-3xl border border-white/40 bg-white/60 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 ${isLarge ? 'md:col-span-2 row-span-1' : ''}`}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`
                }}
            />

            <img src={dept.img} alt={dept.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
            <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-80 mix-blend-multiply transition-opacity group-hover:opacity-90`} />

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-20">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className={`mb-4 opacity-80 ${isLarge ? '' : 'origin-bottom-left transform scale-75'}`}>
                        <Icon size={isLarge ? 48 : 32} />
                    </div>

                    <h3 className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-black uppercase mb-2 leading-tight drop-shadow-md`}>
                        {dept.name}
                    </h3>

                    <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 text-sm line-clamp-2 font-medium">
                        {dept.desc}
                    </p>

                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
                            {dept.stats}
                        </span>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase hover:underline">
                            Explore <ArrowRight size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const DepartmentsGrid = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Technical Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                        Academic Excellence
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-secondary-900 mb-6">
                        Schools of <span className="text-primary-500">Innovation</span>
                    </h2>
                    <p className="text-secondary-500 text-lg">
                        Choose from our diverse range of AICTE approved programs designed to shape the leaders of tomorrow.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {departments.map((dept, index) => (
                        <SpotlightCard key={dept.id} dept={dept} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/departments" className="inline-flex items-center gap-2 text-secondary-900 font-bold uppercase tracking-widest text-sm hover:text-primary-500 transition-colors">
                        View All 12 Departments <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default DepartmentsGrid;
