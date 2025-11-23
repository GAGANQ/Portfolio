'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollerProps {
    children: React.ReactNode;
}

export default function HorizontalScroller({ children }: HorizontalScrollerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);
    const totalSections = 7; // Intro, Skills, Experience, Projects, Tools, Blog, Contact

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Convert vertical scroll to horizontal
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY;

            // Update current section based on scroll position
            const sectionWidth = container.clientWidth;
            const newSection = Math.round(container.scrollLeft / sectionWidth);
            setCurrentSection(Math.max(0, Math.min(totalSections - 1, newSection)));
        };

        // Add keyboard navigation
        const handleKeyDown = (e: KeyboardEvent) => {
            const sectionWidth = container.clientWidth;
            if (e.key === 'ArrowRight') {
                container.scrollBy({ left: sectionWidth, behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                container.scrollBy({ left: -sectionWidth, behavior: 'smooth' });
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            container.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [totalSections]);

    const sectionLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const sectionNames = ['Intro', 'Skills', 'Experience', 'Projects', 'Tools', 'Blog', 'Contact'];

    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
            {/* Excel-style column navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black via-black/95 to-transparent">
                <div className="flex items-center justify-center gap-1 px-8 py-4 border-b border-green-500/20">
                    {sectionLabels.map((label, index) => (
                        <button
                            key={label}
                            onClick={() => {
                                const container = scrollContainerRef.current;
                                if (container) {
                                    container.scrollTo({
                                        left: index * container.clientWidth,
                                        behavior: 'smooth',
                                    });
                                }
                            }}
                            className={`group relative px-6 py-2 font-mono text-sm transition-all duration-300 ${currentSection === index
                                    ? 'text-green-400 scale-110'
                                    : 'text-gray-500 hover:text-green-300'
                                }`}
                        >
                            {/* Excel column header style */}
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-lg font-bold">{label}</span>
                                <span className="text-xs opacity-70">{sectionNames[index]}</span>
                            </div>

                            {/* Active indicator */}
                            {currentSection === index && (
                                <motion.div
                                    layoutId="activeSection"
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-green-400"
                                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-gray-900">
                    <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                        style={{
                            width: `${((currentSection + 1) / totalSections) * 100}%`,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Horizontal scroll container */}
            <div
                ref={scrollContainerRef}
                className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {children}
            </div>

            {/* Scroll hint */}
            <motion.div
                className="fixed bottom-8 right-8 flex items-center gap-2 text-green-400 font-mono text-sm"
                initial={{ opacity: 1 }}
                animate={{ opacity: currentSection === 0 ? 1 : 0 }}
            >
                <span>Scroll or use arrow keys →</span>
                <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    →
                </motion.div>
            </motion.div>
        </div>
    );
}
