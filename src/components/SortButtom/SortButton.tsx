import { ProductItemsProps } from "../../types/product";
import clsx from "clsx";
import { useNavigate } from "react-router";
import style from "./SortButton.module.scss";

export const SortButton = ({ btnName, active, path, target }:ProductItemsProps & { active?: boolean, target?: any, }) => {
  const navigate = useNavigate();
  const btnSortHandle = () => {
    target(path)
    navigate(path)
  }
    return <>
      <button onClick={btnSortHandle} className={clsx(style.btn, {
        [style.active]: active
      })}>{btnName}</button>
    </>;
};