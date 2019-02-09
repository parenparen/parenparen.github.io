import React, { Component } from 'react';
import { Link } from 'react-router'
import CodeSketchbookPager from './CodeSketchbookPager';

class CodeSketchbook extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 8;
  }

  getPageNumber() {
    return this.props.location.hash ? 
      parseInt(this.props.location.hash.replace(/^#/, ''), 10) : 1;
  }

  getPages() {
    return [
      {
        href: '/fretBoardDiagrams',
        title: 'Fret Board Diagrams',
        github: 'https://github.com/parenparen/guitar_chord_diagrams'
      },
      {
        to: '/perception',
        title: 'Geometric Book Cover Design'
      },
      {
        href: '/exquisiteCorpse',
        title: 'Automatic Exquisite Corpse',
        github: 'https://github.com/parenparen/exquisiteCorpse'
      },
      {
        href: '/kMeansVisualization',
        title: 'K-means',
        github: 'https://github.com/parenparen/k-means-Visualization'
      },
      {
        href: '/nnVisualization',
        title: 'Feedforward Neural Network',
        github: 'https://github.com/parenparen/neuralNetworkVisualization'
      },
      {
        href: '/logisticRegressionCharts',
        title: 'Logistic Regression',
        github: 'https://github.com/parenparen/logisticRegressionCharts'
      },
      {
        href: '/grayCodeMusicalScales',
        title: 'Gray Code',
        github: 'https://github.com/parenparen/grayCodeMusicalScales'
      },
      {
        href: '/multivariateLR',
        title: 'Multivariate Linear Regression',
        github: 'https://github.com/parenparen/multivariateLRVisualization'
      },
      {
        href: '/quicksortVisualization',
        title: 'Quicksort',
        github: 'https://github.com/parenparen/quicksortVisualization'
      },
      {
        href: '/heapsortSVG',
        title: 'Heapsort',
        github: 'https://github.com/parenparen/heapsortSVG'
      },
      {
        href: '/hanoiSVG',
        title: 'Towers of Hanoi',
        github: 'https://github.com/parenparen/hanoiSVG'
      },
      {
        href: '/nPlayerChess',
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
        return (<div key={i} 
          className='sketchbook-row'>{
          page ? 
            [
              page.href ? 
                <a key='external' href={page.href}>{page.title}</a> :
                <Link key='internal' to={page.to}>{page.title}</Link>,
              page.github ?
                <a key='github' className="github fa fa-github" 
                 href={page.github} /> :
                null
            ] :
            <a style={{visibility: 'hidden'}}>placeholder</a>
        }</div>);
    });
  }

  render() {
    return (<div>
      <div id='code-sketchbook'>

      <div id='text-container'><div>
        <h2>Code Sketchbook</h2>
        {this.getCurrentPages()}
        <CodeSketchbookPager 
         basePath={this.props.route.path}
         currentPage={this.getPageNumber()}
         pageCount={this.getPages().length / this.pageSize} />
      </div></div>
      </div>
    </div>);
  }
};

export default CodeSketchbook;
