import style from "./Products.module.scss";
import { SortButton } from "../SortButtom/SortButton";
import { PRODUCT_SORT_BTN } from "./constants";
import React from "react";
import { Table } from "../Table/Table";

export const Products = () => {
    const [ target, setTarget ] = React.useState(".");
    
    return <div className={style.container}>
      <div className={style.products}>
        <div className={style.items}>
            <h1>Карточка контента</h1>
            <div className={style.sort}>
                <div className={style.sortby}>
                    <h3>Сортировать: </h3>
                    {PRODUCT_SORT_BTN?.map((items, index) => <SortButton target={setTarget} key={index} {...items} active={items.path === target}></SortButton>)}
                </div>
                <div className={style.search}>
                    <img src="./assets/loap.svg" alt="" />
                    <input placeholder="Поиск..." type="text" />
                </div>
            </div>
            <div>pagination</div>
            <div className={style.table}>
                <Table></Table>
            </div>
        </div>
    </div>
    </div>;
};