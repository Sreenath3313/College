import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Database, Shield, Globe, MapPin, Phone, Mail, ChevronRight, Award, Users, BookOpen, Quote, Video, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Eager load Hero components (Above the fold)
// HeroScene removed



import MagneticButton from '../components/MagneticButton';
import CustomCursor from '../components/CustomCursor'; // Keep if user decides to add back, or remove if truly gone. (Ah, user removed it)
import ScrollProgress from '../components/ScrollProgress';
import PagePreloader from '../components/PagePreloader';
import FloatingActionButton from '../components/FloatingActionButton';
import NoiseOverlay from '@/components/NoiseOverlay';
import MeshGradient from '@/components/MeshGradient';

// Lazy load Below the fold components
const DepartmentsGrid = React.lazy(() => import('../components/DepartmentsGrid'));
const StatsSection = React.lazy(() => import('../components/StatsSection'));
const CampusGallery = React.lazy(() => import('../components/CampusGallery'));
const CyberMap = React.lazy(() => import('../components/CyberMap'));
const HistorySection = React.lazy(() => import('../components/HistorySection'));
const SpotlightCard = React.lazy(() => import('../components/SpotlightCard'));
const AnimatedCounter = React.lazy(() => import('../components/AnimatedCounter'));
const TiltCard = React.lazy(() => import('../components/TiltCard'));

const EventTimeline = React.lazy(() => import('../components/EventTimeline'));
const NewsSection = React.lazy(() => import('../components/NewsSection'));
const FacultySpotlight = React.lazy(() => import('../components/FacultySpotlight'));
const IndustryPartners = React.lazy(() => import('../components/IndustryPartners'));
const ScholarshipSection = React.lazy(() => import('../components/ScholarshipSection'));
const FAQSection = React.lazy(() => import('../components/FAQSection'));
const SectionReveal = React.lazy(() => import('../components/SectionReveal'));

// Fallback loader
const SectionLoader = () => <div className="w-full h-40 flex items-center justify-center text-primary-500/50">Loading...</div>;

// -- DATA --


const recruiters = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "IBM", "Amazon", "Google", "Microsoft", "Oracle", "Cisco", "Tech Mahindra"];

const stats = [
   { label: "Highest Package", value: "24 LPA" },
   { label: "Placement Rate", value: "95%" },
   { label: "Recruiters", value: "150+" },
   { label: "Startups Incubated", value: "12" }
];

const researchStats = [
   { label: "Patents Published", value: "45+" },
   { label: "Research Grants", value: "₹12 Cr" },
   { label: "Journal Papers", value: "500+" },
   { label: "Consultancy Projects", value: "28" }
];

const testimonials = [
   { name: "Arjun Rao", role: "Alumni, Google", text: "SRIT provided me with the technical foundation and the soft skills to excel in a global tech environment." },
   { name: "Priya S.", role: "Student, CSE", text: "The research opportunities here are unmatched. I published two papers before even graduating!" },
   { name: "Dr. K. Sharma", role: "Professor", text: "Witnessing the growth of students from novices to innovators is the best part of SRIT culture." }
];

