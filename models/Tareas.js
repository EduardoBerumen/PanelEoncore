var mongoose = require('mongoose');

var TareasSchema = new mongoose.Schema({
	prioridad: {
		type: String,
		default: '',
		required: 'Ingresa la prioridad',
		trim: true
	},
	nombre: {
		type: String,
		default: '',
		required: 'Ingresa el nombre de la tarea',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Tareas', TareasSchema);