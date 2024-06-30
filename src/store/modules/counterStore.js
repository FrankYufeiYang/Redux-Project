import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: 'counter',
  //initializing  state
  initialState: {
    count: 0,
  },
  //methods that modifying states
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addByNum(state, action){
      state.count = state.count+action.payload
      console.log(state);
      console.log(action);
      console.log(action.payload);
    }
  },
});

//destruct actionCreater
const { increment, decrement, addByNum } = counterStore.actions;
// get reducer
const reducer = counterStore.reducer;

export { increment, decrement, addByNum };
export default reducer;
