import React from "react";
import { productsTableHeaderColumns } from "../helpers/productsTableHeaderColumns";

export default function CompanyItemProducts(props) {
  const { companyResource } = props;
  const { products } = companyResource;

  if (products.length === 0) return null;

  return (
    <section className="bg-white p-10 rounded-[30px] mb-6 shadow-md blur-2 text-opacity-15 spread-0">
      <header className="mb-4">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
      </header>
      {products &&
        products.map((productResource) => (
          <section className="mb-6 flex items-center">
            <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
              <img
                alt={productResource.product.product.productName}
                src={productResource.product.product.profilePictureURL}
                className="block object-cover h-full w-full"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-xs opacity-50 mb-1">Product</h4>
              <h3 className="font-bold text-xl opacity-[85%]">
                {productResource.product.product.productName}
              </h3>
            </div>
          </section>
        ))}
    </section>
  );
}
