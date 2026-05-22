import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import rehypeExternalLinks from 'rehype-external-links';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';


export default defineConfig({
    markdown: {
        smartypants: true,
        remarkPlugins: [remarkMath],
        rehypePlugins: [
            [rehypeMathjax, {
                output: 'svg',
                tex: {
                    packages: { '[+]': ['physics', 'ams'] },
                },
                loader: {
                    load: ['[tex]/physics']
                }
            }],

            [rehypeExternalLinks, {
                target: '_blank', rel: ['noopener', 'noreferrer'] 
            }]
        ]
    },

    integrations: [icon(), mdx(), pagefind()],
    vite: {
        plugins: [tailwindcss()]
    }
})