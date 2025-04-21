import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    page:'',
    form:{
        dni:'',
        tipoDocente:'',
        nombre:'',
        promedio:'',
        puntaje:'',
        mail:'',
        region:'',
        especialidad:''
    }
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers:{
        setPage:(state, action)=>{
            state.page=action.payload;
        },
        setForm:(state,action)=>{
            state.form=action.payload;
        }
    }
});

export const {setPage, setForm} = configSlice.actions;
export default configSlice.reducer;