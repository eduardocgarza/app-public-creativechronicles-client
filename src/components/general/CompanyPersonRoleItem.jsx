import React from "react";

export default function CompanyPersonRoleItem(props) {
  const { roleResource } = props;

  return (
    <div className="flex justify-between">
      <div className="mb-4 pl-2 border-l-[4px] border-l-gray-700">
        <h3 className="font-medium text-md mb-1">{roleResource.roleName}</h3>
        <div className="flex">
          <p className="text-sm opacity-50">{roleResource.dateStart}</p>
          <p className="text-sm opacity-50 mx-1">-</p>
          <p className="text-sm opacity-50">{roleResource.dateEnd}</p>
        </div>
      </div>
    </div>
  );
}
