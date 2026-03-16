import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  overview: {
    type: String
  },

  poster: {
    type: String
  },

  backdrop: {
    type: String
  },

  genre: {
    type: [String]
  },

  releaseDate: {
    type: Date
  },

  rating: {
    type: Number
  },

  voteCount: {
    type: Number
  },

  popularity: {
    type: Number
  },

  language: {
    type: String
  }

}, { timestamps: true });

const movieModel=  mongoose.model("Movie", movieSchema);
export default movieModel;