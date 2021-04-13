import React from 'react';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles['app']}>
			<header>
				<a href="#" className={styles['logo']}>Kharazmi Shop Center</a>
				<nav>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Products</a>
						</li>
					</ul>
				</nav>
				<a href="https://github.com/KHU1399WinterSAD" className={styles['github']} target="_blank">GitHub</a>
			</header>
			
			<main>
				<h1>Products</h1>
				
				<ul className={styles['products']}>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 1</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 2</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 3</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 4</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 5</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
					<li>
						<img src="/assets/images/product.png" alt=""/>
						<div className={styles['descriptions']}>
							<h3>Product 6</h3>
							<h5>This product is very useful</h5>
							<span>5,000</span>
							<a href="">view</a>
						</div>
					</li>
				</ul>
			</main>
			
			<footer>
				2021 &copy; All rights are reserved
			</footer>
		</div>
	);
}

export default App;
