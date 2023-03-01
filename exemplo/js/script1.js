let data = new Date();

let dia = data.getDay();
let numero = data.getDate();
let mes = data.getMonth();
let ano = data.getYear();

let diaEscrito = "";
let mesEscrito = "";
let anoEscrito = ano + 1900;

switch (dia) {
    case 0:
        diaEscrito = "Domingo";
        break;
    
    case 1:
        diaEscrito = "Segunda-Feira";
        break;

    case 2:
        diaEscrito = "Terça-Feira";
        break;

    case 3:
        diaEscrito = "Quarta-Feira";
        break;
    
    case 4:
        diaEscrito = "Quinta-Feira";
        break;

    case 5:
        diaEscrito = "Sexta-Feira";
        break;

    case 6:
        diaEscrito = "Sabádo";
        break;
}

switch (mes) {
    case 0:
        mesEscrito = "Janeiro";
        break;
    
    case 1:
        mesEscrito = "Fevereiro";
        break;
    
    case 2:
        mesEscrito = "Março";
        break;

    case 3:
        mesEscrito = "Abril";
        break;
    
    case 4:
        mesEscrito = "Maio";
        break;
    
    case 5:
        mesEscrito = "Junho";
        break;
    
    case 6:
        mesEscrito = "Julho";
        break;

    case 7:
        mesEscrito = "Agosto";
        break;
    
    case 8:
        mesEscrito = "Setembro";
        break;
    
    case 9:
        mesEscrito = "Outubro";
        break;
    
    case 10:
        mesEscrito = "Novembro";
        break;
    
    case 11:
        mesEscrito = "Dezembro";
        break;
}

alert(diaEscrito + " , " + numero + " de " + mesEscrito + " de " + anoEscrito);