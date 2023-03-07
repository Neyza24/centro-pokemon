import React, { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../../context/formContext";

const Input = ({ name, label, type = "text", shoulFocus = false, isPokemon = false }) => {

  const ref = useRef();
  
  // Aqui deberíamos acceder al estado global para poder obtener los datos
  // del formulario y una manera de actualizar los mismos.

  const { handleInputBlur, form } = useContext(FormContext);

  // También, utilizaremos un estado local para manejar el estado del input.
  const [value, setValue] = useState(form[name] || "");
  
  const onChange = (e) => {
     // Aquí deberíamos actualizar el estado local del input.
     setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    // Aqui deberíamos actualizar el estado global con los datos de cada input. // TIP: Podemos utilizar el nombre de cada input para guardar
    // los datos en el estado global usando una notación de { clave: valor }
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
