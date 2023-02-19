export const baseUrl = "http://localhost:5000/api/";
export const baseUrlImage = "http://localhost:5000/";
const userinfo = JSON.parse(sessionStorage.getItem("user"));

export const apiPath = {
  login: "authorized/login",
  createproduct: `product/createproduct`,
  getproduct: `product/`,
  getproductbyid: `product/find/`,
  
};
