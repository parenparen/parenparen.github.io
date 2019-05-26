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
import perlinSpheres from '../../images/generative_art/perlin-spheres.png';

const thumnailWidth = 230,
  descriptionHeight = 32;

const ThumbnailImg = styled.div`
  font-size: 0;
  height: 33vw;
  width: 100%;
  max-height: ${thumnailWidth}px;
  box-sizing: border-box;

  @media(max-width: ${thumnailWidth * 3}px) {
    max-height: none;
    width: 100%;
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
  padding-bottom: ${descriptionHeight}px;
`;

const ThumbnailContainer = styled.div`
  font-size: 0;
  width: 33.3%;
  box-sizing: border-box;

  @media(max-width: ${thumnailWidth * 3}px) {
    max-width: none;
    width: 50%;
  }

  display: inline-block;

  .placeholder {
    visibility: hidden;
  }
`;

const ThumbnailDescription = styled.div`
  box-sizing: border-box;
  height: ${descriptionHeight}px;
  font-size: 14px;
  width: ${thumnailWidth}px;
  padding: 8px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: ${thumnailWidth * 3}px) {
    width: 100%;
  }
`;


const Container = styled.div`
  max-width: ${thumnailWidth * 3}px;
  margin: auto;
  text-align: left;
  padding-bottom: 32px;
  font-size: 0;

  @media(max-width: ${thumnailWidth * 3}px) {
    padding-bottom: 0;
  }
`

const Page = styled.div`
  width: 100%;
  text-align: center;
  
  h1 {
    font-size: 20px;
    padding: 24px;
  }
`;

function GithubLink({href}) {
  return (
    <a href={href}>
      GitHub
    </a>
  );
}

function Thumbnail({
    image, description = null, githubLink = null, ...props
  }) {
  return (
    <ThumbnailContainer>
      <ThumbnailImg image={image} {...props} onClick={() => {
        window.location = image;
      }} />
      <ThumbnailDescription>
        {description ? <p>{description}</p> : null}
        {githubLink ? githubLink : null}
        {(!description && !githubLink) ? 
          <div className='placeholder'>placeholder</div>: null}
      </ThumbnailDescription>
    </ThumbnailContainer>
  );
}

export default function Generative(props) {
  return (
    <Page>
      <h1>Generative Art</h1>
      <Container>
        <Thumbnail 
          title='perlin-spheres' 
          image={perlinSpheres} 
          description='Perlin Spheres'
          githubLink={
            <GithubLink href='https://github.com/parenparen/typescript-p5-boilerplate/blob/deconstructed-spheres/src/app.ts' />}
          />
        />
        <Thumbnail 
          title='3d-seigaiha' 
          image={seigaiha} 
          description='3d Seigaiha'
          githubLink={
            <GithubLink href='https://github.com/parenparen/typescript-p5-boilerplate/blob/seigaiha/src/app.ts' />}
          />
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
