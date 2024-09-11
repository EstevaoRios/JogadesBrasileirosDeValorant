function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nenhum jogador foi encontrado</p>"
        return
    }

    campoPesquisa =  campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado e cria o HTML correspondente
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `<div class="item-resultado">
                        <h2>
                          <a href="#" target="_blank">${dado.titulo}</a>
                        </h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
                      </div>`;
        }
    }

    if (!resultados) {
        resultados = "Nenhum jogador foi encontrado, tente digitar o nome ou algo relacionado ao jogador que deseja buscar"
    }
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
  }
  //console.log(dados); // Esta linha é provavelmente usada para depuração