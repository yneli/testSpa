import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export const Pagination = ({ onChangePage, recordsPerPage }: {onChangePage?: any, recordsPerPage:any}) => {
  return <> 
    <ReactPaginate 
      className={style.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={recordsPerPage}
      pageCount={3}
      previousLabel="<"/></>;
};