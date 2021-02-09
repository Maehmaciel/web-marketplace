// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers'
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import history from '../routes/history'

// const middleware=[
// 	routerMiddleware(history),
// ]
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['router'] 
}
const persistedReducer = persistReducer(persistConfig, reducer);
// const store = createStore(connectRouter(history)(persistedReducer),applyMiddleware(...middleware));
const store = createStore((persistedReducer));
const persistor = persistStore(store)


export { store, persistor };
