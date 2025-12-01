import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '@/lib/wordpress';
import { WPPost } from '@/types/wordpress';
import { ArrowRight } from 'lucide-react';

export default async function BlogPostsSection() {
    let posts: WPPost[] = [];
    let error = null;

    try {
        posts = await getPosts(1, 3);
    } catch (e) {
        console.error('Failed to fetch posts:', e);
        error = 'Failed to load latest posts.';
    }

    if (error) {
        return null; // Or render a fallback
    }

    return (
        <section className="py-24 px-6 md:px-12 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        Latest <span className="text-[var(--accent-primary)]">Insights</span>
                    </h2>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => {
                        const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
                        const imageUrl = featuredMedia?.source_url || '/images/placeholder.png'; // Fallback needed if no image

                        return (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col bg-[var(--background)] rounded-xl overflow-hidden border border-white/5 hover:border-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-1 h-full"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-gray-800">
                                    {featuredMedia ? (
                                        <Image
                                            src={imageUrl}
                                            alt={featuredMedia.alt_text || post.title.rendered}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-gray-600">
                                            No Image
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 mb-3">
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>

                                    <h3
                                        className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors"
                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                    />

                                    <div
                                        className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                    />

                                    <div className="flex items-center text-[var(--accent-primary)] text-sm font-medium mt-auto">
                                        Read Article <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                    >
                        View all posts <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
