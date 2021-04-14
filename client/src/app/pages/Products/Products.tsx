import React, {useEffect, useState} from 'react';

import styles from './Products.module.scss';
import {Product} from '../../models/Product';

const SERVER_PRODUCTS_URL = 'http://localhost:5000/products';

const Products = () => {
	const [products, setProducts] = useState<Product[]>([]);

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
					<li key={i}>
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
