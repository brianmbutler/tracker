/* jshint node: false */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'tracker',
    podModulePrefix: 'tracker/pods',
   // firebase: 'https://blinding-torch-7719.firebaseio.com/',
    environment: environment,
    contentSecurityPolicy: {
       'default-src': "'none'",
       'font-src': "'self' https://fonts.gstatic.com",
       'connect-src': "'self' http://localhost:5984",
       'frame-src': "'self' http://*.firebaseio.com",
       'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://*.firebaseio.com",
       'img-src': "'self'",
       'style-src': "'self 'unsafe-inline' https://fonts.googleapis.com"
          },

    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        'ember-htmlbars-attribute-syntax': true,
        'ember-htmlbars-inline-if-helper': true,
        'ember-htmlbars-component-generation': true,
        'ember-routing-named-substates': true,
        'ember-views-component-block-info': true,
        'ember-routing-htmlbars-improved-actions': true
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

ENV.remote_couch = 'http://localhost:5984/employees';
ENV.local_couch = 'employees';

  if (environment === 'production') {
    ENV.baseURL = '/safetydoxcouch/';
    ENV.remote_couch = 'http://safetydox.iriscouch.com/employee';

ENV.contentSecurityPolicy = {
  'connect-src': "'self' " + ENV.remove_couch.substring(0, ENV.remote_couch.indexOf('/', 9))
};
}
  return ENV;
};
