[![Build Status](https://travis-ci.org/aniltako/simple-react-pagination-js.svg?branch=master)](https://travis-ci.org/aniltako/simple-react-pagination-js)

# simple-react-pagination-js

Simple with zero dependency Pagination library.

## Installation

```
$ npm install simiple-react-pagination-js
```

## Usage

```js
import React from "react";
import SPagination from "simple-react-pagination-js";
import "simple-react-pagination-js/build/styles.css"; // import css
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
          <SPagination page={this.state.page}
              sizePerPage={this.state.size}
              totalSize={100}
              pagesNextToActivePage={1}
              onPageChange={this.handleOnPageChange}
              onSizeChange={this.handleOnSizeChange}/>
        )
    }
}
```
## Props

| Name                | Type     | Default   | Description                                                          |
| ------------------- | -------- | --------- | -------------------------------------------------------------------- |
| `totalSize`       | Number   |    |  **Required.** Total data size |
| `sizePerPage`       | Number   | 10   |  **Optional.** Number of data to display in each page |
| `page`       | Number   |        | **Required.** Active page number                                     |
| `onChangePage` | Function |           | **Required.** Callback function for page change. |
| `onChangeSize` | Function |           | **Required.** Callback function for size change. |
| `pagesNextToActivePage`       | Number   | 1   |  **Optional.** Number of page to show next to active page check demo |