import style from "./Table.module.scss";
import { Items } from "./Items/Items";
import ITEM_DATA from "../../db.json";
export const Table = () => {
    return <>
      <div className={style.table}>
        <div className={style.title}>
            <p>Фото</p>
            <p className={style.name}>Название</p>
            <p>Просмотры</p>
            <p>Начало ротации</p>
            <p>Конец ротации</p>
        </div>
        <div className={style.items}>
          {ITEM_DATA?.map(item => <Items {...item} ></Items>)}
        </div>
      </div>
    </>;
};