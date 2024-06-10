import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'

const ShowBook = () => {
        const [book , setBooks] =     useState([]); //state for storing data
        const [loading , setLoading] = useState(false); //state for showing loading spinner
        const { id } = useParams();  
        useEffect (() => {
            setLoading(true);
            axios 
            .get(`http://localhost:5555/books/${id}`)
            .then((res) => {
                setBooks(res.data);
                console.log(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })  
        },[])
    return (
        <div className='p-4'>
                <BackButton/>
                <h1 className = 'text-2xl my-8'>Book Details</h1>
                {loading? (<Spinner/>) :(
                       <div className='flex flex-col border-2border-sky-400 rounded-x1 w-fit p-4'>
                       <div className='my-4'>
                       <span className='text-xl mr-4text-gray-500'>Id:  </span>
                       <span>{book?._id}</span>
                       </div>

                       <div className="my-4">
                       <span className='text-xl mr-4 text-gray-500'>Title:  </span>
                       <span>{book?.title}</span>
                       </div>

                       <div className='my-4'>
                       <span className='text-xl mr-4text-gray-500'>Author:  </span>
                       <span>{book?.author}</span>
                       </div>

                       <div className='my-4'>
                       <span className='text-xl mr-4text-gray-500'>PublishYear:  </span>
                       <span>{book?.publishYear}</span>
                       </div>

                       <div className='my-4'>
                       <span className='text-xl mr-4text-gray-500'>Create Time:  </span>
                       <span>{new Date(book?.createdAt).toString()}</span>
                       </div>

                       <div className='my-4'>
                       <span className='text-xl mr-4text-gray-500'>Last Update Time:  </span>
                       <span>{new Date(book?.updatedAt).toString()}</span>
                       </div>

                       </div>
                 
                )}
        </div>
    ); // Add a closing parenthesis ')' here
};

export default ShowBook