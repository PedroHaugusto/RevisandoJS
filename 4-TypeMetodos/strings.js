/* Métodos de String
1 - Length
2 - indexOf
3 - Search
4 - Slice | Substring
5 - Replace
6 - UpperCase | LowerCase
7 - Trim
8 - CharAt
*/

var texto = 'Bem vindo ao meus estudos de JS'
console.log('Texto: ', texto)

// Length

console.log('Length (tamanho): ', texto.length)

// indexOf

console.log('Índice do: ', texto.indexOf('vindo'))

// Search

console.log('Search: ', texto.search('vindo'))

// Slice e SubString

console.log('Slice: ', texto.slice(0 , 4))
console.log('SubString: ', texto.substring(0 , 4))

// Replace

console.log('Replace: ', texto.replace('Bem vindo', 'Welcome'))

// UpperCase e LowerCase

console.log('UpperCase: ', texto.toUpperCase())
console.log('LowerCase: ', texto.toLowerCase())

// Trim

console.log('Trim: ', texto.trim())

// CharAt

console.log('ChatAt: ', texto.charAt(4))
