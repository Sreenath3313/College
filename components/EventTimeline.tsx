import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
    day: string;
    month: string;
    title: string;
    desc: string;
    time: string;
}

interface EventTimelineProps {
    events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-orange-400 to-transparent" />

            <div className="space-y-12">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } flex-row`}
                    >
                        {/* Date Badge */}
                        <div className="flex-shrink-0 w-20 md:w-1/2 flex justify-start md:justify-center">
                            <div className="relative z-10 flex flex-col items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-orange-400 rounded-2xl shadow-lg text-white">
                                <div className="text-2xl font-black leading-none">{event.day}</div>
                                <div className="text-xs font-bold uppercase tracking-wider">{event.month}</div>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-4 border-primary-500 hidden md:block" />
                            </div>
                        </div>

                        {/* Event Card */}
                        <div className="flex-1 ml-6 md:ml-0 md:px-12">
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:border-primary-200 transition-all"
                            >
                                <h3 className="text-2xl font-black text-secondary-900 mb-2">{event.title}</h3>
                                <p className="text-secondary-600 mb-4">{event.desc}</p>
                                <div className="flex items-center gap-4 text-sm text-secondary-500">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} className="text-primary-500" />
                                        <span>{event.time}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EventTimeline;
