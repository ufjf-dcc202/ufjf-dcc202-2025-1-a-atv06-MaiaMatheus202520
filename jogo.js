const LARGURA_Mesa = 7;
const MesaResta1 = [
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'peca',     'peca',     'peca',    'peca',    'peca',    'peca',     'peca',
    'peca',     'peca',     'peca',    'vazio',   'peca',    'peca',     'peca',
    'peca',     'peca',     'peca',    'peca',    'peca',    'peca',     'peca',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido',
    'invalido', 'invalido', 'peca',    'peca',    'peca',    'invalido', 'invalido'
];
let pecaSelecionada = null;
export function getMesa() {
    return [...MesaResta1];
}
export function getPecinha() {
    return pecaSelecionada;
}
function moverPeca(origem, destino) {
    if (MesaResta1[origem] !== 'peca' || MesaResta1[destino] !== 'vazio') {
        return false;
    }
    const diff = Math.abs(origem - destino);
    const pecaComidaPos = (origem + destino) / 2;
    const movimentoHorizontal = diff === 2 && Math.floor(origem / LARGURA_Mesa) === Math.floor(destino / LARGURA_Mesa);
    const movimentoVertical = diff === (2 * LARGURA_Mesa);
    if (!movimentoHorizontal && !movimentoVertical) {
        return false;
    }
    if (MesaResta1[pecaComidaPos] !== 'peca') {
        return false;
    }
    MesaResta1[origem] = 'vazio';
    MesaResta1[destino] = 'peca';
    MesaResta1[pecaComidaPos] = 'vazio';
    return true;
}
export function cliqueArrumado(posicao) {
    if (pecaSelecionada === null) {
        if (MesaResta1[posicao] === 'peca') {
            pecaSelecionada = posicao;
            return true;
        }
    } else {
        if (pecaSelecionada === posicao) {
            pecaSelecionada = null;
            return true;
        }
        const moveu = moverPeca(pecaSelecionada, posicao);
        if (moveu) {
            pecaSelecionada = null;
            return true;
        } else {
            if (MesaResta1[posicao] === 'peca') {
                pecaSelecionada = posicao;
                return true;
            }
        }
    }
    return false;
}