//makes a json file from all of our blogs that will later be used for search

import { getCollection } from "astro:content"
import { getReadingTime } from "../../ts/utils.ts"

async function getPosts() {
    const posts = await getCollection('blog');
    return posts.map((post) => ({
        slug: post.slug,
        title: post.data.title,
        author: post.data.author,
        date: post.data.date,
        readTime: getReadingTime(post.body),
    }));
}

export async function GET({}){
    return new Response(JSON.stringify(await getPosts()), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}