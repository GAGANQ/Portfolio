'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle2 } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    metrics: {
        label: string;
        value: string;
        change?: string;
    }[];
    technologies: string[];
    impact: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Papersave Cloud Implementation',
        description: 'Led implementation of document management system across 10+ entities',
        metrics: [
            { label: 'Processing Time', value: '-40%', change: 'decrease' },
            { label: 'Entities', value: '10+', change: 'growth' },
            { label: 'Documents', value: '5K+', change: 'monthly' },
        ],
        technologies: ['Papersave', 'Dynamics GP', 'Cloud Storage'],
        impact: 'Reduced invoice processing time by 40% and improved document retrieval efficiency',
    },
    {
        id: 2,
        title: 'Power BI Reporting Automation',
        description: 'Automated financial reporting dashboards for executive team',
        metrics: [
            { label: 'Reports', value: '15+', change: 'automated' },
            { label: 'Time Saved', value: '20h', change: 'weekly' },
            { label: 'Accuracy', value: '99.8%', change: 'improvement' },
        ],
        technologies: ['Power BI', 'SQL', 'DAX', 'Dynamics GP'],
        impact: 'Eliminated 20 hours of manual reporting work per week with real-time dashboards',
    },
    {
        id: 3,
        title: 'Dynamics GP Invoice Customization',
        description: 'Redesigned invoice templates and automated distribution workflow',
        metrics: [
            { label: 'Templates', value: '5', change: 'created' },
            { label: 'Satisfaction', value: '95%', change: 'client' },
            { label: 'Distribution', value: 'Auto', change: 'process' },
        ],
        technologies: ['Dynamics GP', 'Report Writer', 'VBA'],
        impact: 'Improved invoice professional appearance and reduced distribution errors to near-zero',
    },
];

export default function ProjectsDashboardSection() {
    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black px-8 py-20">
            {/* Dashboard grid background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-12 overflow-y-auto max-h-screen">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 sticky top-0 bg-black/80 backdrop-blur-sm pb-4 z-20"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded flex items-center justify-center font-mono text-green-400 font-bold">
                            D
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Projects <span className="text-green-400">Dashboard</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // Key Achievements & Business Impact
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Projects grid */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300"
                            data-interactive
                        >
                            {/* Project header */}
                            <div className="mb-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-2xl font-bold font-mono text-white group-hover:text-green-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-green-500/20 text-green-400 border border-green-500/30">
                                        <CheckCircle2 className="w-3 h-3" />
                                        Completed
                                    </div>
                                </div>
                                <p className="text-gray-400">{project.description}</p>
                            </div>

                            {/* Metrics KPI cards */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {project.metrics.map((metric, i) => (
                                    <div
                                        key={i}
                                        className="bg-black/30 border border-green-500/20 rounded-lg p-4 hover:border-green-500/40 transition-all"
                                        data-cursor="number"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-xs text-gray-500 font-mono uppercase">
                                                {metric.label}
                                            </span>
                                            {metric.change === 'decrease' && (
                                                <TrendingUp className="w-4 h-4 text-green-400 rotate-180" />
                                            )}
                                            {metric.change === 'growth' && (
                                                <TrendingUp className="w-4 h-4 text-green-400" />
                                            )}
                                            {metric.change === 'monthly' && (
                                                <Clock className="w-4 h-4 text-green-400" />
                                            )}
                                            {metric.change === 'weekly' && (
                                                <Clock className="w-4 h-4 text-green-400" />
                                            )}
                                            {metric.change === 'automated' && (
                                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                                            )}
                                            {metric.change === 'client' && (
                                                <Users className="w-4 h-4 text-green-400" />
                                            )}
                                        </div>
                                        <div className="text-3xl font-bold font-mono text-green-400">
                                            {metric.value}
                                        </div>
                                        {metric.change && (
                                            <div className="text-xs text-gray-500 font-mono mt-1">
                                                {metric.change}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                                <div className="text-xs text-gray-500 font-mono mb-2">
                                    TECHNOLOGIES:
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-mono bg-black/50 text-green-400 border border-green-500/30 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Impact statement */}
                            <div className="pt-4 border-t border-green-500/20">
                                <div className="flex items-start gap-3">
                                    <div className="w-1 h-full bg-green-500/50 rounded-full" />
                                    <div>
                                        <div className="text-xs text-gray-500 font-mono mb-1">
                                            BUSINESS IMPACT:
                                        </div>
                                        <p className="text-sm text-gray-300">{project.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-3 gap-6"
                >
                    {[
                        { label: 'Projects Completed', value: '50+', icon: CheckCircle2 },
                        { label: 'Hours Saved (Annual)', value: '1,000+', icon: Clock },
                        { label: 'Process Improvements', value: '15+', icon: TrendingUp },
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="p-6 bg-green-500/5 border border-green-500/20 rounded-lg text-center"
                            >
                                <Icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                <div className="text-3xl font-bold font-mono text-green-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400 font-mono">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
