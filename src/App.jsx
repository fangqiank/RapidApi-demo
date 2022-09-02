import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Feed} from './pages/Feed'
import {VideoDetail} from './pages/VideoDetail'
import {ChannelDetail} from './pages/ChannelDetail'
import {SearchFeed} from './pages/SearchFeed'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <Router>
      <Box
        sx={{backgroundColor: '#000'}}
      >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
