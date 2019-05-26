import React from 'react';
import styled from 'styled-components';
import twodperlinaccident0 from '../../images/generative_art/2dperlinaccident0.png';
import twodperlinaccident1 from '../../images/generative_art/2dperlinaccident1.png';
import twodperlinaccident2 from '../../images/generative_art/2dperlinaccident2.png';
import twodperlinaccident3 from '../../images/generative_art/2dperlinaccident3.png';
import twodperlinaccident4 from '../../images/generative_art/2dperlinaccident4.png';
import twodperlinaccident5 from '../../images/generative_art/2dperlinaccident5.png';
import elsinore from '../../images/generative_art/elsinore.png';
import seigaiha from '../../images/generative_art/seigaiha.png';

const thumnailWidth = 230;

const ThumbnailImg = styled.div`
  width: 33.3%;
  height: 33vw;
  max-width: ${thumnailWidth}px;
  max-height: ${thumnailWidth}px;
  box-sizing: border-box;

  @media(max-width: ${thumnailWidth * 3}px) {
    max-width: none;
    max-height: none;
    width: 50%;
    height: 50vw;
  }

  display: inline-block;
  cursor: pointer;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
  background-position: center;

  box-shadow: none;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: inset 0 0 8em rgba(0,0,0,0.5);
  }

  font-size: initial;
`;

const Container = styled.div`
  font-size: 0;
  max-width: ${thumnailWidth * 3}px;
  margin: auto;
  text-align: left;
  padding-bottom: 32px;

  @media(max-width: ${thumnailWidth * 3}px) {
    padding-bottom: 0;
  }
`

const Page = styled.div`
  width: 100%;
  text-align: center;
  
  h2 {
    font-size: 20px;
    padding: 24px;
  }
`;

function Thumbnail({image, ...props}) {
  return (
    <ThumbnailImg image={image} {...props} onClick={() => {
      window.location = image;
    }} />
  );
}

export default function Generative(props) {
  return (
    <Page>
      <h2>Generative Art</h2>
      <Container>
        <Thumbnail title='3d-seigaiha' image={seigaiha} />
        <Thumbnail title='superbloom' image={elsinore} />
        <Thumbnail image={twodperlinaccident0} />
        <Thumbnail image={twodperlinaccident1} />
        <Thumbnail image={twodperlinaccident2} />
        <Thumbnail image={twodperlinaccident3} />
        <Thumbnail image={twodperlinaccident4} />
        <Thumbnail image={twodperlinaccident5} />
      </Container>
    </Page>
  );
}
