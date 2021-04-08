import React, { memo } from 'react';


const HabitForm = memo((props) => {

    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = "";
    };

    return (
        <>
        <form className="add-form" onSubmit={onSubmit}>
            <input
            ref={inputRef} 
            type="text" 
            className="add-input" 
            placeholder="add your habit!"
            />
            <button className="add-button">Add</button>
        </form>
        </>
        
    );
});

export default HabitForm;