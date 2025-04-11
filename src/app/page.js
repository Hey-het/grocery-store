import Banner from "@/Components/Banner";
import HeaderPage from "@/Components/Header";
import CategoryPage from "@/Components/Category";
import Products from "@/Components/Products";
import Testimonials from "@/Components/Testimonials";
import PaymentMethod from "@/Components/Paymentmethod";
import Newsletter from "@/Components/Newsletter";
import Footer from "@/Components/Footer";
import GlobleApi from "@/utils/GlobleApi";

export default async function Page(){
  const getProduct = await GlobleApi.getProduct();
  // console.log("Product data:", getProduct);
  return (
    <>
      {/* <HeaderPage /> */}
      <br />
      <Banner />
      <PaymentMethod />
      <CategoryPage />
      <div className="container  p-10 mx-auto">
        <h1 className="text-3xl font-semibold p-5 ">Popular Products</h1>
        <Products getProduct={getProduct} />
      </div>
      <Testimonials />
      <Newsletter />
      {/* <Footer /> */}


    </>
  );
}