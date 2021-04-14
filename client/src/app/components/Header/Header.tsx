import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<Link to="/" className={styles['logo']}>
				Kharazmi Shop Center
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</nav>
			<a
				href="https://github.com/KHU1399WinterSAD"
				className={styles['github']}
				target="_blank"
				rel="noreferrer">
				GitHub
			</a>
		</header>
	);
};

export default Header;
