import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo (props) {

    const [value, setValue] = useState('');

    function submitHandler (event){
        event.preventDefault() //to keep page not reloading
        console.log()
        if (value.trim()){
            props.onCreate(value)
            setValue('')
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
    onCreate: PropTypes.func
}


export default AddTodo 