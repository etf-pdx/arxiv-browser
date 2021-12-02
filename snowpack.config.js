module.exports = {
  mount: {
    src: { url: "/" },
  },
  plugins: ['@snowpack/plugin-typescript'],
  optimize: {
    bundle: true
  }
};