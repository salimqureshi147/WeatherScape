import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  tempValues: '',
  speed: '',
};

export const settingsTempReducer = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setTempValues: (state, action) => {
      state.tempValues = action.payload;
    },
    setSpeed: (state, action) => {
      state.tempValues = action.payload;
    },
  },
});

export const {setTempValues, setSpeed} = settingsTempReducer.actions;

export default settingsTempReducer.reducer;
