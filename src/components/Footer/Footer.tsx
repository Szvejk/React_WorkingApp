import React from 'react';
import styles from './Footer.module.css';

const linkNames=[
	{
		className: "features",
		title: "Features",
		links: ["Link Shortening","Branded Links","Analytics"]
	},
	{
		className: "resources",
		title: "Resources",
		links: ["Blog","Developers","Support"]
	},
	{
		className: "company",
		title: "Company",
		links: ["About","Our Team","Careers","Contact"]
	}
]

const Footer = () => {
	return (
		<div className={styles.footWrapper}>
			<div className={styles.icon}>
				<img src='./images/logo.svg' alt='' className={styles.iconMainIcon}/>
			</div>
			{linkNames.map(group=>{
				return <div key={group.title} className={styles[group.className]}>
					<h4>{group.title}</h4>
					<>{group.links.map(link=>{
						return <li key={link}>{link}</li>
					})}</>
				</div>
			})}
			<div className={styles.iconsFooter}>
				{['./images/icon-twitter.svg','./images/icon-pinterest.svg','./images/icon-facebook.svg','./images/icon-instagram.svg'].map(icon=><img key={icon} src={icon} alt=''className={styles.iconForFooter} />)}
			</div>
		</div>
	);
};

export default Footer;
