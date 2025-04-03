import Banner from "@/Components/Banner";
import HeaderPage from "@/Components/Header";
import CategoryPage from "@/Components/Category";
import ProductPage from "./product/page";
import Testimonials  from "@/Components/Testimonials";
import PaymentMethod from "@/Components/Paymentmethod";
import Newsletter from "@/Components/Newsletter";
import Footer from "@/Components/Footer";

export default function Page() {
  return (
    <>
      <HeaderPage/>
      <br/>
      <Banner/>
      <PaymentMethod />
      <CategoryPage />
      <div className="container  p-10 mx-auto">      
        <h1 className="text-3xl font-semibold p-5 ">Popular Products</h1>
      <ProductPage/>
      </div>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
      

    </>
  );
}