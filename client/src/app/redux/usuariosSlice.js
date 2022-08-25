import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

//importación acciones
import { showMessage } from 'app/redux/fuse/messageSlice';

export const obtenerUsuarios = createAsyncThunk(
  'usuarios/obtenerUsuarios',
  async (filtrado, { dispatch, getState }) => {
    const user = getState().user;
    try {
      const response = await axios.get('/usuarios');
      const data = await response.data;
      if (filtrado) {
        const arrayFiltrado = data.filter(function (usuario) {
          return usuario._id !== user.data.id;
        });
        return arrayFiltrado;
      } else {
        return data;
      };
    } catch (err) {
      dispatch(showMessage({ message: err.response.data.message, variant: "error" }));
      return;
    };
  });

const initialState = {
  usuarios: []
};

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {},
  extraReducers: {    
    [obtenerUsuarios.fulfilled]: (state, action) => {      
      state.usuarios = action.payload;
    },
  },
});

export const { actions } = usuariosSlice;

export const usuariosSeleccionados = ({ usuarios: _usuarios }) => _usuarios.usuarios;

export default usuariosSlice.reducer;
