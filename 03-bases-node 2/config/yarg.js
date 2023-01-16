const yargs = require("yargs");

const argv = require("yargs")
.option("b",{
    alias:"base",
    type:"number",
    demandOption:true,
    describe: "Es la base de la trabla de multiplicar"
    
})
.option("l",{
   alias:"listar",
   type:"boolean",
   default:false,
   describe: "Muestre la tlabla con todos los parametros"

})
.option("h",{
alias:"hasta",
type:"number",
describe:"Describe hasta donde realizar la multiplicasion "
})
.check((argv,options)=>{
    if (isNaN(argv.b)) {
        throw "La base tiene que ser un numero"
        
    }
    return true;
})
.argv;

module.exports =  argv;