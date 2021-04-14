import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header>
			<a href="/" className={styles['logo']}>
				Kharazmi Shop Center
			</a>
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
