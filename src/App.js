import { Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useContext } from 'react';
import Game from './containers/Game';
import Context from './store/context';
import LogoStarWarsUrl from './assets/star-wars.svg';

function App() {
	const { isGameStarted, onGameStart } = useContext(Context);

  return (
    <div className="App">
			{!isGameStarted &&
				<Grid container justifyContent="center" alignItems="center" height="100vh">
					<Grid item xs={8} textAlign="center">
						<img src={LogoStarWarsUrl} alt="star wars logo" width="100%"/>
						<Button onClick={() => onGameStart(true)} variant="contained" endIcon={<SendIcon/>} size="large" >Start Game</Button>
					</Grid>
					<Grid item xs={8} textAlign="center">
					</Grid>
				</Grid>
			}
			{isGameStarted && <Game />}
    </div>
  );
}

export default App;
