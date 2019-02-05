'use strict';

/* ngToast
----------------------------------------*/
angular.module('extratoLancamento')
  .config(['ngToastProvider',function(ngToastProvider) {
    ngToastProvider.configure({
      animation:"fade",
      verticalPosition:"top",
      dismissButton:true,
      timeout:5000
    });
  }
]);

/* Rotas Angular
----------------------------------------*/
angular.module('extratoLancamento')
  .config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider

    .when('/extrato-lancamento', {
      templateUrl: 'templates/extrato-lancamento/extrato-lancamento.html',
      controller: 'ExtratoLancamentoController as vm'
    })
    .otherwise({
      redirectTo: '/extrato-lancamento'
    });

});
