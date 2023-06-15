import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Tran Vo Learn Astro | Blog',
    description: 'My stress towards learning Astro',
    site: 'https://tranastro.vercel.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}