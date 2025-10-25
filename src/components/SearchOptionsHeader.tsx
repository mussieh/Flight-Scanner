import planeImg from "../assets/images/flight.jpeg";
import SearchOptions from "./SearchOptions";

const SearchOptionsHeader = () => {
    return (
        <div
            className="min-h-185.25 md:min-h-127.5 relative bg-cover bg-center flex justify-center items-center p-10"
            style={{ backgroundImage: `url(${planeImg})` }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-header-gradient-top to-header-gradient-bottom/80"></div>
            <div className="text-white relative w-full">
                <h1 className="text-4xl md:text-5xl text-center mb-6">
                    Find Your Perfect Flight
                </h1>
                <p className="text-[#DBEAFE] mb-10 text-xl font-medium text-center">
                    Search, compare, and book flights at the best prices
                </p>
                <SearchOptions />
            </div>
        </div>
    );
};

export default SearchOptionsHeader;
