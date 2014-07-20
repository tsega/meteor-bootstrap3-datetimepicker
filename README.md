bootstrap3-datetimepicker
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
~~**Note** This pacakge has the [moment meteor package](https://atmosphere.meteor.com/package/moment) as its depedency now. This was included by [@apendua](https://github.com/apendua). **There is no need to install the moment package separately.**~~ Due to errors caused by the Meteor Moment package, I'm simply including Moment.js (with languages) to this package itself, temporarily.
