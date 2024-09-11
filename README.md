### **Projeto: Pro Players Brasileiros de VALORANT - ImersãoDev com Google Gemini e Alura**

**Descrição:**

Este projeto web tem como objetivo criar um diretório de jogadores profissionais brasileiros de VALORANT. O usuário pode pesquisar por jogadores utilizando um campo de busca, e o sistema retorna os resultados relevantes, exibindo informações como nome, descrição e links para mais detalhes.

**Tecnologias Utilizadas:**

* **HTML:** Estrutura básica das páginas web.
* **CSS:** Estilização da página, definindo layout, cores e fontes.
* **JavaScript:** Lógica da aplicação, responsável pela interação com o usuário e a manipulação dos dados.

**Estrutura do Projeto:**

* **index.html:** Página principal do projeto.
* **style.css:** Arquivo de estilo, contendo as regras CSS.
* **app.js:** Arquivo JavaScript com a lógica principal da aplicação, incluindo a função de pesquisa.
* **dados.js:** Arquivo JavaScript contendo os dados dos jogadores (pode ser substituído por uma API externa).

**Como Funciona:**

1. **Interface do Usuário:**
   * O usuário digita o nome do jogador no campo de pesquisa.
   * Ao clicar no botão "Pesquisar", a função `pesquisar()` em `app.js` é acionada.

2. **Lógica de Pesquisa:**
   * A função `pesquisar()` coleta o termo de pesquisa e converte todos os dados para minúsculas para facilitar a comparação.
   * Itera sobre cada jogador nos dados e verifica se o termo de pesquisa está presente no nome, descrição ou tags do jogador.
   * Se houver correspondência, cria um elemento HTML para exibir as informações do jogador.
   * Se não houver resultados, exibe uma mensagem informando que nenhum jogador foi encontrado.

3. **Exibição dos Resultados:**
   * Os resultados da pesquisa são exibidos na seção `resultados-pesquisa` da página.
   * Cada resultado é apresentado em um card com as seguintes informações:
     * Nome do jogador (link para mais informações)
     * Descrição resumida
     * Link para um perfil mais detalhado do jogador
