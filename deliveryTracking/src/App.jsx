import "./App.css"
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import DeliveryList from "./components/DeliveryList"



function App() {

  return (
    <>
     <Navbar/>
     <Layout>
    <DeliveryList/>
     </Layout>
     </>
  )
}

export default App
