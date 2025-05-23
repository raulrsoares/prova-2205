document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  const emailLoginInput = document.getElementById("emailLogin");
  const passwordLoginInput = document.getElementById("passwordLogin");
  const mensagemDiv = document.getElementById("mensagem");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    logar();
  });

  function logar() {
    let usuario = emailLoginInput.value;
    let senha = passwordLoginInput.value;

    let userStorage = localStorage.getItem("usuario");
    let passStorage = localStorage.getItem("senha");

    if (usuario === userStorage && senha === passStorage) {
      mensagemDiv.style.color = "green";
      mensagemDiv.innerText = "Login realizado com sucesso!";
      setTimeout(() => {
        window.location.href = "voluntarios.html";
      }, 1000);
    } else {
      mensagemDiv.style.color = "red";
      mensagemDiv.innerText = "Usuário ou senha incorretos!";
    }
  }
});
