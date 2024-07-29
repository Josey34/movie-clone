import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import LargeMovieCard from "./LargeMovieCard";

const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await GlobalApi.getMovieByGenreId(genreId);
        console.log(response.data.results);
        setMovieList(response.data.results);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchMovies();
  }, [genreId]);

  const slideRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className = {`text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute ${index_ % 3 == 0 ? ' mt-[80px]' : 'mt-[150px]'}`}
        size={50}
      />
      <div
        className="flex overflow-x-auto gap-3 scroll-smooth no-scrollbar py-5 px-3"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? <LargeMovieCard movie={item} /> :<MovieCard key={item.id} movie={item} />}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className = {`text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${index_ % 3 == 0 ? ' mt-[80px]' : 'mt-[150px]'}`}
        size={50}
      />
    </div>
  );
};

export default MovieList;
