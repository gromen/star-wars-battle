import { useContext } from 'react';
import Context from '../../store/context';
import Character from '../Characters/Character';

const PlayerWinner = ({ playerOne, playerTwo }) => {
  const { state } = useContext(Context);
  const { playerWinnerNumber, isGameFinished } = state;
  const isPlayerOneWins = playerWinnerNumber === 1;
  return (
    <>
      {playerWinnerNumber !== 0 && isGameFinished && (
        <>
          <h2>Player {playerWinnerNumber} wins!!!</h2>
          <Character
            name={isPlayerOneWins ? playerOne.name : playerTwo.name}
            crew={isPlayerOneWins ? playerOne.crew : playerTwo.crew}
            mass={isPlayerOneWins ? playerOne.mass : playerTwo.mass}
          />
        </>
      )}
      {playerWinnerNumber === 0 && isGameFinished && 'We have a draw :)'}
    </>
  );
};

export default PlayerWinner;
