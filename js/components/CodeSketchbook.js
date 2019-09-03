import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import CodeSketchbookPager from './CodeSketchbookPager';

class CodeSketchbook extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 8;
  }

  getPageNumber() {
    return parseInt(this.props.location.pathname.split('/').pop(), 10);
  }

  getPages() {
    return [
      {
        to: '/generative',
        title: 'Generative Art',
      },
      {
        href: '/views/fretBoardDiagrams.html',
        title: 'Fret Board Diagrams',
        github: 'https://github.com/parenparen/guitar_chord_diagrams'
      },
      {
        to: '/perception',
        title: 'Geometric Book Cover Design'
      },
      {
        href: '/views/exquisiteCorpse.html',
        title: 'Automatic Exquisite Corpse',
        github: 'https://github.com/parenparen/exquisiteCorpse'
      },
      {
        href: '/views/kMeans.html',
        title: 'K-means',
        github: 'https://github.com/parenparen/k-means-Visualization'
      },
      {
        href: '/views/dotGame.html',
        title: 'Feedforward Neural Network',
        github: 'https://github.com/parenparen/neuralNetworkVisualization'
      },
      {
        href: '/views/logisticRegression.html',
        title: 'Logistic Regression',
        github: 'https://github.com/parenparen/logisticRegressionCharts'
      },
      {
        href: '/views/grayCodeScales.html',
        title: 'Gray Code',
        github: 'https://github.com/parenparen/grayCodeMusicalScales'
      },
      {
        href: '/views/multivariateLR.html',
        title: 'Multivariate Linear Regression',
        github: 'https://github.com/parenparen/multivariateLRVisualization'
      },
      {
        href: '/views/quicksortVisualization.html',
        title: 'Quicksort',
        github: 'https://github.com/parenparen/quicksortVisualization'
      },
      {
        href: '/views/heapsortSVG.html',
        title: 'Heapsort',
        github: 'https://github.com/parenparen/heapsortSVG'
      },
      {
        href: '/views/hanoiSVG.html',
        title: 'Towers of Hanoi',
        github: 'https://github.com/parenparen/hanoiSVG'
      },
      {
        href: '/views/npc.html',
        title: 'n-Player Chess',
        github: 'https://github.com/parenparen/nplayerchess'
      }
    ];
  }

  getCurrentPages() { 
    var pageSize = this.pageSize;
    var start = (this.getPageNumber() - 1) * pageSize;
    var end = start + pageSize;
    return _.extend(
        (new Array(this.pageSize)).fill(null), 
        this.getPages().slice(start, end)
      ).map((page, i) => {
        return (<li key={i} 
          className='sketchbook-row'>{
          page ? 
            [
              page.href ? 
                <a key='external' href={page.href}>{page.title}</a> :
                <Link key='internal' to={page.to}>{page.title}</Link>,
              page.github ?
                <a key='github' className="github fa fa-github" 
                 aria-label='GitHub repository'
                 href={page.github} /> :
                null
            ] :
            <a style={{visibility: 'hidden'}}>placeholder</a>
        }</li>);
    });
  }

  render() {
    return (<div>
      <div id='code-sketchbook'>

      <div id='text-container'><div className='text-container-inner'>
        <h1>Code Sketchbook</h1>
        <ul>
          {this.getCurrentPages()}
        </ul>
        <CodeSketchbookPager 
         basePath={this.props.location.pathname}
         currentPage={this.getPageNumber()}
         pageCount={this.getPages().length / this.pageSize} />
      </div></div>
      </div>
    </div>);
  }
};

export default withRouter(CodeSketchbook);
