import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

const GenreMovieList = () => {
  return (
    <div>
      {GenreList.genreList[0].genres.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index_={index}/>
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
