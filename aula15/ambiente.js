var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor na primeira posição é: ${num[0]}`)
var pos = num.indexOf(2)
if (pos == -1) {
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor está na posição ${pos}!`)
}
