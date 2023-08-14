import { useEffect, useState } from "react";
import Logger from "../../constants/Logger";
import { publicRouter } from "../../network/serverRouter";
import {
  getAllProductsEndpoint,
  getProductEndpoint,
} from "../../network/routes/productsRoutes";

export default function useProducts() {
  /**
   * @State
   */
  const [productObjects, setProductObjects] = useState([]);
  const [productResources, setProductResources] = useState([]);

  /**
   * @Initialize
   */
  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * @Methods
   */

  async function fetchProducts() {
    try {
      const response = await publicRouter.get(getAllProductsEndpoint);
      const products = response.data;
      const activeProducts = products.filter(
        (productResource) =>
          !productResource.product.isArchived &&
          productResource.product.isPublished
      );
      const sortedProducts = activeProducts.sort((a, b) =>
        a.product.productName > b.product.productName ? 1 : -1
      );
      setProductObjects(sortedProducts);
    } catch (error) {
      Logger.error(error);
    }
  }

  async function fetchProductItem(productUsername) {
    const existingProductResource = productResources.find(
      (productResource) =>
        productResource.product.product.productUsername === productUsername
    );

    if (existingProductResource) {
      return existingProductResource;
    }

    try {
      const route = getProductEndpoint(productUsername);
      const response = await publicRouter.get(route);
      const fetchedProductResource = response.data.resource;

      // Create a copy of the current productResources array
      const updatedProductResources = [...productResources];

      // Add the new resource to the end of the array
      updatedProductResources.push(fetchedProductResource);

      // If the array size exceeds the limit, remove the oldest item
      if (updatedProductResources.length > 50) {
        updatedProductResources.shift();
      }

      // Update the state with the updated array
      setProductResources(updatedProductResources);

      return fetchedProductResource;
    } catch (error) {
      Logger.error(error);
    }
  }

  return {
    productObjects,
    productResources,
    fetchProducts,
    fetchProductItem,
  };
}
