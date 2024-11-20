import React, { useState, useEffect } from "react";

const TodoList = () => {
    const initialTask = {
        label: "",
        is_done: false,
    };

    const url = "https://playground.4geeks.com/todo";

    const [task, setTask] = useState(initialTask); //Seteos y mas Seteos
    const [taskList, setTaskList] = useState([]); //Seteos y mas Seteos
    const [editing, setEditing] = useState(null); // Estado para saber qué tarea estoy editando

    // Funcion que agrega lo que se escribe en el input y lo coloca en el useState Task
    const handleChange = ({ target }) => {
        setTask({
            ...task,
            [target.name]: target.value,
        });
    };
    // Funcion primaria reutilizable para consultar mi usuario 
    const getAllTask = async () => {
        try {
            const response = await fetch(`${url}/users/mario`);
            const data = await response.json();

            if (response.ok) {
                setTaskList(data.todos);
            } else {
                console.log("Parece que el usuario no existe, crearemos uno nuevo...");
                createUser();
            }
        } catch (error) {
            console.log(error);
        }
    };
    // Crear Usuario
    const createUser = async () => {
        try {
            const response = await fetch(`${url}/users/mario`, {
                method: "POST",
            });
            if (response.ok) {
                console.log("Usuario creado correctamente.");
            }
        } catch (error) {
            console.log("Error al crear el usuario", error);
        }
    };
    // Con el effect, getAllTask, se ejecuta apenas inicio la pag y solo una vez
    useEffect(() => {
        getAllTask();
    }, []);

    // Una vez escrito la tarea, Enter para...
    const addTask = async (ev) => {
        if (ev.key === "Enter") {
            try {
                const response = await fetch(`${url}/todos/mario`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                });
                setTask(initialTask);
                if (response.ok) {
                    getAllTask();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    // Borrar la tarea
    const deleteTask = async (id) => {
        try {
            const response = await fetch(`${url}/todos/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                getAllTask();
            }
        } catch (error) {
            console.log("Error al eliminar la tarea", error);
        }
    };

    // Función para editar la tarea
    const edit = async (id) => {
        setEditing(id); // Marcar que estamos editando esta tarea
        const taskToEdit = taskList.find((task) => task.id === id);
        setTask({ label: taskToEdit.label, is_done: taskToEdit.is_done }); // Rellenar el input con el texto actual de la tarea
    };
    // Fetch para modificar una Task a traves del ID
    const saveEdit = async () => {
        try {
            // Ojo con el editing
            const response = await fetch(`${url}/todos/${editing}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            });
            if (response.ok) {
                getAllTask(); // Actualizar la lista de tareas
                setTask(initialTask); // Resetear el input
                setEditing(null); // Limpiar el estado de edición
            }
        } catch (error) {
            console.log("No se pudo editar la tarea", error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 mt-5">
                    <h1 className="mb-3 fs-1">TodoList And Fetch</h1>
                    <form onSubmit={(ev) => ev.preventDefault()}>
                        <input
                            className="mb-3"
                            type="text"
                            placeholder="Write something"
                            name="label"
                            value={task.label}
                            onChange={handleChange}
                            onKeyDown={addTask}
                        />
                    </form>

                    {taskList.length <= 0 ? (
                        <div className="text-danger fs-4">No tienes tareas hechas!</div>
                    ) : (
                        taskList.map((unit) => (
                            <div key={unit.id} className="task pt-2">
                                <p className="pt-2">{unit.label}</p>
                                <span>
                                    <button onClick={() => deleteTask(unit.id)}>
                                        &#10006;
                                    </button>
                                    {/* Edit buttom*/}
                                    <button onClick={() => edit(unit.id)}>Edit</button>
                                </span>
                            </div>
                        ))
                    )}
                    {/* Ojito */}
                    {editing && (
                        <div>
                            <button onClick={saveEdit}>Guardar cambios</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
