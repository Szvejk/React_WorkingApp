import React from 'react'
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import Statistics from '../components/AdvancedStatistics/Statistics';
import Grid from '../components/Grid/Grid';
import BoostLinks from '../components/BoostLinks/BoostLinks';
import Footer from '../components/Footer/Footer';
import {Zdarzenia} from "../components/Zdarzenia/Zdarzenia"

export const MainPage = () => {
  return (
    <>
			<Nav />
			<Header />
			<Input value="10"/>
			<Statistics />
			<Grid />
			<BoostLinks />
			<Footer />
			<Zdarzenia />
		</>
  )
}
