import { createContext, useEffect, useState } from 'react';

const Context = createContext({
	gameStarted: false,
	selectedCharacters: '',
	selectedPlayerOne: '',
	selectedPlayerTwo: '',
	selectedPlayers: ['', ''],
	availableCharactersList: [],
	isPlayersSelected: false,
	onGameStart: () => {},
	onSelectCharacter: (type) => {},
	onSelectPlayers: (player) => {},
	onPlayersSelected: () => {},
	onAvailableCharactersList: (payload) => {},
});

export const ContextProvider = ({ children }) => {
	const [gameStarted, setGameStarted] = useState(false);
	const [selectedCharacters, setSelectedCharacters] = useState('');
	const [availableCharactersList, setAvailableCharactersList] = useState([]);
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const [isPlayersSelected, setIsPlayersSelected] = useState(false);

	useEffect(() => {
		const storedGameStatus = localStorage.getItem('gameStarted');
		const storedSelectedCharacters = localStorage.getItem('selectedCharacters');

		if(storedSelectedCharacters) setSelectedCharacters(storedSelectedCharacters);
		if (storedGameStatus === '1') setGameStarted(true);
	}, [gameStarted, selectedCharacters])

	const onGameStart = () => {
		setGameStarted(true);
		localStorage.setItem('gameStarted', '1');
	}

	const onSelectCharacter = (type) => {
		setSelectedCharacters(type);
		localStorage.setItem('selectedCharacters', type);
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
			gameStarted: gameStarted,
			selectedCharacters,
			selectedPlayers,
			isPlayersSelected,
			availableCharactersList,
			onGameStart,
			onSelectCharacter,
			onSelectPlayers,
			onPlayersSelected,
			onAvailableCharactersList
		}}>{children}
		</Context.Provider>
	)
}

export default Context;
