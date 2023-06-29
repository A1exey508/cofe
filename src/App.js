import './App.css'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HeaderPage } from './pages/header/index_header'
import Footer from './footer'
import Home from './pages/home/index_home'
import About from './pages/about/index_about'
import Help from './pages/help/index_help'
import Reviews from './pages/reviews/index_reviews'
import Catalog from './pages/catalog/index_catalog'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/help'} element={<Help />} />
          <Route path={'/reviews'} element={<Reviews />} />
          <Route path={'/catalog'} element={<Catalog />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App