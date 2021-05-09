import React from 'react';
import {Route, Switch} from 'react-router';
import {Redirect} from 'react-router-dom';

import styles from './App.module.scss';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import NotFound from './pages/NotFound/NotFound';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className={styles['app']}>
			<Header/>
			
			<main>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/products" component={Products}/>
					<Route path="/product/:id" component={Product}/>
					<Route path="/404" component={NotFound}/>
					<Route>
						<Redirect to="/404"/>
					</Route>
				</Switch>
			</main>
			
			<Footer/>
		</div>
	);
}

export default App;
