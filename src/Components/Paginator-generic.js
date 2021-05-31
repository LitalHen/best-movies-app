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
    goToSelectedPage = (event) => {
        const selectedPage = event.target.innerText;
        this.props.setCurrentPage(parseInt(selectedPage))
    }

    goToPreviousPage = () => {
        this.props.setCurrentPage(parseInt(this.props.currentPage - 1))
    }

    goToNextPage = () => {
        this.props.setCurrentPage(parseInt(this.props.currentPage + 1))
    }

    goToFirstPage = () => {
        this.props.setCurrentPage(1)
    }

    goToLastPage = () => {
        this.props.setCurrentPage(this.props.totalPages)
    }

    createPaginatorNums = () => {
        // returns an array of numbers [3,4,5,6,7]// array.length between 1-5
        let start;
        if (this.props.currentPage === this.props.totalPages){
            start = this.props.currentPage - 4
        }
        else if(this.props.currentPage === this.props.totalPages - 1){
            start = this.props.currentPage - 3
        } 
        else{
            start = this.props.currentPage - 2
        }

        let end; 
        if (this.props.currentPage === 1){
            end = this.props.currentPage + 5
        }
        else if(this.props.currentPage === 2){
            end = this.props.currentPage + 4
        } 
        else{
            end = this.props.currentPage + 3
        }
    
        const numsArr = []
        for(let i = start; i < end; i++ ){
            if(i < 1){
                continue;
            }
            else if(i > this.props.totalPages) {
                break
            }
            else{
                numsArr.push(i)
            }
        }
        return numsArr;
        
    }

    render() {
        let pagination = [];
        const pageNumsArr = this.createPaginatorNums();
        console.log(pageNumsArr)
        // for(let i = 1; i < this.props.totalPageNums+1; i++){
        //     pagination.push(
            pagination = pageNumsArr.map(pageNum => {
                return (
                    <Pagination.Item 
                        key={pageNum}
                        className={`${(pageNum === this.props.currentPage ? 'active' : '')}`}
                        onClick={this.goToSelectedPage}>
                            {pageNum}
                    </Pagination.Item>
                )
            })
        return (
            <Pagination className="justify-content-center">
                <Pagination.First 
                    onClick={this.goToFirstPage}
                    className={this.props.currentPage === 1 ? 'disabled' : ''}/>
                <Pagination.Prev
                    onClick={this.goToPreviousPage}
                    className={this.props.currentPage === 1 ? 'disabled' : ''} />

                        {pagination}

                <Pagination.Next
                    onClick={this.goToNextPage}
                    className={this.props.currentPage === this.props.totalPages ? 'disabled' : ''}/>
                <Pagination.Last 
                    onClick={this.goToLastPage}
                    className={this.props.currentPage === this.props.totalPages ? 'disabled' : ''}/>
            </Pagination>
        )
    }
  
}

export default Paginator;