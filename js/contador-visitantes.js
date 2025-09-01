  // Configuração do contador
  const maxVisitantes = 145; // valor máximo
  const minVisitantes = 98;  // valor mínimo
  let visitantes = Math.floor(Math.random() * (maxVisitantes - minVisitantes + 1)) + minVisitantes; 
  const intervaloMax = 5000; // tempo máximo entre alterações (ms)

  const spanNumVisitantes = document.getElementById('num-visitantes');

  function alterarNumVisitantes() {
    // decide aleatoriamente se vai aumentar ou diminuir
    const direcao = Math.random() < 0.5 ? -1 : 1;
    // varia 1 ou 2 visitantes por vez
    let variacao = direcao * (Math.random() < 0.7 ? 1 : 2);

    visitantes += variacao;

    // garante que o valor fique dentro dos limites
    if (visitantes > maxVisitantes) visitantes = maxVisitantes;
    if (visitantes < minVisitantes) visitantes = minVisitantes;

    // atualiza no HTML
    spanNumVisitantes.textContent = visitantes;

    // agenda próxima alteração com tempo aleatório
    const proximoIntervalo = Math.floor(Math.random() * intervaloMax) + 1000;
    setTimeout(alterarNumVisitantes, proximoIntervalo);
  }

  // Inicia o contador
  alterarNumVisitantes();