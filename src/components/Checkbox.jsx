import React from "react";

const Checkbox = ({ label, checked, onChange, className = "" }) => {
  return (
    <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <span className="text-sm text-gray-700">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-emerald-500 rounded border-gray-300 focus:ring-emerald-500"
      />
    </label>
  );
};

export default Checkbox;
