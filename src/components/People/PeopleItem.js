import { Box, ButtonBase, Card, CardContent, CardMedia, Typography } from '@mui/material';

const PeopleItem = ({ name }) => {
	return (
		<Box display={{ display:'inline-block' }}>
			<ButtonBase>
				<Card sx={{ width: 345, margin: '5px' }}>
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
}

export default PeopleItem;
