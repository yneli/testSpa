import { TableItemsProps } from "../../../types/tableItems";
import style from "./Items.module.scss";
import { Link } from "react-router-dom";
export const Items = ({ name, image_url, logo_url, views, start_date, end_date, category, id }: TableItemsProps) => {
  return (
    <tr className={style.tr}>
      <td><Link to={`/cards/${id}`}><img className={style.photo} src={image_url} width={"60px"} height={"60px"} alt="" /></Link></td>
      <td><Link to={`/cards/${id}`}><p className={style.name}>{name}</p><p className={style.category}>{category}</p></Link></td>
      <td className={style.date}><Link to={`/cards/${id}`}>{views}</Link></td>
      <td className={style.date}><Link to={`/cards/${id}`}>{start_date}</Link></td>
      <td className={style.date}><Link to={`/cards/${id}`}>{end_date}</Link></td>
    </tr>
  );
};