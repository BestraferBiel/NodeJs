const inquirer = require("inquirer");
const colors = require('colors');


const preguntas = [
    {

    type: "list",
    name: "opcion",
    menssage: "Que desea hacer?",
    choices: ["opt1", "opt2", "opt3"]
    }


];

const inquirerMenu = async () => {

    console.clear();
    console.log("=======================".green);
    console.log("SELECCIONE OPCION".green);
    console.log("=======================\n".green);


    const opt = await inquirer.prompt(preguntas);

    return opt;


}



module.exports = {

    inquirerMenu
}