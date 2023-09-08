
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page'
import Header from './components/header'
import MovieDetails from './pages/movie-detail'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/movie/:movieId' element={<MovieDetails />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
