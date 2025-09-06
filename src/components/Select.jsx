import React from "react";

export default function Select({ label, className = "", children, ...props }) {
  return (
    <div className="space-y-1">
      {label && <label className="block text-xs text-gray-600">{label}</label>}
      <select
        className={`w-full px-3 py-2 border border-gray-300 rounded-md text-xs focus:ring-2 focus:ring-emerald-500 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
