import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className="relative min-h-screen bg-slate-950 text-white">
            {/* Global Grid Pattern Background */}
            <div className="fixed inset-0 pointer-events-none opacity-30 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[42px_42px]" />

            <div className="relative z-10">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;