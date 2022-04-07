import { Box, ButtonBase, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useContext } from 'react';
import Context from '../../store/context';

const Character = ({ name }) => {
	const { onSelectCharacter } = useContext(Context);

	const onClickCharacter = () => {
		onSelectCharacter(name)
	}


	return (
		<Box display={{ display: 'inline-block' }}>
			<ButtonBase onClick={onClickCharacter}>
				<Card sx={{ width: 200, margin: '5px' }}>
					<CardMedia
						component="img"
						height="140"
						image="//images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg"
						alt="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{name}
						</Typography>
						{/*<Typography variant="body2" color="text.secondary">*/}
						{/*	Lizards are a widespread group of squamate reptiles, with over 6,000*/}
						{/*	species, ranging across all continents except Antarctica*/}
						{/*</Typography>*/}
					</CardContent>
					{/*<CardActions>*/}
					{/*	<Button size="small">Share</Button>*/}
					{/*	<Button size="small">Learn More</Button>*/}
					{/*</CardActions>*/}
				</Card>
			</ButtonBase>
		</Box>

	)
};

export default Character;
