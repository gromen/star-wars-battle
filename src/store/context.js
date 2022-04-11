import { createContext, useState } from 'react';

const Context = createContext({
	isGameStarted: false,
	isGameFinished: false,
	selectedCharacters: '',
	selectedPlayerOne: '',
	selectedPlayerTwo: '',
	selectedPlayers: ['', ''],
	availableCharactersList: [],
	isPlayersSelected: false,
	isPlayerWins: false,
	onGameStart: () => {},
	onGameFinish: () => {},
	onSelectCharacter: (type) => {},
	onSelectPlayers: (player) => {},
	onPlayersSelected: () => {},
	onAvailableCharactersList: (payload) => {},
	onPlayerWins: (playerNumber) => {},
	onPlayAgain: () => {},
});

export const ContextProvider = ({ children }) => {
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [isGameFinished, setIsGameFinished] = useState(false);
	const [selectedCharacters, setSelectedCharacters] = useState('');
	const [availableCharactersList, setAvailableCharactersList] = useState([]);
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const [isPlayersSelected, setIsPlayersSelected] = useState(false);
	const [isPlayerWins, setIsPlayerWins] = useState(null);

	const onGameStart = () => {
		setIsGameStarted(true);
	}

	const onGameFinish = () => {
		setIsGameFinished(true);
	}

	const onPlayAgain = () => {
		setIsGameStarted(true);
		setIsGameFinished(false);
		setIsPlayersSelected(false);
		setSelectedCharacters('');
		setSelectedPlayers([]);
	};

	const onPlayerWins = (playerNumber) => setIsPlayerWins(playerNumber);

	const onSelectCharacter = (type) => {
		setSelectedCharacters(type);
	}

	const onSelectPlayers = (selectedPlayers) => {
		setSelectedPlayers(selectedPlayers);
	}

	const onPlayersSelected = () => {
		setIsPlayersSelected(true);
	}

	const onAvailableCharactersList = (payload) => setAvailableCharactersList(payload);

	return (
		<Context.Provider value={{
			isGameStarted,
			isGameFinished,
			selectedCharacters,
			selectedPlayers,
			isPlayersSelected,
			availableCharactersList,
			isPlayerWins,
			onGameStart,
			onGameFinish,
			onSelectCharacter,
			onSelectPlayers,
			onPlayersSelected,
			onAvailableCharactersList,
			onPlayerWins,
			onPlayAgain
		}}>{children}
		</Context.Provider>
	)
}

export default Context;
