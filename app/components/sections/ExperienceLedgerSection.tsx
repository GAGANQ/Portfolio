'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, MapPin, Calendar } from 'lucide-react';

interface Experience {
    id: number;
    company: string;
    position: string;
    period: string;
    location: string;
    description: string[];
    debit: string; // Skills gained
    credit: string; // Value delivered
}

const experiences: Experience[] = [
    {
        id: 1,
        company: 'University of the Fraser Valley',
        position: 'Officer, Accounts Payable',
        period: 'May 2025 - Present',
        location: 'Abbotsford, BC',
        description: [
            'Manage full-cycle accounts payable, processing high-volume invoices',
            'Ensure accurate coding of expenses to proper cost accounts (GAAP)',
            'Administer EFT and cheque disbursements; reconcile AP to GL',
            'Leverage Banner ERP and CentreSuite for invoice processing',
        ],
        debit: 'Banner ERP, Higher ED Accounting',
        credit: 'Streamlined AP processes, GAAP compliance',
    },
    {
        id: 2,
        company: 'Friesen Group of Companies',
        position: 'Senior Accounts Payable & Payroll Administrator',
        period: 'Oct 2023 - May 2025',
        location: 'Abbotsford, BC',
        description: [
            'Processed 60+ invoices daily,managed payroll for 80+ employees',
            'Led budgeting, forecasting, and GST audit preparation',
            'Implemented reporting automation using Papersave, Dynamics GP, Power BI',
            'Acted as liaison during Papersave implementation',
        ],
        debit: 'Papersave, Power BI, Automation',
        credit: 'Reduced processing time 40%, Enhanced reporting',
    },
    {
        id: 3,
        company: 'Triple Eight Transport',
        position: 'Senior Accounts Receivable Officer',
        period: 'Jun 2023 - Oct 2023',
        location: 'Abbotsford, BC',
        description: [
            'Managed end-to-end AR processing, credit control, collections',
            'Maintained AR aging reports, reconciliations, month-end entries',
            'Provided cross-functional support to AP and payroll',
        ],
        debit: 'Collections Strategy, AR Management',
        credit: 'Improved DSO by 15 days',
    },
    {
        id: 4,
        company: 'EPro Consultants Ltd',
        position: 'Accounts Payable & Receivable Specialist',
        period: 'Jun 2022 - Oct 2022',
        location: 'Abbotsford, BC',
        description: [
            'Managed AP/AR workflows, bank reconciliations, GL entries',
            'Assisted with GST/HST remittance and financial documentation',
        ],
        debit: 'Full-cycle Accounting, Tax Compliance',
        credit: 'Maintained 100% accuracy in tax filings',
    },
];

export default function ExperienceLedgerSection() {
    const [selectedExp, setSelectedExp] = useState<number | null>(null);

    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black px-8 py-20">
            {/* Ledger lines background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, rgba(16, 185, 129, 0.5) 0px, rgba(16, 185, 129, 0.5) 1px, transparent 1px, transparent 40px)`,
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
                            C
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Experience <span className="text-green-400">Ledger</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // Journal Entries: Career Transactions
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Timeline with journal entries */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Journal entry card */}
                            <div
                                className="group relative p-6 bg-green-500/5 border-2 border-green-500/20 rounded-lg hover:border-green-500/40 transition-all duration-300 cursor-pointer"
                                onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
                                data-interactive
                            >
                                {/* Entry number */}
                                <div className="absolute -left-4 top-6 w-8 h-8 bg-black border-2 border-green-500 rounded-full flex items-center justify-center font-mono text-xs font-bold text-green-400">
                                    #{exp.id}
                                </div>

                                {/* T-Account style header */}
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div className="border-r border-green-500/30 pr-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <Building2 className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold text-white font-mono">
                                                    {exp.company}
                                                </h3>
                                                <p className="text-green-400 font-mono text-sm mt-1">
                                                    {exp.position}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span className="font-mono">{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="font-mono">{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* T-Account visualization */}
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-xs text-gray-500 font-mono mb-1">DEBIT: Skills Gained</div>
                                            <div className="text-sm text-green-400 font-mono bg-black/30 p-2 rounded">
                                                {exp.debit}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-gray-500 font-mono mb-1">CREDIT: Value Delivered</div>
                                            <div className="text-sm text-emerald-400 font-mono bg-black/30 p-2 rounded">
                                                {exp.credit}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable responsibilities */}
                                <motion.div
                                    initial={false}
                                    animate={{ height: selectedExp === exp.id ? 'auto' : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-4 border-t border-green-500/20">
                                        <div className="text-xs text-gray-500 font-mono mb-3">
                                            KEY RESPONSIBILITIES:
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                                    <span className="text-green-400 font-mono shrink-0">{'>>'}</span>
                                                    <span className="text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                {/* Expand indicator */}
                                <div className="absolute bottom-4 right-4 text-green-400 font-mono text-xs">
                                    {selectedExp === exp.id ? '[ - ]' : '[ + ]'}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Balance summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg"
                >
                    <div className="font-mono text-center">
                        <div className="text-sm text-gray-400 mb-2">CAREER BALANCE AS OF {new Date().getFullYear()}</div>
                        <div className="text-3xl font-bold text-green-400">
                            {experiences.length} Positions × Excellence = Proven Track Record
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
