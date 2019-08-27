import React from 'react';
import ReactDOM from 'react-dom';
import SPagination from './lib';
import './style.css';
import './styles/css/custom/style.min.css'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            page: 1,
            size: 10
        }
    }

    handleOnPageChange = (page) => {
        this.setState({page})
    }

    handleOnSizeChange = (size) => {
        this.setState({size, page: 1})  
    }

    render(){
        return(
            <main role="main-content">
                <section role="pagination-section">
                    <SPagination page={this.state.page}
                        sizePerPage={this.state.size}
                        totalSize={100}
                        pagesNextToActivePage={1}
                        onPageChange={this.handleOnPageChange}
                        onSizeChange={this.handleOnSizeChange}/>
                </section>
            </main>
        )
    }
}

ReactDOM.render(
    <App />
, document.getElementById('root'));