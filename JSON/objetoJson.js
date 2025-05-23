const dados = ` {
    "nome": "Yan",
    "idade": 17,
    "cidade": "SP"

} `

console.log(typeof(dados));

const obj = JSON.parse(dados);
console.log(typeof(obj));

//CONVERTE ESSA PORRA DE OBJETO PRA JSON

const pessoa = {
    nome:"João", 
    idade: 88, 
    cidade: "MT"
};
const jsonString = JSON.stringify(pessoa);
console.log(typeof(jsonString))
