import HomePage from "./pages/HomePage"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProductDetailPage from "./pages/ProductDetailPage"


function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products/:id" element={<ProductDetailPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
