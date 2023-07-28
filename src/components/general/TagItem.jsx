import React from "react";

export default function TagItem(props) {
  const { name, backgroundColor, textColor } = props;
  return (
    <span
      className="inline-block rounded-full px-3 py-1.5 text-xs mr-2 mb-2"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {name}
    </span>
  );
}
