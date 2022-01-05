module.exports = function (api) {
  // eslint-disable-next-line react/destructuring-assignment
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-env',
    ],
    plugins: [
      ['module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      ['@babel/plugin-proposal-private-property-in-object',
        {
          loose: true,
        },
      ],
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
