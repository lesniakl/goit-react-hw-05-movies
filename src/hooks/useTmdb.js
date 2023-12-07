export const BASE_URL = 'https://api.themoviedb.org';
export const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;

export const useTmdb = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
    },
  };

  const getTrending = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/trending/movie/day?language=en-US`,
        options
      );
      const parsed = await response.json();
      const trendingToday = parsed.results.map(result => ({
        id: result.id,
        title: result.title,
      }));
      return [...trendingToday];
    } catch (err) {
      console.log(err);
    }
  };

  const getDetails = async id => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/movie/${id}?language=en-US`,
        options
      );
      const parsed = await response.json();
      const genresMapped = parsed.genres.map(genre => genre.name);
      const details = {
        title: parsed.title,
        release_year: parsed.release_date.slice(0, 4),
        poster: parsed.poster_path
          ? 'https://image.tmdb.org/t/p/w342/' + parsed.poster_path
          : 'https://placehold.co/342x513',
        score: parsed.vote_average !== 0 ? parsed.vote_average : 'No score yet',
        overview: parsed.overview,
        genres: genresMapped,
      };
      return details;
    } catch (err) {
      console.log(err);
    }
  };

  const getCast = async id => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/movie/${id}/credits?language=en-US`,
        options
      );
      const parsed = await response.json();
      const cast = parsed.cast.map(actor => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        photo: actor.profile_path
          ? 'https://image.tmdb.org/t/p/w185' + actor.profile_path
          : 'https://placehold.co/185x278',
      }));
      return [...cast];
    } catch (err) {
      console.log(err);
    }
  };

  const getReviews = async id => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/movie/${id}/reviews?language=en-US&page=1}`,
        options
      );
      const parsed = await response.json();
      const reviews = parsed.results.map(result => ({
        id: result.id,
        author: result.author,
        content: result.content,
        url: result.url,
      }));

      return [...reviews];
    } catch (err) {
      console.log(err);
    }
  };

  const getSearch = async (query, page) => {
    try {
      const response = await fetch(
        `${BASE_URL}/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
        options
      );
      const parsed = await response.json();
      const pageCount = parsed.total_pages;
      const results = parsed.results.map(result => ({
        id: result.id,
        title: result.title,
        release_year: result.release_date.slice(0, 4),
      }));
      return { results, pageCount };
    } catch (err) {
      console.log(err);
    }
  };

  return { getTrending, getDetails, getCast, getReviews, getSearch };
};
