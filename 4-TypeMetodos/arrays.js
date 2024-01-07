/* Arrays
1 - Pop | Push
2 - Shift | Unshift
3 - Splice | Slice
*/

var carrosArray = ['Fiat', 'Hyundai', 'Volkswagen', 'Honda'] 
console.log('Array: ', carrosArray)

// Pop e Push 

carrosArray.pop()
console.log('Pop: ', carrosArray)

carrosArray.push('Renault')
console.log('Push: ', carrosArray)

// Shift e Unshift

carrosArray.shift()
console.log('Shift: ', carrosArray)

carrosArray.unshift('Bugati')
console.log('Unshift: ', carrosArray)

// Splice e Slice

carrosArray.splice(1 , 2)
console.log('Splice: ', carrosArray)

const novoArray = carrosArray.slice(1)
console.log('Slice: ', novoArray)

