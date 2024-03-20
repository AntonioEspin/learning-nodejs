const fs = require('node:fs')

console.log('Vamos a empezar a leer')

console.log('leyendo el primer archivo:')
fs.readFile('./archivo.txt', 'utf-8', (err, res) => {
  console.log(res)
})
// const text = fs.readFileSync('./archivo.txt', 'utf-8')     <------ forma sincrona
// console.log(text)

console.log('-------------------')
console.log('Cosas que me pongo a hacer en el medio')
console.log('-------------------')

console.log('leyendo el segundo archivo:')
fs.readFile('./archivo2.txt', 'utf-8', (err, res)=>{
  console.log(res)
})
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')     <------ forma sincrona
// console.log(secondText)