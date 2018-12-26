const webpack = require("webpack");
const withSass = require("@zeit/next-sass");

require("dotenv").config();

const initExport = {
  webpack: config => {
    config.externals = [
      {
        xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"
      }
    ];

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.F_PROJECT_ID": JSON.stringify(process.env.F_PROJECT_ID),
        "process.env.F_AUTH_DOMAIN": JSON.stringify(process.env.F_AUTH_DOMAIN),
        "process.env.F_API_KEY": JSON.stringify(process.env.F_API_KEY)
      })
    );
    return config;
  }
};

module.exports = withSass(initExport);
