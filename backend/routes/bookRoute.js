import { Book } from "../models/bookModel.js";
import express, { request } from "express";

const router = express.Router();
// Route to post all books from db 
 router.post('/',async (request, response) => {
    try{
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send('Please fill all the fields');

        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };
        const book = await Book.create(newBook);
        return response.status(201).send(book);
    }    
    catch(error){
        console.log(error.message);
        response.status(500).send({message:message.error});
    }
})
// Route to get all books from db 
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        return response.status(200).send({count:books.length, data:books}); 
           
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message:message.error});
    }
});

// Route to get one book from db by id 
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;
        const book = await Book.findById(id);
       
        return response.status(200).send(book); 
           
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({error});
    }
});
router.get('/',(request, response)=>{
    console.log(request);
    return response.status(233).send('Hello World');
    });

// update a book :put 
router.put ('/:id', async (request, response) => {   
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) 
        {
            return response.status(400).send('Please fill all the fields');
        }
        const {id} = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body)
        if (!result){
            return response.status(404).send({message: 'Book not found'});
        }
        return response.status(200).send({message: 'Book updated successfully'});
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({message: error});
    }
});

//delete book by id
router.delete('/:id',async (request, response) => {
    try {
        const {id} = request.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result){
            return response.status(404).send({message: 'Book not found'});
        }
        return response.status(200).send({message: 'Book deleted successfully'});
    } catch (error) {

        console.log(error.message);
        return response.status(500).send({message: error});
    }
});
export default router;