function filtrarConteudo() {
  const input = document.getElementById("pesquisa").value.toLowerCase();
  const items = document.querySelectorAll(".item");
  
  items.forEach(item => {
    const texto = item.textContent.toLowerCase();
    item.classList.toggle("hidden", !texto.includes(input));
  });
}
