// lib/wordpress.ts

// 必須: 環境変数が設定されていない場合に備えて、本番のドメインをフォールバックとして定義
export const WP_API_URL = process.env.WP_API_URL || 'https://offices.hirogeru.net/wp-json/wp/v2';

// Vercelから外部APIを叩く際、ホスト名を強制的に上書きして接続エラーを防ぎます
const COMMON_FETCH_OPTIONS = {
    // 重要な修正：ホストヘッダーを強制的にカスタムドメインに設定
    headers: {
        Host: 'offices.hirogeru.net',
    },
    // Next.jsのデータキャッシュ設定 (1時間)
    next: { revalidate: 3600 },
};

export async function getPosts(page = 1, perPage = 10) {
    try {
        const res = await fetch(`${WP_API_URL}/posts?_embed&page=${page}&per_page=${perPage}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!res.ok) {
            console.error(`Failed to fetch posts: ${res.status} ${res.statusText}`);
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function getMedia(id: number) {
    try {
        const res = await fetch(`${WP_API_URL}/media/${id}`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            console.error(`Failed to fetch media ${id}: ${res.status} ${res.statusText}`);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error(`Error fetching media ${id}:`, error);
        return null;
    }
}