import {createSlice} from '@reduxjs/toolkit';
import {Primary} from '../../theme';

const initialState: any = {
  weatherData: [],
  keyBoardOpen: true,
  color: Primary,
  color2: '#fff',
  shift: false,
  locationData: null,
  isConnected: true,
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
    setColor2: (state, action) => {
      state.color2 = action.payload;
    },
    setShift: (state, action) => {
      state.shift = action.payload;
    },
    setLocationData: (state, action) => {
      state.locationData = action.payload;
    },
    setIsConnected: (state, action) => {
      state.isConnected = action.payload;
    },
  },
});

export const {
  setWeatherData,
  setKeyboardOpen,
  setColor,
  setShift,
  setColor2,
  setIsConnected,
  setLocationData,
} = userReducer.actions;

export default userReducer.reducer;
