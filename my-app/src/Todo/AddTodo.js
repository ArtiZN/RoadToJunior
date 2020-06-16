import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo (onCreate) {

    const [value, setValue] = useState('');

    function submitHandler (event){
        event.preventDefault() //to keep page not reloading

        if (value.trim()){
            onCreate(value)
        }
    }

    return (
        <form style={{marginBottom: '10px'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
                <button type="submit">
                    Add Todo
                </button>
            
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo 