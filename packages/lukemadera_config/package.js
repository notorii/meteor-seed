Package.describe({
  name: 'lukemadera:config',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles([
    'lukemadera_config.js',
    'config-email.js',
    'config-startup.js'
  ]);

  api.export('Config');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('lukemadera:config');
  api.addFiles('lukemadera_config-tests.js');
});
