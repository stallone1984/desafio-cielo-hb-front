'use strict';

angular.module('extratoLancamento').controller('RootCtrl', RootCtrl);

RootCtrl.$inject = ['$scope', '$rootScope', 'ENV'];
function RootCtrl($scope, $rootScope, ENV) {

  /**-------------------------------
         View Model Definition
  ---------------------------------**/

  var vm = this;

  $scope.imgBaseUrl = ENV.imgBaseUrl;
  window.imgBaseUrl = ENV.imgBaseUrl;

  // Functions
  vm.init = init;

  /**-------------------------------
           Implementation
  ---------------------------------**/

  /*
  -------------------------------------------*/
  function init() { 
    _updateScreenSize();
  }

  /* Responsive layout helper
  ---------------------------------------------------- */
  $(window).bind("load resize", function(){
    _updateScreenSize();
    $scope.$apply();
  });

  function _updateScreenSize() {
    var windowWidth = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;

    if (windowWidth < 544){$rootScope.screenSize = 0;} // col-xs-
    if (windowWidth >= 544){$rootScope.screenSize = 1;}  // col-sm-
    if (windowWidth >= 768){$rootScope.screenSize = 2;}  // col-md-
    if (windowWidth >= 992){$rootScope.screenSize = 3;}  // col-lg-
    if (windowWidth >= 1200){$rootScope.screenSize = 4;}  // col-xl-
  }
}
