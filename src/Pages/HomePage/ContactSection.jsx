import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

const ContactSection = () => {
    return (
        <section id="contact" className="py-24 lg:py-32 text-white">
            <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Let's Build Something Great</h2>
                    <p className="text-slate-300 max-w-lg">
                        Feel free to reach out for consulting, collaboration, or project inquiries. I usually respond within 24 hours.
                    </p>
                </div>
                <form className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-950/65 p-5 sm:p-6 backdrop-blur-md shadow-2xl shadow-blue-950/20">
                    <input className="w-full p-3.5 bg-slate-800/90 rounded-lg border border-slate-700 outline-none focus:border-blue-500" placeholder="Your Name" />
                    <input className="w-full p-3.5 bg-slate-800/90 rounded-lg border border-slate-700 outline-none focus:border-blue-500" placeholder="Your Email" />
                    <textarea className="w-full p-3.5 bg-slate-800/90 rounded-lg border border-slate-700 outline-none focus:border-blue-500" placeholder="Message" rows={4} />
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                        <FaPaperPlane size={13} />
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;