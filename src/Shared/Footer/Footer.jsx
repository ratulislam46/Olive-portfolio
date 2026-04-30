import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
        { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    ];

    return (
        <footer className="bg-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="md:flex justify-between gap-10">
                    <div className="sm:col-span-2">
                        <h3 className="text-2xl font-bold text-white">Engr. Abdur Rahman</h3>
                        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                            I build modern, scalable, and user-focused web experiences. Let's collaborate
                            to turn ideas into impactful digital products.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mt-4 md:mt-0">Contact</h4>
                        <ul className="mt-4 space-y-3 text-sm text-slate-300">
                            <li className="flex items-center gap-2">
                                <MdEmail size={16} className="text-blue-400" />
                                <a href="mailto:hello@example.com" className="hover:text-blue-400 transition-colors duration-200">
                                    engrabdurrahman12@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhoneAlt size={14} className="text-blue-400" />
                                <a href="tel:+8801700000000" className="hover:text-blue-400 transition-colors duration-200">
                                    +880 1700-000000
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <FaMapMarkerAlt size={14} className="text-blue-400" />
                                <span>Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <p className="text-xs sm:text-sm text-slate-400 text-center md:text-left">
                        Copyright {currentYear} Engr. Abdur Rahman. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="h-9 w-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-blue-400 hover:border-blue-400 transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;