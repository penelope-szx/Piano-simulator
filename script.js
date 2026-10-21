const teclasPiano = document.querySelectorAll(".piano-teclas .tecla");
const controleVolume = document.querySelector(".controle-volume input");
const teclasSelecao = document.querySelector(".teclas-checkbox input");

let todasAsTeclas = [];
let audio = new Audio("./tunes/a.wav");

function tocarNota(tecla) {
    audio.src = `./tunes/${tecla}.wav`;
    console.log(`Tecla pressionada: ${tecla}`);
    audio.play();

    const teclaPressionada = document.querySelector(`[data-key="${tecla}"]`);
    teclaPressionada.classList.add("pressionada");
    setTimeout(function (){
        teclaPressionada.classList.remove("pressionada");
    },150);
}

teclasPiano.forEach (
    function(tecla) {
        todasAsTeclas.push(tecla.dataset.key);

        tecla.addEventListener("click", function(){
            tocarNota(tecla.dataset.key);
    });
}
);
function controlarVolume(evento) {
    audio.volume = addEventListener.target.value;
}

function mostrarOcultarTeclas(){
    teclasPiano.forEach(function (tecla) {
        tecla.classList.toggle("ocultar");
    });
}

function tocarTecla(evento) {
    if (todasAsTeclas.includes(evento.key)) {
        tocarNota(evento.key);
    }
}

controleVolume.addEventListener("input", controlarVolume);
teclasSelecao.addEventListener("click", mostrarOcultarTeclas);
document.addEventListener("keydown", tocarTecla);