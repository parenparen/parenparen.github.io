import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                <a href='/media/resume.pdf'>Résumé</a>
              </li>
              <li>
                <a href='https://www.github.com/parenparen?tab=repositories'>GitHub</a>
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
