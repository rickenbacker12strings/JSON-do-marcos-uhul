const fs = require("fs"); // sistema de arquivos

// 1 . LEITURA DO JSON

function lerDados() {
  const dadosBrutos = fs.readFileSync("dados.json");
  const dados = JSON.parse(dadosBrutos);

  return dados;
}

lerDados();

//2 . LISTAGEM DE PRODUTOS
function listarProdutos() {
  const produtos = lerDados();
  produtos.forEach((produto) => {
    console.log(`Nome:${produto.nome},
            Preço: ${produto.preco}`);
  });
}

//3 . CALCULAR O TOTAL DO ESTOQUE

function calcularValorEstoque() {
  const produtos = lerDados();
  let valorTotal = 0;
  produtos.forEach((produto) => {
    valorTotal += produto.preco * produto.quantidade;
  });
  console.log(`\nValor Total 
        do Estoque: ${valorTotal.toFixed(2)}`);
}
calcularValorEstoque();
