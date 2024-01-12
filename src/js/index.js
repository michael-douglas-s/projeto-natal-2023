const botoes = document.querySelectorAll('.botao');

const alunos = document.querySelectorAll(".aluno");

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarAluno();

        alunos[indice].classList.add("selecionado");
    })

})

function desselecionarAluno() {
    const alunoSelecionado = document.querySelector(".aluno.selecionado");
    alunoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

