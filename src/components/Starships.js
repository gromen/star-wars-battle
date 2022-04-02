import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchStarships } from '../utils/fetchStarships';
import Starship from './Starship';

const Starships = () => {
	const [starships, setStarships] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);

		fetchStarships().then(data => {
			setLoader(false);
			setStarships(data);
		});
	}, []);

	if (loader) {
		return <Box sx={{display: 'flex'}}><CircularProgress /></Box>
	};

	const starshipsList = starships.slice(0, 10);

	return (
		<>
			<h2>Select starship</h2>
			{starshipsList && starshipsList.map(starship => (
				<Starship key={starship.name} name={starship.name} />
			))}
		</>

	)
};

export default Starships;
