import React, { useEffect, useState } from "react";
import { apiPath } from "../../utils/service/api";
import { deleteApi, getApi } from "../../utils/service/axiosCall";
import { formatCurrency } from "../../utils/service/formatCurrency";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { keywordOrderSearch } from "../../utils/service/Search";

export const OrderList = () => {
  const [products, setProducts] = useState([]);
  const [iswait, setIswait] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState(null);

  useEffect(() => {
    getApi(apiPath.getorder).then((data) => setProducts(data));
  }, [iswait]);

  useEffect(() => {
    if (globalFilterValue) {
      setProducts(keywordOrderSearch(products, globalFilterValue))
    } else {
      setIswait(!iswait)
    }
  }, [globalFilterValue])

  const nameTemplate = (product) => {
    return <p className="capitalize">{product.address.name}</p>;
  };
  const productCodeTemplate = (product) => {
    return product.products.map((product, index) => (
      <p key={index}>{product?.product.productcode}</p>
    ));
  };

  const priceBodyTemplate = (product) => {
    return formatCurrency(parseInt(product.amount));
  };

  const orderstatusTemplate = (product) => {
    return <p>{product.orderstatus} </p>;
  };
  const phoneTemplate = (product) => {
    return <p>{product.phone} </p>;
  };

  const removeProductHandler = (id) => {
    setIswait(true);
    deleteApi(`${apiPath.getproduct}${id}`)
      .then((res) => setIswait(false))
      .catch((err) => setIswait(false));
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={globalFilterValue} onChange={(e) => setGlobalFilterValue(e.target.value)} placeholder="Keyword Search" />
        </span>
      </div>
    );
  };
  const ActionBodyTemplate = (product) => {
    return (
      <div className="flex gap-3 text-xl">
        <Link
          to={`/vieworder/${product._id}`}
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

  const footer = `In total there are ${products ? products.length : 0
    } products.`;

  const header = renderHeader();
  return (
    <div className="px-10">
      <Header
        title="Order List"
        tagLine="This section may also include functions to edit or delete products, as well as to add new products to the catalog. The admin panel list product section is designed to help product managers and other professionals easily manage their product"
      />
      <div className="px-5 mt-2">
        <DataTable
          value={products}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          footer={footer}
          header={header}
        >
          <Column field="isPaid" header="Paid" className=""></Column>
          <Column header="Name" body={nameTemplate}></Column>
          <Column header="Product Codes" body={productCodeTemplate}></Column>
          <Column header="Total Amount" body={priceBodyTemplate}></Column>
          <Column header="Order Status" body={orderstatusTemplate}></Column>
          <Column header="Phone Number" body={phoneTemplate}></Column>
          <Column header="Action" body={ActionBodyTemplate}></Column>
        </DataTable>
      </div>
    </div>
  );
};
