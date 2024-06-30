import { configureStore } from '@reduxjs/toolkit';
//import sub-module: counter Reducer
import counterReducer from './modules/counterStore';
import channelReducer from './modules/channelStore'
const store = configureStore({
  reducer: {
    //the key name here is used as the state name for react-redux middleware
    counter: counterReducer,
    channel: channelReducer
  },
});

export default store; 