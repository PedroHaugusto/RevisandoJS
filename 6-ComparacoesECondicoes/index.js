/*
1 - If , Else | Else If
2 - Switch

--Operadores de Comparação
  == ou ===
  != ou !==
  > e <
  >= e <=
  ? 

--Operadores Lógicos
  &&  ||  !
*/

const pessoasArray = [
    {
        nome: 'Alessandra',
        idade: 40,
        sexo: 'F'
    },{
        nome: 'André',
        idade: 12,
        sexo: 'M'
    },{
        nome: 'João',
        idade: 35,
        sexo: 'M'
    }, {
        nome: 'Karla',
        idade: 28,
        sexo: 'F'
    },{
        nome: 'Vitor',
        idade: 18,
        sexo: 'M'
    },{
        nome: 'Vanessa',
        idade: 16,
        sexo: 'F'
    }
]

// If, Else if e Else

// pessoasArray.forEach((p) => {
//    if(p.nome === 'André'){
//        console.log('André achado!')
//    } else if(p.nome.includes('A')) {
//        console.log(`A pessoa ${p.nome} não é o André, mas começa com A`)
//    } else {
//        console.log(`A pessoa ${p.nome} não é o André!`)
//   }
// })


//Switch

//  pessoasArray.forEach((p) => {
//    switch(p.nome.charAt(0)){
//        case 'V':
//            console.log(`Inicial V: ${p.nome}`)
//            break;
//        case 'A':
//            console.log(`Inicial A: ${p.nome}`)
//            break;
//        case 'J':
//            console.log(`Inicial J: ${p.nome}`)
//            break;
//        default:
//            console.log(`Inicial não encontrada! ${p.nome}`)
//
//    }
//  })

// Operadores Lógicos

const filtrados = pessoasArray.filter((p) => p.nome != 'André')
console.log(filtrados)

pessoasArray.map((p) => p.idade >= 18 ? p.maiorDeIdade = true : p.maiorDeIdade = false)
console.log(pessoasArray)



