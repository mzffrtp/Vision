
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main-page'
import Header from './components/header'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
