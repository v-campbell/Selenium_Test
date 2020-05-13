// wdio.conf.js
module.exports = {
  // ...
  reporters: ["browserstack"],
  reporterOptions: {
    browserstack: {
      outputDir: "./",
    },
  },
  // ...
};