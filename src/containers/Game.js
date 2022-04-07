import { useContext } from 'react';
import Character from '../components/Characters/Character';
import Characters from '../components/Characters/Characters';
import Context from '../store/context';

const Game = () => {
	const { selectedCharacters } = useContext(Context);

	return (
		<>
			<h1 style={{textAlign: 'center'}}>Select type of players</h1>
			{!selectedCharacters &&(
				<>
					<Character name="starship"/>
					<Character name="people" />
				</>
			)}

			{selectedCharacters && (
				<>
					<Characters type={selectedCharacters}/>
				</>
			)}
		</>
	)
};

export default Game;
