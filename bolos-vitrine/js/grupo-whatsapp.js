// Define o link do grupo
const linkGrupo = "https://chat.whatsapp.com/FYh55t7jQGL5Pqprogoryj";

// Seleciona todos os elementos com a classe
const botoes = document.querySelectorAll(".link-grupo");

// Adiciona o link e o rastreamento em cada um
botoes.forEach(botao => {
  botao.setAttribute("href", linkGrupo);
  botao.setAttribute("target", "_blank"); // abre em nova aba
  botao.setAttribute("rel", "noopener noreferrer"); // segurança

  // Dispara evento do Pixel ao clicar
  botao.addEventListener("click", function () {
    if (typeof fbq === 'function') {
      fbq('track', 'Lead');
    }
  });
});
