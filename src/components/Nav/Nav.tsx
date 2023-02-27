import React from 'react';
import styles from './Nav.module.css';

const Nav = () => {
	return (
		<div className={styles.logo}>
			<img className={styles.img_logo} src='images/logo.svg' alt='logo' />
			<nav className={styles.navigation}>
				<ul className={styles.links}>
					<li className={styles.liNav}>
						<a href='#Features'>Features</a>
					</li>
					<li className={styles.liNav}>
						<a href='#Pricing'>Pricing</a>
					</li>
					<li className={styles.liNav}>
						<a href='#Resources'>Resources</a>
					</li>
				</ul>
			</nav>
			<div className={styles.buttons}>
				<button className={styles.login}> Login </button>

				<button className={styles.signUp}> Sign up </button>
			</div>
		</div>
	);
};

export default Nav;