const facilities = [
   { title: "Smart Classrooms", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500" },
   { title: "Central Library", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500" },
   { title: "Robotics Lab", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=500" },
   { title: "Sports Complex", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500" }
];

const events = [
   { day: "15", month: "OCT", title: "AI & Robotics Summit", desc: "International conference with industry leaders.", time: "10:00 AM - Auditorium" },
   { day: "22", month: "OCT", title: "Hackathon 2024", desc: "24-hour coding challenge for all departments.", time: "09:00 AM - CSE Block" },
   { day: "05", month: "NOV", title: "Alumni Meet", desc: "Annual gathering of SRIT global alumni network.", time: "06:00 PM - Main Lawn" },
   { day: "18", month: "NOV", title: "Tech Expo", desc: "Showcase of student projects and innovations.", time: "11:00 AM - Exhibition Hall" }
];

const Home: React.FC = () => {
   const [activeTestimonial, setActiveTestimonial] = useState(0);

   return (
      <>
         <NoiseOverlay />
         <ScrollProgress />
         <PagePreloader />
         <FloatingActionButton />

         <div className="bg-white text-secondary-900 font-sans selection:bg-primary-500 selection:text-white pb-20 relative">


            {/* 1. HERO SECTION WITH VIDEO BACKGROUND */}
            <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-secondary-950">

               {/* Video Background */}
               <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-secondary-950/40 z-10" /> {/* Overlay for readability */}
                  <video
                     autoPlay
                     loop
                     muted
                     playsInline
                     className="w-full h-full object-cover opacity-60"
                  >
                     <source src="/video.mp4" type="video/mp4" />
                  </video>
               </div>

               <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                     className="flex flex-col items-center"
                  >
                     {/* Massive Title - Outline Style */}
                     <h1 className="font-serif font-black leading-[0.85] tracking-tighter mb-6
                        text-[8rem] md:text-[12rem] lg:text-[16rem] 
                        text-transparent [-webkit-text-stroke:2px_white] select-none z-10 
                     "
                        style={{
                           filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))'
                        }}
                     >
                        SRIT
                     </h1>

                     {/* Subtitle Separator */}
                     <div className="h-px w-96   bg-gradient-to-r from-transparent via-orange-500 to-transparent mb-6 opacity-80"></div>

                     <p className="font-sans font-bold text-orange-500   select-none z-10 uppercase tracking-[0.3em] md:tracking-[0.5em] text-xs md:text-sm lg:text-base text-center max-w-4xl leading-relaxed mb-12 drop-shadow-lg">
                        Srinivasa Ramanujan Institute of Technology
                     </p>

                     {/* Buttons */}
                     <div className="flex flex-col sm:flex-row gap-6">
                        <Link
                           to="/admissions"
                           className="group relative px-8 py-4 bg-white text-secondary-950 font-bold uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all duration-300"
                        >
                           <span className="relative z-10">Apply Now</span>
                           <div className="absolute inset-0 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                        </Link>

                        <button
                           className="group px-8 py-4 bg-transparent border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-3"
                        >
                           <Video size={18} className="text-primary-500" />
                           <span>Virtual Tour</span>
                        </button>
                     </div>

                  </motion.div>
               </div>
            </section>


            {/* 2. NEWS & UPDATES (Replaces NoticeBoard) */}
            <Suspense fallback={<SectionLoader />}>
               <NewsSection />
            </Suspense>
            {/* 3. VISION & ABOUT (PREMIUM LIGHT) */}
            <section className="py-32 relative overflow-hidden">
               {/* Background & Depth */}
               <div className="absolute inset-0 bg-orange-50/30"></div>
               <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-200/20 blur-[120px] rounded-full pointer-events-none mix-blend-multiply animate-pulse"></div>
               <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none mix-blend-multiply"></div>

               <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                  <SectionReveal className="col-span-1">
                     <div className="flex items-center gap-4 mb-6">
                        <span className="h-px w-10 bg-primary-500"></span>
                        <span className="text-primary-500 font-bold uppercase tracking-widest text-xs">The SRIT Legacy</span>
                     </div>
                     <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tight mb-8 leading-tight text-secondary-900">
                        Engineering <br />
                        <span className="text-gradient-primary">The Future.</span>
                     </h2>
                     <p className="text-xl leading-relaxed text-secondary-600 font-light mb-10 border-l-4 border-primary-500 pl-6">
                        Established in 2008, SRIT is more than an institution; it's a <span className="text-secondary-900 font-bold">crucible of innovation</span>.
                        We empower students to transcend textbooks and define the next era of technology.
                     </p>

                     <div className="flex flex-wrap gap-6">
                        <Link to="/about" className="neo-button group flex items-center gap-3">
                           Our Story <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="px-8 py-4 border-2 border-secondary-200 text-secondary-900 rounded-full font-bold uppercase tracking-widest hover:border-black hover:bg-black hover:text-white transition-all">
                           Leadership
                        </button>
                     </div>
                  </SectionReveal>

                  <div className="grid grid-cols-2 gap-6 relative">
                     {[
                        { icon: Award, title: "NAAC 'A+'", sub: "Highest Grade Accreditation" },
                        { icon: Globe, title: "Autonomous", sub: "UGC Confered Status" },
                        { icon: Users, title: "3000+", sub: "Future Leaders Enrolled" },
                        { icon: BookOpen, title: "NBA", sub: "All Tier-1 Accredited" }
                     ].map((item, i) => (
                        <SpotlightCard
                           key={i}
                           className={`bg-white/80 backdrop-blur-xl p-8 border border-white/50 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(249,115,22,0.15)] hover:border-primary-200 transition-all duration-300 group ${i % 2 !== 0 ? 'translate-y-12' : ''}`}
                        >
                           <motion.div
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              whileHover={{ y: -10 }}
                           >
                              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                 <item.icon size={28} />
                              </div>
                              <h3 className="text-3xl font-black mb-2 text-secondary-900">{item.title}</h3>
                              <p className="text-xs text-secondary-500 font-bold uppercase tracking-wider group-hover:text-primary-500 transition-colors">{item.sub}</p>
                           </motion.div>
                        </SpotlightCard>
                     ))}
                  </div>
               </div>
            </section>

            {/* 4. DEPARTMENTS GRID (BENTO STYLE) */}
            <Suspense fallback={<SectionLoader />}>
               <DepartmentsGrid />
            </Suspense>

            {/* 4.5. FACULTY SPOTLIGHT */}
            <Suspense fallback={<SectionLoader />}>
               <FacultySpotlight />
            </Suspense>

            {/* 5. HISTORY SECTION (HORIZONTAL SCROLL) */}
            <Suspense fallback={<SectionLoader />}>
               <HistorySection />
            </Suspense>




            {/* 7. RESEARCH SPOTLIGHT (NEW) */}
            <Suspense fallback={<SectionLoader />}>
               <section className="py-24 bg-white">
                  <div className="container mx-auto px-4 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
                     <SectionReveal className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-6 text-secondary-900">
                           Research & <br />Development
                        </h2>
                        <p className="text-lg text-secondary-600 mb-8 font-medium">
                           SRIT is at the forefront of technological break-throughs. Our R&D centers collaborate with ISRO, DRDO, and global industries.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                           {researchStats.map((stat, i) => (
                              <div key={i}>
                                 <AnimatedCounter
                                    end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                                    suffix={stat.value.includes('+') ? '+' : ''}
                                    prefix={stat.value.includes('₹') ? '₹' : ''}
                                    className="text-3xl font-black text-secondary-900"
                                    duration={2.5}
                                 />
                                 {stat.value.includes('Cr') && <span className="text-3xl font-black text-secondary-900"> Cr</span>}
                                 <div className="text-xs font-bold uppercase text-secondary-500 tracking-wider">{stat.label}</div>
                              </div>
                           ))}
                        </div>
                     </SectionReveal>
                     <div className="lg:w-1/2 relative">
                        <div className="grid grid-cols-2 gap-4">
                           <img src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=500" className="rounded-2xl shadow-xl mt-8" alt="Lab" loading="lazy" />
                           <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=500" className="rounded-2xl shadow-xl" alt="Research" loading="lazy" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                           <Quote size={20} className="mb-2 opacity-50" />
                           <p className="font-bold text-sm italic">"Innovation distinguishes between a leader and a follower."</p>
                        </div>
                     </div>
                  </div>
               </section>
            </Suspense>


            {/* 7.5. INDUSTRY PARTNERS */}
            <Suspense fallback={<SectionLoader />}>
               <IndustryPartners />
            </Suspense>

            {/* 7. WORLD-CLASS FACILITIES */}
            <Suspense fallback={<SectionLoader />}>
               <section className="py-24 bg-white">
                  <div className="container mx-auto px-4 md:px-12">
                     <SectionReveal className="max-w-3xl mb-16 text-center mx-auto">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-6 text-secondary-900">
                           World-Class Facilities
                        </h2>
                        <p className="text-lg text-secondary-600 font-medium">
                           State-of-the-art infrastructure designed to nurture innovation and excellence.
                        </p>
                     </SectionReveal>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facilities.map((facility, i) => (
                           <TiltCard key={i} maxTilt={10} className="group relative h-80 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                              <img src={facility.img} alt={facility.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                              <div className="absolute inset-0 bg-secondary-900/20 group-hover:bg-secondary-900/40 transition-colors duration-300"></div>
                              <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-secondary-900 to-transparent">
                                 <h3 className="text-xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{facility.title}</h3>
                                 <div className="w-12 h-1 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                              </div>
                           </TiltCard>
                        ))}
                     </div>
                  </div>
               </section>
            </Suspense>

            {/* 8. PLACEMENTS & RECRUITERS */}
            <section className="py-24 bg-secondary-900 text-white overflow-hidden">
               <div className="container mx-auto px-4 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end">
                  <div>
                     <h2 className="text-5xl font-heading font-black uppercase tracking-tighter mb-4">Placements</h2>
                     <p className="text-secondary-400 max-w-lg">Launching careers at the world's leading technology companies.</p>
                  </div>
                  <div className="hidden md:block">
                     {/* Stats moved to dedicated section */}
                  </div>
               </div>

               {/* Recruiters Marquee */}
               <div className="relative py-12 border-t border-white/10 bg-white/5">
                  <div className="flex animate-marquee whitespace-nowrap gap-20">
                     {recruiters.concat(recruiters).map((r, i) => (
                        <span key={i} className="text-4xl font-black text-white/20 uppercase hover:text-primary-500 transition-colors cursor-default">
                           {r}
                        </span>
                     ))}
                  </div>
               </div>
            </section>

            {/* 8. VIRTUAL TOUR (Full Width) */}
            <section className="relative h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center overflow-hidden group" style={{ backgroundImage: "url('/College.jpg')" }}>
               <div className="absolute inset-0 bg-secondary-900/80 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-60"></div>

               {/* Animated Circles */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[400px] h-[400px] border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="w-[600px] h-[600px] border border-white/10 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]"></div>
               </div>

               <div className="text-center relative z-10 text-white px-4">
                  <motion.span
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     className="font-bold uppercase tracking-[0.5em] text-primary-400 mb-6 block"
                  >
                     Experience the Campus
                  </motion.span>

                  <motion.h2
                     initial={{ scale: 0.9, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     className="text-7xl md:text-9xl font-heading font-black uppercase tracking-tighter mb-10 drop-shadow-2xl"
                  >
                     Virtual Tour
                  </motion.h2>

                  <motion.button
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }}
                     className="group relative inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/50 hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                  >
                     <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                     <Video size={32} className="ml-1 text-white" />
                  </motion.button>

                  <p className="mt-6 text-white/70 font-bold uppercase tracking-widest text-sm">Watch Video</p>
               </div>
            </section>


            {/* 8.2 SCHOLARSHIPS */}
            <Suspense fallback={<SectionLoader />}>
               <ScholarshipSection />
            </Suspense>

            {/* 8.5. UPCOMING EVENTS */}
            <Suspense fallback={<SectionLoader />}>
               <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
                  <div className="container mx-auto px-4 md:px-12">
                     <SectionReveal className="max-w-3xl mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-6 text-secondary-900">
                           Upcoming Events
                        </h2>
                        <p className="text-lg text-secondary-600 font-medium">
                           Join us for exciting events, workshops, and conferences that shape the future of technology.
                        </p>
                     </SectionReveal>
                     <EventTimeline events={events} />
                  </div>
               </section>
            </Suspense>

            {/* 9. CAMPUS LIFE (PARALLAX GALLERY) */}
            <Suspense fallback={<SectionLoader />}>
               <CampusGallery />
            </Suspense>

            {/* 10. TESTIMONIALS */}
            <Suspense fallback={<SectionLoader />}>
               <section className="py-24 bg-gray-50 border-y border-gray-100">
                  <div className="container mx-auto px-4 md:px-12 text-center max-w-4xl">
                     <Quote size={48} className="text-primary-500 mx-auto mb-8 opacity-50" />
                     <SpotlightCard className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 border border-white/80">
                        <div className="text-2xl md:text-4xl font-heading font-light italic leading-relaxed text-secondary-900 mb-12">
                           "{testimonials[activeTestimonial].text}"
                        </div>
                        <div>
                           <div className="font-bold text-lg uppercase tracking-wide text-secondary-900">{testimonials[activeTestimonial].name}</div>
                           <div className="text-sm font-bold text-primary-500 uppercase tracking-widest">{testimonials[activeTestimonial].role}</div>
                        </div>
                     </SpotlightCard>
                     <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                           <button
                              key={i}
                              onClick={() => setActiveTestimonial(i)}
                              className={`w-3 h-3 rounded-full transition-all ${activeTestimonial === i ? 'bg-primary-500 w-8' : 'bg-gray-300'}`}
                           />
                        ))}
                     </div>
                  </div>
               </section>
            </Suspense>


            {/* 11. FAQ SECTION */}
            <Suspense fallback={<SectionLoader />}>
               <FAQSection />
            </Suspense>

            {/* 11. CONTACT & MAP (CYBER COMMAND CENTER) */}
            <Suspense fallback={<SectionLoader />}>
               <CyberMap />
            </Suspense>
         </div>
      </>
   );
};

export default Home;
