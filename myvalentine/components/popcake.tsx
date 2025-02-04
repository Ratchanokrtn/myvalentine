'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Popupcake ({onClose }) {
    
    return (<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Image  src="/cake.png"alt="Letter" width={400} height={400} className="mx-auto"></Image>  <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button></div>)

    
}



