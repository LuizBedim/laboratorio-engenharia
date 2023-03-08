document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botao").addEventListener("click", () => {

        function validarPalindromo(palavra) {

            let palavraFormatada = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[\W_]/g, '');
            return palavraFormatada === palavraFormatada.split("").reverse().join("");
        }

        function verificarPalindromo() {
            let frase = document.getElementById("frase").value;

            if (validarPalindromo(frase)) {
                alert("A palavra ou frase é um palíndromo");
            } else {
                alert("A palavra ou frase não é um palíndromo");
            }
        }
        
        verificarPalindromo();
    });
}); 