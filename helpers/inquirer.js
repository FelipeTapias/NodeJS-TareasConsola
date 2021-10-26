const inquirer = require('inquirer');
require('colors');

const Messages = require('./messages.model');


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: Messages
    }
];

const inputUsuario = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'ENTER'.green} para continuar`
    }
];

const inquirerMenu = async() => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción  '.white);
    console.log('=========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa = async() => {

    console.log('\n');
    await inquirer.prompt(inputUsuario);
}

module.exports = {
    inquirerMenu,
    pausa
}