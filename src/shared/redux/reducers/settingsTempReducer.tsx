import {createSlice} from '@reduxjs/toolkit';
import {Primary} from '../../theme';

const initialState: any = {
  tempValues: 'C',
  speed: 'KM',
  degreeValue: '',
  color: Primary,
  hours: '12hr',
};

export const settingsTempReducer = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setTempValues: (state, action) => {
      state.tempValues = action.payload;
    },
    setSpeed: (state, action) => {
      state.speed = action.payload;
    },
    setDegreeValue: (state, action) => {
      state.degree = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setHours: (state, action) => {
      state.hours = action.payload;
    },
  },
});

export const {setTempValues, setSpeed, setDegreeValue, setColor, setHours} =
  settingsTempReducer.actions;

export default settingsTempReducer.reducer;
