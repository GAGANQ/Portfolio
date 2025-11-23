'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: number;
    tags: string[];
    featured: boolean;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Implementing Papersave: Lessons from the Trenches',
        excerpt: 'A detailed walkthrough of implementing document management systems in a multi-entity accounting environment...',
        date: '2025-01-15',
        readTime: 8,
        tags: ['ERP', 'Process Improvement', 'Papersave'],
        featured: true,
    },
    {
        id: 2,
        title: 'Power BI Dashboards for Financial Reporting',
        excerpt: 'How to create automated executive dashboards that save hours of manual reporting each month...',
        date: '2025-01-08',
        readTime: 6,
        tags: ['Power BI', 'Reporting', 'Automation'],
        featured: false,
    },
    {
        id: 3,
        title: 'Transitioning from Excel to ERP Systems',
        excerpt: 'Best practices for migrating accounting workflows from spreadsheets to enterprise systems...',
        date: '2024-12-20',
        readTime: 10,
        tags: ['ERP', 'Change Management', 'Excel'],
        featured: false,
    },
];

export default function BlogSection() {
    return (
        <section className="relative min-w-screen h-screen snap-start flex items-center justify-center overflow-hidden bg-black px-8 py-20">
            {/* Newspaper-style background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="h-full flex flex-col justify-around">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="h-px bg-green-500/30" />
                    ))}
                </div>
            </div>

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
                            F
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold font-mono text-white mb-2">
                                Insights & <span className="text-green-400">Blog</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm">
                // Latest thoughts on accounting & technology
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative p-6 bg-green-500/5 border-2 border-green-500/20 rounded-lg hover:border-green-500/40 transition-all duration-300 cursor-pointer ${post.featured ? 'lg:col-span-2 bg-green-500/10' : ''
                                }`}
                            data-interactive
                        >
                            {/* Featured badge */}
                            {post.featured && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-black text-xs font-mono font-bold rounded">
                                    FEATURED
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-2xl font-bold font-mono text-white mb-3 group-hover:text-green-400 transition-colors">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-400 mb-4 line-clamp-2">
                                {post.excerpt}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-mono">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="font-mono">{post.readTime} min read</span>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 text-xs font-mono rounded border border-green-500/30"
                                    >
                                        <Tag className="w-3 h-3" />
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Read more indicator */}
                            <div className="absolute bottom-4 right-4 text-green-400 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                Read more →
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Coming soon notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-8 p-6 bg-green-500/5 border border-green-500/20 rounded-lg text-center"
                >
                    <p className="text-gray-400 font-mono">
                        More articles coming soon. Subscribe to stay updated!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
