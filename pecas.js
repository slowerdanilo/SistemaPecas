var listaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"]

if(listaDePecas.length <= 10) {
    // É possível cadastrar peças
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço nessa lista, impossível cadastrar")
}

let peso = 150;

if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}

let nomePeca = "Disco e Freio";

// = -> Atribuição de valor, ler como RECEBE
// == -> Verificação se os valores são iguais, ler como É IGUAL?
// === -> Verifica se o valor é igual e também o tipo do valor, 

if (nomePeca .length > 3) {
    console.log("Nome da peça está adequada para o cadastro!!")    
} else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome adequado.")
}

switch (nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome adequado.")
        break;
        
    default:
        console.log("Nome da peça está adequada para o cadastro!!")
        break;
}