import React from 'react';
import styles from './Input.module.css';

interface Props {
	text: string;
}
const Input = () => {
	return (
		<div className={styles.inputLabel}>
		
			<input
				type='text'
				id={styles.textInput}
				name='firstname'
				placeholder ='Shorten a link here..' className={styles.placeholder}></input>

			<button className={styles.shorten}>Shorten it!</button>
		</div>
	);
};

export default Input;
