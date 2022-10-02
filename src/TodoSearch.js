import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

    const onSearValueChange = (event) => {
        setSearchValue(event.target.value);
    };
  return (
    <input 
        className="TodoSearch" 
        placeholder="Escriba aquí"
        value={searchValue} 
        onChange={onSearValueChange}    

    />
  );



}

export { TodoSearch };