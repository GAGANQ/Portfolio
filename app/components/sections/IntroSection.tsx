'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroSection() {
    const [fallingTerms, setFallingTerms] = useState<Array<{
        id: number;
        term: string;
        left: number;
        duration: number;
        delay: number;
    }>>([]);

    useEffect(() => {
        const accountingTerms = [
            'DEBIT', 'CREDIT', 'AP', 'AR', 'GL', 'GAAP',
            '$1,234.56', 'ROI', 'ERP', 'SAP', 'DYNAM', '365',
            'TAX', 'AUDIT', 'LEDGER', 'ACCR', 'PAYROLL',
            '100%', 'EXCEL', 'SQL', 'BI', 'GP', 'RECON'
        ];

        const terms = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            term: accountingTerms[Math.floor(Math.random() * accountingTerms.length)],
            left: Math.random() * 100,
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
        }));

        setFallingTerms(terms);
    }, []);

    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black">
            {/* Falling number rain background */}
            <div className="absolute inset-0 opacity-20">
                {fallingTerms.map((item) => (
                    <motion.div
                        key={item.id}
                        className="absolute top-0 font-mono text-green-500 text-sm font-bold"
                        style={{ left: `${item.left}%` }}
                        animate={{
                            y: ['-100%', '100vh'],
                        }}
                        transition={{
                            duration: item.duration,
                            repeat: Infinity,
                            delay: item.delay,
                            ease: 'linear',
                        }}
                    >
                        {item.term}
                    </motion.div>
                ))}
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 w-full max-w-7xl px-12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {/* Ledger entry animation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8 font-mono text-green-400/60 text-sm"
                    >
                        <div className="flex items-center gap-4 mb-2">
                            <span>Entry #001</span>
                            <span className="text-gray-600">|</span>
                            <span suppressHydrationWarning>{typeof window !== 'undefined' ? new Date().toLocaleDateString() : '2025-11-22'}</span>
                        </div>
                        <div className="h-px bg-green-500/20 my-4" />
                    </motion.div>

                    {/* Name with typewriter effect */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-7xl md:text-8xl font-bold mb-6 font-mono"
                    >
                        <span className="text-white">Gagandeep</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                            Dhaliwal
                        </span>
                    </motion.h1>

                    {/* Accounting equation as tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mb-8 p-6 bg-green-500/5 border border-green-500/20 rounded-lg backdrop-blur-sm"
                    >
                        <div className="font-mono text-lg text-green-300 flex items-center gap-3 flex-wrap">
                            <span className="text-white font-bold">Assets</span>
                            <span className="text-green-400">=</span>
                            <span className="text-white font-bold">Liabilities</span>
                            <span className="text-green-400">+</span>
                            <span className="text-white font-bold">Equity</span>
                        </div>
                        <div className="mt-3 text-sm text-gray-400 font-mono">
              // Financial Systems Analyst & ERP Administrator
                        </div>
                    </motion.div>

                    {/* Stats cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3, duration: 0.8 }}
                        className="grid grid-cols-3 gap-4 mb-8"
                    >
                        {[
                            { label: 'Experience', value: '5+', unit: 'Years' },
                            { label: 'Proficiency', value: '95', unit: '%' },
                            { label: 'Projects', value: '50+', unit: 'Completed' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 bg-black/50 border border-green-500/20 rounded-lg backdrop-blur-sm group hover:border-green-400/40 transition-all duration-300"
                                data-interactive
                            >
                                <div className="font-mono text-3xl font-bold text-green-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">
                                    {stat.unit}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Skills tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex flex-wrap gap-2"
                    >
                        {['Dynamics 365', 'SAP', 'Power BI', 'SQL', 'Excel', 'AP/AR', 'Payroll', 'GAAP'].map(
                            (skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/30 rounded hover:bg-green-500/20 transition-colors duration-200"
                                    data-interactive
                                >
                                    {skill}
                                </span>
                            )
                        )}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9, duration: 0.5 }}
                        className="mt-12 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-mono text-lg group"
                        data-interactive
                        onClick={() => {
                            const container = document.querySelector('[class*="overflow-x-auto"]');
                            if (container) {
                                container.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
                            }
                        }}
                    >
                        <span className="flex items-center gap-2">
                            BEGIN AUDIT TRAIL
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            {/* 3D Calculator visualization (decorative) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 0.1, scale: 1, rotateY: 0 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-80 pointer-events-none"
            >
                <div className="relative w-full h-full transform-gpu perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-2 border-green-500/20 shadow-2xl">
                        {/* Calculator display */}
                        <div className="m-4 p-3 bg-green-400/10 rounded font-mono text-right text-green-400 text-xl">
                            100.00%
                        </div>
                        {/* Calculator buttons grid */}
                        <div className="grid grid-cols-4 gap-2 p-4">
                            {Array.from({ length: 16 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square bg-gray-700/50 rounded border border-green-500/10"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
