//state--->
//action--->
export const formReducer = (state, action) => {
    switch (action.type) {
        case "ACTUALIZAR_ENTRENADOR":
            return {
                ...state,
                entrenador: {
                    ...state.entrenador,
                    ...action.payload
                },
            };
        case "ACTUALIZAR_POKEMON":
            return {
                ...state,
                pokemon: {
                    ...state.pokemon,
                    ...action.payload
                }

            };
        default:
            return state;
    }
}