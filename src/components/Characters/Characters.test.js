import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Context, { ContextProvider } from '../../store/context';
import Characters from './Characters';

const customRender = (ui, {providerProps, ...renderOptions}) => {
	return render(
		<Context.Provider value={providerProps}>{ui}</Context.Provider>,
		renderOptions,
	)
};

describe('Characters component', () => {
	test('renders people characters when people character type is selected', async () => {
		render(<ContextProvider><Characters type="people" /></ContextProvider>);

		const peopleCharacters = await screen.findAllByText('Luke Skywalker');

		expect(peopleCharacters).not.toHaveLength(0);
	});

	test('renders selected player\'s 1 name in toolbar', async () => {
		const providerProps = {
			selectedCharacters: 'people',
			selectedPlayers: ['Luke Skywalker'],
			onSelectPlayers: () => {},
			onAvailableCharactersList: () => {},
			availableCharactersList: [{
				"name": "Luke Skywalker",
			}]
		};

		customRender(<Characters type="people" />, { providerProps });

		userEvent.click(await screen.findByText('Luke Skywalker'));

		const playerOneSelected = await screen.findByText('Player 1: Luke Skywalker', { exact: false });


		expect(playerOneSelected).toBeInTheDocument();
	});

	test('renders selected player\'s 2 name in toolbar', async () => {
		const providerProps = {
			selectedCharacters: 'people',
			selectedPlayers: ['Luke Skywalker', 'C-3PO'],
			onSelectPlayers: () => {},
			onAvailableCharactersList: () => {},
			availableCharactersList: [{ "name": "C-3PO", }]
		};
		customRender(<Characters type="people" />, { providerProps });

		userEvent.click(await screen.findByText('C-3PO'));

		const playerTwoSelected = await screen.findByText('Player 2: C-3PO');

		expect(playerTwoSelected).toBeInTheDocument();
	});
});
