import React from 'react';
import { Pagination } from 'react-bootstrap';
import './components.css'

// this component is a generic pagination comp that will get the following props:
// 1. currentPage - the page that the user have chosen
// 2. totalPages - the total number of pages for all movies display
// 3. callBack function - setCurrentPage() to return the number of page that should be showen 
// 4. limitPages - the total page numbers that will be displayed 
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
        this.props.setCurrentPage(this.props.totalPageNums)
    }

    render() {
        let pagination = [];
        
        for(let i = 1; i < this.props.totalPageNums+1; i++){
            for(let j = (this.props.currentPage - 2); j < this.state.currentPage + 3; j++) {
                pagination.push(
                    <Pagination.Item 
                        key={i}
                        className={`${(i === this.props.currentPage ? 'active' : '')} 
                            ${((i > this.props.currentPage + 2) || (i < this.props.currentPage - 2) ? 'display-none' : '')}`}
                        onClick={this.goToSelectedPage}>
                            {i}
                    </Pagination.Item>
                )
            }
        }
        console.log(this.props.currentPage - 2)
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
                    className={this.props.currentPage === this.props.totalPageNums ? 'disabled' : ''}/>
                <Pagination.Last 
                    onClick={this.goToLastPage}
                    className={this.props.currentPage === this.props.totalPageNums ? 'disabled' : ''}/>
            </Pagination>
        )
    }
  
}

export default Paginator;