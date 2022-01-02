module.exports = function (api) {
  // eslint-disable-next-line react/destructuring-assignment
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
    ],
    plugins: [
<<<<<<< HEAD
      [
        'module:react-native-dotenv',
        // {
        //   moduleName: '@env',
        //   path: '.env',
        //   blacklist: null,
        //   whitelist: null,
        //   safe: false,
        //   allowUndefined: true,
        // },
      ],
=======
      ["module:react-native-dotenv"]
>>>>>>> dev
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
