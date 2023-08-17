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

  const personName = `${firstName} ${
    middleName && `${middleName[0]}.`
  } ${lastName}`;

  return (
    <nav className="bg-white border-b border-b-gray-200 h-[60px] z-[10] fixed left-0 right-0 flex items-center justify-center">
      <div className="container mx-auto h-full flex items-center justify-center md:justify-start">
        <header className="flex mr-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-2">
            <img
              className="block object-cover w-full h-full"
              src={profilePictureURL}
              alt={personName}
            />
          </div>
          <h2 className="text-lg font-medium">{personName}</h2>
        </header>
        <section className="flex items-center">
          <button
            className={`rounded-full px-3 py-1.5 text-xs mr-2 transition duration-500 ease-in-out ${
              mainMode
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => setMainMode(true)}
          >
            About
          </button>
          <button
            className={`rounded-full px-3 py-1.5 text-xs mr-2 transition duration-500 ease-in-out ${
              !mainMode
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-800"
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
