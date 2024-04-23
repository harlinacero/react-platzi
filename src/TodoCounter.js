import './index.css';

function TodoCounter({ total, completed }) {
    return (
        <h1 className="todo-title">
            Has completado {completed} de {total} Tareas
        </h1>
    );
}

export { TodoCounter };

