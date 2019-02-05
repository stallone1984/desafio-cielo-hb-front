'use strict';

angular.module('extratoLancamento').controller('ExtratoLancamentoController', ExtratoLancamentoController);

ExtratoLancamentoController.$inject = ['ExtratoLancamentoService', 'ngToast', '$scope'];

function ExtratoLancamentoController(ExtratoLancamentoService, ngToast, $scope) {
  var vm = this;

  vm.listarExtratosLancamentos = listarExtratosLancamentos;

  vm.extratoLancamentos = null;
  /* {
    "totalControleLancamento": {
        "quantidadeLancamentos": 608,
        "quantidadeRemessas": 39,
        "valorLancamentos": 473320.37
    },
    "listaControleLancamento": [
        {
            "lancamentoContaCorrenteCliente": {
                "numeroRemessaBanco": 64320236054,
                "nomeSituacaoRemessa": "Pago",
                "nomeTipoOperacao": "regular",
                "dadosDomicilioBancario": {
                    "codigoBanco": 123,
                    "numeroAgencia": 1,
                    "numeroContaCorrente": "00000000065470"
                },
                "dadosAnaliticoLancamentoFinanceiroCliente": []
            },
            "dataEfetivaLancamento": "03/06/2016",
            "dataLancamentoContaCorrenteCliente": "03/06/2016",
            "numeroEvento": 42236790,
            "descricaoGrupoPagamento": "LA-56",
            "codigoIdentificadorUnico": "1",
            "nomeBanco": "BANCO ABCD S.A.",
            "quantidadeLancamentoRemessa": 22,
            "numeroRaizCNPJ": "12996721",
            "numeroSufixoCNPJ": "1597",
            "valorLancamentoRemessa": 11499.1,
            "dateLancamentoContaCorrenteCliente": 1464922800000,
            "dateEfetivaLancamento": 1464922800000
        },
        {
            "lancamentoContaCorrenteCliente": {
                "numeroRemessaBanco": 64320626054,
                "nomeSituacaoRemessa": "Pago",
                "nomeTipoOperacao": "regular",
                "dadosDomicilioBancario": {
                    "codigoBanco": 123,
                    "numeroAgencia": 1,
                    "numeroContaCorrente": "00000000065470"
                },
                "dadosAnaliticoLancamentoFinanceiroCliente": []
            },
            "dataEfetivaLancamento": "02/06/2016",
            "dataLancamentoContaCorrenteCliente": "02/06/2016",
            "numeroEvento": 42592397,
            "descricaoGrupoPagamento": "LA-56",
            "codigoIdentificadorUnico": "25",
            "nomeBanco": "BANCO ABCD S.A.",
            "quantidadeLancamentoRemessa": 2,
            "numeroRaizCNPJ": "12996721",
            "numeroSufixoCNPJ": "1597",
            "valorLancamentoRemessa": 1960,
            "dateLancamentoContaCorrenteCliente": 1464836400000,
            "dateEfetivaLancamento": 1464836400000
        }
    ],
    "indice": 1,
    "tamanhoPagina": 25,
    "totalElements": 39
  }*/

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
