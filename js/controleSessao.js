(function () {
  const tempoInatividade = 5 * 60 * 1000;
  let temporizadorInatividade;

  function redirecionarParaLogin() {
    window.location.href = "index.html";
  }

  function resetarTemporizador() {
    clearTimeout(temporizadorInatividade);
    temporizadorInatividade = setTimeout(
      redirecionarParaLogin,
      tempoInatividade
    );
  }

  resetarTemporizador();

  ["click", "mousemove", "keydown", "scroll", "resize"].forEach((evento) => {
    document.addEventListener(evento, resetarTemporizador, false);
  });
})();
