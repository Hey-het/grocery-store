import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/api",

});
//getCategory fetch from strapi
const getCategory = () => axiosClient.get("/categories?populate=*");

//getProduct fetch from strapi
const getProduct = () => 
    axiosClient.get("/products?populate=*")
      .then((res) => res.data.data) || [];
  
//   getSingleProduct fetch from strapi
const getSingleCategory = (category) => axiosClient.get(`products?populate=*&filters[category][title][$eq]=${category}`);

// register from strapi
const registerUser = (username, email, password) => axiosClient.post("/auth/local/register", {
    username, 
    email, 
    password,
});

// sign-in from strapi

const signIn = (email, password) => axiosClient.post("/auth/local", 
   {
    identifier: email,
    password,
   }
)

// cart from stapi
const addToCart = (data, jwt) =>
  axiosClient.post("/user-carts", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }).then((response) => response.data); // Handle success directly



export default { getCategory, getProduct , getSingleCategory , registerUser , signIn , addToCart};