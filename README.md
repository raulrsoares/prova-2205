# Integrantes

- Marciel Vinicius
- Raul Soares

# Projeto de Gestão de Voluntários

Este é um projeto web simples para cadastrar e gerenciar voluntários. Ele permite que os usuários adicionem novos voluntários com seus dados, visualizem uma lista de voluntários existentes no formato de flash cards, pesquisem por voluntários específicos e excluam registros individualmente ou todos de uma vez.

## Acesso ao login

| email       | senha |
| ----------- | ----- |
| admin@admin | 1234@ |

## 🚀 Funcionalidades

- **Cadastro de Voluntários:** Formulário intuitivo para adicionar novos voluntários com `Nome`, `E-mail`, `CEP` e `Endereço` (preenchido automaticamente via API de CEP).
- **Listagem de Voluntários (Flash Cards):**
  - Visualização clara e moderna dos voluntários cadastrados em formato de flash cards.
  - **Fotos de Perfil Dinâmicas:** Cada voluntário exibe uma foto de perfil aleatória gerada com base no seu nome, utilizando a API do UI Avatars (ou Unsplash, dependendo da configuração).
- **Pesquisa em Tempo Real:** Uma barra de pesquisa permite filtrar os voluntários por `Nome` ou `E-mail` instantaneamente.
- **Exclusão Individual:** Botão "Excluir" em cada flash card para remover um voluntário específico.
- **Limpar Todos os Voluntários:** Botão para apagar todos os registros de voluntários com uma confirmação de segurança.
- **Mensagem Dinâmica:** Quando não há voluntários cadastrados ou os resultados da pesquisa são vazios, uma mensagem apropriada é exibida, com um botão direto para a tela de cadastro se a lista estiver vazia.
- **Persistência de Dados:** Os dados dos voluntários são armazenados localmente no navegador (`localStorage`), garantindo que as informações persistam mesmo após fechar e reabrir a página.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura da página web.
- **CSS3:** Estilização responsiva e moderna dos elementos.
- **JavaScript (ES6+):** Lógica de manipulação do DOM, gestão de dados no `localStorage`, e integração com APIs.
- **`localStorage` API:** Armazenamento persistente dos dados no navegador.
- **API de CEP:** (Assumindo que você usa uma API como ViaCEP ou similar para preencher o endereço automaticamente a partir do CEP no `voluntarios-cadastro.js`).
- **UI Avatars API (ou Unsplash API):** Geração de fotos de perfil dinâmicas e aleatórias.

## 📂 Estrutura do Projeto

```
.
├── css/
│   ├── style.css
│   ├── voluntarios.css
│   └── voluntarios-cadastro.css
├── js/
│   ├── controleSessao.js
│   ├── index.js
│   ├── login.js
│   ├── voluntarios.js
│   └── voluntarios-cadastro.js
└── index.html
├── voluntarios.html
└── voluntarios-cadastro.html
└── README.md
```

## ⚙️ Como Executar o Projeto

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/Macielv7/prova-2205
    ```

2.  **Navegue até a Pasta do Projeto:**

    ```bash
    cd nome-do-seu-projeto
    ```

3.  **Abra os Arquivos HTML:**

    - Abra `voluntarios-cadastro.html` no seu navegador para cadastrar novos voluntários.
    - Abra `voluntarios.html` no seu navegador para visualizar e gerenciar os voluntários cadastrados.

    Alternativamente, você pode usar uma extensão de "Live Server" no VS Code ou similar para servir os arquivos localmente.

## 🤝 Contribuição

Contribuições são sempre bem-vindas\! Se você tiver sugestões de melhorias, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para:

1.  Fazer um "fork" do projeto.
2.  Criar uma "branch" para sua funcionalidade (`git checkout -b feature/minha-nova-funcionalidade`).
3.  Fazer suas alterações.
4.  Realizar um "commit" das suas alterações (`git commit -m 'feat: adiciona nova funcionalidade X'`).
5.  Fazer um "push" para a sua "branch" (`git push origin feature/minha-nova-funcionalidade`).
6.  Abrir um "Pull Request".
