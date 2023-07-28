import React, { useState } from "react";
import PersonItemHeader from "./components/PersonItemHeader/PersonItemHeader";
import PersonItemVideos from "./components/PersonItemVideos";
import PersonItemCompanies from "./components/PersonItemCompanies";
import PersonItemProducts from "./components/PersonItemProducts";
import PersonItemNavigation from "./components/PersonItemNavigation";
import { useParams } from "react-router-dom";

const person = {
  firstName: "Jeff",
  middleName: "",
  lastName: "Bezos",
  personTypes: [
    { id: 1, name: "Founder", backgroundColor: "#FF220C", textColor: "#FFF" },
    { id: 2, name: "CEO", backgroundColor: "#1C1F33", textColor: "#FFF" },
    { id: 3, name: "Investor", backgroundColor: "#29339B", textColor: "#FFF" },
  ],
};

export default function PersonItemPage() {
  const { personUsername } = useParams();

  /**
   * @State
   */
  const [mainMode, setMainMode] = useState(true);

  return (
    <section>
      <PersonItemNavigation mainMode={mainMode} setMainMode={setMainMode} />
      <section className="py-[80px]">
        <div className="container mx-auto">
          <PersonItemHeader person={person} />
          <PersonItemCompanies person={person} mainMode={mainMode} />
          <PersonItemProducts person={person} mainMode={mainMode} />
          <PersonItemVideos mainMode={mainMode} person={person} />
        </div>
      </section>
    </section>
  );
}
