
const LargeMovieCard = ({ movie }) => {
  const image_baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="flex-shrink-0 hover:scale-110 transition-all duration-150 ease-in-out">
      <img
        src={image_baseUrl + movie.backdrop_path}
        alt="movie poster"
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[2px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out"
      />
      <h2 className="w-[110px] md:2-[260px] text-white mt-2 font-semibold">{movie.title}</h2>
    </div>
  );
};

export default LargeMovieCard;
