module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  images: {
    domains: ["pbs.twimg.com", "images.unsplash.com", "www.gravatar.com"],
  },
};
