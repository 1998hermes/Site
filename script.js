// Função para carregar o conteúdo das seções dinamicamente
function loadContent(page) {
    const contentSection = document.getElementById('content');
  
    // Realiza uma requisição XMLHttpRequest para obter o conteúdo do arquivo HTML
    const xhr = new XMLHttpRequest();
    xhr.open('GET', page, true);
  
    xhr.onload = function () {
      if (this.status === 200) {
        contentSection.innerHTML = this.responseText;
      }
    };
  
    xhr.send();
  }
  
  // Event listener para carregar o conteúdo das seções quando um link for clicado
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const contentSection = document.getElementById('content');
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const page = link.getAttribute('href');
        loadContent(page);
        contentSection.scrollIntoView();
      });
    });
  });