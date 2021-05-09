import React from 'react';
import {Route, Switch} from 'react-router';

import styles from './App.module.scss';

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';

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
					<Route path="/product" component={Product}/>
				</Switch>
			</main>
			
			<Footer/>
		</div>
	);
}

export default App;
