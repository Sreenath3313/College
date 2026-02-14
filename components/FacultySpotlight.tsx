import React, { useState } from 'react';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionReveal from './SectionReveal';

const faculty = [
    {
        id: 1,
        name: "Dr. A. K. Verma",
        role: "Head of CSE",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
        bio: "20+ years of experience in AI & Machine Learning. Published 50+ research papers."
    },
    {
        id: 2,
        name: "Prof. Sarah Johnson",
        role: "Dean of Research",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
        bio: "Expert in Quantum Computing and Cryptography. Leading multiple ISRO funded projects."
    },
    {
        id: 3,
        name: "Dr. Rajesh Kumar",
        role: "HoD, ECE",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
        bio: "Specializes in VLSI Design and Embedded Systems. Mentor for Smart India Hackathon winners."
    },
    {
        id: 4,
        name: "Prof. Emily Chen",
        role: "Director of Innovation",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
        bio: "Focuses on IoT and Robotics. Holds 5 patents in autonomous navigation systems."
    }
];

const FacultySpotlight: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <SectionReveal className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="text-secondary-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                        Academic Excellence
                    </span>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-secondary-900 uppercase tracking-tight mb-6">
                        Meet Our <span className="text-gradient-primary">Mentors</span>
                    </h2>
                    <p className="text-lg text-secondary-600 font-medium">
                        Learn from world-class researchers and industry experts dedicated to shaping the next generation of innovators.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((member, i) => (
                        <SectionReveal key={member.id} delay={i * 0.1}>
                            <div
                                onMouseEnter={() => setHovered(member.id)}
                                onMouseLeave={() => setHovered(null)}
                                className="glass-card group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${hovered === member.id ? 'scale-110 grayscale-0' : 'grayscale'}`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/50 to-transparent opacity-90 transition-opacity duration-300"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-1 bg-primary-500 mb-4 rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>

                                    <div className={`overflow-hidden transition-all duration-500 ${hovered === member.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                            {member.bio}
                                        </p>
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-white text-white transition-colors">
                                                <Linkedin size={18} />
                                            </a>
                                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary-500 hover:text-white text-white transition-colors">
                                                <Mail size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>

                <SectionReveal className="mt-16 text-center" delay={0.2}>
                    <Link to="/faculty" className="neo-button group flex items-center gap-2 inline-flex mx-auto">
                        View All Faculty <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </SectionReveal>
            </div>
        </section>
    );
};

export default FacultySpotlight;
