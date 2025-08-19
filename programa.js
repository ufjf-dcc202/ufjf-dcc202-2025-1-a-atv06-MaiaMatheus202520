import { getMesa, cliqueArrumado, getPecinha } from "./resta1.js";
const eMesa = document.querySelector(".Mesa");
function atualizaVisual() {
    const Mesa = getMesa();
    const pecaSelecionada = getPecinha();
    const posicoes = eMesa.children;
    for (let i = 0; i < Mesa.length; i++) {
        posicoes[i].dataset.tipo = Mesa[i];

        if (i === pecaSelecionada) {
            posicoes[i].classList.add('selecionada');
        } else {
            posicoes[i].classList.remove('selecionada');
        }
    }
}function posicaoClick(evento) {
    const posicao = Number(evento.target.dataset.posicao);
    const mudouEstado = cliqueArrumado(posicao);
    if (mudouEstado) {
        atualizaVisual();
    }
}function montaMesaInicial() {
    const Mesa = getMesa();
    for (let i = 0; i < Mesa.length; i++) {
        const Posicionado = document.createElement("div");
        Posicionado.classList.add("posicao");
        Posicionado.dataset.posicao = i;
        Posicionado.dataset.tipo = Mesa[i];
        Posicionado.addEventListener("click", posicaoClick);
        eMesa.append(Posicionado);
    }
}
montaMesaInicial();