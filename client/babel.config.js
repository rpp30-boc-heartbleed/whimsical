module.exports = function (api) {
  // eslint-disable-next-line react/destructuring-assignment
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
      ['module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
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
