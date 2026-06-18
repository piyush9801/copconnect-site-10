import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Platform from './components/Platform'
import CCIO from './components/CCIO'
import Comics from './components/Comics'
import Tips from './components/Tips'
import Merch from './components/Merch'
import Sessions from './components/Sessions'
import Blog from './components/Blog'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="platform" element={<Platform />} />
          <Route path="ccio" element={<CCIO />} />
          <Route path="comics" element={<Comics />} />
          <Route path="tips" element={<Tips />} />
          <Route path="merch" element={<Merch />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
