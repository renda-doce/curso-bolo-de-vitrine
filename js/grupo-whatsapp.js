// Define o link do grupo
  const linkGrupo = "https://chat.whatsapp.com/Hyhf5ivYFZ6AqHTG8OCltS?mode=ems_copy_t";

  // Seleciona todos os elementos com a classe
  const botoes = document.querySelectorAll(".link-grupo");

  // Adiciona o link em cada um
  botoes.forEach(botao => {
    botao.setAttribute("href", linkGrupo);
    botao.setAttribute("target", "_blank"); // abre em nova aba
    botao.setAttribute("rel", "noopener noreferrer"); // segurança
  });