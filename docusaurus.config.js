const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'marukun.dev',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'marukun.dev',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Tutorial',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/marukun712',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '解説',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'social',
                    items: [

                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/marukun712',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} marukun-dev`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
});