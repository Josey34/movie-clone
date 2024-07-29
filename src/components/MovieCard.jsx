
const MovieCard = ({ movie }) => {
    const image_baseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className='flex-shrink-0'>
        <img src={image_baseUrl + movie.poster_path} alt="movie poster" className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out'/>
    </div>
  )
}

export default MovieCard