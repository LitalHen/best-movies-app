import React from 'react';
import { Pagination } from 'react-bootstrap';


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
            pagination.push(
                <Pagination.Item 
                    className={i === this.props.currentPage ? 'active' : ''}
                    onClick={this.goToSelectedPage}>
                        {i}
                </Pagination.Item>
            )
        }

        return (
            <Pagination className="justify-content-center">
                <Pagination.First 
                    onClick={this.goToFirstPage}/>
                <Pagination.Prev
                    onClick={this.goToPreviousPage}
                    className={this.props.currentPage === 1 ? 'disabled' : ''} />

                        {pagination}

                <Pagination.Next
                    onClick={this.goToNextPage}
                    className={this.props.currentPage === this.props.totalPageNums ? 'disabled' : ''}/>
                <Pagination.Last 
                    onClick={this.goToLastPage}/>
            </Pagination>
        )
    }
  
}

export default Paginator;