import { Grid } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';
import Character from '../Characters/Character';

const PlayerWinner = ({ playerOne, playerTwo }) => {
	const { isPlayerWins, isGameFinished } = useContext(Context);
	const isPlayerOneWins = isPlayerWins === 1;

	return (
		<>
			{isPlayerWins !== 0 && isGameFinished && <>
				<h2>Player {isPlayerWins} wins!!!</h2>
				<Character
					name={isPlayerOneWins ? playerOne.name : playerTwo.name}
					crew={isPlayerOneWins ? playerOne.crew : playerTwo.crew}
					mass={isPlayerOneWins ? playerOne.mass : playerTwo.mass}
				/>
			</>}
		</>
	)
};

export default PlayerWinner;
