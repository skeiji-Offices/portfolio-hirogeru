import Link from 'next/link';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto pt-20">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                    Building <span className="text-[var(--accent-primary)]">Digital Solutions</span>
                    <br />
                    that <span className="text-[var(--accent-secondary)]">Empower</span>.
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                    I'm a Full Stack Developer specializing in modern web technologies.
                    I turn complex problems into elegant, user-centric applications.
                </p>

                <div className="pt-4">
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[var(--accent-primary)] rounded-full hover:bg-[var(--accent-secondary)] transition-all duration-300 shadow-[0_0_20px_var(--accent-glow)] hover:shadow-[0_0_30px_var(--accent-glow)]"
                    >
                        Work with Me
                    </Link>
                </div>
            </div>
        </section>
    );
}
