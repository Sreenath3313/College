import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
   ChevronRight, Phone, Mail, MapPin, Download, Award,
   Calendar, Users, BookOpen, Monitor, Cpu, Zap, Settings,
   FlaskConical, Globe, Linkedin, ArrowRight, Quote, GraduationCap, Briefcase, Lightbulb
} from 'lucide-react';

// -- DATA --
const deptData: Record<string, any> = {
   cse: {
      name: "Computer Science & Engineering",
      code: "CSE",
      est: "2008",
      vision: "To be a center of excellence in AI & Computing.",
      heroImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      color: "from-blue-600 to-cyan-400",
      accent: "text-blue-500",
      stats: [
         { label: "Students", value: "720+" },
         { label: "Faculty", value: "45" },
         { label: "Labs", value: "12" },
         { label: "Placement", value: "98%" }
      ],
      overview: "The CSE department leads the way in digital transformation. Our curriculum covers the full spectrum of computing, from theoretical algorithms to practical application development in AI, Cloud, and Blockchain.",
      history: "The Department of Computer Science & Engineering was established in the year 2008 with an intake of 60 students. It has since grown to become one of the largest departments in the institute with an intake of 180 students. The department has a rich history of academic excellence and has produced numerous university rank holders.",
      contact: {
         phone: "+91 98765 43210",
         email: "hod.cse@srit.edu.in",
         address: "Block A, 2nd Floor, SRIT Campus"
      },
      nba: {
         status: "Accredited",
         validUntil: "2026-27"
      },
      dab: [
         { role: "Chairperson", name: "Dr. S. Ramesh", designation: "HOD, CSE" },
         { role: "Industry Member", name: "Mr. V. Kumar", designation: "Director, Oracle India" },
         { role: "Academic Member", name: "Dr. P. Rao", designation: "Professor, IIT Hyderabad" }
      ],
      paqic: [
         { role: "Coordinator", name: "Prof. K. Verma", designation: "Associate Professor" },
         { role: "Member", name: "Dr. R. Gupta", designation: "Assistant Professor" }
      ],
      cet: [
         { role: "Subject Expert", name: "Dr. A. Sharma", designation: "Professor" },
         { role: "Module Lead", name: "Mrs. L. Devi", designation: "Sr. Assistant Professor" }
      ],
      integrity: [
         { role: "Chair", name: "Dr. S. Ramesh", designation: "HOD" },
         { role: "Member", name: "Dr. A. Sharma", designation: "Professor" }
      ],
      committees: [
         { role: "Discipline", name: "Dr. P. Singh", designation: "Associate Professor" },
         { role: "Events", name: "Mrs. R. Reddy", designation: "Assistant Professor" }
      ],
      hod: {
         name: "Dr. S. Ramesh",
         img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
         msg: "We are shaping the architects of the digital world. Our students don't just write code; they solve complex global problems."
      },
      labs: [
         { name: "AI & Deep Learning", desc: "NVIDIA DGX Workstations for Model Training", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800" },
         { name: "IoT & Embedded", desc: "Smart City prototyping kits", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
         { name: "Cloud Computing", desc: "AWS & Azure Sandbox Environment", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" }
      ],
      research_facilities: [
         { name: "Big Data Cluster", desc: "Hadoop & Spark Cluster for large scale data processing", img: "https://images.unsplash.com/photo-1558494949-ef2bb6affa27?q=80&w=800" },
         { name: "Cyber Security Range", desc: "Isolated network for penetration testing", img: "https://images.unsplash.com/photo-1563206767-5b1d972d9fb7?q=80&w=800" }
      ],
      supervisors: [
         { name: "Dr. A. Sharma", spec: "Data Science, Machine Learning" },
         { name: "Dr. S. Ramesh", spec: "Network Security, Blockchain" }
      ],
      honours: [
         { name: "Honours in AI & ML", desc: "Advanced specialization with 18 additional credits in Artificial Intelligence." },
         { name: "Minor in Data Science", desc: "Open to other branches to gain expertise in Data Analytics." }
      ],
      tools: ["Python", "Java", "C++", "TensorFlow", "React", "Node.js", "Docker", "Kubernetes", "AWS", "Git"],
      aat: {
         desc: "We employ continuous assessment through coding marathons, project-based learning, and open-book examinations to test practical knowledge."
      },
      roll_honour: [
         { name: "K. Sai Teja", year: "2023", achievement: "University Gold Medalist" },
         { name: "P. Anjali", year: "2022", achievement: "Best Outgoing Student" }
      ],
      achievements: [
         { title: "Smart India Hackathon Winners", year: "2023", desc: "First prize in the Software Edition for 'AI for Accessibility'." },
         { title: "Best Research Paper", year: "2023", desc: "Awarded at IEEE International Conference for work on Quantum Cryptography." }
      ],
      faculty: [
         {
            id: 1,
            name: "Dr. A. Sharma",
            role: "Professor & Dean",
            qualification: "Ph.D from IIT Madras",
            experience: "15 Years",
            spec: "Data Science & Big Data Analytics",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
            quote: "Data is the new oil. We teach students how to refine it into insights that drive the world.",
            email: "sharma.cse@srit.edu.in"
         },
         {
            id: 2,
            name: "Prof. K. Verma",
            role: "Associate Professor",
            qualification: "M.Tech from NIT Warangal",
            experience: "12 Years",
            spec: "Cyber Security & Cryptography",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
            quote: "Security is not an afterthought; it's the foundation of modern digital trust.",
            email: "verma.cse@srit.edu.in"
         },
         {
            id: 3,
            name: "Dr. R. Gupta",
            role: "Assistant Professor",
            qualification: "Ph.D from IIIT Hyderabad",
            experience: "8 Years",
            spec: "Artificial Intelligence & NLP",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400",
            quote: "AI is augmenting human intelligence, helping us solve problems previously thought impossible.",
            email: "gupta.cse@srit.edu.in"
         },
         {
            id: 4,
            name: "Mrs. L. Devi",
            role: "Sr. Assistant Professor",
            qualification: "M.Tech from JNTUA",
            experience: "10 Years",
            spec: "Cloud Computing",
            img: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f43?q=80&w=400",
            email: "devi.cse@srit.edu.in"
         }
      ]
   },
   ece: {
      name: "Electronics & Comm. Engineering",
      code: "ECE",
      est: "2008",
      vision: "Innovating the future of communication systems.",
      heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
      color: "from-orange-600 to-red-500",
      accent: "text-orange-500",
      stats: [
         { label: "Students", value: "480+" },
         { label: "Faculty", value: "32" },
         { label: "Labs", value: "10" },
         { label: "Placement", value: "94%" }
      ],
      overview: "ECE spans the world of hardware and software. From designing microchips to building 5G networks, our students are at the core of the hardware revolution.",
      hod: {
         name: "Dr. P. Kumar",
         img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300",
         msg: "Electronics is the nervous system of the modern world. We empower students to build faster, smaller, and smarter devices."
      },
      labs: [
         { name: "VLSI Design", desc: "Cadence & Synopsys Tools", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" },
         { name: "Robotics", desc: "Industrial Arms & Automation", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=800" },
         { name: "Signal Proc.", desc: "MATLAB & DSP Kits", img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800" }
      ],
      faculty: [
         {
            id: 1,
            name: "Dr. B. Reddy",
            role: "Professor",
            qualification: "Ph.D from IISc Bangalore",
            experience: "20 Years",
            spec: "VLSI Design & Embedded Systems",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
            quote: "We are designing the chips that will power the next generation of computing.",
            email: "reddy.ece@srit.edu.in"
         },
         {
            id: 2,
            name: "Prof. M. Rao",
            role: "Associate Professor",
            qualification: "M.Tech from JNTU",
            experience: "14 Years",
            spec: "Wireless Communications",
            img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400",
            quote: "Connecting people through waves, one signal at a time.",
            email: "rao.ece@srit.edu.in"
         }
      ]
   },
   eee: {
      name: "Electrical & Electronics Engineering",
      code: "EEE",
      est: "2009",
      vision: "Powering a sustainable future.",
      heroImg: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2000",
      color: "from-yellow-500 to-orange-600",
      accent: "text-yellow-600",
      stats: [
         { label: "Students", value: "240+" },
         { label: "Faculty", value: "20" },
         { label: "Labs", value: "8" },
         { label: "Placement", value: "90%" }
      ],
      overview: "EEE focuses on the generation, transmission, and utilization of electrical energy. We emphasize renewable energy, smart grids, and electric vehicle technology.",
      hod: {
         name: "Dr. V. Lakshmi",
         img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
         msg: "The future is electric. We are training engineers to solve the world's energy crisis."
      },
      labs: [
         { name: "Power Systems", desc: "Grid Simulation Units", img: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=800" },
         { name: "Control Systems", desc: "PLC & SCADA", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=800" },
         { name: "Renewable Energy", desc: "Solar & Wind Simulators", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800" }
      ],
      faculty: [
         {
            id: 1,
            name: "Dr. K. Murthy",
            role: "Professor",
            qualification: "Ph.D from IIT Bombay",
            experience: "18 Years",
            spec: "Power Systems & Smart Grids",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
            quote: "Electricity is the lifeblood of modern civilization. We ensure it flows efficiently.",
            email: "murthy.eee@srit.edu.in"
         }
      ]
   },
   mech: {
      name: "Mechanical Engineering",
      code: "MECH",
      est: "2009",
      vision: "Driving innovation in mechanics and automation.",
      heroImg: "https://images.unsplash.com/photo-1537462713205-e512641bf318?q=80&w=2000",
      color: "from-slate-600 to-zinc-500",
      accent: "text-slate-600",
      stats: [
         { label: "Students", value: "240+" },
         { label: "Faculty", value: "25" },
         { label: "Labs", value: "14" },
         { label: "Placement", value: "88%" }
      ],
      overview: "Mechanical Engineering is the evergreen branch. We combine traditional thermodynamics and mechanics with modern robotics, 3D printing, and automation.",
      hod: {
         name: "Dr. T. Rao",
         img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
         msg: "From micro-machines to massive engines, we build the physical world."
      },
      labs: [
         { name: "Robotics & Automation", desc: "Industrial Fanuc Robots", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" },
         { name: "CAD/CAM", desc: "SolidWorks & ANSYS", img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800" },
         { name: "Thermal Engg", desc: "IC Engines & Heat Transfer", img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=800" }
      ],
      faculty: [
         {
            id: 1,
            name: "Dr. S. Reddy",
            role: "Professor",
            qualification: "Ph.D from NIT Trichy",
            experience: "16 Years",
            spec: "Thermal Engineering",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
            quote: "Thermodynamics governs the universe, and we apply it to build better engines.",
            email: "reddy.mech@srit.edu.in"
         }
      ]
   },
   default: {
      name: "Department of Engineering",
      code: "DEPT",
      est: "2008",
      vision: "Excellence in Engineering Education.",
      heroImg: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000",
      color: "from-gray-600 to-gray-400",
      accent: "text-gray-600",
      stats: [
         { label: "Students", value: "300+" },
         { label: "Faculty", value: "20+" },
         { label: "Labs", value: "5+" },
         { label: "Placement", value: "85%" }
      ],
      overview: "This department is dedicated to providing high-quality technical education and fostering research.",
      hod: {
         name: "Head of Department",
         img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
         msg: "Welcome to our department. We are committed to student success."
      },
      labs: [],
      faculty: []
   }
};

const Department: React.FC = () => {
   const { id } = useParams<{ id: string }>();
   const [activeTab, setActiveTab] = useState("overview");
   const dept = deptData[id?.toLowerCase() || ''] || deptData['default'];

   // State for Faculty Split View
   const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
   const [showAllFaculty, setShowAllFaculty] = useState(false);

   // HOD needs to be formatted like a faculty member to work in the hero card
   const hodProfile = {
      id: "hod",
      name: dept.hod.name,
      role: "Head of Department & Professor",
      qualification: "Ph.D from Top Tier Institute", // Placeholder if not in data
      experience: "25+ Years",
      spec: "Department Leadership & Core Research",
      img: dept.hod.img,
      quote: dept.hod.msg,
      email: `hod.${dept.code.toLowerCase()}@srit.edu.in`
   };

   // Merge HOD into the list for easy selection? Or keep separate?
   // Let's create a derived full list
   const allFaculty = [hodProfile, ...dept.faculty];
   const visibleFaculty = showAllFaculty ? allFaculty : allFaculty.slice(0, 4);

   // Set default faculty when tab/dept changes
   useEffect(() => {
      setSelectedFaculty(hodProfile);
   }, [id, dept]);

   const handleViewHOD = () => {
      setActiveTab("faculty");
      setSelectedFaculty(hodProfile);
      window.scrollTo({ top: 800, behavior: 'smooth' }); // Scroll efficiently
   };

   // Derive contact info with safe fallbacks
   const contactInfo = dept.contact || { phone: "+91 95055 05566", email: `info@srit.edu.in`, address: "SRIT Campus" };

   // Derive stats with safe checks
   const placementStat = dept.stats?.[3]?.value || "90%";

   // Helper for list data
   const getList = (key: string) => Array.isArray(dept[key]) ? dept[key] : [];

   // Custom theme colors based on department
   const themeGradient = `bg-gradient-to-r ${dept.color}`;

   const tabs = [
      { id: "overview", label: "Overview" },
      { id: "faculty", label: "Faculty" },
      { id: "labs", label: "Laboratories" },
      { id: "projects", label: "Student Projects" },
      { id: "achievements", label: "Achievements" },
      { id: "placements", label: "Placements" }
   ];

   return (
      <div className="bg-secondary-50 min-h-screen pb-20">

         {/* 1. CINEMATIC HERO */}
         <div className="relative h-[60vh] overflow-hidden">
            <div className="absolute inset-0">
               <img src={dept.heroImg} alt={dept.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-secondary-950/80 mix-blend-multiply" />
               <div className={`absolute inset-0 bg-gradient-to-t from-secondary-950 via-transparent to-transparent`} />
            </div>

            <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-20">
               <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
               >
                  <span className={`inline-block px-4 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest`}>
                     Department of
                  </span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-6">
                     {dept.name}
                  </h1>
                  <div className="flex flex-wrap gap-6 text-white/80 font-medium text-sm md:text-base">
                     <span className="flex items-center gap-2"><Calendar size={18} className="text-primary-500" /> Est. {dept.est}</span>
                     <span className="flex items-center gap-2"><Award size={18} className="text-primary-500" /> NBA Accredited</span>
                     <span className="flex items-center gap-2"><BookOpen size={18} className="text-primary-500" /> B.Tech & M.Tech</span>
                  </div>
               </motion.div>
            </div>
         </div>

         {/* 2. FLOATING STATS */}
         <div className="container mx-auto px-6 -mt-16 relative z-20 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {dept.stats.map((stat: any, i: number) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.5 + (i * 0.1), ease: 'easeOut' }}
                     className="bg-white/90 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-lg text-center"
                  >
                     <div className={`text-3xl md:text-4xl font-heading font-black ${dept.accent}`}>{stat.value}</div>
                     <div className="text-xs font-bold text-secondary-500 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* 3. MAIN CONTENT WITH TABS */}
         <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12">

            {/* Sidebar (Quick Info) */}
            <div className="lg:w-1/4">
               <div className="sticky top-28 space-y-8">
                  {/* HOD Widget */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 text-center group cursor-pointer hover:shadow-md transition-all" onClick={handleViewHOD}>
                     <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-primary-500 to-orange-400 mb-4 group-hover:scale-105 transition-transform">
                        <img src={dept.hod.img} alt={dept.hod.name} className="w-full h-full rounded-full object-cover border-2 border-white" />
                     </div>
                     <h3 className="font-bold text-lg text-secondary-900 group-hover:text-primary-600 transition-colors">{dept.hod.name}</h3>
                     <p className="text-xs font-bold text-primary-500 uppercase mb-4">Head of Department</p>
                     <p className="text-secondary-500 text-sm italic mb-4 line-clamp-2">"{dept.hod.msg}"</p>
                     <button className="w-full py-2 rounded-lg bg-secondary-50 text-secondary-900 text-xs font-bold uppercase group-hover:bg-secondary-900 group-hover:text-white transition-colors">
                        View Full Profile
                     </button>
                  </div>

                  {/* Contact Widget */}
                  <div className={`p-6 rounded-2xl shadow-lg text-white ${themeGradient}`}>
                     <h4 className="font-bold text-lg mb-4">Contact Dept</h4>
                     <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                           <MapPin size={18} className="shrink-0 opacity-80" />
                           <span>Block A, SRIT Campus</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Phone size={18} className="shrink-0 opacity-80" />
                           <span>{contactInfo.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <Mail size={18} className="shrink-0 opacity-80" />
                           <span>{contactInfo.email}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* Tabbed Content Area */}
            <div className="lg:w-3/4">
               {/* Tabs Navigation */}
               <div className="flex flex-wrap gap-2 mb-8 border-b border-secondary-200 pb-4">
                  {tabs.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === tab.id
                           ? 'bg-secondary-900 text-white shadow-lg'
                           : 'bg-white text-secondary-500 hover:bg-secondary-100'
                           }`}
                     >
                        {tab.label}
                     </button>
                  ))}
               </div>

               {/* Tab Content */}
               <AnimatePresence mode='wait'>
                  <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                  >
                     {activeTab === 'overview' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-heading font-bold text-secondary-900 uppercase">Vision & Mission</h2>
                           <p className="text-lg text-secondary-600 leading-loose">
                              {dept.overview}
                           </p>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                              <div className="bg-white p-8 rounded-2xl border-l-4 border-primary-500 shadow-sm">
                                 <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Globe size={20} className="text-primary-500" /> Vision</h3>
                                 <p className="text-secondary-600">{dept.vision}</p>
                              </div>
                              <div className="bg-white p-8 rounded-2xl border-l-4 border-secondary-800 shadow-sm">
                                 <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Award size={20} className="text-secondary-800" /> Mission</h3>
                                 <p className="text-secondary-600">To foster innovation and produce globally competent engineers.</p>
                              </div>
                           </div>
                        </div>
                     )}

                     {activeTab === 'labs' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-black text-secondary-900 uppercase">Advanced Laboratories</h2>
                           <div className="grid grid-cols-1 gap-8">
                              {getList('labs').map((lab: any, i: number) => (
                                 <div key={i} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                                    <img src={lab.img} alt={lab.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                    <div className="absolute bottom-0 left-0 p-8">
                                       <h3 className="text-2xl font-bold text-white mb-2">{lab.name}</h3>
                                       <p className="text-secondary-300">{lab.desc}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* -- FACULTY SECTION -- */}
                     {activeTab === 'faculty' && selectedFaculty && (
                        <div>
                           <div className="flex justify-between items-end mb-8">
                              <h2 className="text-3xl font-black text-secondary-900 uppercase">Faculty Profiles</h2>
                           </div>

                           <div className="flex flex-col xl:flex-row gap-8">
                              {/* Left: Hero Card (Existing Code) */}
                              <motion.div
                                 key={selectedFaculty.id}
                                 initial={{ opacity: 0, x: -50 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ duration: 0.6, ease: "easeOut" }}
                                 className="flex-1 bg-white rounded-3xl overflow-hidden shadow-2xl border border-secondary-100 flex flex-col md:flex-row min-h-[500px]"
                              >
                                 <div className="md:w-2/5 relative">
                                    <img src={selectedFaculty.img} alt={selectedFaculty.name} className="w-full h-full object-cover absolute inset-0 md:bg-gray-100" />
                                    <div className="absolute top-4 right-4">
                                       <span className="px-4 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                                          {(selectedFaculty.id === "hod") && <Award size={12} />}
                                          {(selectedFaculty.id === "hod") ? "HOD" : "Featured"}
                                       </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-secondary-950/30"></div>
                                 </div>

                                 <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center relative bg-orange-50/10">
                                    <Award className="absolute top-10 right-10 text-secondary-100/50 w-48 h-48 -z-0 pointer-events-none rotate-12" />
                                    <div className="relative z-10 space-y-6">
                                       <div>
                                          <div className="flex items-center gap-2 text-primary-500 font-bold text-xs uppercase tracking-widest mb-2">
                                             <Users size={14} /> Distinguished Academician
                                          </div>
                                          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary-900 uppercase leading-tight mb-2">
                                             {selectedFaculty.name}
                                          </h2>
                                          <div className="flex flex-col gap-2 text-secondary-600 font-medium border-b border-secondary-100 pb-4">
                                             <span className="flex items-center gap-2"><Briefcase size={16} className="text-secondary-400" /> {selectedFaculty.role}</span>
                                             <span className="flex items-center gap-2"><GraduationCap size={16} className="text-secondary-400" /> {selectedFaculty.qualification}</span>
                                          </div>
                                       </div>
                                       <div className="bg-white rounded-xl p-5 border border-secondary-100 shadow-sm relative overflow-hidden group">
                                          <div className="absolute top-0 right-0 w-16 h-16 bg-primary-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary-100 transition-colors"></div>
                                          <h4 className="font-bold text-secondary-900 text-xs uppercase tracking-wider mb-2 text-primary-600">Area of Expertise</h4>
                                          <p className="text-secondary-800 font-bold text-lg leading-tight">{selectedFaculty.spec}</p>
                                       </div>
                                       {selectedFaculty.quote && (
                                          <div className="relative">
                                             <Quote className="absolute -top-2 -left-2 text-secondary-200 w-8 h-8 rotate-180" />
                                             <blockquote className="text-secondary-500 italic pl-8 py-1 leading-relaxed text-sm">
                                                "{selectedFaculty.quote}"
                                             </blockquote>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </motion.div>

                              {/* Right: List (Existing Code) */}
                              <div className="xl:w-80 flex flex-col gap-4">
                                 <div className="text-xs font-bold uppercase tracking-widest text-secondary-400 mb-2 px-2 flex justify-between items-center">
                                    <span>Faculty Directory</span>
                                 </div>
                                 <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                    {visibleFaculty.map((member: any) => (
                                       <button
                                          key={member.id}
                                          onClick={() => setSelectedFaculty(member)}
                                          className={`bg-white p-3 rounded-xl border transition-all flex items-center gap-3 text-left group
                                              ${selectedFaculty.id === member.id
                                                ? 'border-primary-500 ring-1 ring-primary-100 shadow-md bg-orange-50/30'
                                                : 'border-white hover:border-secondary-200 hover:shadow-sm'
                                             }`}
                                       >
                                          <img src={member.img} alt={member.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                                          <div className="flex-1 min-w-0">
                                             <div className={`font-bold text-sm truncate ${selectedFaculty.id === member.id ? 'text-primary-600' : 'text-secondary-900'}`}>
                                                {member.name}
                                             </div>
                                             <div className="text-[10px] uppercase font-bold text-secondary-400 truncate mt-0.5 group-hover:text-secondary-500 transition-colors">
                                                {member.role.split(' & ')[0]}
                                             </div>
                                          </div>
                                       </button>
                                    ))}
                                 </div>
                                 {allFaculty.length > 4 && (
                                    <button
                                       onClick={() => setShowAllFaculty(!showAllFaculty)}
                                       className="mt-2 bg-gradient-to-r from-secondary-100 to-white hover:from-primary-50 hover:to-white p-4 rounded-xl text-secondary-600 flex items-center justify-between group hover:shadow-md transition-all border border-secondary-200 hover:border-primary-200"
                                    >
                                       <span className="font-bold text-sm uppercase tracking-wider group-hover:text-primary-600 transition-colors">
                                          {showAllFaculty ? "Show Less" : "View All Faculty"}
                                       </span>
                                       <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all shadow-sm ${showAllFaculty ? 'rotate-180' : ''}`}>
                                          <ChevronRight size={14} className="rotate-90" />
                                       </div>
                                    </button>
                                 )}
                              </div>
                           </div>
                        </div>
                     )}

                     {/* -- NEW: STUDENT PROJECTS SECTION -- */}
                     {activeTab === 'projects' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-black text-secondary-900 uppercase">Interactive Student Projects</h2>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {[
                                 {
                                    title: "AI Traffic Control Prototype",
                                    desc: "An intelligent traffic management system using computer vision to reduce congestion in real-time.",
                                    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800",
                                    team: "Team Alpha (Year 4)"
                                 },
                                 {
                                    title: "Smart Agriculture Drone",
                                    desc: "Autonomous drone for monitoring crop health and automated pesticide spraying.",
                                    img: "https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?q=80&w=800",
                                    team: "GreenTech Squad (Year 3)"
                                 },
                                 {
                                    title: "Blockchain Voting System",
                                    desc: "A decentralized, tamper-proof voting application ensuring 100% transparency.",
                                    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
                                    team: "CryptoNodes (Year 4)"
                                 },
                                 {
                                    title: "Gesture Controlled Robot",
                                    desc: "A robotic arm that mimics human hand gestures using IoT sensors.",
                                    img: "https://images.unsplash.com/photo-1535378437327-1e8be8d59b2f?q=80&w=800",
                                    team: "MechWizards (Year 2)"
                                 }
                              ].map((project, i) => (
                                 <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-secondary-100 hover:shadow-2xl transition-all duration-300">
                                    <div className="h-48 overflow-hidden relative">
                                       <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary-600">
                                          {project.team}
                                       </div>
                                    </div>
                                    <div className="p-8">
                                       <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                                       <p className="text-secondary-500 mb-6 line-clamp-2">{project.desc}</p>
                                       <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-secondary-900 group-hover:text-primary-500 transition-colors">
                                          View Project Details <ArrowRight size={16} />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* -- NEW: ACHIEVEMENTS SECTION -- */}
                     {activeTab === 'achievements' && (
                        <div className="space-y-8">
                           <h2 className="text-3xl font-black text-secondary-900 uppercase">Department Achievements</h2>

                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {(getList('achievements').length > 0 ? getList('achievements') : [
                                 { title: "Smart India Hackathon Winners", year: "2023", desc: "First prize in the Software Edition for 'AI for Accessibility'." },
                                 { title: "Best Research Paper", year: "2023", desc: "Awarded at IEEE International Conference for work on Quantum Cryptography." }
                              ]).map((item: any, i: number) => (
                                 <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary-500 mb-6">
                                       <Award size={24} />
                                    </div>
                                    <div className="flex justify-between items-start mb-2">
                                       <h3 className="font-bold text-lg text-secondary-900 leading-tight">{item.title}</h3>
                                       <span className="bg-secondary-100 text-secondary-600 text-[10px] font-bold px-2 py-1 rounded uppercase">{item.year}</span>
                                    </div>
                                    <p className="text-secondary-500 text-sm mt-3">{item.desc}</p>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {activeTab === 'placements' && (
                        <div>
                           <h2 className="text-3xl font-black text-secondary-900 uppercase mb-8">Placement Records</h2>
                           <div className="bg-secondary-900 text-white p-10 rounded-3xl relative overflow-hidden mb-8">
                              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                 <div>
                                    <div className="text-6xl font-black text-primary-500 mb-2">{placementStat}</div>
                                    <div className="text-xl font-bold">Students Placed this Year</div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-4xl font-bold mb-1">42 LPA</div>
                                    <div className="text-secondary-400 text-sm uppercase tracking-widest">Highest Package</div>
                                 </div>
                              </div>
                              {/* Decorative Circle */}
                              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
                           </div>
                           <h3 className="font-bold text-secondary-900 uppercase tracking-widest text-sm mb-4">Top Recruiters</h3>
                           <div className="flex flex-wrap gap-3">
                              {["Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Accenture"].map((company, i) => (
                                 <span key={i} className="px-5 py-2 bg-white border border-secondary-200 rounded-full text-secondary-600 font-bold text-sm">
                                    {company}
                                 </span>
                              ))}
                           </div>
                        </div>
                     )}

                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
};

export default Department;