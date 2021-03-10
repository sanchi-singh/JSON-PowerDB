// Code goes here
(function() {
  'use strict';
  var app = angular.module('plunker', ['ngRoute']);

  app.controller('MainCtrl', MainCtrl);


  function MainCtrl() {
    var mc = this;
    
    
    mc.profile = {
      name: 'Profile'
    };
    mc.resume = {
      name: 'Resume'
    };
    mc.login = {
      name: 'Login'
    };
    mc.employee = {
      name: 'Employee Details'
    };

  }
  
  angular.module('plunker').directive('displayDir', displayDirFn);

  function displayDirFn() {
    var directive = {
      scope: {
        resumeInfo: '='
      },
      transclude: true,
      template: '{{resumeInfo.name}}<div ng-transclude></div>',
      link: function(scope, elem, attrs) {
       
      }
    };
    return directive;
  }
  
   angular.module('plunker').directive('dispDir', dispDirFn);

  function dispDirFn() {
    var dir = {
      scope: {
        profileInfo: '='
      },
      transclude: true,
      template: '{{profileInfo.name}}<div ng-transclude></div>',
      link: function(scope, elem, attrs) {
       
      }
    };
    return dir;
  }
  
  angular.module('plunker').directive('dispDirec', dispDirecFn);

  function dispDirecFn() {
    var direc = {
      scope: {
        employeeInfo: '='
      },
      transclude: true,
      template: '{{employeeInfo.name}}<div ng-transclude></div>',
      link: function(scope, elem, attrs) {
       
      }
    };
    return direc;
  }

})();


