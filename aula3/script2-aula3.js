
function Carro() {
    let marca;
    let modelo;
    let ano;
    let cor;
    let kilometragem;
    let valor_fipe;

    this.setAno = function(vAno) {
        this.ano = vAno;
    }
    this.getAno = function() {
        return this.ano;
    }

    this.setKilometragem = function(vKm) {
        this.kilometragem = vKm;
    }
    this.getKilometragem = function() {
        return this.kilometragem;
    }

    this.setValor = function(vValor) {
        this.valor_fipe = vValor;
    }
    this.getValor = function() {
        return this.valor_fipe;
    }

    teste = function(){
        alert("oi");
    }

}

let c1 = new Carro();
c1.setAno(2010);
c1.teste();



