import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useContext } from 'react';
import Game from './containers/Game';
import Context from './store/context';

function App() {
	const { gameStarted, onGameStart } = useContext(Context);

	const onClickStartGame = () => {
		onGameStart()
	}

  return (
    <div className="App">
			{!gameStarted &&
				<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
					<Button onClick={onClickStartGame} variant="contained" endIcon={<SendIcon />} size="large">Start Game</Button>
				</div>
			}
			{gameStarted && <Game />}
    </div>
  );
}

export default App;
