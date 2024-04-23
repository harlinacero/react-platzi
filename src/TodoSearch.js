import React from 'react';
import './index.css';

function print(event) {
    console.log(event.target.value);

}

function TodoSearch({searchValue, setSearchValue}) {
    
    return (
        <input placeholder="Cortar cebolla" className="todo-search"
            value={searchValue}
            onChange={(event) => {
                print(event);
                setSearchValue(event.target.value);
            }} />
    );
}
export { TodoSearch };
