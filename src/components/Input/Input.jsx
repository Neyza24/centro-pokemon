import React, { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../../context/formContext";
import PropTypes from 'prop-types';


const Input = ({ name, label, type = "text", shoulFocus = false, isPokemon = false }) => {

  const ref = useRef();


  const { handleInputBlur, form } = useContext(FormContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState(form[name] || "");

  /**
   * @description función para actualizar el estado local del input
   * @param {InputEvent} e 
   */
  
  const onChange = (e) => {
     // Aquí deberíamos actualizar el estado local del input.
     setValue(e.target.value);
  };

  /**
   * @author Neyza Vargas
   * @description función que se ejecuta cuando el input pierde el foco, enviando el valor del input al contexto que luego es utilizado por el componente Detalle
   * @param {InputEvent} e 
   */

  const onBlur = (e) => {
    e.preventDefault();

    handleInputBlur(
      isPokemon ? "ACTUALIZAR_POKEMON" : "ACTUALIZAR_ENTRENADOR",
      {
        campo: name,
        valor: value,
      })
    
  };

  // Cuando el componente se monta, si debemos hacer focus, hacemos focus usando la referencia.
  useEffect(() => {
    if(ref.current && shoulFocus) {
      ref.current.focus();
    }
  }, [shoulFocus]);
  

  return (
    <div className="input-contenedor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPokemon: PropTypes.bool,
}
