import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, GraduationCap, Calendar, FileText, UserCheck, Download, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        id: 1,
        title: "Online Application",
        desc: "Fill out the application form on our portal. Upload necessary documents including 10th/12th marksheets.",
        icon: FileText
    },
    {
        id: 2,
        title: "Entrance Exam / counseling",
        desc: "Appear for AP EAMCET or qualify through JEE Main. Management quota seats are based on merit.",
        icon: UserCheck
    },
    {
        id: 3,
        title: "Seat Allotment",
        desc: "Based on your rank and preference, seats will be allotted during the counseling process.",
        icon: CheckCircle
    },
    {
        id: 4,
        title: "Document Verification",
        desc: "Visit the campus for physical verification of original certificates and payment of tuition fees.",
        icon: FileText
    },
    {
        id: 5,
        title: "Welcome to SRIT",
        desc: "Attend the orientation program and start your journey of excellence.",
        icon: GraduationCap
    }
];

const programs = [
    { type: "Undergraduate", name: "B.Tech Computer Science", duration: "4 Years", intake: 180 },
    { type: "Undergraduate", name: "B.Tech Electronics & Comm.", duration: "4 Years", intake: 120 },
    { type: "Undergraduate", name: "B.Tech Electrical & Electronics", duration: "4 Years", intake: 60 },
    { type: "Undergraduate", name: "B.Tech Mechanical Engg.", duration: "4 Years", intake: 60 },
    { type: "Undergraduate", name: "B.Tech Civil Engg.", duration: "4 Years", intake: 60 },
    { type: "Postgraduate", name: "M.Tech VLSI Design", duration: "2 Years", intake: 18 },
    { type: "Postgraduate", name: "M.Tech CSE", duration: "2 Years", intake: 18 },
];

const faqs = [
    { q: "What is the eligibility criteria for B.Tech?", a: "Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics with a minimum of 45% aggregate marks." },
    { q: "Is there a management quota?", a: "Yes, 30% of seats are reserved for management quota based on merit in qualifying examination." },
    { q: "Does SRIT offer scholarships?", a: "SRIT offers merit-based scholarships and fee waivers for top rankers in EAMCET." },
    { q: "What documents are required?", a: "10th & 12th Marksheets, Transfer Certificate, EAMCET Rank Card, Caste Certificate (if applicable)." },
];

const Admissions: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [filter, setFilter] = useState("All");

    const filteredPrograms = filter === "All" ? programs : programs.filter(p => p.type === filter);

    return (
        <div className="bg-white min-h-screen text-secondary-900 pb-20">

            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-20 bg-secondary-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/80 to-secondary-950"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                            Join the Elite
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter mb-8 decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                            Your Future <br /> Starts Here.
                        </h1>
                        <p className="text-secondary-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                            Admissions Open for Academic Year 2024-25. <br />
                            Step into a world of innovation, research, and limitless opportunities.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button className="bg-primary-500 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-primary-500 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
                                Apply Now
                            </button>
                            <button className="px-8 py-4 rounded-full border border-secondary-700 font-bold uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all flex items-center gap-2">
                                <Download size={20} /> Brochure
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. ADMISSION PROCESS TIMELINE */}
            <section className="py-24 relative overflow-hidden">
                {/* Background & Depth */}
                <div className="absolute inset-0 bg-orange-50/30"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-100/40 blur-[120px] rounded-full pointer-events-none mix-blend-multiply"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black uppercase tracking-tight text-secondary-900 mb-4">Admission Process</h2>
                        <p className="text-secondary-600">A simple 5-step journey to becoming an SRITian.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary-200 to-transparent -translate-x-1/2 md:translate-x-0"></div>

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 md:text-right">
                                        {index % 2 === 0 && (
                                            <div className="hidden md:block group p-6 rounded-2xl hover:bg-white/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-lg">
                                                <h3 className="text-xl font-bold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                                                <p className="text-secondary-600 text-sm">{step.desc}</p>
                                            </div>
                                        )}
                                        {/* Mobile View Content */}
                                        <div className="md:hidden pl-16">
                                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                            <p className="text-secondary-600 text-sm">{step.desc}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 w-12 h-12 rounded-full bg-primary-500 border-4 border-white shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center shrink-0">
                                        <step.icon size={20} className="text-white" />
                                    </div>

                                    <div className="flex-1">
                                        {index % 2 !== 0 && (
                                            <div className="hidden md:block group p-6 rounded-2xl hover:bg-white/60 hover:backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-white/50 hover:shadow-lg">
                                                <h3 className="text-xl font-bold mb-2 text-secondary-900 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                                                <p className="text-secondary-600 text-sm">{step.desc}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROGRAMS OFFERED */}
            <section className="py-24 relative overflow-hidden">
                {/* Technical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-black uppercase tracking-tight text-secondary-900 mb-4">Programs Offered</h2>
                            <p className="text-secondary-500">World-class curriculum designed for the future.</p>
                        </div>
                        <div className="flex gap-2 mt-4 md:mt-0">
                            {["All", "Undergraduate", "Postgraduate"].map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setFilter(t)}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${filter === t
                                        ? 'bg-secondary-900 text-white border-secondary-900 shadow-lg'
                                        : 'bg-white/80 backdrop-blur text-secondary-500 border-secondary-200 hover:border-primary-500 hover:text-primary-600'
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode='popLayout'>
                            {filteredPrograms.map((prog, i) => (
                                <motion.div
                                    key={prog.name}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group bg-white/70 backdrop-blur-xl p-8 rounded-2xl hover:bg-secondary-900 hover:text-white transition-all duration-300 border border-white/50 hover:border-secondary-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl"
                                >
                                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-widest text-secondary-400 mb-2 group-hover:text-secondary-400">{prog.type}</div>
                                    <h3 className="text-xl font-bold mb-4">{prog.name}</h3>
                                    <div className="flex justify-between items-center text-sm font-medium text-secondary-500 group-hover:text-secondary-300 border-t border-gray-200 group-hover:border-white/10 pt-4 transition-colors">
                                        <span className="flex items-center gap-2"><Calendar size={16} /> {prog.duration}</span>
                                        <span className="flex items-center gap-2"><UserCheck size={16} /> {prog.intake} Seats</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 bg-secondary-900 text-white">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Common Questions</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                            Frequently Asked <br /> Questions.
                        </h2>
                        <p className="text-secondary-400 text-lg mb-8">
                            Can't find what you're looking for? <br />
                            Call our admission cell at <span className="text-white font-bold underline">+91 95055 05566</span>
                        </p>
                        <button className="bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-secondary-900 transition-all">
                            Contact Support
                        </button>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg">{faq.q}</span>
                                    {activeFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6 text-secondary-300 leading-relaxed"
                                        >
                                            {faq.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Admissions;
