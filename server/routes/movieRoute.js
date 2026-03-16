import { Router } from "express";
import { addMovie, getMovies, getSingleMovie } from "../controller/movieController.js";

const movieRouter = Router();

movieRouter.route('/').get(getMovies);
movieRouter.route('/:id').get(getSingleMovie);
movieRouter.route('/').post(addMovie);

export default movieRouter;