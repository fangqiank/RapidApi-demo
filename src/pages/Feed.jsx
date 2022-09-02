import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {fetchFromApi} from '../utils/fetchFromApi'
import {Sidebar} from '../components/Sidebar'
import {Videos} from '../components/Videos'

export const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState(null)

	useEffect(() => {
		setVideos(null)

		fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
		.then(data => {
			console.log(data)
			setVideos(data.items)
		})
	}, [selectedCategory])		
	

	return (
		<Stack
			sx={{flexDirection:{sx: 'column', md:'row'}}}
		>
			<Box sx={{
				height: {sx:'auto',md:'92vh'},
				borderRight: '1px solid #3d3d3d',
				px :{sx: 0, md: 2}
			}}>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

				<Typography
					className='copyright'
					variant='body2'
					sx={{mt: 1.5, color: '#fff'}}
				>
					Copyright © 2022
				</Typography>
			</Box>	

			<Box
				p={2}
				sx={{
					overflow: 'auto',
					height: '90vh',
					flex: 2
				}}
			>
				<Typography
					variant='h4'
					fontWeight='bold'
					mb={2}
					sx={{color: '#fff'}}
				>
					{selectedCategory} <span style={{color:'#fc1503'}}>videos</span>	
				</Typography>

				<Videos videos={videos} />
			</Box>
		</Stack>
	)
}
