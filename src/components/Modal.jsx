// src/components/Modal.jsx
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // 뒷배경 스크롤 막기
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg bg-white rounded-t-2xl shadow-lg animate-slide-up">
        {children}
      </div>
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        onClick={onClose}
      >
        ✕
      </button>
    </div>
  );
};

export default Modal;
