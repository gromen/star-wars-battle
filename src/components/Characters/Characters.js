import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { URL_PEOPLE, URL_STARSHIPS } from '../../constants';
import { fetchResource } from '../../utils/utils';
import Character from './Character';

const Characters = ({ type }) => {
	const [characters, setCharacters] = useState([]);
	const [loader, setLoader] = useState(false);

	const characterUrl = type === 'people' ? URL_PEOPLE : URL_STARSHIPS;

	useEffect(() => {
		setLoader(true);

		fetchResource(characterUrl).then(data => {
			setLoader(false);
			setCharacters(data);
		});
	}, []);

	if (loader) {
		return <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>
	};

	const characterList = characters.slice(0, 10);

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{`Select ${type}`}</h2>
			{characterList && characterList.map(starship => (
				<Character key={starship.name} name={starship.name} />
			))}
		</>

	)
};

export default Characters;
