'use strict';

angular.module('extratoLancamento').factory('ExtratoLancamentoService', ExtratoLancamentoService);

ExtratoLancamentoService.$inject = ['ENV', '$resource', '$q'];

function ExtratoLancamentoService(ENV, $resource, $q) {

  var methods = {
    importarExtratosLancamentos: importarExtratosLancamentos,
    listarExtratosLancamentos: listarExtratosLancamentos
  }

  return methods;

  /* 
  ----------------------------------*/
  function importarExtratosLancamentos(payload, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', ENV.servicesBaseUrl + 'extrato-lancamento/importar');

    var formData = new FormData();
    formData.append('file', payload.file);

    xhr.onload = function(ev) {
      if (xhr.readyState == 4) {
        switch (xhr.status) {
          case 200:
            callback(ev);
            break;
          default:
            callback(ev);
            break;
        }
      }
    };

    xhr.onerror = function(res) {
      callback(res);
    };

    xhr.send(formData);
  }

  function listarExtratosLancamentos() {
    var LISTAR_EXTRATOS_ENDPOINT = ENV.servicesBaseUrl + 'extrato-lancamento/listar';
    var result = $resource(LISTAR_EXTRATOS_ENDPOINT, {},{})
      .get().$promise;
    return $q.when(result);
  }

}
