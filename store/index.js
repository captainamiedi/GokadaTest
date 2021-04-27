import thunk from 'redux-thunk';
import {getData} from '../store/reducers';
import { applyMiddleware, createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
 counter: getData
});

export default createStore(rootReducer,applyMiddleware(thunk));