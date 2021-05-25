import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from 'react-router-dom';

import {ProductModel} from '../../models/ProductModel';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CreateIcon from '@material-ui/icons/Create';

import styles from './Product.module.scss';

const SERVER_PRODUCT_URL = 'http://localhost:5000/product/';
const SERVER_SHOPPING_CARD_URL = 'http://localhost:5000/shopping-card/';

const Product = () => {
	const {id} = useParams<{ id?: string | undefined }>();
	const [product, setProduct] = useState<ProductModel>();
	const [result, setResult] = useState<JSX.Element>(<h1>DEFAULT</h1>);
	
	useEffect(() => {
		console.log(id);
		
		if (!id) {
			setResult(<Redirect to="/"/>);
			return;
		}
		
		fetch(SERVER_PRODUCT_URL + id)
		.then((res) => {
			if (res.status === 400) {
				setResult(<Redirect to="/404"/>);
				throw res.statusText;
			}
			
			return res.json();
		})
		.then((data) => setProduct(data))
		.catch();
	}, []);
	
	const clickedOnAddItemToShoppingCard = () => {
		fetch(SERVER_SHOPPING_CARD_URL + id, {method: 'put'})
		.then(res => res.json)
		.then()
		.catch();
	};
	
	if (!product)
		return result;
	
	return (
		<div className={styles['product']}>
			<div className={[styles['panel'], styles['panel--left']].join(' ')}>
				<img src={product.image} alt=""/>
			</div>
			<div className={[styles['panel'], styles['panel--right']].join(' ')}>
				<div className={['card', styles['card']].join(' ')}>
					<h1>{product.title}</h1>
					<div className={styles['warranty']}>
						<div className={styles['icon']}>
							<VerifiedUserIcon/>
						</div>
						<div className={styles['desc']}>
							<div className={styles['title']}>36 Month KHU Warranty</div>
						</div>
					</div>
					<div className={styles['stock']}>
						<div className={styles['icon']}>
							<StoreIcon/>
						</div>
						<div className={styles['desc']}>
							<div className={styles['title']}>Available in KHU Stock</div>
							<div className={styles['subtitle']}>
								<div className={styles['icon']}>
									<LocalShippingIcon/>
								</div>
								<div className={styles['text']}>KHU Arrival from 1 work day</div>
							</div>
						</div>
					</div>
					<div className={styles['price']}>
						<div className={styles['label']}>KHU Price</div>
						<div className={['price', styles['number']].join(' ')}>{product.price.toLocaleString()}</div>
					</div>
					<button onClick={clickedOnAddItemToShoppingCard}>Add to Shopping Card</button>
				</div>
			</div>
			<div className={styles['description']}>
				<div className={styles['title']}>
					<div className={styles['icon']}><CreateIcon/></div>
					<div className={styles['text']}>Brief Description</div>
				</div>
				<p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto atque autem distinctio
						dolorum enim error exercitationem inventore, labore modi natus porro quaerat quas quod sit temporibus unde.
						Ab adipisci aliquam animi aperiam assumenda atque autem commodi deserunt doloribus dolorum eligendi
						excepturi hic id illo illum iure labore laborum libero magni, maxime, minima minus natus nisi odit officiis
						perspiciatis praesentium quam quo rem repellat similique totam ullam ut velit voluptas?
					</span>
					<span>
						Ab ad amet assumenda atque aut commodi dicta dolorem dolores eaque fugit impedit in inventore ipsam
						ipsum laboriosam maxime minima necessitatibus nemo nisi nostrum, porro possimus quae quaerat quasi
						quibusdam, quisquam ratione reiciendis rem repellat reprehenderit sint soluta sunt suscipit tempore
						temporibus totam voluptatum. Accusantium aliquam aperiam at atque consequuntur dolore ea eos et, eum ex
						exercitationem facilis fugit hic laborum laudantium libero natus nulla odit placeat saepe sint unde?
					</span>
					<span>
						Doloribus ea et facilis hic, incidunt inventore ipsa maiores quisquam quos recusandae. Accusamus at
						atque dolores ducimus earum, est eum id ipsum laborum minus nihil nisi officia quidem reiciendis temporibus.
						Consequuntur earum facere molestias neque! Alias assumenda atque cum cumque debitis dignissimos doloremque
						ducimus earum et ex exercitationem hic id itaque laudantium nihil nulla, omnis provident ratione saepe sed
						sequi suscipit tenetur voluptates? Iste magnam modi molestias, nostrum quibusdam vero.
					</span>
				</p>
			</div>
		</div>
	);
};

export default Product;
