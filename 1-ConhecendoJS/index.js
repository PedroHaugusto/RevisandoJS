var nome, sobrenome; // Declarando váriavéis e entendendo seus tipos
var idade, peso;
var maiorDeIdade;
var fichaCriminal;
var listaDeNomes, valoresRoubados, listaDeCarrosSuspeitos;

nome = 'Pedro';
sobrenome = 'Henrique';
idade = 18;
maiorDeIdade = true;
peso = 52.9;

fichaCriminal = {
    nome,
    sobrenome,
    idade,
    maiorDeIdade,
    peso,
    corDoCabelo: 'Preto'
}

listaDeNomes = [
    'João' , 'Maria', 'Marcos', 'Gabriele'
]

valoresRoubados = [
    123.345, 153.851, 234.550, 389.020
]

listaDeCarrosSuspeitos = [
    {
        placa: 'OVM222',
        modelo: 'Renegade'
    }, {
        placa: 'MTQ088',
        modelo: 'Corolla',
    }, {
        placa: 'UTF205',
        modelo: 'Range Rover Velar'
    }, {
        placa: 'AKT742',
        modelo: 'S10'
    }
]

console.log('Nome do Usuário: ', nome);
console.log('Sobrenome do Usuário: ', sobrenome);
console.log('Idade do Usuário: ', idade)
console.log('O usuário é maior de idade? ', maiorDeIdade);
console.log('Qual o peso em kg do Usuário? ', peso);
console.log('----------------------------------------------');
console.log('FICHA CRIMINAL:');
console.log(fichaCriminal)
console.log('----------------------------------------------');
console.log('LISTA DE SUSPEITOS:');
console.log(listaDeNomes)
console.log('----------------------------------------------');
console.log('VALORES ROUBADOS:');
console.log(valoresRoubados)
console.log('----------------------------------------------');
console.log('CARROS SUSPEITOS:');
console.log(listaDeCarrosSuspeitos)