/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Stoned UI",
  tagline: "Hand Crafted React Components Made With Love For Your Next Project",
  url: "https://whoadarshpandya.github.io",
  baseUrl: "/stoned-docs/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "whoadarshpandya", // Usually your GitHub org/user name.
  projectName: "stoned-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Stoned",
      logo: {
        alt: "My Site Logo",
        src: "img/stonedlogo.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/whoadarshpandya/stoned",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/stoned",
            },
            {
              label: "Discord",
              href: "https://bit.ly/tanaydiscord",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/codarsh",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/whoadarshpandya/stoned",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Stoned, Inc. Built with ❤️ and Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/whoadarshpandya/stoned-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
