import { screen } from '@testing-library/react';
import { customRender } from '../../utils/testUtils';
import ActionButtons from './ActionButtons';

describe('Action buttons component', () => {
  test('renders "start a battle" button when players are selected', async () => {
    const providerProps = {
      isGameFinished: false,
      isPlayersSelected: true,
    };

    customRender(<ActionButtons />, { providerProps });

    const startGameButton = await screen.findByText('start a battle', { exact: false });

    expect(startGameButton).toBeInTheDocument();
  });

  test('renders "play again" button when games is finished', async () => {
    const providerProps = {
      isGameFinished: true,
      isPlayersSelected: true,
    };

    customRender(<ActionButtons />, { providerProps });

    const playAgainButton = screen.getByText('play again', { exact: false });

    expect(playAgainButton).toBeInTheDocument();
  });
});
