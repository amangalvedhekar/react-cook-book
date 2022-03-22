module.exports = {
  "stories": [
    "../src/stories/docs/Introduction.stories.mdx",
    "../src/stories/docs/GettingStarted.stories.mdx",
    "../src/stories/docs/JSX.stories.mdx",
    "../src/stories/docs/Props.stories.mdx",
    "../src/stories/docs/State.stories.mdx",
    "../src/stories/docs/DataFetching.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
