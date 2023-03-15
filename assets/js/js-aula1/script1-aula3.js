document.addEventListener("DOMContentLoaded", () => {
  let meusDados = [];

  document.getElementById("botao").addEventListener("click", () => {
    let dado = document.getElementById("dado").value;

    meusDados.push(dado);
    meusDados.sort();

    let lista = document.getElementById("array");
    lista.innerHTML = "";

    for (let i = 0; i < meusDados.length; i++) {
      let item = document.createElement("li");
      item.appendChild(document.createTextNode(meusDados[i]));
      lista.appendChild(item);
    }
  });
});
