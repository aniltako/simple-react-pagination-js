import * as React from "react";

const pagination = (lastPage, props) => {
    const { page, pagesNextToActivePage } = props;
    let current = page,
        last = lastPage,
        delta = pagesNextToActivePage,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l=undefined,
        isDotsIncludes = false;

        for (let i = 1; i <= last; i++) {
            if (i === 1 || i === last || i >= left && i < right) {
                range.push(i)
            }
        }
  
        for (let i of range ) {
            
            if (l && i - l !== 1) {
                rangeWithDots.push(
                    <li className="ellipsis" key={isDotsIncludes ? -1 : 0 }>
                        . . .
                    </li>
                );
                isDotsIncludes = true;
            }
            rangeWithDots.push(
                <li className={page === i ? "page-active" : ""} key={i}>
                    <a onClick={(e) => {e.preventDefault(); props.onPageChange(i)} }>
                        {i}
                    </a>
                </li>
            );
            l = i;
        }
    return rangeWithDots;
}

const SelectOptions = (props) => {
    const { sizePerPage, sizePerPageOptions } = props;
    const optionsList = sizePerPageOptions.map( (option, index) => {
        if ( typeof option === 'number' ) {
            return <option key={index} value={option}>{option}</option>
        } else if ( typeof option === 'object' ) {
            return <option key={index} value={option.value}>{option.label}</option>
        }
    })
    
    return (
        <select onChange={(e) => props.onSizeChange(parseInt(e.target.value))} value={sizePerPage}>
            {optionsList}
        </select>
    )
}

const SPagination = (props) => {
    const { totalSize, sizePerPage, page, itemsPerPageText } = props;
    let pageNum = Math.ceil(totalSize / sizePerPage);
    let pageList = pagination(pageNum, props);
    return (
        <footer>
            <div className="per-page">
                <div className="select-wrap">
                   <SelectOptions {...props}/>
                </div>
                {itemsPerPageText}
            </div>
            <div className="next-prev">
                <ul className="clearfix">
                    <li className={page === 1 ? "prev disabled" : "prev"}>
                        <a onClick={(e) => { e.preventDefault(); props.onPageChange(page - 1);} }>
                            Prev
                        </a>
                    </li>
                    { pageList }
                    <li className={page === pageNum ? "next disabled" : "next"}>
                        <a onClick={(e) => { e.preventDefault(); props.onPageChange(page + 1)} }>
                            Next
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default SPagination;

SPagination.defaultProps = {
    page: 1,
    sizePerPage: 10,
    totalSize: 0,
    pagesNextToActivePage: 1,
    sizePerPageOptions: [10, 25, 50, 100],
    itemsPerPageText: 'Items per page'
};

