document.getElementById('relogio').value = document.getElementById('Hoje').value

function relogio() {
    let valor = document.getElementById('relogio').value.split(); // Divide o horário
    let dia = valor[0].split('/').reverse().join('-'); // Converte o formado da data
    valor = dia + ' ' + valor[1];
    let data = new Date(valor);
    let atualizado = data.setSeconds(data.getSeconds() + 1);
    atualizado = new Date(atualizado);
    document.getElementById('relogio').value = atualizado.toLocaleString('pt-BR', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
}

setInterval(relogio, 1000); // 1000ms = a cada 1 segundo 
