
function Pessoa() {
    let nome;
    let email;
    let data;
    let telefone;
    let celular;
    let matricula;

    this.setNome = function(vNome) {
        this.nome = vNome;
    }
    this.getNome = function() {
        return this.nome;
    }

    this.setEmail = function(vEmail) {
        this.email = vEmail;
    }
    this.getEmail = function() {
        return this.email;
    }

    this.setData = function(vData) {
        this.data = vData;
    }
    this.getData = function() {
        return this.data;
    }

    this.setTelefone = function(vTelefone) {
        this.telefone = vTelefone;
    }
    this.getTelefone = function() {
        return this.telefone;
    }

    this.setCelular = function(vCelular) {
        this.celular = vCelular;
    }
    this.getCelular = function() {
        return this.celular;
    }

    this.setMatricula = function(vMatricula) {
        this.matricula = vMatricula;
    }
    this.getArea = function() {
        return this.area;
    }

}


function Aluno() {
    Pessoa.call(this);
}

function Professor() {
    Pessoa.call(this);

    let lattes;

    this.setLattes = function(vLattes) {
        this.lattes = vLattes;
    }
    this.getLattes = function() {
        return this.lattes;
    }
}

let aluno = new Aluno();
aluno.setNome("Luiz");
console.log(aluno.getNome());
