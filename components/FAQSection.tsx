import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is the admission procedure for B.Tech programs?",
        answer: "Admissions are based on EAMCET ranks. 70% of seats are filled through the convener quota, and 30% through the management quota based on JEE Main/EAMCET rank or qualifying exam marks."
    },
    {
        question: "Does the college provide hostel facilities?",
        answer: "Yes, SRIT provides separate, well-furnished hostels for boys and girls with 24/7 security, Wi-Fi, and nutritious dining facilities."
    },
    {
        question: "What are the key placement statistics for the last academic year?",
        answer: "SRIT achieved a 95% placement rate with the highest package of 24 LPA. Over 150 recruiters visited the campus, including top MNCs like TCS, Infosys, and Amazon."
    },
    {
        question: "Is there transportation available for day scholars?",
        answer: "Yes, a fleet of 40+ buses covers all major routes in and around Anantapur, ensuring safe and convenient commute for students and staff."
    },
    {
        question: "What research opportunities are available for students?",
        answer: "Students can join various research labs under the guidance of faculty. We have active MoUs with ISRO and DRDO, allowing students to work on live projects."
    }
];

const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-secondary-900 border-t border-white/10 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-16 relative z-10">
                <div className="lg:w-1/3">
                    <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-2 block">
                        Support
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
                        Frequently <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-500">Asked Questions</span>
                    </h2>
                    <p className="text-secondary-400 mb-8 font-medium leading-relaxed">
                        Find answers to common questions about admissions, campus life, and more. Can't find what you're looking for?
                    </p>
                    <button className="flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-lg font-bold uppercase tracking-wider hover:bg-white hover:text-primary-500 transition-all shadow-lg hover:shadow-primary-500/50">
                        <MessageCircle size={20} /> Contact Support
                    </button>
                </div>

                <div className="lg:w-2/3 max-w-2xl">
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === i ? 'bg-white/5 border-primary-500/50' : 'bg-transparent hover:bg-white/5'}`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${activeIndex === i ? 'text-primary-500' : 'text-white'}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-secondary-500 transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-primary-500' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-secondary-400 leading-relaxed border-t border-white/10 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
