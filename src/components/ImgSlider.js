import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useFetch from '../hook/useFetch';
import { useEffect } from 'react';

const genre = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Horror',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'SciFi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const ImgSlider = ({ title, fetchUrl }) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { movieData, fetchMovieData } = useFetch();

  useEffect(() => {
    fetchMovieData(fetchUrl);
  }, [fetchMovieData, fetchUrl]);

  return (
    <Carousel {...settings}>
      {movieData &&
        movieData.splice(0, 5).map((movie) => {
          return (
            <Wrap key={movie.id}>
              <Description>
                <h1>{movie.title}</h1>
                <p>IMDB - {movie.vote_average}</p>
                <p>Genre - {genre[movie.genre_ids[0]]}</p>
                <p>Popularity - {movie.popularity}</p>
                <p>Vote Count - {movie.vote_count}</p>
              </Description>
              <img
                src={`${base_url}${movie.backdrop_path}`}
                alt={movie.title}
              />
            </Wrap>
          );
        })}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-bottom: 30px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    display: none;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -5%;
  }

  .slick-next {
    right: -5%;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  height: calc(100vh - 70px);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Description = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  max-width: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;

  h1 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 1.5rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default ImgSlider;
/*

p {
  position: absolute;
  top: 20%;
  left: 5%;
  font-size: 15vh;
  max-width: 50%;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  color: white;
  padding: 10px;
}

*/
