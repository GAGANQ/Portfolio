'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
    name: string;
    level: number;
    category: 'Financial' | 'Technical' | 'ERP';
    formula: string;
}

const skills: Skill[] = [
    { name: 'Accounts Payable/Receivable', level: 95, category: 'Financial', formula: '=YEARS(2018,2025)*20' },
    { name: 'Payroll Processing', level: 90, category: 'Financial', formula: '=SKILL("Payroll",90%)' },
    { name: 'Financial Reporting', level: 90, category: 'Financial', formula: '=SUM(GAAP,Analysis)' },
    { name: 'Tax Compliance', level: 85, category: 'Financial', formula: '=IF(CPA_Ready,85%,0%)' },
    { name: 'Bank Reconciliation', level: 90, category: 'Financial', formula: '=MATCH("Expert")' },
    { name: 'Microsoft Dynamics 365', level: 90, category: 'ERP', formula: '=VLOOKUP("D365",Cert)' },
    { name: 'SAP', level: 85, category: 'ERP', formula: '=INDEX(ERP_Skills,"SAP")' },
    { name: 'QuickBooks', level: 90, category: 'Technical', formula: '=COUNTIF(Projects,QB)' },
    { name: 'Power BI & SQL', level: 85, category: 'Technical', formula: '=CONCAT(BI,Database)' },
    { name: 'Excel & VBA', level: 95, category: 'Technical', formula: '=MAX(MSOffice_Suite)' },
    { name: 'Process Automation', level: 85, category: 'Technical', formula: '=AVERAGE(Python,VBA)' },
    { name: 'Banner ERP', level: 80, category: 'ERP', formula: '=NEW_SKILL(2025)' },
];

export default function SkillsLabSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', 'Financial', 'Technical', 'ERP'];

    const filteredSkills = selectedCategory === 'All'
        ? skills
        : skills.filter(s => s.category === selectedCategory);

    // Get cell reference (Excel-style)
    const getCellRef = (index: number) => {
        const col = String.fromCharCode(65 + (index % 4)); // A, B, C, D
        const row = Math.floor(index / 4) + 1;
        return `${col}${row}`;
    };

    // Get conditional formatting color
    const getColorClass = (level: number) => {
        if (level >= 90) return 'bg-green-500/20 border-green-500/40 text-green-300';
        if (level >= 80) return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
        return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';
    };

    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black px-8">
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-12">
                {/* Section header - Excel style */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded flex items-center justify-center font-mono text-green-400 font-bold">
                            B
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Skills <span className="text-green-400">Laboratory</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // =QUERY(Skills WHERE Proficiency {'>'} 80%)
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Category filter tabs */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex gap-2 mb-8"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded font-mono text-sm transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-green-500 text-black font-bold'
                                    : 'bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20'
                                }`}
                            data-interactive
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Skills grid - Excel spreadsheet style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredSkills.map((skill, index) => {
                        const cellRef = getCellRef(index);
                        const colorClass = getColorClass(skill.level);

                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`group relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${colorClass}`}
                                data-interactive
                                data-cursor="number"
                            >
                                {/* Cell reference */}
                                <div className="absolute -top-2 -left-2 w-6 h-6 bg-black border border-current rounded flex items-center justify-center text-xs font-mono font-bold">
                                    {cellRef}
                                </div>

                                {/* Skill name */}
                                <div className="font-mono font-bold text-sm mb-3 min-h-[40px]">
                                    {skill.name}
                                </div>

                                {/* Progress bar with data bar effect */}
                                <div className="relative h-8 bg-black/30 rounded overflow-hidden mb-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-end pr-2 font-mono text-xs font-bold">
                                        {skill.level}%
                                    </div>
                                </div>

                                {/* Formula (shows on hover) */}
                                <div className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-400">
                                    {skill.formula}
                                </div>

                                {/* Category badge */}
                                <div className="absolute top-2 right-2">
                                    <span className="text-[10px] px-2 py-0.5 bg-black/50 rounded font-mono">
                                        {skill.category}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Summary stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 p-6 bg-green-500/5 border border-green-500/20 rounded-lg"
                >
                    <div className="grid grid-cols-3 gap-8">
                        <div>
                            <div className="text-sm text-gray-400 font-mono mb-1">
                                AVERAGE(ALL_SKILLS)
                            </div>
                            <div className="text-3xl font-bold font-mono text-green-400">
                                {Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length)}%
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-400 font-mono mb-1">
                                COUNT(Skills)
                            </div>
                            <div className="text-3xl font-bold font-mono text-green-400">
                                {skills.length}
                            </div>
                        </div>
                        <div>
                            <div className="text-sm text-gray-400 font-mono mb-1">
                                MAX(Proficiency)
                            </div>
                            <div className="text-3xl font-bold font-mono text-green-400">
                                {Math.max(...skills.map(s => s.level))}%
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
