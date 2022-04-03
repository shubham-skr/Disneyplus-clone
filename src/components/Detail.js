import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hook/useFetch';

const Detail = (props) => {
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const { id } = useParams();
  const { movieData, fetchMovieData } = useFetch();

  const fetchUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const baseUrl = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    fetchMovieData(fetchUrl);
  }, [fetchMovieData, fetchUrl]);
  return (
    <Container>
      {movieData && (
        <>
          <Background>
            <img
              alt={movieData.title}
              src={`${baseUrl}${movieData.backdrop_path}`}
            />
          </Background>

          <ImageTitle>
            <p>{movieData.title}</p>
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt='' />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src='/images/play-icon-white.png' alt='' />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt='' />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>
              {movieData.release_date}&nbsp;&nbsp; <span>•</span> &nbsp;&nbsp;
              {movieData.runtime} min&nbsp;&nbsp; <span>•</span> &nbsp;&nbsp;
              {movieData.genres.map((gen) => gen.name).join(', ')}
            </SubTitle>
            <Description>{movieData.overview}</Description>
          </ContentMeta>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.5;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  line-height: 1;
  width: 50%;
  font-size: 5rem;
  font-weight: bold;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`;

const Player = styled.button`
  font-size: 1rem;
  font-weight: bold;
  margin: 0px 22px 0px 0px;
  padding: 0px 20px;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(255, 255, 255);
  border: none;
  color: rgb(0, 0, 0);
  transition: all 250ms ease-out;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(220, 220, 220);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  transition: all 250ms ease-out;

  &:hover {
    background: #000;
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0);
  border-radius: 50%;
  border: 3px solid white;
  cursor: pointer;

  span {
    background-color: rgb(255, 255, 255);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;

const SubTitle = styled.div`
  color: rgb(255, 255, 255);
  font-size: 15px;
  min-height: 20px;

  span {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(255, 255, 255);
  margin-bottom: 50px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;

/*

<>
          <Background>
            <img
              alt={movieData.title}
              src={`${baseUrl}${movieData.backdrop_path}`}
            />
          </Background>

          <ImageTitle>
            <p>{movieData.title}</p>
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src='/images/play-icon-black.png' alt='' />
                <span>Play</span>
              </Player>
              <Trailer>
                <img src='/images/play-icon-white.png' alt='' />
                <span>Trailer</span>
              </Trailer>
              <AddList>
                <span />
                <span />
              </AddList>
              <GroupWatch>
                <div>
                  <img src='/images/group-icon.png' alt='' />
                </div>
              </GroupWatch>
            </Controls>
            <SubTitle>
              {movieData.release_date} • {movieData.vote_average} •{' '}
              {movieData.runtime} •{' '}
              {movieData.genre.map((gen) => gen.name).join(', ')}{' '}
            </SubTitle>
            <Description>{movieData.overview}</Description>
          </ContentMeta>
        </>

        */
