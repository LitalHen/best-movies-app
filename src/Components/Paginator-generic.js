import React from 'react';
import { Pagination } from 'react-bootstrap';
import './components.css'

// this component is a generic pagination comp that will get the following props:
// 1. currentPage - the page that the user have chosen
// 2. totalPages - the total number of pages for all movies display
// 3. callBack function - setCurrentPage() to return the number of page that should be showen 
class Paginator extends React.Component {
    constructor(props){
        super(props)
    }

    //goToSelectedPage is a callback func that returns the selected page to the patrent
    //setCurrentPage is located at the parent, get the selected page and changes the state of the current page
    goToSelectedPage = (pageNum) => {
        this.props.setCurrentPage(parseInt(pageNum))
    }

    goToPreviousPage = () => {
        const current = this.props.currentPage;
        if(current===1) {
            return
        }
        else {
            this.props.setCurrentPage(parseInt(current - 1))
        }
    }

    goToNextPage = () => {
        const current = this.props.currentPage;
        if(current===this.props.totalPages){
            return
        }
        else {
            this.props.setCurrentPage(parseInt(this.props.currentPage + 1))
        }
    }

    goToFirstPage = () => {
        this.props.setCurrentPage(1)
    }

    goToLastPage = () => {
        this.props.setCurrentPage(this.props.totalPages)
    }

    createPaginatorNums = () => {
        const numsArr = [];
        const currentPage = this.props.currentPage;
        const totalPages = this.props.totalPages
        let count = 0;
        let pageToTest = (totalPages - currentPage > 0) ? currentPage - 1: currentPage - 2;
        while(count < 3 && pageToTest <= totalPages){
            if(pageToTest > 0) {
                count++;
                numsArr.push(pageToTest);
            }
            pageToTest++;
        }
        return numsArr;
    }

    render() {
        const disableIfFirst = this.props.currentPage === 1 ? 'disabled' : '';
        const disableIfLast = this.props.currentPage === this.props.totalPages ? 'disabled' : '';
        let pagination = [];
        const pageNumsArr = this.createPaginatorNums();
            pagination = pageNumsArr.map(pageNum => {
                return (
                    <Pagination.Item 
                        key={pageNum}
                        className={`${(pageNum === this.props.currentPage ? 'active' : '')}`}
                        onClick={() => this.goToSelectedPage(pageNum)}>
                            {pageNum}
                    </Pagination.Item>
                )
            })
        return (
            <Pagination className="justify-content-center">
                <Pagination.First 
                    onClick={this.goToFirstPage}
                    className={disableIfFirst}/>
                <Pagination.Prev
                    onClick={this.goToPreviousPage}
                    className={disableIfFirst} />

                        {pagination}

                <Pagination.Next
                    onClick={this.goToNextPage}
                    className={disableIfLast}/>
                <Pagination.Last 
                    onClick={this.goToLastPage}
                    className={disableIfLast}/>
            </Pagination>
        )
    }
  
}

export default Paginator;