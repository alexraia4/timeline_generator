import {createStore} from 'redux';
import userReducer from './user_reducer.js';

export default createStore(userReducer);