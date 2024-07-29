import { useEffect, useRef, useState } from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import GlobalApi from "../services/GlobalApi";

const image_baseUrl = "https://image.tmdb.org/t/p/original";

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef()
  const screenWidth = window.innerWidth;

  useEffect(() => {
    GlobalApi.getPopularMovies.then((res) => {
      // console.log(res.data.results);
      setMovieList(res.data.results);
    });
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110
  }
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110
  }
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white absolute mx-4 mt-[150px] cursor-pointer"
        size={50}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white absolute mx-4 mt-[150px] cursor-pointer right-0"
        size={50}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div className="flex overflow-x-auto w-full px-16 py-4 no-scrollbar scroll-smooth" ref={elementRef}>
        {movieList.map((item) => (
          <div key={item.id} className="flex-shrink-0 ">
            <img
              src={image_baseUrl + item.backdrop_path}
              alt="movie poster"
              className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 cursor-pointer transition-all duration-100 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
