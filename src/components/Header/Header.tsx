import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.wrapperHeader}>
			<div className={styles.flexHeader}>
				<div className={styles.leftSide}>
					<h1>More than just shorter links</h1>
					<p className={styles.pDescription}>
						Build your brand's recongnition and get detailed insights on how
						your links are performing
					</p>
					<button className={styles.getStarted}>Get Started </button>
				</div>

				<div className={styles.rightSide}>
					<img
						className={styles.workingPhoto}
						src='images/illustration-working.svg'
						alt='working photo'
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
