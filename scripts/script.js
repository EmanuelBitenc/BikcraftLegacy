//Header classe ativo na navegação
const links = document.querySelectorAll(".header-menu a");
links.forEach(linkAtivo);
function linkAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

//Checked da pagina orcamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarProduto);

//Perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");
console.log(perguntas);

function eventoPerguntas(pergunta) {
  pergunta.addEventListener("click", abrirPergunta);
}

function abrirPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

perguntas.forEach(eventoPerguntas);

//Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const bicicletasContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;

  const media = matchMedia("(min-width:960px)").matches;
  if (media) {
    bicicletasContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
