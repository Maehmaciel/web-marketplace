import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import history from '../../routes/history'
import login from './login';
import popup from './popup';
import products from './products';
import cart from './cart';

export default combineReducers({
    login,
	popup, 
	products,
	cart,
	router: connectRouter(history),
});



