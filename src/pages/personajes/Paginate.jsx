import ReactPaginate from "react-paginate";

const Paginate = ({ count, onPageChange }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next"
      className="paginate"
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      pageRangeDisplayed={5}
      pageCount={count}
      previousLabel="previous"
      renderOnZeroPageCount={null}
      nextClassName="label-paginate"
      previousClassName="label-paginate"
      activeClassName="active-paginate"
      pageClassName="page-paginate"
    />
  );
};

export default Paginate;
