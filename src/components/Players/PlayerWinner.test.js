import { screen } from '@testing-library/react';
import { customRender } from '../../utils/testUtils';
import PlayerWinner from './PlayerWinner';

describe('PlayerWinner component', () => {
	test('renders player 1 as a winner', () => {
		const providerProps = {
			isPlayerWins: 1,
			isGameFinished: true,
			selectedPlayers: ['Luke Skywalker', 'C-3PO'],
			playerOne: { "name": "Luke Skywalker", "mass": "77", },
			playerTwo: { "name": "C-3PO", "mass": "75", },
		}

		customRender(
			<PlayerWinner playerOne={providerProps.playerOne} playerTwo={providerProps.playerTwo} />,
			{ providerProps }
		);

		const heading = screen.getByRole('heading', { level: 2 });
		const headingText = screen.getByText('Player 1 wins!!!');

		expect(heading).toBeInTheDocument();
		expect(headingText).toBeInTheDocument();

	});
	test('renders player 2 as a winner', () => {
		const providerProps = {
			isPlayerWins: 2,
			isGameFinished: true,
			selectedPlayers: ['Luke Skywalker', 'C-3PO'],
			playerOne: { "name": "Luke Skywalker", "mass": "77", },
			playerTwo: { "name": "C-3PO", "mass": "75", },
		}

		customRender(
			<PlayerWinner playerOne={providerProps.playerOne} playerTwo={providerProps.playerTwo} />,
			{ providerProps }
		);

		const heading = screen.getByRole('heading', { level: 2 });
		const headingText = screen.getByText('Player 2 wins!!!');

		expect(heading).toBeInTheDocument();
		expect(headingText).toBeInTheDocument();

	});

	test('renders draw after the battle', () => {
		const providerProps = {
			isPlayerWins: 0,
			isGameFinished: true,
			selectedPlayers: ['Luke Skywalker', 'C-3PO'],
			playerOne: { "name": "Luke Skywalker", "mass": "77", },
			playerTwo: { "name": "C-3PO", "mass": "75", },
		}

		customRender(
			<PlayerWinner playerOne={providerProps.playerOne} playerTwo={providerProps.playerTwo} />,
			{ providerProps }
		);

		const headingText = screen.getByText('We have a draw :)');

		expect(headingText).toBeInTheDocument();
	});
});
