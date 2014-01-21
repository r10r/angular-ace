'use strict';

angular.module('aceApp', ['ace'])
  .controller('AceCtrl', function ($scope) {
    // no initialize callback for first editor
    $scope.editorData1 = "default mode (text)";

    $scope.initEditor2 = function(editor) {
      console.log("configure first editor");
      editor.session.setMode("ace/mode/javascript");
      $scope.editorData2 = "mode is javascript";
    }

    $scope.initEditor3 = function(editor) {
      console.log("configure second editor");
      editor.session.setMode("ace/mode/markdown");
      $scope.editorData3 = "mode is markdown";
    }
  });

