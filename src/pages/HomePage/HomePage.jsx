import React from "react";
import { Link } from "react-router-dom";
import airbnbLogo from "../../assets/airbnbLogo.png";

function FeaturedSection(props) {
  const { title } = props;
  return (
    <section className="mb-10">
      <header className="mb-4 flex items-center">
        <h2 className="text-2xl font-bold mr-2">{title}</h2>
        <Link to="/companies/new" className="text-xs text-blue-600">
          View all
        </Link>
      </header>
      <section className="flex flex-wrap">
        {Array(30)
          .fill(0)
          .map((companyItem) => {
            return (
              <Link
                to="/companies/@airbnb"
                className="m-2 flex flex-col items-center justify-center"
              >
                <div className="w-[75px] h-[75px] rounded-full overflow-hidden mb-2">
                  <img src={airbnbLogo} alt="" className="block" />
                </div>
                <h3 className="text-xs opacity-[75%]">Airbnb</h3>
              </Link>
            );
          })}
      </section>
    </section>
  );
}

export default function HomePage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <FeaturedSection title="Companies" />
        <FeaturedSection title="People" />
        <FeaturedSection title="Products" />
      </div>
    </section>
  );
}
