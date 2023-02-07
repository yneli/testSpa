import { ProductItemsProps } from "../../types/product";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router";
import style from "./SortButton.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { sorted } from "../../redux/slices/productsSlice";
import React from "react";

export const SortButton = ({ btnName, active, path, target, action, currentPage }:ProductItemsProps & 
  { active?: boolean, target?: any, currentPage?: number}) => {
  const disptach = useAppDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const status = useAppSelector((state) => state.products.status);
  
  const btnSortHandle = () => {
    disptach(sorted(action));
    target(action);
    navigate(`/${action}`);
  };
  // React.useEffect(() => {
  //   target(param.id);
  // },[status]);

  return <>
    <button onClick={btnSortHandle} className={clsx(style.btn, {
      [style.active]: active,
    })}>{btnName}</button>
  </>;
};