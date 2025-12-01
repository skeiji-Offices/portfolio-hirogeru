import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import BlogPostsSection from "@/components/BlogPostsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
      <Hero />
      <Skills />
      <FeaturedProjects />
      <BlogPostsSection />
      <Contact />
    </main>
  );
}
