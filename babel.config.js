const babelConfig = {
  presets: [
    '@babel/preset-env'
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ],
};

module.exports = babel => {
  babel.cache.never();
  return babelConfig;
};
