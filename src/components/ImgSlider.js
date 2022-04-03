import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useFetch from '../hook/useFetch';
import { useEffect } from 'react';

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
              <p>{movie.title}</p>
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
  margin-bottom: 50px;

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
`;

export default ImgSlider;
