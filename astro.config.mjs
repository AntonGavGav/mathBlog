import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  }), mdx({
      extendMarkdownConfig: false,
      optimize: true,
      syntaxHighlight: 'shiki',
      shikiConfig: {
          theme: 'tokyo-night',
          wrap: true,
      },
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
  })]
});