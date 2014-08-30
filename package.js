Package.describe({
    summary: "Bootstrap 3 DateTime picker from Eonasdan, https://github.com/Eonasdan/bootstrap-datetimepicker, packaged for Meteor.js",
    version: "0.4.0",
    git: "https://github.com/tsega/meteor-bootstrap3-datetimepicker.git"
});

Package.on_use(function (api, where) {
    api.versionsFrom('METEOR@0.9.0');

    api.use('jquery', 'client');

    api.add_files([
      'lib/js/moment-with-locales.min.js', // Add Moment with languages directly
      'lib/css/bootstrap3-datetimepicker.min.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap3-datetimepicker.min.js',
    ], 'client');
});
