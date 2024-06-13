import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox} from 'react-icons/md'


const BooksTable = ({books}) => {
  return (
    <table className='w-full border-seperate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No </th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max:md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max:md:hidden'>Publish Year</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book , index) => (  
              <tr key={book._id} className='h-8'>
                <td className='border border-slate-700 rounded-md'>{index + 1}</td>
                <td className='border border-slate-700 rounded-md'>{book.title}</td>
                <td className='border border-slate-700 rounded-md max:md:hidden'>{book.author}</td>
                <td className='border border-slate-700 rounded-md max:md:hidden'>{book.publishYear}</td>
                <td className='border border-slate-700 rounded-md text-center'>
                  <div className='flex justify-center gap-x-4'>
                  <Link to={`/books/details/${book._id}`} className='bg-blue-500 text-white px-4 py-1 rounded mr-2'>
                    <BsInfoCircle/>
                  </Link>
                  <Link to={`/books/edit/${book._id}`} className='bg-yellow-500 text-white px-4 py-1 rounded mr-2'>
                    <AiOutlineEdit/>
                  </Link>
                  <Link to={`/books/delete/${book._id}`} className='bg-red-500 text-white px-4 py-1 rounded'>
                    <AiOutlineDelete/>
                  </Link>
                  </div>
                </td>
              </tr>
            ))
              }
          </tbody>
        </table>
  )
}

export default BooksTable