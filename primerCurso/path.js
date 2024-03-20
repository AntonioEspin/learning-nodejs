const path = require('node:path')

// Para saber el tipo de barra del S.O
console.log(path.sep)

// Unir rutas
const filePath = path.join('juegos', 'call-of-duty', 'MW2')
console.log(filePath)

// Obtener el nombre base
const base = path.basename('musica/rock/clasico/laquemona.mp4')
console.log(base)

// obtener nombre sin extension
const fileName = path.basename('documentos/clases/matematicas.docs', '.docs')
console.log(fileName)

// obtener extension
const extension = path.extname('asda/jkjj/jjj/cositas.png')
console.log(extension)