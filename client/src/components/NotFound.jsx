import { useNavigate } from "react-router-dom";
import Header from "./Header";

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen">
        <Header />
      <div className="max-w-sm lg:max-w-6xl mx-auto text-center my-52">
        <h1 className="lg:text-9xl text-3xl font-black">OOPS!</h1>
        <p className="text-2xl mt-10">
          The page you are looking for is either under development or not found
        </p>
        <button onClick={() => navigate('/')} className="mt-10 text-xl bg-white text-black py-3 px-20 transition-all duration-150 hover:scale-105 shadow-2xl rounded-xl">Back to Home</button>
      </div>
    </div>
  );
};

export default NotFound;
