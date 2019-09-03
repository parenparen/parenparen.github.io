import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CodeSketchbookPager extends Component {
  getPaginationButton() {
    var buttons = [<Link key={0} className='home' to='/'>Home</Link>];
    for(var i = 0; i < this.props.pageCount; i++) {
      buttons.push(
        <Link 
         onClick={() => {
           this.props.main.current.focus();
         }}
         className={this.props.currentPage === i + 1 ? 'current' : ''}
         key={i + 1} 
         to={this.props.basePath.replace(/\d+$/, '') 
           + (i + 1)}>{i + 1}</Link>);
    }
    return buttons;
  }

  render() {
    return (<nav className='code-sketchbook-pager'>
      {this.getPaginationButton()}  
    </nav>);
  }
};

export default CodeSketchbookPager;
