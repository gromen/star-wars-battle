import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { URL_STARSHIPS } from '../../constants';
import { fetchResource } from '../../utils/utils';
import Starship from './Starship';

const Starships = () => {
	const [starships, setStarships] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);

		fetchResource(URL_STARSHIPS).then(data => {
			setLoader(false);
			setStarships(data);
		});
	}, []);

	if (loader) {
		return <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>
	};

	const starshipsList = starships.slice(0, 10);

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>Select starship</h2>
			{starshipsList && starshipsList.map(starship => (
				<Starship key={starship.name} name={starship.name} />
			))}
		</>

	)
};

export default Starships;
