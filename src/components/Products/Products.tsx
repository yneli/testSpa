import style from "./Products.module.scss";
import { SortButton } from "../SortButtom/SortButton";
import { PRODUCT_SORT_BTN } from "./constants";
import React from "react";
import { Table } from "../Table/Table";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchItem } from "../../redux/slices/productsSlice";
import { Pagination } from "../Pagination/Pagination";
import { Loading } from "../Loading/Loading";


export const Products = () => {
  const [ target, setTarget ] = React.useState(".");
  const [ input, setInput ] = React.useState(""); 
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const status = useAppSelector((state) => state.products.status);
   
  const disptach = useAppDispatch();
  React.useEffect(() => {
    disptach(searchItem({input, currentPage}));
},[input, currentPage]);
  return <div className={style.container}>
    <div className={style.products}>
      <div className={style.items}>
        <h1>Карточка контента</h1>
        <div className={style.sort}>
          <div className={style.sortby}>
            <h3>Сортировать: </h3>
            {PRODUCT_SORT_BTN?.map((items, index) => <SortButton currentPage={currentPage} target={setTarget} 
              key={index} {...items} active={items.path === target}></SortButton>)}</div>
          <div className={style.search}>
            <img className={style.loap} src="./assets/loap.svg" alt="" />
            <input  
              value={input} 
              onChange={(e) => setInput(e.target.value)} placeholder="Поиск..." type="text" />
            {input? <><img onClick={() => setInput("")} className={style.clear} src="../assets/xx.svg" alt="" /></> : ""}</div>  
        </div>
        <div>
          <Pagination onChangePage={(num:number) => setCurrentPage(num)}/></div>
        <div className={style.table}>
          {status === "loading"? <><div>Loading</div><Loading/></>:<Table/>}
        </div></div>
    </div></div>;
};