import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import movie from "../assets/movie.png";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [genre, setGenre] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [noResult, setnoResult] = useState(false);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const apiResponse = await fetch("http://localhost:3000/api/movies", {
        method: "GET",
      });

      if (apiResponse.ok) {
        setLoading(false);
        const jsonData = await apiResponse.json();
        console.log(jsonData);
        
        if (genre === "all" && search == "") {
          setData(jsonData);
        } else {
          const searchedData = jsonData.filter((movie) =>
            movie.title.includes(search),
          );
          if (genre == "all") {
            if(searchedData.length == 0) {
              setnoResult(true);
            }
            setData(searchedData);
          } else {
            const genredData = searchedData.filter((movie) =>
              movie.genre.includes(genre),
            );

            setData(genredData);
          }
        }
      } else {
        throw new Error(
          `Error from server with status code : ${apiResponse.status}`,
        );
      }
    } catch (err) {
      console.log(`Error Occurred : ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [genre, search]);

  const renderMovies = () => {
    if (loading) {
        return <Loading />;
    } else if(noResult) {
      return <div className="max-w-7xl mx-auto text-center my-40">
        <h1 className="text-2xl italic">No Results Found...</h1>
      </div>
    } else {
      return (
        <div className="grid lg:grid-cols-3 items-center justify-center">
          {data.map((element, index) => {
            return (
              <div onClick={() => navigate(`/movies/${element._id}`)} className="flex lg:flex-row flex-col m-10 bg-trasparernt items-start transition-all duration-200 hover:scale-110 p-10 shadow-[0_0_25px_rgba(255,255,255,0.2)] rounded-2xl gap-y-5 lg:gap-y-0 lg:gap-x-5 text-xl justify-between">
                <div className="flex flex-col gap-y-5">
                  <h3 className="text-3xl">{element.title}</h3>

                  <p>⭐ {element.rating}</p>

                  <p>{element.genre.join(", ")}</p>

                  <p>{new Date(element.releaseDate).getFullYear()}</p>
                  <button className="bg-white py-2 text-black shadow-2xl rounded-md w-40">View Details</button>
                </div>
                <img
                  src={movie}
                  alt={element.title}
                  className="lg:w-1/2 w-full rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <Hero setGenre={setGenre} search={search} setSearch={setSearch} />
      {renderMovies()}
    </div>
  );
};

export default LandingPage;
