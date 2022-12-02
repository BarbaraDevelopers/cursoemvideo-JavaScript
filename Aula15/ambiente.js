/*
num.push(7) //inclui um novo valor ao array
num.length //encontra o comprimento do array
num.sort() //coloca em ordem crescente o valor do array
*/

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {    
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}