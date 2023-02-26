import React from 'react';
import styles from './Grid.module.css';

const Grid = () => {
	return (
		<div className={styles.wrapperGrid}>
			<div className={styles.brand}>
				<div className={styles.imgAdvanced}>
					<img
						src='images/icon-brand-recognition.svg'
						alt='icon brand'
						className={styles.imgad}
					/>
				</div>
				<h3 className={styles.brandName}> Brand Recognition</h3>
				<p>
					Boost your brand recongnition with each click. Generic links don't
					mean a thing. Branded links help instil confidence in your content.
				</p>
			</div>
			<div className={styles.detailed}>
				<div className={styles.imgAdvanced}>
					<img
						src='images/icon-detailed-records.svg'
						alt='icon records'
						className={styles.imgad}
					/>
				</div>
				<h3 className={styles.detailedName}> Detailed Records</h3>
				<p>
					Boost your brand recongnition with each click. Generic links don't
					mean a thing. Branded links help instil confidence in your content
				</p>
			</div>
			<div className={styles.fully}>
				<div className={styles.imgAdvanced}>
					<img
						src='images/icon-fully-customizable.svg'
						alt='icon customizable'
						className={styles.imgad}
					/>
				</div>
				<h3 className={styles.fullyName}> Fully Customizable</h3>
				<p>
					Boost your brand recongnition with each click. Generic links don't
					mean a thing. Branded links help instil confidence in your content
				</p>
			</div>
		</div>
	);
};

export default Grid;
