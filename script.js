// CONTENEDOR TAREAS
const contenedorTareas = document.getElementById('contenedorTareas');
const contenedorProceso = document.getElementById('contenedorProceso');
const contenedorHechas = document.getElementById('contenedorHechas');



Sortable.create(contenedorTareas, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true

	},
	Animation: 200,
	easing: "cubic-bezier(0.7, 0, 0.84, 0)",
	chosenClass: "seleccion"
});


Sortable.create(contenedorProceso, {
	group: {
		name: "lista-tareas",
		pull: true,
		put: true

	},
	Animation: 200,
	easing: "cubic-bezier(0.7, 0, 0.84, 0)",
	chosenClass: "seleccion"
});


Sortable.create(contenedorHechas, {
	group: {
		name: "lista-tareas",
		pull: false,
		put: true

	},
	Animation: 200,
	easing: "cubic-bezier(0.7, 0, 0.84, 0)",
	chosenClass: "seleccion"

});

const addNewTask = event => {
	event.preventDefault();
	const { value } = event.target.taskText;
	if (!value) return;
	const task = document.createElement('div');
	task.classList.add('task', 'roundBorder');
	task.addEventListener('click', addNewTask);
	task.textContent = value;
	contenedorTareas.prepend(task);
	event.target.reset();
}



const addTaskProcess = event => {
	event.preventDefault();
	const { value } = event.target.taskText;
	if (!value) return;
	const task = document.createElement('div');
	task.classList.add('task', 'roundBorder');
	task.addEventListener('click', addTaskProcess);
	task.textContent = value;
	contenedorProceso.prepend(task);
	event.target.reset();
}

const addTaskDone = event => {
	event.preventDefault();
	const { value } = event.target.taskText;
	if (!value) return;
	const task = document.createElement('div');
	task.classList.add('task', 'roundBorder');
	task.addEventListener('click', addTaskDone);
	task.textContent = value;
	contenedorHechas.prepend(task);
	event.target.reset();
}