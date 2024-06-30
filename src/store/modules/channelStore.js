import { createSlice } from '@reduxjs/toolkit';
//create a redux store for async states
const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: [],
  },
  reducers: {
    //write the basic store syntax
    setChannels(state, action) {
      console.log(state, action);
      state.channelList = action.payload;
    },
  },
});
const {setChannels} = channelStore.actions

//async request
function fetchChannelList() {
  return async (dispatch) => {
    const res = await new Promise(resolve => resolve(['ChannelA', 'ChannelB']));
    console.log(res);
    dispatch(setChannels(res))
  };
}
export {fetchChannelList}
const reducer = channelStore.reducer;
export default reducer;
