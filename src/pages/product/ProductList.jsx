import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { ProductService } from "./ProductService";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import { deleteApi, getApi } from "../../utils/service/axiosCall";
import { apiPath, baseUrlImage } from "../../utils/service/api";
import { formatCurrency } from "../../utils/service/formatCurrency";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [iswait, setIswait] = useState(false);
  
  useEffect(() => {
    getApi(apiPath.getproduct).then((data) => setProducts(data));
  }, [iswait]);

  const imageBodyTemplate = (product) => {
    return (
      <img
        src={`${baseUrlImage}${product.images[0]}`}
        alt={product.saleprice}
        className="w-[80px]"
      />
    );
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(product.saleprice);
  };

  const ratingBodyTemplate = (product) => {
    return <Rating value={product.rating} readOnly cancel={false} />;
  };

  const stockTemplate = (product) => {
    return (
      <p>
        {product.countsmallsize +
          product.countmediumsize +
          product.countlargesize +
          product.countxtralargesize}{" "}
        Nos
      </p>
    );
  };
  const removeProductHandler = (id) => {
    setIswait(true);
    deleteApi(`${apiPath.getproduct}${id}`)
      .then((res) => setIswait(false))
      .catch((err) => setIswait(false));
  };
  const ActionBodyTemplate = (product) => {
    // console.log(product)
    return (
      <div className="flex gap-3 text-xl">
        <Link
          to={`/editproduct/${product._id}`}
          className="cursor-pointer text-green-600 transition ease-in-out duration-150  hover:scale-125"
        >
          <ion-icon name="create"></ion-icon>
        </Link>
        <div
          onClick={() => removeProductHandler(product._id)}
          className="cursor-pointer text-red-500 transition ease-in-out duration-150 hover:scale-125"
        >
          <ion-icon name="trash"></ion-icon>
        </div>
      </div>
    );
  };

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  const footer = `In total there are ${
    products ? products.length : 0
  } products.`;

  return (
    <div className="px-10">
      <Header
        title="Product List"
        tagLine="This section may also include functions to edit or delete products, as well as to add new products to the catalog. The admin panel list product section is designed to help product managers and other professionals easily manage their product"
      />
      <div className="px-5 mt-2">
        <DataTable
          value={products}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          footer={footer}
        >
          <Column field="title" header="Name" className=""></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column
            // field="saleprice"
            header="Price"
            body={priceBodyTemplate}
          ></Column>
          <Column field="category" header="Category"></Column>
          <Column
            field="rating"
            header="Reviews"
            body={ratingBodyTemplate}
          ></Column>
          <Column header="Stock" body={stockTemplate}></Column>
          <Column header="Action" body={ActionBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
}
