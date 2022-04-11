import { render, screen } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
	test('renders character image and name', () => {
		render(<Character type="people" />);

		const image = screen.getByAltText('people image');
		const name = screen.getByText('people');

		expect(image).toBeInTheDocument();
		expect(name).toBeInTheDocument();
	});

	test('renders mass property when people type is selected', () => {
		render(<Character type="people" mass={100}/>);

		const mass = screen.getByText('Mass: 100');

		expect(mass).toBeInTheDocument();
	});

	test('renders crew property when starship type is selected', () => {
		render(<Character type="people" crew={100}/>);

		const crew = screen.getByText('Crew: 100');

		expect(crew).toBeInTheDocument();
	});
});
