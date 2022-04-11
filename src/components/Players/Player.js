import { useContext } from 'react';
import Context from '../../store/context';
import Character from '../Characters/Character';

const Player = ({ name, crew, mass, playerNumber }) => {
	const { isGameFinished } = useContext(Context);

	return (
		<>
		{!isGameFinished &&
			<>
				<h2>Player {playerNumber}</h2>
				<Character name={name} crew={crew} mass={mass}/>
			</>
		}
		</>
	)
};

export default Player;
