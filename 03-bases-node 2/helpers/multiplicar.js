
const colors = require('colors');
const fs = require("fs");

const crearArchivo = async(base=5,listar=false,hasta=10)=>{

  try { 
    
    
    let imprimeConsola="";
    let salida="";
    for (let i = 1; i <= hasta; i++) {
      salida +=`${base} x ${i} = ${base * i}\n`;
      imprimeConsola += `${base} ${"x".yellow} ${i} ${"=".yellow} ${base * i}\n`;
    
    }
    if (listar) {
      console.log(colors.magenta("====================="));
      console.log(colors.random("TABLA DEL: "),colors.green(base));
      console.log(colors.magenta("====================="));
      console.log(imprimeConsola);
    }

    
    fs.writeFileSync(`./salida/TABLA-${base}.txt`,salida);
    return `Tabla-${base}.txt`;


      
  } catch (err) {
    throw err;
    
  }



}
    


module.exports={
  crearArchivo

}