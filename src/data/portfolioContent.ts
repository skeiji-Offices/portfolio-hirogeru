export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'building-task-breaker',
        title: 'Building Task Breaker: A Journey into Modern Productivity',
        excerpt: 'How we designed a task management tool that actually helps you get things done, using Next.js and Tailwind CSS.',
        date: '2025-11-15',
        imageUrl: '/images/task-breaker.png',
    },
    {
        id: '2',
        slug: 'mandala-chart-method',
        title: 'The Mandala Chart Method: Visualizing Your Goals',
        excerpt: 'Exploring the 9x9 grid system used by top athletes and how we digitized it for the web.',
        date: '2025-10-28',
        imageUrl: '/images/mandala-chart.png',
    },
    {
        id: '3',
        slug: 'nextjs-performance-tips',
        title: 'Optimizing Next.js Applications for Maximum Performance',
        excerpt: 'Key strategies for improving Core Web Vitals and ensuring your React applications run smooth as silk.',
        date: '2025-10-10',
        imageUrl: '/images/placeholder.png',
    },
];
