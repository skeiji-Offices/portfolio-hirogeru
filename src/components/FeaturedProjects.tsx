import Image from 'next/image';

const projects = [
    {
        id: 'task-breaker',
        title: 'Task Breaker',
        category: 'Productivity Tool',
        description: 'A modern task management dashboard designed for efficiency. Features Kanban boards, progress tracking, and a dark-mode-first UI.',
        image: '/images/task-breaker.png',
        tech: ['Next.js', 'Tailwind', 'dnd-kit'],
    },
    {
        id: 'mandala-chart',
        title: 'Mandala Chart Helper',
        category: 'Goal Setting',
        description: 'A digital implementation of the Mandala Chart method. Helps users break down big goals into actionable steps with a 9x9 grid interface.',
        image: '/images/mandala-chart.png',
        tech: ['React', 'TypeScript', 'State Management'],
    },
];

export default function FeaturedProjects() {
    return (
        <section className="py-24 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
                    Featured <span className="text-[var(--accent-secondary)]">Projects</span>
                </h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full md:w-3/5 relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-[var(--surface)]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/5 space-y-6">
                                <div className="text-[var(--accent-primary)] font-medium tracking-wider text-sm uppercase">
                                    {project.category}
                                </div>
                                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
