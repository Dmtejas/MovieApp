import expressAsyncHandler from 'express-async-handler'
import movieModel from '../model/movieModel.js';

/*
@desc :- GET method to return all the movies in the database
*/

const getMovies = expressAsyncHandler(async (request, response) => {
    const data = await movieModel.find();
    
   return response.status(200).json(data);
})

const getSingleMovie = expressAsyncHandler ( async (request, response) => {
    const id = request.params.id;
    const singleMovie = await movieModel.findById(id);
    if(!singleMovie) {
        return response.status(500).json({message : `Error in fetching single movie from DB`});
    }
    return response.status(200).json(singleMovie);
})

const addMovie = expressAsyncHandler (async (request, response) => {
    const movie = request.body;
    const savedMovie = await movieModel.create(movie);
    if(savedMovie) {
        return response.status(201).json(savedMovie);
    } else {
        return response.status(400).json({'message': 'Server error for adding the movie'})
    }
})

export {getMovies, getSingleMovie, addMovie};

