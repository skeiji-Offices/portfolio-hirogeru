import { Mail, Github, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-[var(--surface)] border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Let's Build Something <span className="text-[var(--accent-primary)]">Amazing</span>
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    I'm currently available for freelance projects and collaborations.
                    If you have an idea you want to bring to life, let's talk.
                </p>

                <div className="flex justify-center gap-6 pt-8">
                    <a href="mailto:contact@example.com" className="p-4 rounded-full bg-white/5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 text-gray-400">
                        <Mail size={24} />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 text-gray-400">
                        <Github size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300 text-gray-400">
                        <Twitter size={24} />
                    </a>
                </div>

                <footer className="pt-20 text-sm text-gray-600">
                    © {new Date().getFullYear()} Portfolio Site. All rights reserved.
                </footer>
            </div>
        </section>
    );
}
