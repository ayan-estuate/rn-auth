module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // required for expo-router
      require.resolve("expo-router/babel"),
    ],
  };
};
