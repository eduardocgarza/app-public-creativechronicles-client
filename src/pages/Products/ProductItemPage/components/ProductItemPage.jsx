import React from "react";
import ProductItemHeader from "./ProductItemHeader";
import ProductItemPeople from "./ProductItemPeople";

export default function ProductItemPage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <ProductItemHeader />
        <ProductItemPeople />
      </div>
    </section>
  );
}
