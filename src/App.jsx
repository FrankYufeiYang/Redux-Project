import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, addByNum } from './store/modules/counterStore';
import { useEffect } from 'react';
import { fetchChannelList } from './store/modules/channelStore';
function App() {

  const state = useSelector((state) => state);
  console.log(state);
  const { count } = useSelector((state) => state.counter);
  const { channelList } = useSelector((state) => state.channel);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList());
    console.log(channelList);
  }, [dispatch]);
  return (
    <>
      <div className='card'>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <button onClick={() => dispatch(addByNum(10))}>+10</button>
        {channelList}
      </div>
    </>
  );
}

export default App;
