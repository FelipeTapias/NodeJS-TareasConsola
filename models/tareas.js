const Tarea = require("./tarea");



class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
    }

}

module.exports = Tareas;