import { Button } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';

const ActionButtons = ({ onClickStartBattle }) => {
	const {isPlayersSelected, isGameFinished, onPlayAgain} = useContext(Context);

	return (
		<>
			{isPlayersSelected && !isGameFinished &&
				<Button variant="contained" size="large" onClick={onClickStartBattle}>Start a battle</Button>
			}

			{isGameFinished &&
				<Button variant="contained" size="large" onClick={() => onPlayAgain()}>Play again</Button>
			}
		</>
	)
};

export default ActionButtons;
