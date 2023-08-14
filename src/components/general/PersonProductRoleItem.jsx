import React, { useState } from "react";
import { CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";

export default function PersonProductRoleItem(props) {
  /**
   * @Props
   */
  const { roleResource, handleDeleteRole } = props;

  /**
   * @State
   */
  const [hoveredItemID, sethoveredItemID] = useState(null);

  /**
   * @Methods
   */
  function handleMouseEnter(itemID) {
    sethoveredItemID(itemID);
  }

  function handleMouseLeave() {
    sethoveredItemID(null);
  }

  return (
    <div className="flex justify-between">
      <div className="mb-4 pl-2 border-l-[4px] border-l-gray-700">
        <h3 className="font-medium text-sm mb-1">{roleResource.roleName}</h3>
        <div className="flex">
          <p className="text-xs opacity-50">{roleResource.dateStart}</p>
          <p className="text-xs opacity-50 mx-1">-</p>
          <p className="text-xs opacity-50">{roleResource.dateEnd}</p>
        </div>
      </div>
      <div
        className="px-6 py-2 flex items-center justify-center"
        onMouseEnter={() => handleMouseEnter(roleResource.roleID)}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={() =>
            handleDeleteRole(roleResource.productID, roleResource.roleID)
          }
          className={`block ${
            hoveredItemID === roleResource.roleID ? "bg-red-500" : "bg-blue-600"
          } p-2 rounded-full mr-2 transition duration-500 ease-in-out`}
        >
          {hoveredItemID === roleResource.roleID ? (
            <MinusCircleIcon className="w-4 h-4 text-white" />
          ) : (
            <CheckCircleIcon className="w-4 h-4 text-white" />
          )}
        </button>
      </div>
    </div>
  );
}
