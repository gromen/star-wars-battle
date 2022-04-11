import { ButtonBase, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';
import imagePeople from '../../assets/people.png';
import imageStarship from '../../assets/starship.png';

const Character = ({ type, name = type, crew, mass }) => {
	const {
		onSelectCharacter,
		selectedCharacters,
		onSelectPlayers,
		selectedPlayers,
		onPlayersSelected
	} = useContext(Context);
	const typePeople = type === 'people' || selectedCharacters === 'people';
	const newSelectedPlayers = [...selectedPlayers];

	const onSelectPlayer = () => {
		newSelectedPlayers.push(name);

		if (newSelectedPlayers.length <= 2) {
			onSelectPlayers([...newSelectedPlayers]);
		}
		if (newSelectedPlayers.length === 2) {
			//delay for possibility to see selected players in toolbar at the top
			setTimeout(onPlayersSelected, 1000);
		}
	};

	return (
		<ButtonBase onClick={!selectedCharacters ? () => onSelectCharacter(type) : onSelectPlayer}>
			<Card>
				<CardMedia
					component="img"
					height="140"
					image={typePeople ? imagePeople : imageStarship}
					alt={`${type} image`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{name}
					</Typography>
					<Typography gutterBottom variant="body1" component="div">
						{mass && `Mass: ${mass}`}
						{crew && `Crew: ${crew}`}
					</Typography>
				</CardContent>
			</Card>
		</ButtonBase>
	)
};

export default Character;
