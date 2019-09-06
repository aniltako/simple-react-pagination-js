import React from 'react';
import ReactDOM from 'react-dom';
import SPagination from '../lib';
import '../style.css';
import '../styles/css/custom/style.min.css'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            samplePage: 1,
            sampleSize: 10
        }
    }

    handleOnPageChange = (page) => {
        this.setState({samplePage: page})
    }

    handleOnSizeChange = (size) => {
        this.setState({sampleSize: size, samplePage: 1})  
    }

    render(){
        const {
            samplePage, sampleSize
        } = this.state;

        return(
            <main role="main">
                <section role="header">
                    <div className="info">
                        <h1>Simple React Pagination JS</h1>
                        <span>by Anil Tako</span>
                        <div className="sample">
                            <SPagination page={samplePage}
                                sizePerPage={sampleSize}
                                totalSize={100}
                                pagesNextToActivePage={2}
                                onPageChange={this.handleOnPageChange}
                                onSizeChange={this.handleOnSizeChange}/>
                        </div>
                    </div>
                </section>
                <section role="main-info">
                    <h1>Simple React Pagination JS</h1>
                    <hr/>
                    <p>
                        <a href="https://travis-ci.org/aniltako/simple-react-pagination-js" rel="nofollow">
                            <img src="https://badge.fury.io/js/simple-react-pagination-js.svg" alt="Version Status" />
                        </a>
                        <a href="https://travis-ci.org/aniltako/simple-react-pagination-js" rel="nofollow">
                            <img src="https://camo.githubusercontent.com/7afbf04ebd144795c877a1b4a8ddf0ea1b7748c3/68747470733a2f2f7472617669732d63692e6f72672f616e696c74616b6f2f73696d706c652d72656163742d706167696e6174696f6e2d6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/aniltako/simple-react-pagination-js.svg?branch=master"/>
                        </a>
                    </p>
                    <span>Simple React Component for Pagination.</span>
                    <h3>Installtion</h3>
                    <hr/>
                    <span className="installation">$ npm install simiple-react-pagination-js</span>
                    <h3>Examples</h3>
                    <hr/>

                    <div className="example-list">
                        <div className="example">
                            <div className="code">
                                <pre>
                                    {`<SPagination page={${samplePage}}
                                        sizePerPage={${sampleSize}}
                                        totalSize={100}
                                        pagesNextToActivePage={2}
                                        onPageChange={this.handleOnPageChange}
                                        onSizeChange={this.handleOnSizeChange}/>
                                    `}
                                </pre>
                            </div>
                            <div className="result">
                                <SPagination page={samplePage}
                                    sizePerPage={sampleSize}
                                    totalSize={100}
                                    pagesNextToActivePage={2}
                                    onPageChange={this.handleOnPageChange}
                                    onSizeChange={this.handleOnSizeChange}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById('root'));