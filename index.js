
const projetos = document.querySelectorAll('.projeto');

projetos.forEach(projeto => {
  projeto.addEventListener('mouseover', () => {
    // Adicionar uma classe para aplicar um efeito hover (ex: aumentar o tamanho da imagem)
    projeto.classList.add('hover');
  });

  projeto.addEventListener('mouseout', () => {
    // Remover a classe para voltar ao estado normal
    projeto.classList.remove('hover');
  });
});