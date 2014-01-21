About
====================
A angular directive to create a data-binding to the content of the [Ace Editor](http://ace.c9.io).

Installation
--------------------
Simply add it as dependency using [bower](http://bower.io/).
```
bower install angular-ace --save
```

Example
--------------------
* First run `bower install` to install the dependencies.
* Then simply open [test/index.html](test/index.html) in your browser.

### Editor Definition In The View
The editor node must have the css class `ace-editor`, the `ace` attribute
and the `ng-model` attribute.

You can optionally register a custom **initialization callback** for the editor. 

The value of the `ace` attribute defines the name of the callback. (No value -> no callback)

```html
<html ng-app="myApp">
<!-- ... -->
<div ng-controller="AceCtrl">
	<div class="ace-editor" ace="myInitCallback" ng-model="editorData"></div>
</div>
<!-- ... -->
</html>
```

### Editor Initialization In The Controller

```javascript
angular.module('myApp', ['ace'])
  .controller('AceCtrl', function ($scope) {
  
   $scope.editorData = 'Hello Angular-Ace';

    $scope.myInitCallback = function(editor) {
      console.log("configure editor");
      editor.session.setMode("ace/mode/markdown");
    };
  });
```
