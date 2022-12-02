/*
var idade  =  12
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}
*/
//SISTEMA DE VOTO NO BRASIL
/*
var idade  =  66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Você não vota')
} else if (idade < 18 || idade > 65){
        console.log('Seu voto é opcional')
    } else {
        console.log('Seu voto é obrigatório')
    }
*/

//SISTEMA DE HORA
var now = new Date()
var hora = now.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
