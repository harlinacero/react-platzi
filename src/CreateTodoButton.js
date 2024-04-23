import './index.css';

function clicButton() {
    console.log('clic button');
}

function CreateTodoButton() {
    return (
        <button className="todo-button-create code"
            onClick={() => clicButton()}>Agregar</button>
    );
}

export { CreateTodoButton };

