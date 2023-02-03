import style from "./Table.module.scss";
import { Items } from "./Items/Items";
import {  useAppSelector } from "../../redux/hook";

export const Table = () => {
  const itemData = useAppSelector((state) => state.products.items);

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
          {itemData?.map((item:any) => <Items key={item.views} {...item} ></Items>)}
        </tbody>
      </table>
    </div>
  </>;
};