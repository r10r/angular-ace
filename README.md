About
====================
A angular directive to create a data-binding to the content of the [Ace Editor](http://ace.c9.io).

* Dependencies see [bower.json](bower.json).

Getting Started
--------------------
* Run `bower install` to install dependencies.
* Open example [test/index.html](test/index.html) in your browser.

### Editor Definition In View
```html
<html ng-app="myApp">
<!-- ... -->
<div ng-controller="AceCtrl">
	<div class="ace-editor" ace="editorInitializeCallback" ng-model="editorData"></div>
</div>
<!-- ... -->
</html>
```

### Editor Initialization In Controller
```javascript
angular.module('myApp', ['ace'])
  .controller('AceCtrl', function ($scope) {
  
   $scope.editorData = 'Hello Angular-Ace';

    $scope.editorInitializeCallback = function(editor) {
      console.log("configure editor");
      editor.session.setMode("ace/mode/markdown");
    };
  });
```
