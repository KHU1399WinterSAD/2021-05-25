import React, {useEffect, useState} from 'react';

import {ProductModel} from '../../models/ProductModel';

import DeleteIcon from '@material-ui/icons/Delete';

import styles from './ShoppingCard.module.scss';

const SERVER_PRODUCTS_URL = 'http://localhost:5000/products';

const ShoppingCard = () => {
	const [products, setProducts] = useState<ProductModel[]>([]);
	
	useEffect(() => {
		fetch(SERVER_PRODUCTS_URL)
		.then((res) => res.json())
		.then((data) => setProducts(data))
		.catch((err) => console.error(err));
	}, []);
	
	return (
		<div className={styles['shopping-card']}>
			<h1>Shopping Card</h1>
			
			<ul>
				{products.map((product, i) => (
					<li key={i} className="card">
						<img src={product.image} alt=""/>
						<div className={styles['details']}>
							<div className={styles['header']}>
								<h3>{product.title}</h3>
								<span className="price">{product.price}</span>
							</div>
							<h5>{product.subtitle}</h5>
							<div className={styles['footer']}>
								<div className={styles['quantity']}>
									<span className={styles['minus']}>-</span>
									<span className={styles['number']}>1</span>
									<span className={styles['plus']}>+</span>
								</div>
								<div className={styles['remove-button']}>
									<div className={styles['icon']}>
										<DeleteIcon/>
									</div>
									<div className={styles['text']}>Remove</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShoppingCard;
