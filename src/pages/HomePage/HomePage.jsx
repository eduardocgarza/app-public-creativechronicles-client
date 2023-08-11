import React, { useEffect, useState } from "react";
import FeaturedSection from "../../components/general/FeaturedSection";
import useAppContext from "../../state/AppContext";

export default function HomePage() {
  const [companies, setCompanies] = useState(null);
  const [people, setPeople] = useState(null);
  const [products, setProducts] = useState(null);

  const { companiesEntity, peopleEntity, productsEntity } = useAppContext();
  const { companyObjects } = companiesEntity;
  const { personObjects } = peopleEntity;
  const { productObjects } = productsEntity;

  useEffect(() => {
    const companies = companyObjects.map((companyObject) => ({
      id: companyObject.company.companyID,
      name: companyObject.company.companyName,
      username: companyObject.company.companyUsername,
      profilePictureURL: companyObject.company.profilePictureURL,
    }));
    setCompanies(companies);
  }, [companyObjects]);

  useEffect(() => {
    const people = personObjects.map((personObject) => {
      const personName = `${personObject.person.firstName} ${personObject.person.lastName}`;
      return {
        id: personObject.person.personID,
        name: personName,
        username: personObject.person.personUsername,
        profilePictureURL: personObject.person.profilePictureURL,
      };
    });
    setPeople(people);
  }, [personObjects]);

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
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection
          sectionTitle="Companies"
          sectionItems={companies}
          baseRoute="/companies"
        />
        <FeaturedSection
          sectionTitle="People"
          sectionItems={people}
          baseRoute="/people"
        />
        <FeaturedSection
          sectionTitle="Products"
          sectionItems={products}
          baseRoute="/products"
        />
      </div>
    </section>
  );
}
