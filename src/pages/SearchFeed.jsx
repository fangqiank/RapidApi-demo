import Reac,{useState, useEffect} from 'react'
import { Typography, Box } from '@mui/material'
import {useParams} from 'react-router-dom'

import { fetchFromApi } from '../utils/fetchFromApi'
import { Videos } from '../components/Videos'

export const SearchFeed = () => {
	const [videos, setVideos] = useState([])
	const {searchTerm} = useParams()

	useEffect(() => {
		fetchFromApi(`search?part=snippet&q=${searchTerm}`)
			.then(data => setVideos(data.items))
	},[searchTerm])

	return (
		<Box
			p={2}
			minHeight='95vh'
		>
			<Typography
				variant='h4'
				fontWeight={900}
				color='#fff'
				mb={3}
				ml={{sm:'100px'}}
			>
				Search results for <span style={{color: '#fc1503'}}>{searchTerm}</span> videos
			</Typography>

			<Box display='flex'>
				<Box sx={{mr:{sm:'100px'}}}>
					<Videos videos={videos}/>
				</Box>
			</Box>
		</Box>
	)
}