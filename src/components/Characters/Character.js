import { Box, ButtonBase, Card, CardContent, CardMedia, Typography } from '@mui/material';
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
	const typePeople = type === 'people' || selectedCharacters === 'people'
	const onClickCharacter = () => {
		onSelectCharacter(type)
	}

	const onSelectPlayer = () => {
		const newSelectedPlayers = [...selectedPlayers];
		newSelectedPlayers.push(name);
		if (newSelectedPlayers.length <= 2) {
			onSelectPlayers([...newSelectedPlayers])
		}
		if (newSelectedPlayers.length === 2) {
			onPlayersSelected();
		}
	};

	return (
		<Box display={{ display: 'inline-block' }}>
			<ButtonBase onClick={!selectedCharacters ? onClickCharacter : onSelectPlayer}>
				<Card sx={{ width: 200, margin: '5px' }}>
					<CardMedia
						component="img"
						height="140"
						image={typePeople ? imagePeople : imageStarship}
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
						<Typography gutterBottom variant="body1" component="div">
							{mass && `Mass: ${mass}`}
							{crew && `Crew: ${crew}`}
						</Typography>
					</CardContent>
				</Card>
			</ButtonBase>
		</Box>

	)
};

export default Character;
