import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  weatherData: [],
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const {setWeatherData} = userReducer.actions;

export default userReducer.reducer;
