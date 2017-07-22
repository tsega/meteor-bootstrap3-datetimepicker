Package.describe({
  name: 'tsega:bootstrap3-datetimepicker',
  summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
  version: "4.17.42",
  git: "https://github.com/tsega/meteor-bootstrap3-datetimepicker"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2');

    api.use('jquery');
    api.use('momentjs:moment@2.13.1');

    api.addFiles([
      'lib/css/bootstrap-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap-datetimepicker.js',
    ], 'client');
});
