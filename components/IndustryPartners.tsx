import React from 'react';
import { Handshake, Globe, Cpu, Cloud, Database, Shield } from 'lucide-react';
import SectionReveal from './SectionReveal';

const partners = [
    { name: "AWS Academy", icon: Cloud, color: "text-orange-500" },
    { name: "Cisco Networking Academy", icon: Globe, color: "text-blue-500" },
    { name: "Oracle Academy", icon: Database, color: "text-red-500" },
    { name: "Palo Alto Networks", icon: Shield, color: "text-red-600" },
    { name: "Intel Unnati", icon: Cpu, color: "text-blue-600" },
    { name: "Salesforce Trailhead", icon: Cloud, color: "text-blue-400" }
];

const IndustryPartners: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="md:w-1/3">
                        <SectionReveal>
                            <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                                Global Alliances
                            </span>
                            <h2 className="text-4xl font-heading font-black text-secondary-900 uppercase tracking-tight mb-6">
                                Industry <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">Collaborations</span>
                            </h2>
                            <p className="text-secondary-600 mb-8 font-medium leading-relaxed">
                                We bridge the gap between academia and industry through strategic MoUs, ensuring our curriculum stays ahead of the curve.
                            </p>
                            <button className="flex items-center gap-2 text-secondary-900 font-bold uppercase tracking-wider hover:text-primary-500 transition-colors group">
                                <Handshake size={20} /> Partner With Us
                            </button>
                        </SectionReveal>
                    </div>

                    <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
                        {partners.map((partner, i) => (
                            <SectionReveal key={i} delay={i * 0.1}>
                                <div
                                    className="glass-card bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 text-center shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                                >
                                    <div className={`p-4 rounded-full bg-gray-50 group-hover:bg-white transition-colors duration-500 shadow-inner group-hover:shadow-none`}>
                                        <partner.icon size={32} className={`${partner.color} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />
                                    </div>
                                    <span className="font-bold text-secondary-900 text-sm">{partner.name}</span>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryPartners;
