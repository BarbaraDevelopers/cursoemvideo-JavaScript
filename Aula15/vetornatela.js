let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

/*
num.indexOf(7) //Busca o valor 7, posição 3
num.indexOf(3) //retorno -1 quando nao existe o valor

for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

