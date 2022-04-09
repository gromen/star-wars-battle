import { Box, CircularProgress, Container, Grid } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { URL_PEOPLE, URL_STARSHIPS } from '../../constants';
import Context from '../../store/context';
import { fetchResource } from '../../utils/utils';
import Character from './Character';

const Characters = ({ type }) => {
	const { selectedPlayers, onAvailableCharactersList, availableCharactersList } = useContext(Context);
	const [loader, setLoader] = useState(false);

	const characterUrl = useMemo(() => type === 'people' ? URL_PEOPLE : URL_STARSHIPS, [type]);

	useEffect(() => {
		setLoader(true);

		fetchResource(characterUrl).then(data => {
			setLoader(false);
			onAvailableCharactersList(data);
		}).catch(error => console.error(error));
	}, [characterUrl]);

	if (loader) {
		return <Box sx={{display: 'flex', justifyContent: 'center', my: 4}}><CircularProgress /></Box>
	}
	// get 10 characters from the list
	const characterList = availableCharactersList.slice(0, 10);

	return (
		<Container xs={10}>
			<Grid container spacing={2} maxWidth="lg">
				<Grid item xs={12}><h2 style={{ textAlign: 'center' }}>{`Select player ${selectedPlayers.length + 1}`}</h2></Grid>

				{characterList && characterList.map(character => (
					<Grid key={character.name} item xs={6} lg={2}>
						<Character
							name={character.name}
							mass={character.mass}
							crew={character.crew}
							type={type}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
};

export default Characters;
