

const btnTareaNueva = document.getElementById('btnTareaNueva');
const formulario = document.getElementById('formulario');
const btnCerrar = document.getElementById('btnCerrar');
const nombreTareaInput = document.getElementById('nombreTarea');
const descripcionTareaTextarea = document.getElementById('descripcionTarea');

btnTareaNueva.addEventListener('click', () => {
    formulario.classList.remove('oculto');
});

btnCerrar.addEventListener('click', () => {
    formulario.classList.add('oculto');
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar la recarga de la página

    const nombreTarea = nombreTareaInput.value;
    const descripcionTarea = descripcionTareaTextarea.value;

    try {
        // Obtener las tareas existentes del localStorage (si las hay)
        let tareasAlmacenadas = JSON.parse(localStorage.getItem('tareas')) || [];

        // Crear un nuevo objeto tarea
        const nuevaTarea = {
            nombre: nombreTarea,
            descripcion: descripcionTarea
        };

        // Agregar la nueva tarea al array
        tareasAlmacenadas.push(nuevaTarea);

        // Actualizar el localStorage con el array actualizado
        localStorage.setItem('tareas', JSON.stringify(tareasAlmacenadas));

        // Mostrar mensaje de confirmación
        alert('Tarea añadida correctamente!');

        // Limpiar el formulario
        nombreTareaInput.value = '';
        descripcionTareaTextarea.value = '';

        // Ocultar el formulario
        formulario.classList.add('oculto');
    } catch (error) {
        console.error(error);
        alert('Error al añadir la tarea. Inténtalo de nuevo.');
    }
});
