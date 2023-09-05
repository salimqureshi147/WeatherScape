import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  weatherData: [],
  isKeyboardOpen:false
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setIsKeyboardOpen: (state, action) => {
      state.isKeyboardOpen = action.payload;
    },
  },
});

export const {setWeatherData,setIsKeyboardOpen} = userReducer.actions;

export default userReducer.reducer;
