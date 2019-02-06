'use strict';

angular.module('extratoLancamento').controller('ExtratoLancamentoController', ExtratoLancamentoController);

ExtratoLancamentoController.$inject = ['ExtratoLancamentoService', 'ngToast', '$scope'];

function ExtratoLancamentoController(ExtratoLancamentoService, ngToast, $scope) {
  var vm = this;

  vm.listarExtratosLancamentos = listarExtratosLancamentos;
  vm.extratoLancamentos = null;

  /* 
  ----------------------------------*/
  function listarExtratosLancamentos() {
    ExtratoLancamentoService.listarExtratosLancamentos().then(function(data){
        vm.extratoLancamentos = data.retorno;
      }, function(err){
        ngToast.create({
            className: 'danger',
            content: err.data.retorno
        });
        console.error(err);
      });;
  }

}
