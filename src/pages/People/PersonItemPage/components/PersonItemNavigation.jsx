import React from "react";

export default function PersonItemNavigation(props) {
  const { mainMode, setMainMode, personResource } = props;
  const {
    personID,
    personUsername,
    firstName,
    middleName,
    lastName,
    profilePictureURL,
  } = personResource.person.person;

  const personName = `${firstName} ${lastName}`;

  return (
    <nav className="bg-white border-b border-b-gray-200 h-[50px] z-[10] fixed left-0 right-0">
      <div className="container mx-auto h-full flex items-center">
        <header className="flex mr-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-2">
            <img
              className="block object-fit w-full h-full"
              src={profilePictureURL}
              alt={personName}
            />
          </div>
          <h2 className="text-lg font-medium">{personName}</h2>
        </header>
        <section className="flex items-center">
          <button
            className={`hover:bg-gray-200 rounded-full px-3 py-1.5 text-xs mr-2 transition duration-500 ease-in-out ${
              mainMode ? "bg-gray-200 opacity-[85%]" : "bg-gray-100 opacity-50"
            }`}
            onClick={() => setMainMode(true)}
          >
            Main
          </button>
          <button
            className={`bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 text-xs mr-2 transition duration-500 ease-in-out ${
              !mainMode ? "bg-gray-200 opacity-[85%]" : "bg-gray-100 opacity-50"
            }`}
            onClick={() => setMainMode(false)}
          >
            Videos
          </button>
        </section>
      </div>
    </nav>
  );
}
