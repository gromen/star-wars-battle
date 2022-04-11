import { Grid } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';
import ActionButtons from '../ActionButtons/ActionButtons';
import Player from './Player';
import PlayerWinner from './PlayerWinner';

const SelectedPlayers = () => {
	const {
		selectedCharacters,
		availableCharactersList,
		selectedPlayers,
		isGameFinished,
		onGameFinish,
		onPlayerWins,
	} = useContext(Context);

	const [ playerOne ] = availableCharactersList.filter(character => character.name === selectedPlayers[0]);
	const [ playerTwo ] = availableCharactersList.filter(character => character.name === selectedPlayers[1]);

	const onClickStartBattle = () => {
		const isSelectedPeople = selectedCharacters === 'people';
		const playerOneStrength = isSelectedPeople ? +playerOne.mass : +playerOne.crew.replace(/[,.-]/g, '');
		const playerTwoStrength = isSelectedPeople ? +playerTwo.mass : +playerTwo.crew.replace(/[,.-]/g, '');

		if (playerOneStrength > playerTwoStrength) {
			onGameFinish();
			onPlayerWins(1);
		} else if(playerOneStrength < playerTwoStrength) {
			onGameFinish();
			onPlayerWins(2);
		} else {
			onGameFinish();
			onPlayerWins(3);
		}
	}


	return (
		<>
			<Grid container justifyContent="center" spacing="5">
				<Grid item xs={12} justifyContent="center" marginTop={5}>
					<h2 style={{textAlign: 'center'}}>Let's get ready to rumble !!!</h2>
				</Grid>
				<Grid item>
					<Player playerNumber={1}
						name={playerOne.name}
						crew={playerOne.crew}
						mass={playerOne.mass}
					/>
				</Grid>
				{!isGameFinished && <Grid item alignSelf="center" justifyContent="center" fontSize={50} m={8} xs={12} lg={2} textAlign={'center'}>VS</Grid>}
				<Grid item>
					<Player playerNumber={2}
						name={playerTwo.name}
						crew={playerTwo.crew}
						mass={playerTwo.mass}
					/>
				</Grid>
				<Grid item justifyContent="center">
					<PlayerWinner playerOne={playerOne} playerTwo={playerTwo}/>
				</Grid>
				<Grid container justifyContent="center" my={2}>
					<ActionButtons onClickStartBattle={onClickStartBattle} />
				</Grid>
			</Grid>
		</>
	);
};

export default SelectedPlayers;
