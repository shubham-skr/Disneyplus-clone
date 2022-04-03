import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import requests from '../requests';
import Row from './Row';

const Home = (props) => {
  return (
    <Container>
      <ImgSlider
        title={requests[0].title}
        fetchUrl={requests[0].url}
      ></ImgSlider>
      <Viewers></Viewers>
      {requests.map((request) => {
        return (
          <Row
            key={request.title}
            title={request.title}
            fetchUrl={request.url}
          ></Row>
        );
      })}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
