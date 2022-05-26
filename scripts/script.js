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
  elemento.checked = true;
  console.log(elemento);
}
parametros.forEach(ativarProduto);
