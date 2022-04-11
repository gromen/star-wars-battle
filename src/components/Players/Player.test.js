import { render, screen } from '@testing-library/react';
import Player from './Player';

describe('Player component', () => {
	test('renders player 1 character details', () => {
		render(<Player name="Luke" mass={120} playerNumber={1} />);

		const heading = screen.getByRole('heading', { level: 2 });
		const headingText = screen.getByText('Player 1');

		expect(heading).toBeInTheDocument();
		expect(headingText).toBeInTheDocument();
	});
});
