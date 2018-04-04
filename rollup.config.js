export default [
  {
    input: "index.js",
    output: {
      file: "dist/domfriends.es6.js",
      format: "es"
    }
  },
  {
    input: "index.js",
    output: {
      file: "dist/domfriends.cjs.js",
      format: "cjs"
    }
  },
  {
    input: "index.js",
    output: {
      file: "dist/domfriends.iife.js",
      name: "domfriends",
      format: "iife"
    }
  },
  {
    input: "index.js",
    output: {
      file: "dist/domfriends.umd.js",
      name: "domfriends",
      format: "umd"
    }
  }
];
