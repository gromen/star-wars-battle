import { Grid } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';
import ActionButtons from '../ActionButtons/ActionButtons';
import Player from './Player';
import PlayerWinner from './PlayerWinner';

const SelectedPlayers = () => {
  const { state, dispatch } = useContext(Context);
  const { availableCharactersList, selectedPlayers, isGameFinished, selectedCharacters } = state;

  const [playerOne] = availableCharactersList.filter(
    (character) => character.name === selectedPlayers[0]
  );
  const [playerTwo] = availableCharactersList.filter(
    (character) => character.name === selectedPlayers[1]
  );

  const onClickStartBattle = () => {
    const isSelectedPeople = selectedCharacters === 'people';
    const playerOneStrength = isSelectedPeople
      ? +playerOne.mass
      : +playerOne.crew.replace(/[,.-]/g, '');
    const playerTwoStrength = isSelectedPeople
      ? +playerTwo.mass
      : +playerTwo.crew.replace(/[,.-]/g, '');

    if (playerOneStrength > playerTwoStrength) {
      dispatch({ type: 'SET_PLAYER_WINNER', payload: 1 });
      //   dispatch({ type: 'SET_GAME_FINISH', payload: true });
    } else if (playerOneStrength < playerTwoStrength) {
      dispatch({ type: 'SET_PLAYER_WINNER', payload: 2 });
      //   dispatch({ type: 'SET_GAME_FINISH', payload: true });
    } else {
      dispatch({ type: 'SET_PLAYER_WINNER', payload: 0 });
      //   dispatch({ type: 'SET_GAME_FINISH', payload: true });
    }
    dispatch({ type: 'SET_GAME_FINISH', payload: true });
  };

  return (
    <>
      <Grid container justifyContent="center" spacing="5">
        <Grid item xs={12} justifyContent="center" marginTop={5}>
          <h2 style={{ textAlign: 'center' }}>Let&apo;s get ready to rumble !!!</h2>
        </Grid>
        <Grid item>
          <Player
            playerNumber={1}
            name={playerOne.name}
            crew={playerOne.crew}
            mass={playerOne.mass}
          />
        </Grid>
        {!isGameFinished && (
          <Grid
            item
            alignSelf="center"
            justifyContent="center"
            fontSize={50}
            m={8}
            xs={12}
            lg={2}
            textAlign={'center'}
          >
            VS
          </Grid>
        )}
        <Grid item>
          <Player
            playerNumber={2}
            name={playerTwo.name}
            crew={playerTwo.crew}
            mass={playerTwo.mass}
          />
        </Grid>
        <Grid item justifyContent="center">
          <PlayerWinner playerOne={playerOne} playerTwo={playerTwo} />
        </Grid>
        <Grid container justifyContent="center" my={2}>
          <ActionButtons onClickStartBattle={onClickStartBattle} />
        </Grid>
      </Grid>
    </>
  );
};

export default SelectedPlayers;
