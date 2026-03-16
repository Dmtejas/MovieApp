import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movie from "../assets/movie.png";
import Header from "../components/Header";

const IndividualMovies = () => {
  const [singleMovie, setSingleMovie] = useState({});

    const navigate = useNavigate();

  const id = useParams();
  console.log(id);

  const fetchSingleMovie = async () => {
    try {
      const apiResponse = await fetch(
        `http://localhost:3000/api/movies/${id.id}`,
        {
          method: "GET",
        },
      );

      if (!apiResponse.ok) {
        throw new Error(`Server has not responded`);
      } else {
        const jsonData = await apiResponse.json();
        console.log(jsonData);
        setSingleMovie(jsonData);
      }
    } catch (err) {
      console.log(`Error occurred : ${err}`);
    }
  };

  useEffect(() => {
    fetchSingleMovie();
  }, [id]);

  return (
    <div>
      <Header />
      <div className=" flex flex-col p-10 justify-center">
        <img src={movie} alt="" className="w-full h-[600px] rounded-3xl" />
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className=" mx-auto flex flex-col gap-y-5 mt-5 rounded-2xl p-5 lg:p-10 w-full">
            <h1 className="text-7xl font-serif font-bold">
              {singleMovie.title}
            </h1>
            <h1 className="text-xl font-sans italic">{singleMovie.overview}</h1>
            <div className="flex gap-x-10 text-2xl italic">
              <h1 className="">Language : {singleMovie.language}</h1>
              <h1>Ratings : {singleMovie.rating} / 10</h1>
            </div>
          </div>
          <div className="w-full p-5 flex flex-col gap-y-6 mt-10">
            <button onClick={() => navigate('/watch-movie')} className="text-xl bg-white text-black px-16 py-3 lg:py-3 h-1/4 rounded-lg shadow-2xl transition-all duration-150 hover:scale-105 w-full lg:w-2/3">
              Watch Now
            </button>
            <button onClick={() => navigate('/')} className="text-xl bg-white text-black h-1/4 py-3 px-16 rounded-lg shadow-2xl transition-all duration-150 hover:scale-105 w-full lg:w-2/3">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualMovies;
