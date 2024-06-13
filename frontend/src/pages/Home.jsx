import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox} from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'

const Home = () => {
  const [books , setBooks] =     useState([]); //state for storing data
  const [loading , setLoading] = useState(false); //state for showing loading spinner
  const [showType , setShowType] = useState('table'); //state for showing type of view

  useEffect (() => {
    setLoading(true);
    axios 
    .get('http://localhost:5555/books')
    .then((res) => {
      setBooks(res.data.data);
      setLoading(false);

    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    })  
  }
  ,[])
  useEffect(() => {
    console.log('Books:', books)
  }, [books])
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button onClick={() => setShowType('table')} className='bg-blue-300 hover:bg-blue-500 hover:text-white px-4 py-1 rounded-lg'>Table</button>
        <button onClick={() => setShowType('card')} className='bg-pink-300 hover:bg-pink-500 hover:text-white px-4 py-1 rounded-lg'>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl my-8'>Books List</h1>
          <Link to='books/create' className='bg-green-500 text-white px-4 py-2 rounded flex items-center'>
            <MdOutlineAddBox className='text-sky-800 text-4xl'/>
            </Link>
      </div>
      {loading? (<Spinner/>) :(showType === 'table')? (
        <BooksTable books={books}/>):(<BooksCard books={books}/>)
      }
    </div>
  )
}

export default Home