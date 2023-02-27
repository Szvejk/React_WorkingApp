import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footWrapper}>
			<div className={styles.icon}>
				<img src='./images/logo.svg' alt='' className={styles.iconMainIcon}/>
			</div>
			<div className={styles.features}>
				<h4>Features</h4>
				<li>Link Shortening</li>
				<li> Branded Links</li>
				<li>Analytics</li>
			</div>
			<div className={styles.resources}>
				<h4>Resources</h4>
				<li>Blog</li>
				<li>Developers</li>
				<li>Support</li>
			</div>
			<div className={styles.company}>
				<h4>Company</h4>
				<li>About</li>
				<li>Our Team</li>
				<li> Careers</li>
				<li> Contact</li>
			</div>
			<div className={styles.iconsFooter}>
				<img src='./images/icon-twitter.svg' alt=''className={styles.iconForFooter} />
				<img src='./images/icon-pinterest.svg' alt=''className={styles.iconForFooter} />
				<img src='./images/icon-facebook.svg' alt=''className={styles.iconForFooter} />
				<img src='./images/icon-instagram.svg' alt='' className={styles.iconForFooter}/>
			</div>
		</div>
	);
};

export default Footer;
