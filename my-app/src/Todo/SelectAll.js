import React from 'react'


function SelectAll(props) {
    

    const Styles = {
        p: {
            display: 'inline-block',
            padding: '5px',
            marginLeft: '10px'

        },
    }

    function isChecked(){
        console.log(props.info.every(govnofunction))
        return props.info.every(govnofunction)
     
        }

   

    function govnofunction(element){
        return element 
    }

    function setSet(){
    
        if (isChecked()) props.pistrun()
         else  props.nightStalker()
        
    }   
        
    

    return (

        <div style={{marginLeft:'1rem'}} >
        <input type="checkbox" checked={isChecked()} onChange={setSet}/>           
            <p style={Styles.p}>Select All</p>
        </div>

    )
    

}

export default SelectAll