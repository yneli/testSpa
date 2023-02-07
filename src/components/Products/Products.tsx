import style from "./Products.module.scss";
import { SortButton } from "../SortButtom/SortButton";
import { PRODUCT_SORT_BTN } from "./constants";
import React from "react";
import { Table } from "../Table/Table";
import { Pagination } from "../Pagination/Pagination";

export const Products = () => {
  const [ target, setTarget ] = React.useState("name");
  const [ input, setInput ] = React.useState(""); 
  const [ currentPage, setCurrentPage ] = React.useState(1);
  const [recordsPerPage] = React.useState(5);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  return <div className={style.container}>
    <div className={style.products}>
      <div className={style.items}>
        <h1>Карточка контента</h1>
        <div className={style.sort}>
          <div className={style.sortby}>
            <h3>Сортировать: </h3>
            {PRODUCT_SORT_BTN?.map((items, index) => <SortButton currentPage={currentPage} target={setTarget} 
              key={index} {...items} active={items.action === target}></SortButton>)}</div>
          <div className={style.search}>
            <img className={style.loap} src="./assets/loap.svg" alt="" />
            <input  
              value={input} 
              onChange={(e) => setInput(e.target.value)} placeholder="Поиск..." type="text" />
            {input? <><img onClick={() => setInput("")} className={style.clear} src="../assets/xx.svg" alt="" /></> : ""}</div>  
        </div>
        <div>
          <Pagination recordsPerPage={recordsPerPage} onChangePage={(num:number) => setCurrentPage(num)}/></div>
        <div className={style.table}>
          <Table input={input} indexOfLastRecord={indexOfLastRecord} indexOfFirstRecord={indexOfFirstRecord}/>
        </div></div>
    </div></div>;
};