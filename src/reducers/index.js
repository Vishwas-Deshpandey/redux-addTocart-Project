import {combineReducers} from 'redux';
import loadingReducer from './loadingReducer';
import { cartReducer } from './cartReducer';


const mainReducer = combineReducers({
    loadingReducer,
    cartReducer,
})

export default mainReducer;