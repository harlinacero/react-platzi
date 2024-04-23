import './index.css';

function TodoItem({ text, completed }) {
    return (
        <li className="flex items-center">
            <span className='icon-success'>V</span>
            <p>{text}</p>
            <span className='icon-remove'>X</span>
        </li>
    );
}

export { TodoItem };

