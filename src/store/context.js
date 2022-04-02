import { createContext, useEffect, useState } from 'react';

const Context = createContext({
	gameStarted: false,
	onGameStart: () => {}
});

export const ContextProvider = ({ children }) => {
	const [gameStarted, setGameStarted] = useState(false);

	useEffect(() => {
		const storedGameStatus = localStorage.getItem('gameStarted');

		if (storedGameStatus === '1') return setGameStarted(true);
	}, [])

	const onGameStart = () => {
		setGameStarted(true);
		localStorage.setItem('gameStarted', '1');
	}

	return (
		<Context.Provider value={{ gameStarted: gameStarted, onGameStart: onGameStart }}>{children}</Context.Provider>
	)
}

export default Context;
