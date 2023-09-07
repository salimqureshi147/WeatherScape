import {createSlice} from '@reduxjs/toolkit';
import {Primary} from '../../theme';

const initialState: any = {
  weatherData: [],
  keyBoardOpen: true,
  color: Primary,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setKeyboardOpen: (state, action) => {
      state.keyBoardOpen = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const {setWeatherData, setKeyboardOpen, setColor} = userReducer.actions;

export default userReducer.reducer;
