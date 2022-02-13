import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReduer from '../reducers/'



const initialState = {}
const middleWare = [thunk];


const store = createStore(rootReduer, initialState, applyMiddleware(...middleWare));

export default store;