import React from 'react';
import styled from 'styled-components';
import twodperlinaccident0 from '../../images/generative_art/2dperlinaccident0.png';
import twodperlinaccident1 from '../../images/generative_art/2dperlinaccident1.png';
import twodperlinaccident2 from '../../images/generative_art/2dperlinaccident2.png';
import twodperlinaccident3 from '../../images/generative_art/2dperlinaccident3.png';
import twodperlinaccident4 from '../../images/generative_art/2dperlinaccident4.png';
import twodperlinaccident5 from '../../images/generative_art/2dperlinaccident5.png';

const ThumbnailImg = styled.div`
  flex-grow: 1;
  flex-basis: 124px;
  flex-shrink: 0;
  cursor: pointer;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
  background-size: center;

  box-shadow: none;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: inset 0 0 8em rgba(0,0,0,0.5);
  }

  &::before {
    content:'';
    float:left;
    padding-top:100%;
  }
`;

const Container = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  max-width: 1100px;
  margin: auto;
`

const Page = styled.div`
  width: 100%;
  text-align: center;
  
  h2 {
    font-size: 20px;
    padding: 24px;
  }
`;

function Thumbnail(props) {
  return (
    <ThumbnailImg image={props.image} onClick={() => {
      window.location = props.image;
    }} />
  );
}

export default function Generative(props) {
  return (
    <Page>
      <h2>Generative Art</h2>
      <Container>
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
