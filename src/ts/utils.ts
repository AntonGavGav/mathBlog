import { parse } from "node-html-parser";
import calculateReadingTime from 'reading-time';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toString } from 'mdast-util-to-string';
import type { CollectionEntry } from "astro:content";




interface SVGAttributes {
    [key: string]: string;
}

interface SVGContent {
    attributes: SVGAttributes;
    innerHTML: string;
}

export async function getSVG(name: string): Promise<SVGContent> {
    const filepath = `/src/svg/${name}.svg`;

    // Define the type for the files object
    const files: Record<string, () => Promise<string>> = import.meta.glob<string>('../icons/**/*.svg', { as: 'raw' });

    const svgs: Record<string, string> = {};
    for (const path in files) {
        const content = await files[path]();
        const absolutePath = path.replace('../icons', '/src/svg');
        svgs[absolutePath] = content;
    }

    if (!(filepath in svgs)) {
        throw new Error(`${filepath} not found`);
    }

    const root = parse(svgs[filepath]);

    const svg = root.querySelector('svg');

    if (!svg) {
        throw new Error(`No SVG element found in ${filepath}`);
    }

    const { attributes, innerHTML } = svg;

    return {
        attributes: attributes as SVGAttributes,
        innerHTML: innerHTML as string,
    };
}





interface FormatBlogPostsOptions {
    filterOutDrafts?: boolean;
    filterOutFuturePosts?: boolean;
    sortByDate?: boolean;
    limit?: number | undefined;
}

export function formatBlogPosts(posts: CollectionEntry<'blog'>[], {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined
}: FormatBlogPostsOptions = {}): CollectionEntry<'blog'>[] {
    const filteredPosts:CollectionEntry<'blog'>[] = posts.reduce((accumulator:CollectionEntry<'blog'>[], post) => {
        const { date } = post.data;

        // filter out drafts if true
        // if (filterOutDrafts && draft) {
        //     return accumulator;
        // }

        // filter out future posts if true
        if (filterOutFuturePosts && new Date(date) > new Date()) {
            return accumulator;
        }

        // add post to accumulator if conditions passed
        accumulator.push(post);
        return accumulator;
    }, []);

    // sort by date or randomize
    if (sortByDate) {
        filteredPosts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
    } else {
        // if we don't want to sort them we will just randomize them
        filteredPosts.sort(() => Math.random() - 0.5);
    }

    // limit if number is passed
    if (typeof limit === "number") {
        return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
}



export function formatDate(date:string){
    return new Date(date).toLocaleDateString('en-US', {timeZone: "UTC",});
}


export function getReadingTime(text: string): string | undefined {
    if(!text || !text.length) return undefined;
    try {
        const { minutes } = calculateReadingTime(toString(fromMarkdown(text)));
        if (minutes && minutes > 0) {
            return `${Math.ceil(minutes)}m`;
        }
        return undefined;
    } catch (e) {
        return undefined;
    }
}