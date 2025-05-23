document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado e pronto para listar clientes.");

  const flashcardsContainer = document.getElementById("flashcardsContainer");
  const searchInput = document.getElementById("searchInput");
  const clearAllBtn = document.getElementById("clearAllBtn");

  let todosOsClientes = [];

  function carregarClientes() {
    todosOsClientes = JSON.parse(localStorage.getItem("clientes")) || [];
    listarClientes();
    clearAllBtn.style.display =
      todosOsClientes.length > 0 ? "inline-block" : "none";
  }

  function listarClientes(filtro = "") {
    flashcardsContainer.innerHTML = "";

    let clientesParaExibir = todosOsClientes;

    if (filtro) {
      const filtroLowerCase = filtro.toLowerCase();
      clientesParaExibir = todosOsClientes.filter(
        (cliente) =>
          cliente.nome.toLowerCase().includes(filtroLowerCase) ||
          cliente.email.toLowerCase().includes(filtroLowerCase)
      );
    }

    if (clientesParaExibir.length === 0) {
      if (todosOsClientes.length === 0) {
        flashcardsContainer.innerHTML = `
          <div class="no-volunteers-message">
            <p>Nenhum voluntário cadastrado ainda.</p>
            <button id="cadastrarVoluntarioBtn" class="cadastrar-voluntario-btn">Cadastrar Voluntários</button>
          </div>
        `;
        document
          .getElementById("cadastrarVoluntarioBtn")
          .addEventListener("click", () => {
            window.location.href = "voluntarios-cadastro.html";
          });
      } else {
        flashcardsContainer.innerHTML = `<p class="no-results-message">Nenhum cliente encontrado com este termo.</p>`;
      }
      return;
    }

    clientesParaExibir.forEach((c, index) => {
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
      flashcard.dataset.email = c.email;

      const imageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        c.nome
      )}&size=160&rounded=true&background=random`;

      flashcard.innerHTML = `
        <div class="flashcard-header">
            <img src="${imageUrl}" alt="Foto de perfil de ${
        c.nome
      }" class="profile-pic">
            <h3>${c.nome}</h3>
        </div>
        <p><strong>Email:</strong> ${c.email}</p>
        <p><strong>CEP:</strong> ${c.cep}</p>
        <p><strong>Endereço:</strong> ${c.endereco}</p>
        <span class="flashcard-index">#${index + 1}</span>
        <button class="delete-btn" data-email="${c.email}">Excluir</button>
      `;

      flashcardsContainer.appendChild(flashcard);
    });

    adicionarEventosDeExclusao();
  }

  function adicionarEventosDeExclusao() {
    const botoesExcluir = document.querySelectorAll(".delete-btn");

    botoesExcluir.forEach((button) => {
      button.addEventListener("click", (event) => {
        const emailParaExcluir = event.target.dataset.email;
        excluirCliente(emailParaExcluir);
      });
    });
  }

  function excluirCliente(email) {
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    const clientesAtualizados = clientes.filter(
      (cliente) => cliente.email !== email
    );

    localStorage.setItem("clientes", JSON.stringify(clientesAtualizados));

    carregarClientes();
    searchInput.value = "";
  }

  function limparTodosVoluntarios() {
    if (
      confirm(
        "Tem certeza que deseja LIMPAR TODOS os voluntários? Esta ação é irreversível!"
      )
    ) {
      localStorage.removeItem("clientes");
      todosOsClientes = [];
      listarClientes();
      searchInput.value = "";
      clearAllBtn.style.display = "none";
    }
  }

  searchInput.addEventListener("input", (event) => {
    listarClientes(event.target.value.trim());
  });

  clearAllBtn.addEventListener("click", limparTodosVoluntarios);

  carregarClientes();
});
