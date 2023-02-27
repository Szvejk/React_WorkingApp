import React from 'react';
import styles from './App.module.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Input from '../Input/Input';
import Statistics from '../AdvancedStatistics/Statistics';
import Grid from '../Grid/Grid';
import BoostLinks from '../BoostLinks/BoostLinks';
import Footer from '../Footer/Footer';
const App = () => {
	return (
		<>
			<Nav />
			<Header />
			<Input />
			<Statistics />
			<Grid />
			<BoostLinks />
			<Footer />
		</>
	);
};

export default App;
