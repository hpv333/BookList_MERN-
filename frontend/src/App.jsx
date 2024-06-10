import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook.jsx'
import EditBook from './pages/EditBook.jsx'
import ShowBook from './pages/ShowBook.jsx'
import Home from './pages/Home.jsx'
import DeleteBook from './pages/DeleteBook.jsx'



const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/books/create' element={<CreateBook/>}></Route>
        <Route path='/books/details/:id' element={<ShowBook/>}></Route>
        <Route path='/books/edit/:id' element={<EditBook/>}></Route>
        <Route path='/books/delete/:id' element={<DeleteBook/>}></Route>
     
    </Routes>
    // <div className='bg-red-400 text-white '>App</div>
  )
  }

export default App