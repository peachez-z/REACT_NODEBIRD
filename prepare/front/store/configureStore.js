import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers'
const configureStore = () => {
  const store = createStore(reducer);
  // 디스패치 하는 순간 리듀서로 전달됨 -> 다음 state
  // 리듀서 : 다음 상태를 만들어내는 함수
  store.dispatch({
    type:'CHANGE_NICKNAME',
    data: 'aris',
  })
  return store;
};

const wrapper = createWrapper(configureStore, 
  {debug: process.env.NODE_ENV === 'development',
});

export default wrapper;