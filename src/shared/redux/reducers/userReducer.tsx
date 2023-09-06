import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  weatherData: [],
  keyBoardOpen: false,
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
  },
});

export const {setWeatherData, setKeyboardOpen} = userReducer.actions;

export default userReducer.reducer;
