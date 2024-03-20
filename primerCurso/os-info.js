const os = require('node:os')

console.log('Informacion del sistema')
console.log('-----------------------')
console.log('Nombre del sistema:', os.platform())
console.log('Version del sistema:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Uptime:', os.uptime() / 60 / 60)