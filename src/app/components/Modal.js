'use client';
import React from "react";


export default function Modal({ isOpen, onClose, onOverlayClick, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20" onClick={onOverlayClick}>
      <div className="bg-gray-100 rounded-lg w-auto p-6" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}