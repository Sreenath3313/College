import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Award, Building, Globe, Star, ArrowRight } from 'lucide-react';

const stats = [
    { label: "Highest Package", value: "24", suffix: " LPA", desc: "Offered by Product Companies" },
    { label: "Average Package", value: "4.5", suffix: " LPA", desc: "Consistent Growth YoY" },
    { label: "Placement Rate", value: "95", suffix: "%", desc: "Eligible Students Placed" },
    { label: "Recruiters", value: "150", suffix: "+", desc: "Global MNCs & Startups" }
];

const recruiters = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "IBM", "Amazon", "Google", "Microsoft", "Oracle", "Cisco", "Tech Mahindra", "HCL", "Capgemini", "Mindtree", "Zoho"
];

const successStories = [
    {
        name: "Ravi Kumar",
        role: "Software Engineer",
        company: "Google",
        pkg: "24 LPA",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
        quote: "SRIT's coding culture and hackathons gave me the edge I needed to crack the Google interview."
    },
    {
        name: "Ananya Reddy",
        role: "Data Analyst",
        company: "Amazon",
        pkg: "18 LPA",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        quote: "The faculty's guidance on real-world projects helped me build a strong portfolio."
    },
    {
        name: "Karthik S.",
        role: "System Engineer",
        company: "TCS Digital",
        pkg: "7.5 LPA",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        quote: "Placement training started from the 3rd year itself, which boosted my confidence immensely."
    }
];

const Placements: React.FC = () => {
    return (
        <div className="bg-white min-h-screen text-secondary-900 pb-20 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-40 pb-20 bg-secondary-950 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-900 via-secondary-950 to-black"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
                            Career Services
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            Launching <br /> Careers.
                        </h1>
                        <p className="text-secondary-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
                            Transforming students into professionals. <br />
                            We bridge the gap between academic potential and industry excellence.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-white/10 pt-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-primary-500 transition-colors">
                                        {stat.value}<span className="text-2xl text-primary-500">{stat.suffix}</span>
                                    </div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-secondary-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. RECRUITER MARQUEE */}
            <section className="py-16 bg-white border-b border-gray-100 overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
                <div className="container mx-auto px-6 mb-8 text-center relative z-10">
                    <span className="text-secondary-400 font-bold uppercase tracking-widest text-xs">Trusted by Top Companies</span>
                </div>
                <div className="relative flex overflow-x-hidden group z-10">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                        {recruiters.concat(recruiters).concat(recruiters).map((r, i) => (
                            <span key={i} className="text-3xl md:text-4xl font-black text-gray-200 uppercase hover:text-secondary-900 transition-colors cursor-default select-none">
                                {r}
                            </span>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </section>

            {/* 3. SUCCESS STORIES */}
            <section className="py-24 relative overflow-hidden">
                {/* Background & Depth */}
                <div className="absolute inset-0 bg-orange-50/30"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/20 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div>
                            <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Hall of Fame</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-secondary-900">
                                Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-orange-600">Success</span>
                            </h2>
                        </div>
                        <button className="hidden md:flex items-center gap-2 font-bold uppercase text-xs tracking-widest hover:text-primary-500 transition-colors">
                            View All Stories <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {successStories.map((story, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-primary-200 flex flex-col group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                                        <img src={story.img} alt={story.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg leading-tight text-secondary-900">{story.name}</h3>
                                        <div className="text-xs font-bold text-primary-500 uppercase tracking-wider">{story.company}</div>
                                    </div>
                                    <div className="ml-auto text-right">
                                        <div className="text-2xl font-black text-secondary-900">{story.pkg}</div>
                                        <div className="text-[10px] text-secondary-400 uppercase font-bold">Package</div>
                                    </div>
                                </div>
                                <blockquote className="text-secondary-600 italic mb-6 flex-grow border-l-2 border-primary-200 pl-4">
                                    "{story.quote}"
                                </blockquote>
                                <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center text-xs font-bold uppercase text-secondary-400">
                                    <span>{story.role}</span>
                                    <div className="flex text-amber-400 gap-0.5">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PLACEMENT GRAPHICS */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Technical Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs mb-4 block">Growth Trajectory</span>
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
                            Consistent <br /> Performance.
                        </h2>
                        <p className="text-lg text-secondary-600 mb-8 max-w-md">
                            Our placement records have shown a 20% year-on-year growth in average package and a 15% increase in top-tier product company visits.
                        </p>

                        <div className="space-y-6">
                            {[
                                { year: "2024", width: "95%", val: "95%" },
                                { year: "2023", width: "92%", val: "92%" },
                                { year: "2022", width: "88%", val: "88%" },
                                { year: "2021", width: "85%", val: "85%" }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-xs font-bold uppercase mb-2">
                                        <span>Year {item.year}</span>
                                        <span>{item.val} Placed</span>
                                    </div>
                                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: item.width }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-gradient-to-r from-secondary-900 to-secondary-700 rounded-full relative"
                                        >
                                            <div className="absolute right-0 top-0 bottom-0 w-full animate-progress-shine bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-secondary-950 p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-32 bg-primary-500/20 rounded-full blur-[80px]"></div>
                        <h3 className="text-2xl font-bold mb-8 relative z-10">Top Recruiters Breakdown</h3>
                        <div className="space-y-4 relative z-10">
                            {[
                                { cat: "Product Based", count: "30%", color: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" },
                                { cat: "Service Based", count: "45%", color: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" },
                                { cat: "Startups", count: "15%", color: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" },
                                { cat: "Core Engineering", count: "10%", color: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-default">
                                    <div className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-150 transition-transform duration-300`}></div>
                                    <div className="flex-1 text-sm font-bold uppercase tracking-wider group-hover:text-primary-400 transition-colors">{item.cat}</div>
                                    <div className="font-mono text-white/80 group-hover:text-white">{item.count}</div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 pt-10 border-t border-white/10">
                            <div className="flex items-center gap-3">
                                <Globe className="text-primary-500" />
                                <div>
                                    <div className="text-sm font-bold opacity-80">Global Alumni Network</div>
                                    <div className="text-xs text-white/50">Alumni working in 15+ Countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA */}
            <section className="py-20 bg-primary-600 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tight mb-8">Ready to kickstart your career?</h2>
                    <button className="bg-white text-primary-600 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-secondary-900 hover:text-white transition-all shadow-xl">
                        Explore Opportunities
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Placements;
