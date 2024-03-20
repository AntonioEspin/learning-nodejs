import { readFile } from 'node:fs/promises'


console.log('Vamos a empezar a leer')

console.log('leyendo el primer archivo:')
const text = await readFile('./archivo.txt', 'utf-8')
console.log(text)

console.log('-------------------')
console.log('Cosas que me pongo a hacer en el medio')
console.log('-------------------')

console.log('leyendo el segundo archivo:')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log(secondText)