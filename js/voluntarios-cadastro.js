document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCliente");
  const cepInput = document.getElementById("cep");
  const enderecoInput = document.getElementById("endereco");

  cepInput.addEventListener("blur", async () => {
    const cep = cepInput.value.replace(/\D/g, "");
    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          alert("CEP não encontrado.");
          enderecoInput.value = "";
        } else {
          enderecoInput.value = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        }
      } catch (error) {
        alert("Erro ao buscar o CEP.");
      }
    }
  });

  function salvarCliente(cliente) {
    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    const emailJaExiste = clientes.some(
      (clienteLocalStorage) => clienteLocalStorage.email === cliente.email
    );

    if (emailJaExiste) {
      alert("Este email já está cadastrado.");
    } else {
      console.log("Email disponível para cadastro.");
      clientes.push(cliente);
    }
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = cepInput.value.trim();
    const endereco = enderecoInput.value.trim();

    if (nome && email && cep && endereco) {
      salvarCliente({ nome, email, cep, endereco });
      form.reset();
      enderecoInput.value = "";
      setTimeout(() => {
        window.location.href = "voluntarios.html";
      }, 500);
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  });
});
