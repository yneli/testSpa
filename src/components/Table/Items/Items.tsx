import { TableItemsProps } from "../../../types/tableItems";
import style from "./Items.module.scss";
export const Items = ({ name, image_url, logo_url, views, start_date, end_date, category }: TableItemsProps) => {
    return <>
      <div className={style.items}>
        <img width={"60px"} height={"70px"} src={image_url} alt="" />
        <div className={style.text}>
          <h4>{name}</h4>
          <p>{category}</p>
        </div>
        <div className={style.date}>
         <div className={style.watch}>{views}</div>
         <div className={style.startRotation}>{start_date}</div>
         <div className={style.endRotation}>{end_date}</div>
        </div>
        
      </div>
      <div className={style.line}></div>
    </>;
};