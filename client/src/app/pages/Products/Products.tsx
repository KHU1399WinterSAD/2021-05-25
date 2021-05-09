import React, {useEffect, useState} from 'react';

import styles from './Products.module.scss';
import {ProductModel} from '../../models/ProductModel';

const SERVER_PRODUCTS_URL = 'http://localhost:5000/products';

const Products = () => {
	const [products, setProducts] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetch(SERVER_PRODUCTS_URL)
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className={styles['products']}>
			<h1>Products</h1>

			<ul>
				{products.map((product, i) => (
					<li key={i} className="card">
						<img src={product.image} alt="" />
						<div className={styles['descriptions']}>
							<h3>{product.title}</h3>
							<h5>{product.subtitle}</h5>
							<span>{product.price}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
