module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    domains: ["www.gravatar.com"],
  },
};
