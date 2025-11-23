'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactInvoiceSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black px-8">
            {/* Receipt pattern background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 h-8 w-full border-b-2 border-dashed border-green-500/20" />
                <div className="absolute bottom-0 h-8 w-full border-t-2 border-dashed border-green-500/20" />
            </div>

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
                            G
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Contact <span className="text-green-400">Invoice</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // Bill To: Your Next Team Member
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Invoice-style contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-lg p-8"
                    >
                        {/* Invoice header */}
                        <div className="mb-8 pb-4 border-b border-green-500/20">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-mono text-2xl font-bold text-white">
                                        INVOICE
                                    </h3>
                                    <p className="font-mono text-sm text-gray-400">#2025-001</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-mono text-sm text-gray-400">Date</p>
                                    <p className="font-mono text-white" suppressHydrationWarning>
                                        {typeof window !== 'undefined' ? new Date().toLocaleDateString() : '11/22/2025'}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-mono text-sm text-gray-400">Bill To:</p>
                                <p className="font-mono text-lg text-green-400">
                                    [Your Company]
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block font-mono text-sm text-gray-400 mb-2">
                                    Service Description (Your Name)
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-sm text-gray-400 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block font-mono text-sm text-gray-400 mb-2">
                                    Message / Notes
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={4}
                                    className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-white font-mono focus:border-green-500 focus:outline-none resize-none"
                                    placeholder="What would you like to discuss?"
                                    required
                                />
                            </div>

                            {/* Invoice total */}
                            <div className="pt-4 border-t border-green-500/20">
                                <div className="flex justify-between font-mono mb-2">
                                    <span className="text-gray-400">Consultation:</span>
                                    <span className="text-white">1 × Free</span>
                                </div>
                                <div className="flex justify-between font-mono text-xl font-bold">
                                    <span className="text-green-400">TOTAL:</span>
                                    <span className="text-green-400">Let&apos;s Connect!</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 font-mono flex items-center justify-center gap-2"
                                data-interactive
                            >
                                <Send className="w-5 h-5" />
                                SUBMIT INVOICE
                            </button>
                        </form>
                    </motion.div>

                    {/* Right: Direct contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold font-mono text-green-400 mb-6">
                                Direct Contact
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { icon: Mail, label: 'Email', value: 'gagan98dhaliwal@gmail.com', href: 'mailto:gagan98dhaliwal@gmail.com' },
                                    { icon: Phone, label: 'Phone', value: '+1 236-887-5366', href: 'tel:+12368875366' },
                                    { icon: MapPin, label: 'Location', value: 'Abbotsford, BC', href: null },
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-green-500/5 border border-green-500/20 rounded-lg group hover:border-green-500/40 transition-all"
                                        >
                                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-green-400" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400 font-mono">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white font-mono hover:text-green-400 transition-colors" data-interactive>
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white font-mono">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="pt-6 border-t border-green-500/20">
                            <h4 className="font-mono text-sm text-gray-400 mb-4">
                                Connect Online
                            </h4>
                            <div className="flex gap-4">
                                {[
                                    { icon: Linkedin, label: 'LinkedIn', href: '#' },
                                    { icon: Github, label: 'GitHub', href: '#' },
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300 group"
                                            data-interactive
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-6 h-6 text-green-400 group-hover:text-black" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Thank you note */}
                        <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
                            <p className="font-mono text-sm text-gray-400">
                                Thank you for visiting my portfolio. I&apos;m always open to discussing new opportunities in accounting systems administration and financial operations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
