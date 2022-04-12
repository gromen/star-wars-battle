import { Button } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';

const ActionButtons = ({ onClickStartBattle }) => {
	const { state, dispatch } = useContext(Context);
	const {isPlayersSelected, isGameFinished} = state;

	const onClickPlayAgain = () => {
		dispatch({ type: 'SET_GAME_FINISH' });
		dispatch({ type: 'SET_IS_PLAYERS_SELECTED', payload: false });
		dispatch({ type: 'SET_CHARACTERS', payload: '' });
		dispatch({ type: 'SET_SELECT_PLAYERS', payload: [] });
	}

	return (
		<>
			{isPlayersSelected && !isGameFinished &&
				<Button variant="contained" size="large" onClick={onClickStartBattle}>Start a battle</Button>
			}

			{isGameFinished &&
				<Button variant="contained" size="large" onClick={onClickPlayAgain}>Play again</Button>
			}
		</>
	)
};

export default ActionButtons;
