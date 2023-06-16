const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const botaoTroca = document.querySelector("[data-trocar]");
const imagem = document.querySelector('[data-cor]')

const robosCores = ['Branco', 'Vermelho', 'Preto']

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function incrementarValorEquipamento(equipamento, operacao){
    if(equipamento){
        let input = equipamento.querySelector('[data-contador]');
        let valorAtual = parseInt(input.value);
        let novoValor;
        if(operacao === '+'){
            novoValor = valorAtual + 1;
        }else{
            novoValor = valorAtual - 1;
        }

        input.value = novoValor;
    }   
}

function alteraEstatistica(peca, operacao){
    const pecaAlterada = pecas[peca];
    estatisticas.forEach(elemento =>{
        let valor = parseInt(elemento.innerHTML);
        if(operacao === '+'){
            valor += pecaAlterada[elemento.dataset.estatistica];
        }else{
            valor -= pecaAlterada[elemento.dataset.estatistica];
        }
        elemento.innerHTML = valor;
    })
    
}

controle.forEach(elemento => {
    elemento.addEventListener('click', (evento) => {
        let operacao = evento.target.dataset.controle;
        let elementoPai = evento.target.parentElement;
        let peca = evento.target.dataset.peca;
        incrementarValorEquipamento(elementoPai, operacao);
        alteraEstatistica(peca, operacao)

    })
})

botaoTroca.addEventListener('click', ()=>{
    let corAtual = imagem.dataset.cor;
    let cor = circulaLista(robosCores, corAtual);
    imagem.setAttribute('data-cor', cor);
    let imagemNova = 'img/Robotron-2000-' + cor + '.png';
    imagem.src = imagemNova;
    
})

function circulaLista(lista, itemAtual){
    for(i = 0; i < lista.length; i++){
        if(lista[i] === itemAtual){
            let posProxima = i + 1;
            if(posProxima === lista.length){
                posProxima = 0;
            }
            return lista[posProxima];
        }
    }
}
