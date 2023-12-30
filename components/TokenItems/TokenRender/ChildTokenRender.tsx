import { ChildTokenRenderProps } from "@/types";
import React from "react";

const ChildTokenRender: React.FC<ChildTokenRenderProps> = ({ dataKeys, values, setValues }) => {
  const handleChildOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setValues(value);
  };

  return (
    <select value={values || ""} className="border border-white p-2 rounded-xl" onChange={handleChildOnChange}>
      <option>Select any token name</option>
      {dataKeys.map((item, index) => (
        <React.Fragment key={index}>
          {item.tokenOne && <option value={item.tokenOne.name}>{item.tokenOne.name}</option>}
          {item.tokenTwo && <option value={item.tokenTwo.name}>{item.tokenTwo.name}</option>}
        </React.Fragment>
      ))}
    </select>
  );
};

export default ChildTokenRender;
