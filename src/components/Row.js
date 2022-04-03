import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';

const Row = ({ title, fetchUrl }) => {
  const base_url = 'https://image.tmdb.org/t/p/original';
  const { movieData, fetchMovieData } = useFetch();

  useEffect(() => {
    fetchMovieData(fetchUrl);
  }, [fetchMovieData, fetchUrl]);

  return (
    <Container>
      <h4>{title}</h4>
      <Content>
        {movieData &&
          movieData.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/` + movie.id}>
                <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;

  h4 {
    margin-left: 1rem;
    letter-spacing: 0.5px;
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-top: 30px;
  margin-bottom: 40px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrap = styled.div`
  min-width: 15%;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: #fff;
    transform: scaleX(1.05);
  }
`;

export default Row;
