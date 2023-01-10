const colors = require('colors');
const{crearArchivo} = require("./helpers/multiplicar");
const argv = require("./config/yarg");

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo=>console.log(nombreArchivo.red,"creado".green))
.catch(err=>{console.log(err)});