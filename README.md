# About

A directive for ace code editor

## Purpose & Rationale

Bind ACE editor content to scope model:
* editor is syned to model changes
* model is synced to changes in editor

## Installation

* Requirements see bower.json

Usage
---------------------
See example in [test/index.html](test/index.html). Run `bower install` to install dependencies.

### Editor Definition In View
```
<html ng-app="myApp">
...
<div ng-controller="AceCtrl">
	<div class="ace-editor" ace="editorInitializeCallback" ng-model="editorData"></div>
</div>
...
</html>
```

### Editor Initialization In Controller
```
angular.module('myApp', ['ace'])
  .controller('AceCtrl', function ($scope) {
  
   $scope.editorData = 'Hello Angular-Ace';

    $scope.editorInitializeCallback = function(editor) {
      console.log("configure editor");
      editor.session.setMode("ace/mode/markdown");
    };
  });
```

## Copyright

Copyright (c) 2012 Cameron Westland. See LICENSE.txt for further details.
Copyright (c) 2014 Ruben Jenster 
