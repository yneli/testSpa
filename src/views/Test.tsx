import { Layout } from "../components/Layout/Layout";
import { Products } from "../components/Products/Products";
import { Cards } from "../components/Cards/Cards";
import { Routes, Route } from "react-router-dom";
export const Test = () => {
  return <>
    <Layout>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/:id" element={<Products/>}/>
        <Route path="/cards/:id" element={<Cards/>}/>
      </Routes>
    </Layout>
  </>;
};