import { useContext } from 'react';
import Context from '../../store/context';
import Character from '../Characters/Character';
import PropTypes from 'prop-types';

const Player = ({ name, crew, mass, playerNumber }) => {
  const { state } = useContext(Context);
  const { isGameFinished } = state;

  return (
    <>
      {!isGameFinished && (
        <>
          <h2>Player {playerNumber}</h2>
          <Character name={name} crew={crew} mass={mass} />
        </>
      )}
    </>
  );
};

export default Player;

Player.propTypes = {
  name: PropTypes.string,
  crew: PropTypes.number,
  mass: PropTypes.number,
  playerNumber: PropTypes.number,
};
