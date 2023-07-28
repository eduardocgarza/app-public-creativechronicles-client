import React from "react"
import FeaturedSection from "../../../components/general/FeaturedSection"
import { products } from "../../../constants/fakeData"

export default function ProductsPage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="Products"
          sectionItems={products}
          baseRoute="/products"
        />
      </div>
    </section>
  )
}