'use strict';

angular.module('extratoLancamento').factory('ExtratoLancamentoService', ExtratoLancamentoService);

ExtratoLancamentoService.$inject = ['ENV', '$resource', '$q'];

function ExtratoLancamentoService(ENV, $resource, $q) {

  var methods = {
    listarExtratosLancamentos: listarExtratosLancamentos
  }

  return methods;

  function listarExtratosLancamentos() {
    var LISTAR_EXTRATOS_ENDPOINT = ENV.servicesBaseUrl + 'extrato-lancamento/listar';
    var result = $resource(LISTAR_EXTRATOS_ENDPOINT, {},{})
      .get().$promise;
    return $q.when(result);
  }

}
