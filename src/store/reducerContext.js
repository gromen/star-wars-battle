export const initialState = {
	isGameStarted: false,
	isGameFinished: false,
	selectedCharacters: '',
	selectedPlayerOne: '',
	selectedPlayerTwo: '',
	selectedPlayers: [],
	availableCharactersList: [],
	isPlayersSelected: false,
	isPlayerWins: false,
}

const reducerContext = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_GAME_START':
			return {
				...state,
				isGameStarted: payload
			}
		case 'SET_GAME_FINISH':
			return {
				...state,
				isGameFinished: true
			}
		case 'SET_CHARACTERS':
			return {
				...state,
				selectedCharacters: payload
			}
		case 'SET_AVAILABLE_CHARACTERS':
			return {
				...state,
				availableCharactersList: payload
			}
		case 'SET_SELECT_PLAYERS':
			return {
				...state,
				selectedPlayers: payload
			}
		case 'SET_IS_PLAYERS_SELECTED':
			return {
				...state,
				isPlayersSelected: payload
			}
		case 'SET_PLAYER_WINNER':
			return {
				...state,
				playerWinnerNumber: payload
			}

		default:
			return state;
	}
}

export default reducerContext;
