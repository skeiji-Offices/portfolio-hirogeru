import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/portfolioContent';
import { ArrowRight } from 'lucide-react';

export default function BlogPostsSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Latest <span className="text-[var(--accent-primary)]">Insights</span>
                    </h2>
                    <Link
                        href="#"
                        className="hidden md:flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`#`} // Placeholder link for now
                            className="group flex flex-col bg-[var(--background)] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-1 h-full"
                        >
                            <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-sm text-gray-500 mb-3">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-[var(--accent-primary)] text-sm font-medium mt-auto">
                                    Read Article <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
