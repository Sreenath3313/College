import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, UserCheck, ArrowRight } from 'lucide-react';

const scholarships = [
    {
        title: "Merit Scholarship",
        icon: Award,
        desc: "For students with outstanding academic performance in qualifying exams.",
        eligible: "EAMCET Rank < 10,000",
        amount: "Up to 100% Tuition Waiver",
        color: "bg-orange-500"
    },
    {
        title: "Sports Quota",
        icon: UserCheck,
        desc: "Supporting national and state-level athletes.",
        eligible: "State/National Representation",
        amount: "50% Fee Concession",
        color: "bg-blue-500"
    },
    {
        title: "Jagananna Vidya Deevena",
        icon: BookOpen,
        desc: "Government fee reimbursement scheme for eligible students.",
        eligible: "Income Criterion Met",
        amount: "Full Fee Reimbursement",
        color: "bg-green-500"
    }
];

const ScholarshipSection: React.FC = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                        Financial Aid
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-secondary-900 uppercase tracking-tight mb-6">
                        Scholarships & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">Support</span>
                    </h2>
                    <p className="text-lg text-secondary-600 font-medium">
                        We ensure that financial constraints never hinder talent. Explore our scholarship programs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scholarships.map((sch, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 group cursor-pointer"
                        >
                            <div className={`h-2 ${sch.color}`}></div>
                            <div className="p-8">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg ${sch.color}`}>
                                    <sch.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-2">{sch.title}</h3>
                                <p className="text-secondary-500 text-sm mb-6 leading-relaxed">
                                    {sch.desc}
                                </p>
                                <div className="space-y-3 mb-8">
                                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-secondary-400 font-bold">Eligibility</span>
                                        <span className="text-secondary-900 font-bold">{sch.eligible}</span>
                                    </div>
                                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                                        <span className="text-secondary-400 font-bold">Benefit</span>
                                        <span className={`font-bold ${sch.color.replace('bg-', 'text-')}`}>{sch.amount}</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 rounded-lg border-2 border-secondary-100 font-bold uppercase tracking-widest text-xs text-secondary-900 hover:bg-secondary-900 hover:text-white hover:border-secondary-900 transition-all group-hover:shadow-lg">
                                    Check Eligibility
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center gap-2 text-primary-500 font-bold uppercase tracking-widest hover:text-orange-600 transition-colors border-b-2 border-primary-500/20 hover:border-primary-500 pb-1">
                        <GraduationCap size={20} /> Download Scholarship Guide
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipSection;
