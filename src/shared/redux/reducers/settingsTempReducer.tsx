import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  tempValues: 'C',
  speed: 'KM',
  degreeValue: '',
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
  },
});

export const {setTempValues, setSpeed, setDegreeValue} =
  settingsTempReducer.actions;

export default settingsTempReducer.reducer;
