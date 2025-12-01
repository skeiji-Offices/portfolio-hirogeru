export const WP_API_URL = process.env.WP_API_URL || process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://example.com/wp-json/wp/v2';

export async function getPosts(page = 1, perPage = 10) {
    const res = await fetch(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`, {
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}

export async function getMedia(id: number) {
    const res = await fetch(`${WP_API_URL}/media/${id}`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch media');
    }

    return res.json();
}
