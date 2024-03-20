// Esta es una forma de tener promesas en fs que no tengan promesas nativas
// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile('./archivo.txt', 'utf-8'))

const fs = require('node:fs/promises')


console.log('Vamos a empezar a leer')

console.log('leyendo el primer archivo:')
fs.readFile('./archivo.txt', 'utf-8')
  .then(res => console.log(res))

console.log('-------------------')
console.log('Cosas que me pongo a hacer en el medio')
console.log('-------------------')

console.log('leyendo el segundo archivo:')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(res => console.log(res))