import { ProductItemsProps } from "../../types/product";
import clsx from "clsx";
import { useNavigate } from "react-router";
import style from "./SortButton.module.scss";
import { useAppDispatch } from "../../redux/hook";
import { sorted } from "../../redux/slices/productsSlice";

export const SortButton = ({ btnName, active, path, target, action, currentPage }:ProductItemsProps & 
  { active?: boolean, target?: any, currentPage?: number}) => {
  const disptach = useAppDispatch();
  const navigate = useNavigate();
  const btnSortHandle = () => {
    disptach(sorted({action, currentPage}));
    target(path)
    navigate(`/${path}`);
  };
  return <>
    <button onClick={btnSortHandle} className={clsx(style.btn, {
      [style.active]: active,
    })}>{btnName}</button>
  </>;
};