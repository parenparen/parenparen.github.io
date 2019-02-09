import React, { Component } from 'react';
import { Link } from 'react-router'

class Home extends Component {
    render() {
        return (
          <div id='home-page'>
              <div id='text-container' className='content'><div>
                  <h2>Derek T. Mueller</h2>
                  <p>- Web Programmer -</p>
                  <p>dtmuelle[at]gmail[dot]com</p>
                  <div><a href='/media/resume.pdf'>Résumé</a></div>
                  <div><a href='https://www.github.com/parenparen?tab=repositories'>
                    www.github.com/parenparen</a></div>
                  <div><Link to='/codeSketchbook'>
                      Code Sketchbook
                  </Link></div>
                  <div><a href='/2p1kInfo'>Two Players, One Keyboard</a></div>
                  <img id='logo' src='/images/boardshot.png' />
              </div></div>
          </div>);
    }
};

export default Home;
