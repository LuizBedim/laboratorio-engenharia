document.addEventListener("DOMContentLoaded", () => {
    const novoItemInput = document.getElementById('novo-item');
    const BotaoAdd = document.getElementById('botao-add');
    const todoList = document.getElementById('lista');

    const tasks = [];

    BotaoAdd.addEventListener('click', () => {
        if (novoItemInput.value) {

            const novoItem = document.createElement('li');
            const nomeDaTarefa = document.createElement('span');
            nomeDaTarefa.innerText = " " + novoItemInput.value + " ";

            const editar = document.createElement('button');
            editar.innerText = 'Editar';
            editar.addEventListener('click', () => {
                const newTask = prompt('Informe a nova tarefa:', nomeDaTarefa.innerText);
                if (newTask !== null) {
                    nomeDaTarefa.innerText = newTask;
                }
            });

            const excluir = document.createElement('button');
            excluir.innerText = 'Excluir';
            excluir.addEventListener('click', () => {

                todoList.removeChild(novoItem);

                tasks.splice(tasks.indexOf(novoItem), 1);
            });

            const mover = document.createElement('button');
            mover.innerText = 'Mover';
            mover.addEventListener('click', () => {

                const indiceAtual = tasks.indexOf(novoItem);
                if (indiceAtual > 0) {

                    tasks.splice(indiceAtual, 1);

                    tasks.splice(indiceAtual - 1, 0, novoItem);

                    todoList.insertBefore(novoItem, todoList.children[indiceAtual - 1]);
                }
            });

            tasks.push(novoItem);

            novoItem.appendChild(nomeDaTarefa);
            novoItem.appendChild(editar);
            novoItem.appendChild(mover);
            novoItem.appendChild(excluir);

            todoList.appendChild(novoItem);

            novoItemInput.value = '';
        }
    });
});