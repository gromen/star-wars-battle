import Character from '../Characters/Character';

const SelectedPlayer = ({ name, crew, mass }) => {
	return (
		<Character name={name} crew={crew} mass={mass}/>
	)
};

export default SelectedPlayer;
