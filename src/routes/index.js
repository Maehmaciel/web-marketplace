  
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Category from '../Pages/Category'
import ProductDetails from '../Pages/ProductDetails';
import Cart from '../Pages/Cart';
import Orders from '../Pages/Orders';
import Order from '../Pages/Order';
import About from '../Pages/About';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import EditData from '../Pages/EditData';
import { createBrowserHistory } from 'history';
// import { ConnectedRouter } from 'connected-react-router';
// import history from './history'

const history =createBrowserHistory()

const Routes = () => (
    <BrowserRouter history={history}>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/category/:name" component={Category}/>
			<Route path="/product/:category/:id" component={ProductDetails}/>
			<Route path="/cart" component={Cart}/>
			<Route exact path="/orders" component={Orders}/>
			<Route path="/order" component={Order}/>
			<Route path="/about" component={About}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
			<Route path="/edit" component={EditData}/>
		</Switch>
			
    </BrowserRouter>
);

export default Routes