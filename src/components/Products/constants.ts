import { ProductItemsProps } from "../../types/product"
export const PRODUCT_SORT_BTN: ProductItemsProps[] = [
{
    btnName: "по названию",
    action: "name",
    icon: "",
    path: ".",
},
{
    btnName: "по просмотрам",
    action: "views",
    icon: "",
    path: "byWatch",
},
{
    btnName: "по дате начала",
    action: "start_date",
    icon: "",
    path: "byDateStart",
},
{
    btnName: "по дате окончания",
    action: "end_date",
    icon: "",
    path: "byDateEnd",
},
]