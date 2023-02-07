import { useAppDispatch, useAppSelector } from "../../redux/hook";
import React from "react";
import style from "./Cards.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { getItems } from "../../redux/slices/productsSlice";

export const Cards = () => {
  const location = useParams();
  const disptach = useAppDispatch();
  const data = useAppSelector((state) => state.products.items);
  
  let navigate = useNavigate();
  const onClickLocation = () => {
    navigate("/");
  };
  const productData = data?.find((el:any, index:any) => {
    return el.id === location.id;
  });
  React.useEffect(() => {
    disptach(getItems());
  },[]);

  
  return <>
    <div className={style.container}>
      <div className={style.cards}>
        <div className={style.back}>
          <img src="" alt="" />
          <button onClick={onClickLocation} className={style.back}>{"<Назад"}</button>
        </div>
        <div className={style.items}>
          <div className={style.discount}>
            <div className={style.arrow}>
              {productData?.discount === "0"? "" : <><p>{productData?.discount}%</p>
                <img src="../assets/arrow.svg" alt="" /></>}</div>
            <img width={"160px"} height={"100px"} src={productData?.logo_url} alt="" /></div>
          <div className={style.about}>
            <img width={"300px"} height={"415px"} src={productData?.image_url} alt="" />
            <div className={style.text}>
              <h2>{productData?.name}</h2>
              <div className={style.prices}>
                <div className={style.price}>
                  <div className={style.item}>
                    <p className={clsx(style.oldprice, {
                      [style.active]: productData?.new_price,
                    })}>{productData?.old_price}</p>
                    <img src="../assets/rub.svg" alt="" />
                  </div>{productData?.new_price? <> <p className={style.totalprice}>Старая цена</p></> : ""}
                </div>
                {productData?.new_price?  <div className={style.price}>
                  <div className={style.item}>
                    <p>{productData?.new_price}</p>
                    <img src="../assets/rub.svg" alt="" />
                  </div>
                  <p className={style.totalprice}>Новая цена</p>
                </div>: ""}
              </div>
            </div>
          </div>
        </div>
        <div className={style.date}>
          <div className={style.promotion}>
            {productData?.new_price ? <><p>{`Акция действует с ${productData?.start_date} по ${productData?.end_date}`}</p></>: "" }
          </div>
        </div>
      </div>
    </div>;
  </>;
};