import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {
    render() {
        return (
          <div id='home-page'>
              <div id='text-container' className='content'><div>
                  <h2>Derek T. Mueller</h2>
                  <ul>
                    <li>
                      - Software Developer -
                    </li>
                    <li>
                      dtmuelle[at]gmail[dot]com
                    </li>
                    <li>
                      <a href='/media/resume.pdf'>Résumé</a>
                    </li>
                    <li>
                      <a href='https://www.github.com/parenparen?tab=repositories'>github</a>
                    </li>
                    <li>
                      <Link to='/codeSketchbook/1'>Experiments</Link>
                    </li>
                    <li>
                      <a href='/views/2p1kInfo.html'>Two Players, One Keyboard</a>
                    </li>
                  </ul>
                  <img id='logo' src='/images/boardshot.png' />
              </div></div>
          </div>);
    }
};

export default Home;
