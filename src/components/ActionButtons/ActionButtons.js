import { Button, Grid } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';

const ActionButtons = ({ onClickStartBattle }) => {
	const {isPlayersSelected, isGameFinished, onPlayAgain} = useContext(Context);

	return (
		<>
			{isPlayersSelected && !isGameFinished &&
				<Grid container justifyContent="center" my={2}>
					<Button variant="contained" size="large" onClick={onClickStartBattle}>Start a battle</Button>
				</Grid>
			}

			{isGameFinished &&
				<Grid container justifyContent="center" my={2}>
					<Button variant="contained" size="large" onClick={() => onPlayAgain()}>Play again</Button>
				</Grid>
			}
		</>
	)
};

export default ActionButtons;
