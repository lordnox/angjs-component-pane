
var app       = require('angjs-component-tabs');
var name      = 'angjs-component-pane';
var template  = require('./template.js');

app.directive('pane', function() {
  return {
    require: '^tabs',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    template: template,
    replace: true
  };
});

module.exports = app;

