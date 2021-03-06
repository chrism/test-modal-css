// ember-cli-build.js
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        plugins: [
          {
            module: require('postcss-import'),
            options: {
              path: ['node_modules']
            }
          },
          require("tailwindcss")("./config/tailwind.config.js"),
          {
            module: require('@fullhuman/postcss-purgecss'),
            options: {
              content: [
                // extra paths here probably needed for components/controllers etc
                './app/templates/**/*.hbs'
              ]
            }
          }
        ]
      }
    }
  });
  return app.toTree();
};
