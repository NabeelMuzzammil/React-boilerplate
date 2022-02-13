import { combineReducers } from 'redux'
import initReducer from './initReducer';
const rootReducer = combineReducers({
    init: initReducer
})

export default rootReducer