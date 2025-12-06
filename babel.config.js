const { babelOptimizerPlugin } = require('@graphql-codegen/client-preset');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind', unstable_transformImportMeta: true }],
      'nativewind/babel',
    ],
    plugins: [[babelOptimizerPlugin, { artifactDirectory: './gql', gqlTagName: 'graphql' }]],
  };
};
