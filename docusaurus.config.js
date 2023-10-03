// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Today I Learned',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://merrybmc.github.io',
  baseUrl: '/TIL/',
  organizationName: 'merrybmc',
  projectName: 'TIL',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: `merrybmc's TIL`,
        logo: {
          alt: 'My Site Logo',
          src: 'https://jjalbang.today/jjv1In.gif',
        },
        items: [
          {
            type: 'doc',
            docId: 'frontend/intro',
            position: 'left',
            label: 'frontend',
          },
          {
            type: 'doc',
            docId: 'CS/intro',
            position: 'left',
            label: 'CS',
          },
          // {
          //   type: 'doc',
          //   docId: 'frontend/intro',
          //   position: 'left',
          //   label: 'CS',
          // },
          //  {
          //       type: 'doc',
          //       docId: 'frontend/introduction', // 'frontend/intro'를 'frontend/introduction'으로 변경하세요.
          //       position: 'left',
          //       label: 'Frontend',
          //     },
          //     {
          //       type: 'doc',
          //       docId: 'cs/introduction', // 'frontend/intro'를 'cs/introduction'으로 변경하세요.
          //       position: 'left',
          //       label: 'CS',
          //     },
          {
            href: 'https://github.com/merrybmc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     // {
          //     //   label: 'Tutorial',
          //     //   to: '/docs/intro',
          //     // },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} merrybmc, Built with Docusaurus. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
