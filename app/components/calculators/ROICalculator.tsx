'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Percent } from 'lucide-react';

export default function ROICalculator() {
    const [investment, setInvestment] = useState<number>(10000);
    const [returns, setReturns] = useState<number>(12000);
    const [roi, setROI] = useState<number>(20);

    const calculateROI = (inv: number, ret: number) => {
        if (inv === 0) return 0;
        const calculated = ((ret - inv) / inv) * 100;
        setROI(calculated);
        return calculated;
    };

    const handleInvestmentChange = (value: number) => {
        setInvestment(value);
        calculateROI(value, returns);
    };

    const handleReturnsChange = (value: number) => {
        setReturns(value);
        calculateROI(investment, value);
    };

    const getROIColor = () => {
        if (roi > 20) return 'text-green-400';
        if (roi > 0) return 'text-emerald-400';
        if (roi === 0) return 'text-gray-400';
        return 'text-red-400';
    };

    return (
        <div className="w-full max-w-md bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                    <h3 className="font-mono font-bold text-white">ROI Calculator</h3>
                    <p className="text-xs text-gray-400 font-mono">
                        Return on Investment
                    </p>
                </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 mb-6">
                {/* Investment */}
                <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                        Initial Investment ($)
                    </label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="number"
                            value={investment}
                            onChange={(e) => handleInvestmentChange(Number(e.target.value))}
                            className="w-full bg-black/50 border border-green-500/30 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none"
                            data-cursor="number"
                        />
                    </div>
                </div>

                {/* Returns */}
                <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">
                        Total Returns ($)
                    </label>
                    <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                            type="number"
                            value={returns}
                            onChange={(e) => handleReturnsChange(Number(e.target.value))}
                            className="w-full bg-black/50 border border-green-500/30 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none"
                            data-cursor="number"
                        />
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="bg-black/50 border border-green-500/30 rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-mono text-gray-400">ROI</span>
                    <Percent className="w-4 h-4 text-gray-500" />
                </div>
                <motion.div
                    key={roi}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`text-4xl font-bold font-mono ${getROIColor()}`}
                >
                    {roi.toFixed(2)}%
                </motion.div>

                {/* Breakdown */}
                <div className="mt-4 pt-4 border-t border-green-500/20 text-xs font-mono text-gray-400 space-y-1">
                    <div className="flex justify-between">
                        <span>Gain/Loss:</span>
                        <span className={returns - investment >= 0 ? 'text-green-400' : 'text-red-400'}>
                            ${(returns - investment).toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>Formula:</span>
                        <span className="text-green-400">=(B-A)/A*100</span>
                    </div>
                </div>
            </div>

            {/* Visualization */}
            <div className="mt-4 h-3 bg-black/50 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, Math.max(0, (returns / (investment * 2)) * 100))}%` }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400"
                    transition={{ duration: 0.5 }}
                />
            </div>
        </div>
    );
}
