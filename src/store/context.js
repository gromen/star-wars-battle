import { createContext, useEffect, useState } from 'react';

const Context = createContext({
	gameStarted: false,
	selectedCharacters: '',
	onGameStart: () => {},
	onSelectCharacter: () => {}
});

export const ContextProvider = ({ children }) => {
	const [gameStarted, setGameStarted] = useState(false);
	const [selectedCharacters, setSelectedCharacters] = useState('');

	useEffect(() => {
		const storedGameStatus = localStorage.getItem('gameStarted');
		const storedSelectedCharacters = localStorage.getItem('selectedCharacters');

		if(storedSelectedCharacters) setSelectedCharacters(storedSelectedCharacters);
		if (storedGameStatus === '1') return setGameStarted(true);
	}, [gameStarted, selectedCharacters])

	const onGameStart = () => {
		setGameStarted(true);
		localStorage.setItem('gameStarted', '1');
	}

	const onSelectCharacter = (type) => {
		setSelectedCharacters(type);
		localStorage.setItem('selectedCharacters', type);
	}

	return (
		<Context.Provider value={{
			gameStarted: gameStarted,
			selectedCharacters: selectedCharacters,
			onGameStart: onGameStart,
			onSelectCharacter: onSelectCharacter
		}}>{children}</Context.Provider>
	)
}

export default Context;
