import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Calendar, FileText, ChevronRight } from 'lucide-react';

type NoticeType = 'news' | 'events' | 'exams';

const notices = {
    news: [
        { id: 1, title: "SRIT Students Win Smart India Hackathon 2025", date: "Feb 12, 2025" },
        { id: 2, title: "New AI Research Lab Inaugurated by ISRO Chairman", date: "Feb 10, 2025" },
        { id: 3, title: "Admissions Open for B.Tech 2025-26 Batch", date: "Feb 05, 2025" },
        { id: 4, title: "International Conference on Data Science Scheduled", date: "Jan 28, 2025" },
    ],
    events: [
        { id: 1, title: "Annual Cultural Fest 'Sanskriti' - March 15th", date: "Mar 15, 2025" },
        { id: 2, title: "Tech Symposium 'TechnoVision' Registration Open", date: "Feb 20, 2025" },
        { id: 3, title: "Alumni Meet 2025 - Connecting Generations", date: "Apr 10, 2025" },
    ],
    exams: [
        { id: 1, title: "Mid-Term Examination Schedule Released", date: "Feb 18, 2025" },
        { id: 2, title: "Final Year Project Submission Deadline", date: "Mar 01, 2025" },
        { id: 3, title: "Re-evaluation Results Declared for 3rd Sem", date: "Jan 30, 2025" },
    ]
};

const NoticeBoard = () => {
    const [activeTab, setActiveTab] = useState<NoticeType>('news');

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-orange-50/80 backdrop-blur-3xl z-0"></div>

            {/* Floating Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-orange-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-amber-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] left-[30%] w-72 h-72 bg-pink-200/30 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left: Title & Marquee */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <div className="flex items-center gap-2 text-primary-500 font-bold uppercase tracking-widest text-sm">
                                    <Bell className="w-4 h-4" />
                                    <span>LIVE UPDATES</span>
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-black font-heading text-secondary-900 leading-[0.9]">
                                What's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-amber-500">
                                    Buzzing?
                                </span>
                            </h2>
                            <p className="text-lg text-secondary-500 leading-relaxed max-w-md">
                                Keep your finger on the pulse of campus life. Don't miss out on important deadlines and exciting events.
                            </p>
                        </motion.div>

                        {/* Quick Stats / Highlights */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-black text-secondary-900">100+</h3>
                                <p className="text-sm text-secondary-500 font-bold uppercase">Events Yearly</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-2xl font-black text-secondary-900">24/7</h3>
                                <p className="text-sm text-secondary-500 font-bold uppercase">Campus Buzz</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Interactive Notice Board */}
                    <div className="lg:col-span-8">
                        <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-2xl shadow-gray-200/50">

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                {[
                                    { id: 'news', label: 'Latest News', icon: FileText },
                                    { id: 'events', label: 'Upcoming Events', icon: Calendar },
                                    { id: 'exams', label: 'Exam Updates', icon: Bell },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id as NoticeType)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
                      ${activeTab === tab.id
                                                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-105'
                                                : 'bg-gray-100 text-secondary-500 hover:bg-gray-200 hover:text-secondary-900'}
                    `}
                                    >
                                        <tab.icon size={16} />
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* List Content */}
                            <div className="space-y-4 min-h-[300px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid gap-4"
                                    >
                                        {notices[activeTab].map((item) => (
                                            <motion.div
                                                key={item.id}
                                                className="group flex items-center justify-between p-5 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all cursor-pointer"
                                            >
                                                <div className="flex-1 pr-4">
                                                    <h4 className="text-secondary-900 font-bold text-lg group-hover:text-primary-600 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <span className="text-xs text-secondary-400 font-bold uppercase tracking-wider mt-2 block">{item.date}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-secondary-400 group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all shadow-sm">
                                                    <ChevronRight size={18} />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <div className="mt-8 text-center md:text-right">
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors uppercase tracking-widest">
                                    View All Archives <ChevronRight size={14} />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoticeBoard;
