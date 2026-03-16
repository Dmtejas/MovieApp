import TextHeader from "./TextHeader";

const Header = () => {
    return (
        <div className="min-h-16 text-sm lg:text-3xl flex justify-center p-4 px-6 items-center border-2 border-l-0 border-r-0 border-t-0 gap-x-2 lg:gap-x-10">
            {/* <div>
                <h1 className="font-thin italic">MovieFinder</h1>
            </div> */}
            <div className="flex gap-x-6 lg:gap-x-20 ">
                <TextHeader button_name="Home" path="/" />
                <TextHeader button_name="Genres" path="/genre" />
                <TextHeader button_name="Top Rated" path='/top-rated' />
                <TextHeader button_name="Search" path='/search' />
            </div>
            
        </div>
    )
}

export default Header;