import React from "react";
import { Link } from "react-router-dom";

export default function EntityItem(props) {
  const { entityItem, baseRoute } = props;

  const route = `${baseRoute}/${entityItem.username}`;
  return (
    <Link
      to={route}
      id={entityItem.id}
      className="flex flex-col items-center justify-center mb-4 text-center"
    >
      <div className="block w-[70px] h-[70px] max-w-[70px] max-h-[70px] rounded-full overflow-hidden mb-2">
        {entityItem.profilePictureURL ? (
          <img
            src={entityItem.profilePictureURL}
            alt={entityItem.name}
            className="block object-cover h-full w-full"
          />
        ) : (
          <div className="block h-full w-full bg-[#111]" />
        )}
      </div>
      <h3 className="flex-1 text-xs opacity-[75%]">{entityItem.name}</h3>
    </Link>
  );
}
