import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SelectBook from './components/SelectBook'
import DeleteBook from './components/DeleteBook'  
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/view" element={<ViewBook />} />
          <Route path="/select" element={<SelectBook />} />
          <Route path="/delete" element={<DeleteBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
