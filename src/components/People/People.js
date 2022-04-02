import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { URL_PEOPLE } from '../../constants';
import { fetchResource } from '../../utils/utils';
import PeopleItem from './PeopleItem';

const People = () => {
	const [people, setPeople] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetchResource(URL_PEOPLE).then(data => {
			setLoader(false);
			setPeople(data);
		})
	}, [])

	if (loader) {
		return <Box sx={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></Box>
	};

	return (
		<>
			<h2 style={{textAlign: 'center'}}>Select character</h2>
			{people && people.map(people => (
				<PeopleItem key={people.name} name={people.name}/>
			))}
		</>
	)
};

export default People;
