import { AppBar, Box, CircularProgress, Container, Grid, Toolbar, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { URL_PEOPLE, URL_STARSHIPS } from '../../constants';
import Context from '../../store/context';
import { fetchResource } from '../../utils/utils';
import Character from './Character';

const Characters = ({ type }) => {
  const { state, dispatch } = useContext(Context);
  const { availableCharactersList, selectedPlayers } = state;
  const [loader, setLoader] = useState(false);
  const characterUrl = useMemo(() => (type === 'people' ? URL_PEOPLE : URL_STARSHIPS), [type]);

  useEffect(() => {
    setLoader(true);

    fetchResource(characterUrl)
      .then((data) => {
        setLoader(false);
        dispatch({ type: 'SET_AVAILABLE_CHARACTERS', payload: data });
      })
      .catch((error) => console.error(error));
  }, [characterUrl]);

  if (loader) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  const onClickCharacter = (name) => {
    const newSelectedPlayers = [...selectedPlayers];

    newSelectedPlayers.push(name);
    if (newSelectedPlayers.length <= 2) {
      dispatch({ type: 'SET_SELECT_PLAYERS', payload: [...newSelectedPlayers] });
    }
    if (newSelectedPlayers.length === 2) {
      //delay for possibility to see selected players in toolbar at the top
      setTimeout(() => dispatch({ type: 'SET_IS_PLAYERS_SELECTED', payload: true }), 1000);
    }
  };
  // get 10 characters from the list
  const characterList = availableCharactersList.slice(0, 10);

  return (
    <Container xs={10}>
      <Grid container spacing={2} maxWidth="lg">
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-around' }}>
            {selectedPlayers.length > 0 && (
              <Typography variant="h6" fontSize={14} component="div">
                <div>
                  {selectedPlayers[0] &&
                    `Player ${selectedPlayers.indexOf(selectedPlayers[0]) + 1}: ${
                      selectedPlayers[0]
                    }`}
                </div>
                <div>
                  {selectedPlayers[1] &&
                    `Player ${selectedPlayers.indexOf(selectedPlayers[1]) + 1}: ${
                      selectedPlayers[1]
                    }`}
                </div>
              </Typography>
            )}
            {selectedPlayers.length < 2 && (
              <Typography variant="h6" component="div" textAlign="right">
                {`Select player ${selectedPlayers.length + 1}`}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        {characterList &&
          characterList.map((character) => (
            <Grid key={character.name} item xs={6} lg={2} mt={14}>
              <Character
                name={character.name}
                mass={character.mass}
                crew={character.crew}
                type={type}
                onClickCharacter={() => onClickCharacter(character.name)}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Characters;
