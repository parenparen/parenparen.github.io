import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resume from '../../media/resume.pdf';

class Home extends Component {
  render() {
    return (
      <main id='home-page'>
        <div id='text-container' className='content'>
          <div className='text-container-inner'>
            <h1>Derek T. Mueller</h1>
            <p className='job-title'>
              - Software Developer -
            </p>
            <ul>
              <li>
                dtmuelle@gmail.com
              </li>
              <li>
                <a href={resume}>Résumé</a>
              </li>
              <li>
                <a href='https://www.github.com/derektmueller?tab=repositories'>GitHub</a>
              </li>
              <li>
                <Link to='/codeSketchbook/1'>Code Sketchbook</Link>
              </li>
              <li>
                <a href='/views/2p1kInfo.html'>Two Players, One Keyboard</a>
              </li>
            </ul>
            <img id='logo' src='/images/boardshot.png' alt='generative art' />
          </div>
        </div>
      </main>);
  }
};

export default Home;
