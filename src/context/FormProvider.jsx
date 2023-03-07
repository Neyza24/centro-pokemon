import { useReducer} from "react";
import { FormContext } from "./formContext";
import { formReducer } from "./formReducer";

const initialState = {
    entrenador: {
        nombre: '',
        apellido: '',
        email: ''
    },
    pokemon:{
        nombrePokemon: '',
        tipoPokemon: '',
        elementoPokemon: '',
        alturaPokemon: '',
        edadPokemon: ''
    }
} 


export const FormProvider = ({children}) => {

    const [form, dispatch] = useReducer(formReducer, initialState );


    //Modificamos la función de actualización del estado para recibir el tipo de acción y la información a actualziar
    const handleInputBlur = (type, valorInput) => {
        const {campo, valor } = valorInput;

        //Despachamos la acción
        dispatch({
            type,
            payload: {
                [campo]: valor,
            },
        });
    };



    return(
        <FormContext.Provider value={{form, handleInputBlur}}>
            {
                children
            }
        </FormContext.Provider>
    )


}