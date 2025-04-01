import Banner from "@/Components/Banner";
import HeaderPage from "@/Components/Header";
import CategoryPage from "@/Components/Category";
import ProductPage from "./product/page";

export default function Page() {
  return (
    <div>
      <HeaderPage/>
      <br/>
      <Banner/>
      <CategoryPage />
      <ProductPage/>
    </div>
  );
}