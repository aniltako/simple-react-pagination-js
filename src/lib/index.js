import * as React from "react";
import '../styles/css/custom/style.min.css';


const pagination = (lastPage, props) => {
    const { page, pagesNextToActivePage } = props;
    let current = page,
        last = lastPage,
        delta = pagesNextToActivePage ? pagesNextToActivePage : 4,
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

const SPagination = (props) => {

    const { totalSize, sizePerPage, page } = props;

    let pageNum = Math.ceil(totalSize / sizePerPage);
    let pageList = pagination(pageNum, props);
    return (
        <footer>
            <div className="per-page">
                <div className="select-wrap">
                    <select onChange={(e) => props.onSizeChange(parseInt(e.target.value))} value={sizePerPage}>
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
                Items per page
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

