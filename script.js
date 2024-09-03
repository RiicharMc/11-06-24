const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Quantos finais Assassin's Creed Valhalla possui?",
    alternativas: [
        {
            texto:"somente 1",
            afirmacao: "afirmação 1"
        },
        {
        texto:"possui 2",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "Qual é o nome do protagonista de dying light 2?",
    alternativas: [
        {

        texto: "Krane",
        afirmacao: "afirmação 3"
        },
        {
        texto:"Aiden",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Quantos anos o jogo minecraft tem?",
    alternativas: [
        {
        texto:"15 anos",
        afirmacao: "afirmação 5"
        },
        {
        texto:"10 ou menos",
        afirmacao: "afirmação 6"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
