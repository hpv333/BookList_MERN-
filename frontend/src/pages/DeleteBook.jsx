import React from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDeleteBook = () => {  
    setLoading(true);
    axios
    .delete(`http://localhost:5555/books/${id}`)
    .then((res) => {
      setLoading(false);
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      alert('An error occurred. Please try again later.');
    });
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-2xl my-8'>Delete Book</h1>
      {loading? <Spinner/> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <p className='text-xl text-gray-500'>Are you sure you want to delete this book?</p>
        </div>
        <div className='flex justify-between'>
          <button onClick={handleDeleteBook} className='bg-red-500 text-white px-4 py-2 rounded'>Delete</button>
          <button onClick={() => navigate('/')} className='bg-blue-500 text-white px-4 py-2 rounded'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteBook