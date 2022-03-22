module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    compress: true,
    proxy: {
      "/api": {
        target: "http://localhost:6001",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
