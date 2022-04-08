import { Box, CircularProgress } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { URL_PEOPLE, URL_STARSHIPS } from '../../constants';
import Context from '../../store/context';
import { fetchResource } from '../../utils/utils';
import Character from './Character';

const Characters = ({ type }) => {
	const { selectedPlayers, onAvailableCharactersList } = useContext(Context);
	const [characters, setCharacters] = useState([]);
	const [loader, setLoader] = useState(false);

	const memoizedCharacterUrl = useMemo(() => type === 'people' ? URL_PEOPLE : URL_STARSHIPS, [type]);

	useEffect(() => {
		setLoader(true);

		fetchResource(memoizedCharacterUrl).then(data => {
			setLoader(false);
			setCharacters(data);
			onAvailableCharactersList(data);
		});
	}, [memoizedCharacterUrl]);

	if (loader) {
		return <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>
	}

	const characterList = characters.slice(Math.random(), 10);
	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{`Select player ${selectedPlayers.length + 1}`}</h2>
			{characterList && characterList.map(character => (
				<Character
					key={character.name}
					name={character.name}
					mass={character.mass}
					crew={character.crew}
					type={type}
				/>
			))}
		</>

	)
};

export default Characters;
