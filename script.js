let amigos = []; // Array para armazenar os nomes
function adicionarAmigo() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim(); // Captura o valor do campo e remove espaços extras

  // Validação: Verifica se o campo está vazio
  if (nome === "") {
    alert("POR FAVOR, INSIRA UM NOME!");
    return;
  }

  // Adiciona o nome ao array
  amigos.push(nome);

  // Limpa o campo de entrada
  input.value = "";

  // Atualiza a lista de amigos na tela
  atualizarLista();
}
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");

  // Limpa a lista antes de atualizá-la
  lista.innerHTML = "";

  // Percorre o array e cria elementos <li> para cada amigo
  for (let amigo of amigos) {
    const item = document.createElement("li");
    item.textContent = amigo; // Define o texto do item como o nome do amigo
    lista.appendChild(item); // Adiciona o item à lista
  }
}
function sortearAmigo() {
  const resultado = document.getElementById("resultadoSorteio");

  // Validação: Verifica se há amigos na lista
  if (amigos.length === 0) {
    resultado.textContent = "A lista está vazia. Adicione amigos antes de sortear.";
    return;
  }

  // Gera um índice aleatório com base no tamanho do array
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtém o nome correspondente ao índice sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o resultado na tela
  resultado.textContent = `RESULTADO: ${amigoSorteado}`;
}
// Botão "Adicionar"
document.getElementById("adicionarBtn").addEventListener("click", adicionarAmigo);

// Botão "Sortear Amigo"
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);
