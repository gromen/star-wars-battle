import { screen } from '@testing-library/react';
import { customRender } from '../../utils/testUtils';
import SelectedPlayers from './SelectedPlayers';

describe('SelectedPlayers component', () => {
	test('renders 2 characters for a battle', async () => {
		const providerProps = {
			isGameFinished: false,
			selectedPlayers: ['Luke Skywalker', 'C-3PO'],
			availableCharactersList: [
				{ 'name': 'Luke Skywalker', 'mass': '77' },
				{ 'name': 'C-3PO', 'mass': '77' }
			],
		}

		customRender(
			<SelectedPlayers/>,
			{ providerProps }
		);

		const characters = await screen.findAllByRole('button');

		expect(characters).toHaveLength(2);
	});
});
