import { Code2, Database, Layout, Server, Cpu, Globe } from 'lucide-react';

const skills = [
    { name: 'TypeScript', icon: Code2 },
    { name: 'React / Next.js', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'Prisma / SQL', icon: Database },
    { name: 'Gemini AI', icon: Cpu },
    { name: 'Web Performance', icon: Globe },
];

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[var(--surface)]">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
                    Technical <span className="text-[var(--accent-primary)]">Expertise</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group p-6 bg-[var(--surface-highlight)] rounded-xl border border-white/5 hover:border-[var(--accent-primary)] transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] transition-colors">
                                    <skill.icon size={24} />
                                </div>
                                <span className="font-medium text-lg text-gray-200">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
