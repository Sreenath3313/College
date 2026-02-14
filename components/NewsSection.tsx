import React from 'react';
import { Calendar, ArrowRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';

const newsItems = [
    {
        id: 1,
        title: "SRIT Students Win Smart India Hackathon 2025",
        date: "Feb 12, 2025",
        category: "Achievement",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500",
        summary: "Our team 'TechTitans' secured 1st prize in the software edition, developing an AI solution for rural healthcare."
    },
    {
        id: 2,
        title: "New AI Research Lab Inaugurated by ISRO Chairman",
        date: "Feb 10, 2025",
        category: "Research",
        image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=500",
        summary: "State-of-the-art facility dedicated to advancing space technology and autonomous systems."
    },
    {
        id: 3,
        title: "Admissions Open for B.Tech 2025-26 Batch",
        date: "Feb 05, 2025",
        category: "Admissions",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=500",
        summary: "Apply now for our NAAC A+ accredited programs. Scholarship tests scheduled for March 1st."
    }
];

const NewsSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <SectionReveal>
                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block animate-pulse">
                            <Bell size={14} className="inline mr-2" /> Latest Updates
                        </span>
                        <h2 className="text-4xl md:text-6xl font-heading font-black text-secondary-900 uppercase tracking-tight">
                            Campus <span className="text-gradient-primary">News</span>
                        </h2>
                    </SectionReveal>

                    <SectionReveal delay={0.2}>
                        <Link to="/news" className="neo-button group flex items-center gap-2">
                            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </SectionReveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, i) => (
                        <SectionReveal key={item.id} delay={i * 0.1}>
                            <div className="glass-card rounded-2xl overflow-hidden group h-full">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary-900 shadow-sm">
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-secondary-500 text-xs font-bold uppercase mb-3">
                                        <Calendar size={12} className="text-primary-500" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary-900 mb-3 leading-tight group-hover:text-primary-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary-500 text-sm line-clamp-2 mb-6">
                                        {item.summary}
                                    </p>
                                    <Link to={`/news/${item.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-secondary-900 uppercase tracking-wider hover:text-primary-500 transition-colors group/link">
                                        Read More <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
