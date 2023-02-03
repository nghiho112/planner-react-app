import React from "react";

export const ContactPicker = ({contactList, onChange}) => {
  return (
    <div>
      <select onChange={onChange}>
        <option key={-1} value={""} selected="selected">No Contact Selected</option>
        {contactList.map(i => (
          <option value={i} key={i}>{i}</option>
        ))}
      </select>
    </div>
  );
};
