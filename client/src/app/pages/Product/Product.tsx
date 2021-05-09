import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import styles from './Product.module.scss';
import {ProductModel} from '../../models/ProductModel';

const SERVER_PRODUCT_URL = 'http://localhost:5000/product/';

const Product = () => {
	const {id} = useParams<{ id?: string | undefined }>();
	const [product, setProduct] = useState<ProductModel>();
	const [result, setResult] = useState<JSX.Element>(<h1>DEFAULT</h1>);
	
	useEffect(() => {
		console.log(id);
		
		if (!id) {
			console.log("here");
			setResult(<Redirect to="/"/>);
		} else {
			fetch(SERVER_PRODUCT_URL + id)
			.then((res) => {
				if (res.status === 400) {
					setResult(<Redirect to="/404"/>);
					throw res.statusText;
				}
				
				return res.json();
			})
			.then((data) => setProduct(data))
			.catch(() => {});
		}
	}, []);
	
	if (!product)
		return result;
	
	return (
		<div className={styles['product']}>
			<div className="panel panel--left">
				<img src={product.image} alt=""/>
			</div>
			<div className="panel panel--right">
				<h1>{product.title}</h1>
				<div className="card">
				
				</div>
			</div>
		</div>
	);
};

export default Product;
