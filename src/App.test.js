import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { ContextProvider } from './store/context';

describe('App component', () => {
	test('renders Start Game button when starting the game', () => {
		render(<App />);

		const startGameButton = screen.getByText('start game', { exact: false });

		expect(startGameButton).toBeInTheDocument();
	});

	test('renders Select Character view after clicking Start Game button', () => {
		render(<ContextProvider><App /></ContextProvider>);
		userEvent.click(screen.getByText('Start Game', { exact: false }));

		const selectCharacterTitle = screen.getByText('select character', { exact: false });

		expect(selectCharacterTitle).toBeInTheDocument();
	});
})

