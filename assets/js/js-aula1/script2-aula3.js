document.getElementById("botao").addEventListener("click", () => {
  function Carro() {
    let marca;
    let modelo;
    let cor;
    let kilometragem;
    let ano;
    let valor_fipe;

    this.setAno = function (vAno) {
      this.ano = vAno;
    };
    this.getAno = function () {
      return this.ano;
    };

    this.setKilometragem = function (vKlm) {
      this.kilometragem = vKlm;
    };
    this.getKilometragem = function () {
      return this.kilometragem;
    };

    this.setValor_fipe = function (vValor) {
      this.valor_fipe = vValor;
    };
    this.getValor_fipe = function () {
      return this.valor_fipe;
    };

    this.anosUtilizacao = function () {
      let dataAtual = new Date();
      let anoTotal = dataAtual.getFullYear();
      let utilizacao = anoTotal - this.ano;
      return utilizacao;
    };

    this.valorMercado = function () {
      let valor;
      switch (true) {
        case this.kilometragem <= 30000:
          valor = 1.1 * this.valor_fipe;
          break;
        case this.kilometragem <= 50000:
          valor = this.valor_fipe;
          break;
        default:
          valor = 0.9 * this.valor_fipe;
      }
      return valor;
    };
  }

  function Calcular() {
    let carro1 = new Carro();

    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let cor = document.getElementById("cor").value;
    let ano = document.getElementById("ano").value;
    let km = document.getElementById("kilometragem").value;
    let valor_fipe = document.getElementById("valor_fipe").value;

    carro1.setAno(ano);
    carro1.setKilometragem(km);
    carro1.setValor_fipe(valor_fipe);

    let utilizacao = carro1.anosUtilizacao();
    let valor_mercado = carro1.valorMercado();

    document.getElementById("marca-exibir").innerHTML = marca;
    document.getElementById("modelo-exibir").innerHTML = modelo;
    document.getElementById("cor-exibir").innerHTML = cor;
    document.getElementById("ano-exibir").innerHTML = ano;
    document.getElementById("utilizacao").innerHTML = utilizacao;
    document.getElementById("valor_mercado").innerHTML = valor_mercado;
  }
  Calcular();
});
