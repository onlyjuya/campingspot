import React, { useState } from "react";

const ExpandableText = ({ text, maxLength = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  // 텍스트 길이가 maxLength 이하라면 그대로 출력
  if (text.length <= maxLength) {
    return <p className="text-sm text-gray-700 whitespace-pre-line">{text}</p>;
  }

  return (
    <div>
      <p className="text-sm text-gray-700 whitespace-pre-line">
        {expanded ? text : text.slice(0, maxLength) + "..."}
      </p>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-sm font-medium text-emerald-600"
      >
        {expanded ? "접기 ▲" : "더보기 ▼"}
      </button>
    </div>
  );
};

export default ExpandableText;
