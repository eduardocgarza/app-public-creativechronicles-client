import React, { useEffect, useState } from "react";
import FeaturedSection from "../../../components/general/FeaturedSection/FeaturedSection";
import useAppContext from "../../../state/AppContext";

export default function ProductsPage() {
  const [products, setProducts] = useState(null);

  const { productsEntity } = useAppContext();
  const { productObjects } = productsEntity;

  useEffect(() => {
    const products = productObjects.map((productObject) => ({
      id: productObject.product.productID,
      name: productObject.product.productName,
      username: productObject.product.productUsername,
      profilePictureURL: productObject.product.profilePictureURL,
    }));
    setProducts(products);
  }, [productObjects]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="Products"
          sectionItems={products}
          baseRoute="/products"
        />
      </div>
    </section>
  );
}
