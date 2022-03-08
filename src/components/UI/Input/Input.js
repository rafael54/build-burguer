import React from 'react';
import classes from './Input.module.css';



const input = (props) => {
    let inputElement= null;
    const inputClasses = [classes.InputElement];
    let validationError = null;
    
    if(props.invalid && props.shouldValidate && props.touched){
        validationError = <p>Porfavor ingrese un {props.valueType} valido!</p>;
        inputClasses.push(classes.Invalid);
    } 
    

    switch (props.elementType){
        case ('input'):
            inputElement=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case('textarea'):
             inputElement=<textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
             inputElement=(
                 <select
                      className={inputClasses.join(' ')}
                      value={props.value}
                      valueType={props.valueType}
                      onChange={props.changed}>
                      {props.elementConfig.options.map(option =>(
                        <option key={option.value} value ={option.value}>
                            {option.displayValue} {option.valueType}
                        </option>
                        ))}
                
                 </select>
             );
             break;
        default:
            inputElement=<input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} valueType={props.valueType} onChange={props.changed}/>    

            
    }
    return(
        <div className={classes.Input}>
            <label className={classes.Lebel}>{props.lebel}</label>
             {inputElement}
             {validationError}
        </div>
        
    
    );
    
};



export default input;