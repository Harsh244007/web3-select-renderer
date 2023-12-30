import { ParentTokenRenderProps } from "@/types";
import React from "react";

const ParentTokenRender: React.FC<ParentTokenRenderProps> = ({
  type,
  setThirdValue,
  setSecondValue,
  values,
  setValues,
  dataKeys,
}) => {
  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      setValues(selectedValue);
      setThirdValue(null);
      if (type === "parent") {
        setSecondValue(null);
      }
    }
  };

  return (
    <select value={values || ""} className="border border-white p-2 rounded-xl" onChange={handleOnSelect}>
      <option value="">Please select an item</option>
      {dataKeys.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default ParentTokenRender;
