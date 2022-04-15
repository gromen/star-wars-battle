import { screen } from '@testing-library/react';
import App from './App';
import { customRender } from './utils/testUtils';

describe('App component', () => {
  test('renders Start Game button when starting the game', () => {
    const providerProps = {
      state: {
        isGameStarted: false,
      },
    };

    customRender(<App />, { providerProps });

    const startGameButton = screen.getByText('start game', { exact: false });

    expect(startGameButton).toBeInTheDocument();
  });
});
