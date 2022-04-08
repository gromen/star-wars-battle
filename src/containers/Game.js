import { useContext } from 'react';
import Character from '../components/Characters/Character';
import Characters from '../components/Characters/Characters';
import SelectedPlayers from '../components/SelectedPlayers/SelectedPlayers';
import Context from '../store/context';

const Game = () => {
	const { selectedCharacters, isPlayersSelected, selectedPlayers } = useContext(Context);

	return (
		<>
			{!selectedCharacters && (
				<>
					<h1 style={{textAlign: 'center'}}>Select characters</h1>

					<Character type="starship"/>
					<Character type="people" />
				</>
			)}

			{selectedCharacters && !isPlayersSelected && <Characters type={selectedCharacters}/>}
			{isPlayersSelected && <SelectedPlayers players={selectedPlayers}/>}
		</>
	)
};

export default Game;
