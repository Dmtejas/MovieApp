import { useNavigate } from "react-router-dom";

const TextHeader = ({button_name, path}) => {
    
    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate(path)} className=" text-lg lg:text-2xl hover:scale-125 transition-all duration-300">
            {button_name}
        </button>
    )
}

export default TextHeader;