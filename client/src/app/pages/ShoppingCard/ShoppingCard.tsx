import React, {useEffect, useState} from 'react';

import {ProductModel} from '../../models/ProductModel';

import DeleteIcon from '@material-ui/icons/Delete';

import styles from './ShoppingCard.module.scss';

const SERVER_SHOPPING_CARD_URL = 'http://localhost:5000/shopping-card/';

const ShoppingCard = () => {
	const [products, setProducts] = useState<ProductModel[]>([]);
	
	const getAllProductsInShoppingCard = () => {
		fetch(SERVER_SHOPPING_CARD_URL)
		.then((res) => res.json())
		.then((data) => setProducts(data))
		.catch((err) => console.error(err));
	};
	
	useEffect(getAllProductsInShoppingCard, []);
	
	const changeQuantity = (id: string, increase: boolean) => {
		fetch(SERVER_SHOPPING_CARD_URL, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id, increase}),
		})
		.then(getAllProductsInShoppingCard)
		.catch();
	};
	
	const clickedOnRemoveButton = (id: string) => {
		fetch(SERVER_SHOPPING_CARD_URL + id, {method: 'delete'})
		.then(getAllProductsInShoppingCard)
		.catch();
	};
	
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
									<span className={styles['minus']} onClick={() => changeQuantity(product.id, false)}>-</span>
									<span className={styles['number']}>{product.quantity}</span>
									<span className={styles['plus']} onClick={() => changeQuantity(product.id, true)}>+</span>
								</div>
								<div className={styles['remove-button']} onClick={() => clickedOnRemoveButton(product.id)}>
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
