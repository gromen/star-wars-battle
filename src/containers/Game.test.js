import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { customRender } from '../utils/testUtils';
import Game from './Game';

describe('Game component', () => {
  test('renders people character type', () => {
    const providerProps = {
      state: {
        selectedCharacters: false,
      },
    };

    customRender(<Game />, { providerProps });

    const peopleCharacter = screen.getByText('people');

    expect(peopleCharacter).toBeInTheDocument();
  });

  test('renders starship character type', () => {
    const providerProps = {
      state: {
        selectedCharacters: false,
      },
    };

    customRender(<Game />, { providerProps });

    const starshipCharacter = screen.getByText('starship');

    expect(starshipCharacter).toBeInTheDocument();
  });

  test('renders people characters to select, after clicking people character', async () => {
    const providerProps = {
      state: {
        selectedCharacters: false,
      },
      dispatch: jest.fn(),
    };

    customRender(<Game />, { providerProps });

    userEvent.click(screen.getByText('people'));
    const peopleCharacter = await screen.findAllByRole('button');

    expect(peopleCharacter).not.toHaveLength(0);
  });

  test('renders starship characters to select, after clicking starship character', async () => {
    const providerProps = {
      state: {
        selectedCharacters: false,
      },
      dispatch: jest.fn(),
    };

    customRender(<Game />, { providerProps });

    userEvent.click(screen.getByText('starship'));
    const starshipCharacter = await screen.findAllByRole('button');

    expect(starshipCharacter).not.toHaveLength(0);
  });
});
