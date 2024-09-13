import BookList from "./components/BookList"
import Header from "./components/header"
import "./App.css"
import Layout from "./components/Layout"
import { useState } from "react"

function App() {

const [number, setNumber] = useState(0);

const counterHandler = () => {
  // number+= 1;
  setNumber(number + 1)
}

  return (
    <>
      <Header/>
        <Layout>
        <BookList />
        </Layout>
        <h2>{number}</h2>
        <button onClick={counterHandler}>sigma</button>
    </>
  )
}

export default App