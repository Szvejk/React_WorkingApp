import React from 'react';
import styles from './Input.module.css';

interface InputProps {
	value: string;
}

const Input = ({value}:InputProps) => {
	return (
		<div className={styles.inputLabel}>
		
			<input
				type='text'
				id={styles.textInput}
				name='firstname'
				placeholder ='Shorten a link here..' className={styles.placeholder} value={value}></input>

			<button className={styles.shorten}>Shorten it!</button>
		</div>
	);
};

export default Input;
