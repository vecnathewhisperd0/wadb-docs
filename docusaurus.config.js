const baseLightTheme = require("prism-react-renderer/themes/github");
const baseDarkTheme = require("prism-react-renderer/themes/vsDark");

const lightTheme = {
    ...baseLightTheme,
    styles: [
        ...baseLightTheme.styles,
        {
            types: ['title'],
            style: {
                color: '#0550AE',
                fontWeight: 'bold',
            },
        },
        {
            types: ['parameter'],
            style: {
                color: '#953800',
            },
        },
        {
            types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
            style: {
                color: '#005CC5',
            },
        },
        {
            types: ['atrule', 'tag'],
            style: {
                color: '#22863A',
            },
        },
        {
            types: ['script'],
            style: {
                color: '#24292E',
            },
        },
        {
            types: ['operator', 'unit', 'rule'],
            style: {
                color: '#D73A49',
            },
        },
        {
            types: ['font-matter', 'string', 'attr-value'],
            style: {
                color: '#C6105F',
            },
        },
        {
            types: ['class-name'],
            style: {
                color: '#116329',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#0550AE',
            },
        },
        {
            types: ['keyword'],
            style: {
                color: '#CF222E',
            },
        },
        {
            types: ['function'],
            style: {
                color: '#8250DF',
            },
        },
        {
            types: ['selector'],
            style: {
                color: '#6F42C1',
            },
        },
        {
            types: ['variable'],
            style: {
                color: '#E36209',
            },
        },
        {
            types: ['comment'],
            style: {
                color: '#6B6B6B',
            },
        },
    ],
}

const darkTheme = {
    plain: {
        color: '#D4D4D4',
        backgroundColor: '#212121',
    },
    styles: [
        ...baseDarkTheme.styles,
        {
            types: ['title'],
            style: {
                color: '#569CD6',
                fontWeight: 'bold',
            },
        },
        {
            types: ['property', 'parameter'],
            style: {
                color: '#9CDCFE',
            },
        },
        {
            types: ['script'],
            style: {
                color: '#D4D4D4',
            },
        },
        {
            types: ['boolean', 'arrow', 'atrule', 'tag'],
            style: {
                color: '#569CD6',
            },
        },
        {
            types: ['number', 'color', 'unit'],
            style: {
                color: '#B5CEA8',
            },
        },
        {
            types: ['font-matter'],
            style: {
                color: '#CE9178',
            },
        },
        {
            types: ['keyword', 'rule'],
            style: {
                color: '#C586C0',
            },
        },
        {
            types: ['regex'],
            style: {
                color: '#D16969',
            },
        },
        {
            types: ['maybe-class-name'],
            style: {
                color: '#4EC9B0',
            },
        },
        {
            types: ['constant'],
            style: {
                color: '#4FC1FF',
            },
        },
    ],
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Unofficial ADB Book",
    tagline: "Deep-dive into ADB",
    url: "https://tango-adb.github.io",
    baseUrl: "/docs/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/logo.svg",
    organizationName: "tango-adb",
    projectName: "docs", // Usually your repo name.
    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */ ({
                docsRouteBasePath: "/",
                highlightSearchTermsOnTargetPage: true,
            }),
        ],
    ],
    themeConfig: {
        navbar: {
            title: "Unofficial ADB Book",
            logo: {
                alt: "Site Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "doc",
                    docId: "tango/index",
                    position: "left",
                    label: "Tango",
                },
                {
                    type: "doc",
                    docId: "internal/index",
                    position: "left",
                    label: "ADB",
                },
                {
                    href: "https://github.com/yume-chan/ya-webadb",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © 2021-${new Date().getFullYear()} Simon Chan. Built with Docusaurus.`,
        },
        prism: {
            theme: lightTheme,
            darkTheme: darkTheme,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                    // Please change this to your repo.
                    editUrl: "https://github.com/tango-adb/docs/edit/main/",
                    remarkPlugins: [
                        require("./scripts/plantuml"),
                        require("./scripts/ts2js.js"),
                        [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
                    ],
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
