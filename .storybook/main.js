module.exports = {
  stories: ['../**/out-tsc/stories/*.stories.{js,md,mdx}'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  rollupConfig: '../rollup.ts.config.js'
}
