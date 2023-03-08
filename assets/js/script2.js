document.addEventListener("DOMContentLoaded", () => {

    function mostrarHoras() {

        let dataAtual = new Date();

        let horas = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();
        let segundos = dataAtual.getSeconds();

        if (horas < 10) {
            horas = "0" + horas;
        }

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        horarioAtual = horas + ":" + minutos + ":" + segundos;
        
        document.getElementById("relogio").textContent = horarioAtual;
        setTimeout(mostrarHoras, 1000); 
      }
      mostrarHoras();
});
