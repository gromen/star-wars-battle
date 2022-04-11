import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { ContextProvider } from '../../store/context';

describe('Action buttons component', () => {
	test('renders "start a battle" button when players are selected', async () => {
		// Yes I know, "overcomplicated" test ;)
		render(<ContextProvider><App /></ContextProvider>)
		userEvent.click(screen.getByText('Start Game'));
		userEvent.click(screen.getByText('starship'));

		const characterOne = await screen.findByText('CR90 corvette');
		const characterTwo = await screen.findByText('Y-wing');

		userEvent.click(characterOne);
		userEvent.click(characterTwo);

		const startGameButton = await screen.findByText('start a battle', { exact: false });

		expect(startGameButton).toBeInTheDocument();
	});

	test('renders "play again" button when games is finished', async () => {
		// Yes I know, "overcomplicated" test ;)
		render(<ContextProvider><App /></ContextProvider>)
		userEvent.click(screen.getByText('Start Game'));
		userEvent.click(screen.getByText('starship'));

		const characterOne = await screen.findByText('CR90 corvette');
		const characterTwo = await screen.findByText('Y-wing');

		userEvent.click(characterOne);
		userEvent.click(characterTwo);

		const startGameButton = await screen.findByText('start a battle', { exact: false });
		userEvent.click(startGameButton);
		const playAgainButton = screen.getByText('play again', { exact: false });

		expect(playAgainButton).toBeInTheDocument();
	});
});
