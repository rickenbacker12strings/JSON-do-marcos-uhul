const lista = `[
    {   
        "nome": "andy", 
        "idade": "24",
        "cidade": "Porto Alegre"
    },

    {   
        "nome": "garibaldo", 
        "idade": "9",
        "cidade": "Poá"
    }, 

    {   
        "nome": "parido palido", 
        "idade": "77",
        "cidade": "Uberlândia"
    }

] `

const objLista = JSON.parse(lista);

objLista.forEach((pessoa)=> {
    console.log(`
        Nome: ${pessoa.nome},
        idade: ${pessoa.idade},
        Cidade: ${pessoa.cidade}`
    );
});