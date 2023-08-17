import { sortRoles } from "./sortResources";

export default function sortPersonProducts(products) {
  return products
    .map((productResource) => ({
      ...productResource,
      roles: sortRoles(productResource.roles || []),
    }))
    .sort((a, b) => {
      const productNameA = a.product.product.productName.toLowerCase();
      const productNameB = b.product.product.productName.toLowerCase();
      return productNameA.localeCompare(productNameB);
    });
}
