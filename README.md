bootstrap3-datatimepicker
======================

Bootstrap 3 DateTime picker from Eonasdan, https://github.com/Eonasdan/bootstrap-datetimepicker, packaged for Meteor.js

To install
----------

```sh
$ mrt add bootstrap3-datetimepicker
```

To use
------

Set up your markup, in the example below a grouped calendar icon with text input (bootstrap3)

```html
<template name="temName">
.
.
.
<div class="input-group datetimepicker">
	<span class="input-group-addon"><i class="fa fa-calendar"></i></span>
	<input class="set-due-date form-control" type="text"/>
</div>
.
.
.
</template>
```
Using jQuery initiate the control as datetime picker after the template has been rendered.

```js
Template.tempName.rendered = function() {
    $('.datetimepicker').datetimepicker();
}
```
*Note*

This package requires the **moment**, LINK HERE, package. However, the moment.js version included in that package is not compatible with bootstrap3-datetimepicker. Once the moment package is installed, go into 'packages/moment/lib/moment' in your meteor project and replace the 'test', 'tasks', 'min', and 'lang' folders with those you can find in the latest version of the plain moment.js library, LINK HERE.