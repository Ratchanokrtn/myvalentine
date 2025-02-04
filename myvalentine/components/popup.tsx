'use client';

import Image from 'next/image';
import { useState } from 'react';

type PopupProps = {
  title: string;
  message: string;
  onClose: () => void;
  Images: string;
};

export default function Popup({ title, message, onClose, Images }: PopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <Image src={Images} alt="Letter" width={300} height={300} className="mx-auto" />
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export function ExamplePopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-center">
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
        onClick={() => setIsOpen(true)}
      >
        Open Popup
      </button>
      {isOpen && (
        <Popup
          title="Happy Valentine's Day!"
          message="This is a special message just for you. 💖"
          Images="/valentine-image.jpg"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
