import { useState } from "react";
import movieLogo from '../assets/movieLogo.png'

const Hero = ({setGenre, search, setSearch}) => {

    const handleGenreChange = (event) => {
        const { name, value } = event.target;
        setGenre(value);
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    
    return (
        <div className="min-h-[100px] max-w-sm lg:max-w-7xl mx-auto my-20 font-semibold flex flex-col items-center justify-center gap-y-5">
            {/* <img className="w-1/2" src={movieLogo} alt="Logo" /> */}
            <h1 className=" text-center text-5xl lg:text-7xl">Discover Your Next Favorite Movie</h1>

            <p className="text-2xl font-thin italic text-center lg:text-start">Browse thousands of movies. Search by title, explore by genre, or discover top-rated films.</p>

            <input className="w-2/3 py-3 bg-transparent border-2 px-4 mt-5 rounded-xl placeholder:text-xl text-xl" type="text" placeholder="🔍Search movies by title..." name="search" onChange={handleSearchChange} value={search}  />

            <div className="w-full flex justify-center mt-10 gap-x-6 items-center text-lg font-serif font-thin">
                <h1 className="text-2xl">Browse by Genre - </h1>
                <select className="text-black border-2 rounded-2xl w-1/3 py-2 px-2 text-lg bg-white shadow-2xl " name="genre" id="genre" onChange={handleGenreChange} >
                    <option value="all">Select Here</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci - Fi</option>
                    <option value="Romance">Romance</option>
                </select>
            </div>
            
        </div>
    )
}

export default Hero;