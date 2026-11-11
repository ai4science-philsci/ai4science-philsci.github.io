import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { execSync } from 'child_process';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import starlightImageZoom from 'starlight-image-zoom';
import remarkSourceQuotes from './src/plugins/remark-source-quotes.mjs';

const B = '/';
const CHAPTERS = [
        {
          label: 'Chapters',
          items: [
            {
              label: 'Part 1: Evidence',
              items: [
                { label: '1. Falsification and Severe Testing', link: '/testing/falsification-and-severe-testing/' },
                { label: '2. Forking Paths', link: '/forking/forking-paths/' },
                { label: '3. Stopping and Evidence', link: '/stopping/stopping-and-evidence/' },
                { label: '4. Measurement', link: '/measurement/measurement/' },
                { label: '5. Validity', link: '/measurement/validity/' },
                { label: '6. Optimization and Its Targets', link: '/optimization/optimization-and-its-targets/' },
              ],
            },
            {
              label: 'Part 2: Explanation',
              items: [
                { label: '7. Prediction and Explanation', link: '/explanation/prediction-and-explanation/' },
                { label: '8. Causation and Intervention', link: '/causation/causation-and-intervention/' },
                { label: '9. Data and Phenomena', link: '/data/data-and-phenomena/' },
                { label: '10. Simulation and Understanding', link: '/simulation/simulation-and-understanding/' },
                { label: '11. Values and Evidence', link: '/values/values-and-evidence/' },
              ],
            },
            {
              label: 'Part 3: Mechanism',
              items: [
                { label: '12. Mechanism', link: '/mechanism/mechanism/' },
                { label: '13. Models of Mechanisms', link: '/mechanism/models-of-mechanisms/' },
                { label: '14. Parts of a Mechanism', link: '/mechanism/parts-of-a-mechanism/' },
                { label: '15. Intervention and Use', link: '/mechanism/intervention-and-use/' },
              ],
            },
            {
              label: 'Part 4: Transfer',
              items: [
                { label: '16. Identity Criteria', link: '/identity/identity-criteria/' },
                { label: '17. Identity Across Systems', link: '/identity/identity-across-systems/' },
                { label: '18. Transfer and Scope', link: '/transfer/transfer-and-scope/' },
                { label: '19. Scope and Licensing', link: '/scope/scope-and-licensing/' },
              ],
            },
          ],
        },
];
const FLAT = [
        {
          label: 'Part 1: Evidence',
          items: [
            { label: '1. Falsification and Severe Testing', link: '/testing/falsification-and-severe-testing/' },
            { label: '2. Forking Paths', link: '/forking/forking-paths/' },
            { label: '3. Stopping and Evidence', link: '/stopping/stopping-and-evidence/' },
            { label: '4. Measurement', link: '/measurement/measurement/' },
            { label: '5. Validity', link: '/measurement/validity/' },
            { label: '6. Optimization and Its Targets', link: '/optimization/optimization-and-its-targets/' },
          ],
        },
        {
          label: 'Part 2: Explanation',
          items: [
            { label: '7. Prediction and Explanation', link: '/explanation/prediction-and-explanation/' },
            { label: '8. Causation and Intervention', link: '/causation/causation-and-intervention/' },
            { label: '9. Data and Phenomena', link: '/data/data-and-phenomena/' },
            { label: '10. Simulation and Understanding', link: '/simulation/simulation-and-understanding/' },
            { label: '11. Values and Evidence', link: '/values/values-and-evidence/' },
          ],
        },
        {
          label: 'Part 3: Mechanism',
          items: [
            { label: '12. Mechanism', link: '/mechanism/mechanism/' },
            { label: '13. Models of Mechanisms', link: '/mechanism/models-of-mechanisms/' },
            { label: '14. Parts of a Mechanism', link: '/mechanism/parts-of-a-mechanism/' },
            { label: '15. Intervention and Use', link: '/mechanism/intervention-and-use/' },
          ],
        },
        {
          label: 'Part 4: Transfer',
          items: [
            { label: '16. Identity Criteria', link: '/identity/identity-criteria/' },
            { label: '17. Identity Across Systems', link: '/identity/identity-across-systems/' },
            { label: '18. Transfer and Scope', link: '/transfer/transfer-and-scope/' },
            { label: '19. Scope and Licensing', link: '/scope/scope-and-licensing/' },
          ],
        },
];

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
...(process.env.SIDEBAR_NESTED ? CHAPTERS : FLAT),
        {
          label: 'Foundations',
          items: [
            { label: 'Psychometrics', link: '/fields/psychometrics/' },
            { label: 'Causal Inference', link: '/fields/causal-inference/' },
          ],
        },
      ],
    }),
  ],
});
