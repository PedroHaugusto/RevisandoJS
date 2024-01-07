/*
1 - For
2 - For in
3 - For of
4 - While

*/

var pessoasArray = [
    {
        nome: 'Alessandra',
        idade: 40,
        sexo: 'F',
        motorista: false
    },{
        nome: 'André',
        idade: 12,
        sexo: 'M',
        motorista: false
    },{
        nome: 'João',
        idade: 35,
        sexo: 'M',
        motorista: true
    }, {
        nome: 'Karla',
        idade: 28,
        sexo: 'F',
        motorista: false
    },{
        nome: 'Vitor',
        idade: 18,
        sexo: 'M',
        motorista: true
    },{
        nome: 'Vanessa',
        idade: 16,
        sexo: 'F',
        motorista: false
    }
]

// For

// for(var i = 0; i < pessoasArray.length; i++) {
//    pessoasArray[i].idade = 10;
// }

// console.log(pessoasArray)

// For in -- Funciona tanto para array quanto para objeto

// var pessoa = pessoasArray[0]

// for(var x in pessoa) {
//     console.log(pessoa[x])
// }

// For of -- Funciona tanto para array quanto para string

// var nomePessoa1 = pessoasArray[1].nome

// for(p of pessoasArray){ // P é váriavél, nesse caso, objeto da pessoa dentro do Array
//    console.log(p)
// }

// para strings:

// for(c of nomePessoa1) {
//    console.log(c) //imprime todos os caracteres das strings
// }

// While e Do While

var i = 0

// do{
//    console.log(pessoasArray[i])
//    i++;
// } while(i < pessoasArray.length)

while( i < pessoasArray.length) {
    console.log(pessoasArray[i])
    i++
}

