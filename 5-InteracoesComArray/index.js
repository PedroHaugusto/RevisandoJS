/*
1 - Sort | Reverse
2 - ForEach
3 - ArrayMap
4 - Filter
5 - Reduce
6 - Find
*/

const timesArray =  [
    'São Paulo', 
    'Ceará',
    'Sport', 
    'Botago', 
    'Treze', 
    'Fortaleza'
];

const numerosArray = [
    1 , 345 , 12 , 34 , 85 , 912 
]

console.log('Array Original: ', timesArray)

// Sort e Reverse

console.log('Sort: ', timesArray.sort()) // Só funciona com Strings
console.log('Reverse: ', timesArray.reverse())

console.log('Sort números: ', numerosArray.sort((a , b) => b - a)) // Assim quando for trabalhar com números

// ForEach => 1 Ação 

timesArray.forEach((time, index) => {
    console.log(`A posição do time ${time} é ${index}`)
})

// Map

const numerosFormatados = numerosArray.map((n) => n / 10)
console.log('Map: ', numerosFormatados)

// Filter

const filtrados = timesArray.filter((time) => time.charAt(0) === 'S')
console.log('Times filtrados: ', filtrados)

// Reduce

const somaDoArray = numerosArray.reduce((ac , n) => ac += n)
console.log('Soma do Array Reduce: ', somaDoArray)

// Find

const itemAchado = timesArray.find((t) => t === 'Treze')
console.log('Find: ', itemAchado)

