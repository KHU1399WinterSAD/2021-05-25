import React, {useEffect, useState} from 'react';

import styles from './Product.module.scss';
import {ProductModel} from '../../models/ProductModel';

const SERVER_PRODUCTS_URL = 'http://localhost:5000/products';

const Product = () => {
	const [product, setProduct] = useState<ProductModel[]>([]);

	useEffect(() => {
		fetch(SERVER_PRODUCTS_URL)
			.then((res) => res.json())
			.then((data) => setProduct(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className={styles['product']}>
			<div className="panel panel--left">
				{/*<img src={product.image} alt="" />*/}
			</div>
			<div className="panel panel--right">
				{/*<h1>{product.title}</h1>*/}
				<div className="card">
					
				</div>
			</div>
		</div>
	);
};

export default Product;
