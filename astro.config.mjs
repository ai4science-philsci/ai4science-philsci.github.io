import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { execSync } from 'child_process';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlightImageZoom from 'starlight-image-zoom';
import remarkSourceQuotes from './src/plugins/remark-source-quotes.mjs';

const B = '/';

export default defineConfig({
  site: 'https://ai4science-philsci.github.io',
  base: B,
  markdown: {
    remarkPlugins: [remarkMath, remarkSourceQuotes],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    {
      name: 'build-backlinks',
      hooks: {
        'astro:build:start': () => execSync('node scripts/build-backlinks.mjs'),
        'astro:server:start': () => execSync('node scripts/build-backlinks.mjs'),
      },
    },
    starlight({
      plugins: [starlightImageZoom()],
      title: 'AI for Science × Philosophy of Science',
      lastUpdated: false,
      description: 'AI for science through the lens of philosophy of science.',
      customCss: ['./src/styles/custom.css'],
      components: {
        Pagination: './src/components/PageFooter.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Data and Phenomena', link: '/data/data-and-phenomena/' },
        { label: 'Measurement and Validity', link: '/measurement/measurement-and-validity/' },
        { label: 'Falsification and Severe Testing', link: '/testing/falsification-and-severe-testing/' },
        { label: 'Prediction and Explanation', link: '/explanation/prediction-and-explanation/' },
        { label: 'Mechanism', link: '/mechanism/mechanism/' },
        { label: 'Transfer and Scope', link: '/transfer/transfer-and-scope/' },
        { label: 'Values and Evidence', link: '/values/values-and-evidence/' },
        { label: 'Optimization and Its Targets', link: '/optimization/optimization-and-its-targets/' },
        { label: 'Forking Paths', link: '/forking/forking-paths/' },
      ],
    }),
  ],
});
