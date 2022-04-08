import { Button } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({ players }) => {
	const { isPlayersSelected, selectedCharacters, availableCharactersList } = useContext(Context);

	const selectedPlayers = availableCharactersList
		.filter(character => character.name === players[0] || character.name === players[1])

	const startBattle = () => {
		const selectedPeople = selectedCharacters === 'people';
		const [ playerOneStrength, playerTwoStrength ] = selectedPlayers.map(player =>
			!selectedPeople
				? +player.crew.replace(/[.,]/g, '')
				: +player.mass
		);

		if (playerOneStrength > playerTwoStrength) {
			// eslint-disable-next-line
			console.log(`${selectedPlayers[0].name} wins!!!!`);
		} else {
			// eslint-disable-next-line
			console.log(`${selectedPlayers[1].name} wins!!!!`);
		}
	}

	return (
		<>
			<h2>Selected players. FIGHT !!!</h2>
			{selectedPlayers.map(player => (
					<SelectedPlayer key={player.name} name={player.name} crew={player.crew} mass={player.mass}/>
				)
			)}
			{isPlayersSelected && <div><Button variant="contained" size="large" onClick={startBattle}>Start galactical battle</Button></div>}
		</>
	);
};

export default SelectedPlayers;
