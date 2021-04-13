import React from 'react';
import styles from './App.module.scss';
import {Product} from './models/Product';

function App() {
	
	
	return (
		<div className={styles['app']}>
			<header>
				<a href="/" className={styles['logo']}>Kharazmi Shop Center</a>
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/products">Products</a>
						</li>
					</ul>
				</nav>
				<a href="https://github.com/KHU1399WinterSAD"
					 className={styles['github']}
					 target="_blank"
					 rel="noreferrer">GitHub
				</a>
			</header>
			
			<main>
				<h1>Products</h1>
				
				<ul className={styles['products']}>
					{
						products.map((product, i) => (
							<li key={i}>
								<img src={product.image} alt=""/>
								<div className={styles['descriptions']}>
									<h3>{product.title}</h3>
									<h5>{product.subtitle}</h5>
									<span>{product.price}</span>
								</div>
							</li>
						))
					}
				</ul>
			</main>
			
			<footer>
				2021 &copy; All rights are reserved
			</footer>
		</div>
	);
}

export default App;
