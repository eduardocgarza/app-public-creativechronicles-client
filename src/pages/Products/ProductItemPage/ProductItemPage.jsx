import React from "react";
import airbnbLogo from "../../../assets/airbnbLogo.png";
import bezos from "../../../assets/bezos.png";

const headerColumns = [
  {
    name: "Role",
    width: "40%",
  },
  {
    name: "Start date",
    width: "30%",
  },
  {
    name: "End date",
    width: "30%",
  },
];

export default function ProductItemPage() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        {/* Header */}
        <header className="bg-white p-10 rounded-[30px] mb-10 flex">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
            <img className="block" src={airbnbLogo} alt="" />
          </div>
          <div className="flex-1">
            <header className="flex">
              <div className="flex-1 bg-orange-100">
                <h2 className="text-3xl font-bold mb-1">Amazon</h2>
                <div>
                  <h3 className="font-bold text-sm">Founded on</h3>
                  <p className="ml-2">July 5, 1994</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Founded in</h3>
                  <p className="ml-2">Bellevue, Washington</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Headquarters</h3>
                  <p className="ml-2">Seattle, Washington</p>
                </div>
                <footer>
                  <section className="mb-4">
                    {["E-Commerce", "Cloud Computing", "Digital Content"].map(
                      (companyType) => (
                        <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          {companyType}
                        </span>
                      )
                    )}
                  </section>
                  <section className="mb-4">
                    {["Startup", "Public Company"].map((companyType) => (
                      <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {companyType}
                      </span>
                    ))}
                  </section>
                </footer>
              </div>
              <div className="flex">
                <a href="">Facebook</a>
                <a href="">Google</a>
                <a href="">Linkedin</a>
                <a href="">Twitter</a>
              </div>
            </header>
          </div>
        </header>

        {/* People */}
        <section className="bg-white p-10 rounded-[30px] mb-10">
          <header className="mb-4">
            <h2 className="text-2xl font-bold mb-6">People</h2>
          </header>
          <section className="mb-6">
            <header className="mb-4 flex items-center">
              <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
                <img src={bezos} alt="" className="block" />
              </div>
              <div className="ml-4">
                <h4 className="text-xs opacity-50 mb-1">Individual</h4>
                <h3 className="font-bold text-xl opacity-[85%]">Jeff Bezos</h3>
              </div>
            </header>
            <section className="">
              <table className="w-full text-left text-sm text-black opacity-[90%]">
                <thead className="border-b border-b-gray-200">
                  <tr>
                    {headerColumns.map((column) => (
                      <th
                        scope="col"
                        className="px-6 py-3"
                        style={{ width: column.width }}
                      >
                        {column.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white hover:bg-gray-50 cursor-pointer transition duration-250 ease-in-out">
                    <td className="px-6 py-2">CEO</td>
                    <td className="px-6 py-2">2020</td>
                    <td className="px-6 py-2">2023</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </section>
        
      </div>
    </section>
  );
}
