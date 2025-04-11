// import Product from "@/app/product/page";
import ProductPage from "@/Components/Products";
import GlobleApi from "@/utils/GlobleApi";

export default async function ProductCategory({ params }) {
    const response = await GlobleApi.getSingleCategory(params.categoryName);
    const getProduct = response.data.data;
    // console.log(getProduct);

    return (
        <>
            <div className="container-fluid p-10 mx-auto">
                <h2 className="p-4 bg-green-600 text-white font-semibold text-3xl text-center">{params.categoryName}</h2>
                <ProductPage getProduct={getProduct}/>
            </div>
        </>
    );
}
