import { Grid } from '@mui/material';
import { useContext } from 'react';
import Character from '../components/Characters/Character';
import Characters from '../components/Characters/Characters';
import SelectedPlayers from '../components/Players/SelectedPlayers';
import Context from '../store/context';

const Game = () => {
	const { selectedCharacters, isPlayersSelected, onSelectCharacter } = useContext(Context);

	return (
		<Grid container justifyContent="center" spacing={3}>
			{!selectedCharacters && (
				<>
					<Grid item xs={12}><h1 style={{ textAlign: 'center' }}>Select character</h1></Grid>

					<Grid item xs={6} textAlign="right">
						<Character type="starship" onClickCharacter={() => onSelectCharacter('starship')}/>
					</Grid>
					<Grid item xs={6} textAlign="left">
						<Character type="people" onClickCharacter={() => onSelectCharacter('people')}/>
					</Grid>
				</>
			)}

			{selectedCharacters && !isPlayersSelected && <Characters type={selectedCharacters} />}
			{isPlayersSelected && <SelectedPlayers />}
		</Grid>
	)
};

export default Game;
