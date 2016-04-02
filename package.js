Package.describe({
    summary: "Bootstrap 3 DateTime picker from @Eonasdan, packaged for Meteor.js",
    version: "4.17.37_2",
    git: "https://github.com/tsega/meteor-bootstrap3-datetimepicker"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2');

    api.use('jquery');
    api.use('momentjs:moment@2.8.4');

    api.addFiles([
      'lib/css/bootstrap-datetimepicker.css', // Add Date Time Picker CSS and JS files
      'lib/js/bootstrap-datetimepicker.js',
    ], 'client');
});
