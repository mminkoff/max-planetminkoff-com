'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: []
    },
    minifyCSS: {
      options: { processImport: false }
    },
    postcssOptions: {
      compile: {
        enabled: false
      },
      filter: {
        enabled: true,
        plugins: [
          { module: require('postcss-preset-env') }
        ]
      }
    },
    prember: {
      urls: [
        '/'
      ]
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import("node_modules/bulma/bulma");
  // app.import('public/assets/css/bulmaswatch.min.css');

  return app.toTree();
};
