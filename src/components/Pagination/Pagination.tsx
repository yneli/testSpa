import style from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

export const Pagination = ({ onChangePage }: {onChangePage?: any}) => {
  return <> 
    <ReactPaginate 
      className={style.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"/>
</>;
};