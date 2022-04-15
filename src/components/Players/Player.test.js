import { screen } from '@testing-library/react';
import { customRender } from '../../utils/testUtils';
import Player from './Player';

describe('Player component', () => {
  test('renders player 1 character details', () => {
    const providerProps = {
      state: {
        isGameFinished: false,
      },
    };

    customRender(<Player name="Luke" mass={120} playerNumber={1} />, { providerProps });

    const heading = screen.getByRole('heading', { level: 2 });
    const headingText = screen.getByText('Player 1');

    expect(heading).toBeInTheDocument();
    expect(headingText).toBeInTheDocument();
  });
});
