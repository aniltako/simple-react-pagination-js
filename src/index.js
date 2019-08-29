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
                <section role="pagination-section">
                    <SPagination page={this.state.page}
                        sizePerPage={this.state.size}
                        totalSize={100}
                        pagesNextToActivePage={1}
                        sizePerPageOptions={[10, 25, 50, 100]}
                        onPageChange={this.handleOnPageChange}
                        onSizeChange={this.handleOnSizeChange}/>
                </section>
                <section role="pagination-section">
                    <SPagination page={this.state.page}
                        sizePerPage={this.state.size}
                        totalSize={0}
                        pagesNextToActivePage={1}
                        sizePerPageOptions={[
                            {value: 10, label: "10 Page"},
                            {value: 25, label: "25 Page"},
                            {value: 50, label: "50 Page"},
                            {value: 100, label: "100 Page"},
                        ]}
                        itemsPerPageText="Per Page"
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