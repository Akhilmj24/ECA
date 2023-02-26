import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { apiPath, baseUrlImage } from "../../utils/service/api";
import { getApi } from "../../utils/service/axiosCall";
import { formatCurrency } from "../../utils/service/formatCurrency";

export default function ViewOrder() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getApi(`${apiPath.getorderbyid}${id}`).then((data) => setProduct(data));
  }, []);
  
  return (
    <div>
      {product?.products?.map((productItems) => (
        <div className="py-5 px-10 flex md:flex-row flex-col items-center gap-x-10">
          <div className=" bg-blue-600 h-[250px] w-[200px]">
            <img
              className="w-full h-full overflow-hidden object-cover"
              src={`${baseUrlImage}${productItems.product.images[0]}`}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col gap-2">
              <p className="">
                Product Name :{" "}
                <span className="text-lg">{productItems.product.title}</span>
              </p>
              <p className="">
                Amount :{" "}
                <span className="text-lg">
                  {formatCurrency(parseInt(product.amount))}
                </span>
              </p>
              <p className="">
                Quantity :{" "}
                <span className="text-lg">{productItems.quantity}</span>
              </p>
              <p className="">
                Order size :{" "}
                <span className="text-lg">{productItems.ordersize}</span>
              </p>
              <p className="">
                Phone :{" "}
                <span className="text-lg">
                  {product.phone},{product.address.mobile}
                </span>
              </p>
              <p className="">
                Customer Name :{" "}
                <span className="text-lg capitalize">
                  {product.address.name}
                </span>
              </p>
              <p className="">
                Address :{" "}
                <span className="text-lg">
                  {product.address.housenumber},{product.address.streetaddress},
                  {product.address.city},{product.address.state},
                  {product.address.country}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="">
                Product code :{" "}
                <span className="text-lg">
                  {productItems.product.productcode}
                </span>
              </p>
              <p className="">
                Order status :{" "}
                <span className="text-lg">{product.orderstatus}</span>
              </p>
              <p className="">
                paymentmode :{" "}
                <span className="text-lg">
                  {product.paymentdeatils.paymentmode}
                </span>
              </p>
              <p className="">
                PaymentId :{" "}
                <span className="text-lg">
                  {product.paymentdeatils.razorpayPaymentId}
                </span>
              </p>
              <p className="">
                OrderId :{" "}
                <span className="text-lg">
                  {product.paymentdeatils.razorpayOrderId}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
      {/* <div className="bg-red-500 py-5 px-10 flex md:flex-row flex-col items-center gap-x-10 ">
        <div className=" bg-blue-600 h-[250px] w-[200px]">
          <img
            className="w-full h-full overflow-hidden object-cover"
            src="https://images.unsplash.com/photo-1677358047249-db94430d7ae1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-x-20">
          <div>
            <p className="">
              Product Name : <span className="text-lg">Product Name</span>
            </p>
            <p className="">
              Amount : <span className="text-lg">amount</span>
            </p>
            <p className="">
              Quantity : <span className="text-lg">quantity</span>
            </p>
            <p className="">
              Order size : <span className="text-lg">ordersize</span>
            </p>
            <p className="">
              Phone : <span className="text-lg">Product Name</span>
            </p>
            <p className="">
              Customer Name : <span className="text-lg">Product Name</span>
            </p>
            <p className="">
              Address : <span className="text-lg">Product Name</span>
            </p>
          </div>
          <div className="">
            <p className="">
              Product code : <span className="text-lg">Product Name</span>
            </p>
            <p className="">
              Order status : <span className="text-lg">Product Name</span>
            </p>
            <p className="">
              paymentmode : <span className="text-lg">paymentmode</span>
            </p>
            <p className="">
              PaymentId : <span className="text-lg">razorpayPaymentId</span>
            </p>
            <p className="">
              OrderId : <span className="text-lg">razorpayOrderId</span>
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
