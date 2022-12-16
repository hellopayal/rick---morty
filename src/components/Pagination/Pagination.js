import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({ info, pageNumber, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };
  //console.log(info.pages);
  return( 
  <ReactPaginate 
    className="pagination justify-content-center gap-4 my-4"
    nextLabel="Next"
    previousLabel="Prev"
    previousclassName="btn btn-primary"
    nextclassName="btn btn-primary"
    pageclassName="page-item"
    pageLinkclassName="page-link"
    activeclassName	="active"
    onPageChange	={pageChange}
    pageCount={info?.pages} />
  );

  {/*let next = () => {
    //console.log("next")
    updatePageNumber((x) => x + 1);
  };

  let prev = () => {
    //console.log("prev");
    if (pageNumber > 1) return (
      updatePageNumber((x) => x - 1)
    );
    else {
      pageNumber = { pageNumber };
    }
  }

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">Prev</button>

      <button onClick={next} className="btn btn-primary">Next</button>
    </div>
  );*/}
};

export default Pagination;



