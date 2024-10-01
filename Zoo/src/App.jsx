import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AnimalDetailPage from "./pages/AnimalDetailPage"

function App() {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/animals/:id" element={<AnimalDetailPage />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
