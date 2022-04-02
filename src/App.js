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
			{!gameStarted && <button onClick={onClickStartGame}>Start Game</button>}
			{gameStarted && <Game />}
    </div>
  );
}

export default App;
