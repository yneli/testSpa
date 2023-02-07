import style from "./Table.module.scss";
import { Items } from "./Items/Items";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getItems } from "../../redux/slices/productsSlice";
import React from "react";

export const Table = ({ indexOfFirstRecord, indexOfLastRecord, input}:{indexOfLastRecord:any, indexOfFirstRecord:any, input:any}) => {
  const itemData = useAppSelector((state) => state.products.items);
  const disptach = useAppDispatch();

  React.useEffect(() => {
    disptach(getItems());
  },[]);

  const currentRecords = itemData?.slice(indexOfFirstRecord, indexOfLastRecord);

  return <>
    <div className={style.table}>
      <table>
        <tbody>
          <tr className={style.tr}>
            <th>Фото</th>
            <th className={style.name}>Название</th>
            <th>Просмотры</th>
            <th>Начало ротации</th>
            <th>Конец ротации</th>
          </tr>
          {currentRecords?.filter((word:any):any => word.name.toLowerCase().includes(input.toLowerCase()))
            .map((item:any) => <Items key={item.views} {...item}></Items>)}
        </tbody>
      </table>
    </div>
  </>;
};