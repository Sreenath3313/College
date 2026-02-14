import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-4xl font-black tracking-tighter text-white">SRIT</span>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed">
              Srinivasa Ramanujan Institute of Technology is dedicated to fostering innovation and excellence in engineering education.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary-900 flex items-center justify-center text-secondary-400 hover:bg-primary-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500">Quick Links</h4>
            <ul className="space-y-4 text-secondary-300 text-sm">
              {['About Us', 'Admissions', 'Departments', 'Placements', 'Alumni', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-primary-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500">Programs</h4>
            <ul className="space-y-4 text-secondary-300 text-sm">
              {['Computer Science', 'Electronics & Comm', 'Electrical Engg', 'Civil Engineering', 'Mechanical Engg', 'Artificial Intelligence'].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-primary-500 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-primary-500">Stay Updated</h4>
            <p className="text-secondary-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-secondary-900 border border-secondary-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="bg-primary-500 text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-xs">
            © {new Date().getFullYear()} SRIT. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-secondary-500">
            <a href="#" className="hover:text-primary-500">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500">Terms of Service</a>
            <a href="#" className="hover:text-primary-500">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;