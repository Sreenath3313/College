import React from 'react';
import { FileText, Phone, GraduationCap } from 'lucide-react';

const FloatingActions: React.FC = () => {
    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            <button className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-700 transition-colors" aria-label="Contact Us">
                <Phone size={24} />
            </button>
            <button className="bg-white text-orange-600 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors" aria-label="Brochure">
                <FileText size={24} />
            </button>
            <button className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors" aria-label="Admissions">
                <GraduationCap size={24} />
            </button>
        </div>
    );
};

export default FloatingActions;
