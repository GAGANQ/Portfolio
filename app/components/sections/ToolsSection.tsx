'use client';

import { motion } from 'framer-motion';
import ROICalculator from '../calculators/ROICalculator';
import { FileSpreadsheet, Calculator, BarChart3, PieChart } from 'lucide-react';

const tools = [
    {
        icon: FileSpreadsheet,
        name: 'Microsoft Excel',
        description: 'Advanced formulas, pivot tables, VBA macros',
        proficiency: 95,
    },
    {
        icon: BarChart3,
        name: 'Power BI',
        description: 'Dashboard creation, DAX, data modeling',
        proficiency: 85,
    },
    {
        icon: Calculator,
        name: 'Dynamics GP',
        description: 'ERP customization, report generation',
        proficiency: 90,
    },
    {
        icon: PieChart,
        name: 'SAP',
        description: 'Financial modules, system integration',
        proficiency: 85,
    },
];

export default function ToolsSection() {
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
                    backgroundSize: '30px 30px',
                }}
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-12">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded flex items-center justify-center font-mono text-green-400 font-bold">
                            E
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Tools & <span className="text-green-400">Calculators</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // Interactive Finance & Accounting Utilities
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Tool proficiency */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-mono text-green-400 mb-6">
                            Professional Tools
                        </h3>

                        {tools.map((tool, index) => {
                            const Icon = tool.icon;
                            return (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-4 bg-green-500/5 border border-green-500/20 rounded-lg hover:border-green-500/40 transition-all duration-300"
                                    data-interactive
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6 text-green-400" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-mono font-bold text-white mb-1">
                                                {tool.name}
                                            </h4>
                                            <p className="text-sm text-gray-400 mb-3">
                                                {tool.description}
                                            </p>

                                            {/* Proficiency bar */}
                                            <div className="relative h-2 bg-black/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${tool.proficiency}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-400"
                                                />
                                            </div>
                                            <div className="mt-1 text-xs font-mono text-green-400">
                                                {tool.proficiency}% Proficiency
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Excel file icon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mt-8 p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-20 bg-green-500/20 rounded flex items-center justify-center">
                                    <FileSpreadsheet className="w-10 h-10 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-mono font-bold text-white mb-1">
                                        Download Resume
                                    </h4>
                                    <p className="text-sm text-gray-400 mb-2">
                                        Full detailed CV in Excel format
                                    </p>
                                    <button className="px-4 py-2 bg-green-500 text-black font-mono text-sm rounded hover:bg-green-400 transition-colors" data-interactive>
                                        resume.xlsx
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive calculator */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        <h3 className="text-2xl font-bold font-mono text-green-400 mb-6">
                            Try It Yourself
                        </h3>

                        <ROICalculator />

                        {/* Additional calculator info */}
                        <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                            <h4 className="font-mono font-bold text-sm text-green-400 mb-2">
                                More Calculators Coming Soon
                            </h4>
                            <ul className="space-y-1 text-xs text-gray-400 font-mono">
                                <li>{'>'} Depreciation Calculator</li>
                                <li>{'>'} Break-Even Analysis</li>
                                <li>{'>'} Payroll Estimator</li>
                                <li>{'>'} NPV Calculator</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
