import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrlImage } from "../../utils/service/api";
import { formatCurrency } from "../../utils/service/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrderbyid,
  updateOrderstatus,
} from "../../redux/features/productSlice";

export default function ViewOrder() {
  const [isorderstatusupdate, setisorderstatusupdate] = useState(false);
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.order);
  const messsage = useSelector((state) => state.product.messsage);
  useEffect(() => {
    dispatch(getOrderbyid(id));
  }, [isorderstatusupdate]);

  const orderStatus = [
    { status: "Order Confirm" },
    { status: "Order Canceled" },
    { status: "Delivered" },
  ];
  console.log(product)
  const orderSatatusHandler = (id, status) => {
    const query = `${id}?status=${status}`;
    dispatch(updateOrderstatus(query))
      .then((res) => setisorderstatusupdate(!isorderstatusupdate))
      .then((res) => toast.success(messsage));
  };
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
                  {product.address.country},{product.address.pincode}
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
                {product.orderstatus === "Order Canceled" ? (
                  <span className="text-lg text-red-500 font-semibold">
                    {product.orderstatus}
                  </span>
                ) : product.orderstatus === "Order Confirm" ? (
                  <span className="text-lg text-orange-500 font-semibold">
                    {product.orderstatus}
                  </span>
                ) : product.orderstatus === "Delivered" ? (
                  <span className="text-lg text-green-500 font-semibold">
                    {product.orderstatus}
                  </span>
                ) : (
                  <span className="text-lg text-blue-900 font-semibold">
                    {product.orderstatus}
                  </span>
                )}
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
          <div>
            <ul>
              <li>
                <h2 className="text-xl mb-5">Change Order Status :</h2>
              </li>
              {orderStatus.map(({ status, index }) => (
                <li
                  key={index}
                  className={`text-lg mb-1  cursor-pointer ${
                    product.orderstatus === status
                      ? `text-blue-900 font-semibold`
                      : null
                  }`}
                  onClick={() => orderSatatusHandler(product._id, status)}
                >
                  {status}
                </li>
              ))}

              {/* <li
                className={`text-lg mb-1  cursor-pointer ${
                  product.orderstatus === "Order Canceled"
                    ? `text-blue-900 font-semibold`
                    : null
                }`}
              >
                Order Canceled
              </li>
              <li
                className={`text-lg mb-1  cursor-pointer ${
                  product.orderstatus === "Delivered"
                    ? `text-blue-900 font-semibold`
                    : null
                }`}
              >
                Delivered
              </li> */}
            </ul>
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
