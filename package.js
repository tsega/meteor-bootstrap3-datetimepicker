Package.describe({
    summary: "Bootstrap 3 DateTime picker from Eonasdan, https://github.com/Eonasdan/bootstrap-datetimepicker, packaged for Meteor.js"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.use('moment', 'client');

    // fonts
    api.add_files('lib/css/bootstrap3-datetimepicker.min.css', 'client');
    api.add_files('lib/js/bootstrap3-datetimepicker.min.js', 'client');
});