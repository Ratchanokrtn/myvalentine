"use client"
import Popupcake from '@/components/popcake';
import Popup from '@/components/popup';
import Popupvideo from '@/components/popupvideo';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Coupons() {
  const [isOpen01, setIsOpen01] = useState(false);
  const [isOpen02, setIsOpen02] = useState(false);
  const [isOpen03, setIsOpen03] = useState(false);
  const [isOpen04, setIsOpen04] = useState(false);
  const [isOpenCake, setIsOpenCake] = useState(false);
  return (
    <main className="min-h-screen  p-6 flex flex-col items-center text-center">
      <header className="w-full flex justify-between p-4 bg-white shadow-md">
        <div className='flex gap-5'><h1 className="text-2xl font-bold text-gray-800">Happy Birth Day Sam</h1>
        <Image src="/cake_1492067.png" alt="Birthday Icon" width={30} height={30} /></div>
       
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-red-500">Home</Link>
          <Link href="/coupon" className="text-red-500 font-semibold">Coupon</Link>
          <Link href="/gift" className="text-gray-600 hover:text-red-500">Gift</Link>
          <Link href="/crossword" className="text-gray-600 hover:text-red-500">Crossword</Link>
        </nav>
      </header>
      
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mt-8">
        <h2 className="text-3xl font-bold text-gray-900">made just for you &lt;3</h2>
        <p className="mt-4 text-gray-700 text-left font-medium">Terms & Conditions</p>
        <p className="mt-2 text-gray-600 text-left text-sm">
          Please accept these terms and conditions before using your coupons. 
          เงื่อนไขการใช้คูปอง:

ใช้ได้กับ น้องเมคนสวย เท่านั้น
หากคูปองหาย น้องเม ไม่รับผิดชอบ แต่เธออาจใจดีชดเชยให้นิดหน่อย 😉
สามารถรวมคูปองเพื่อสร้าง "เมกะคูปอง" ได้!
หมดอายุ: วันก่อนวันวาเลนไทน์ปีหน้า
ต้องยื่นคูปองให้ น้องเม ตอนใช้งาน และเธออาจเก็บไว้ได้
ไม่มีมูลค่าเงินสด แต่มีค่าทางใจมหาศาล อิอิ💖
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600"  onClick={() => {console.log("CakeIsopen") ;setIsOpenCake(true)}}>Accept</button>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400">Decline</button>
        </div>
      </div>
      <h1 className="my-10 text-3xl font-bold  mb-4">
        How to express your <span>love</span> on <span className="text-red-800">Happybirth day</span>!
      </h1>

      {/* Gift Options */}
      <div className="grid grid-cols-4 gap-6 w-full max-w-4xl">
        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-pink-200">
          <Image src="/birthday.png" alt="Letter" width={100} height={100} className="mx-auto" />
          <p className="mt-2">Wish</p>
          <button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
        onClick={() => setIsOpen01(true)}
      >
        Open
      </button>
        </div>
        {isOpen01 && (
        <Popup
        Images ="/nnff.png"
          title="ในวันเกิดปีนี้เมขอให้"
          message="พี่แซม สุขภาพแข็งแรง อยู่กับเมไปนานๆ(เท่าที่จะอยู่่ได้5555) 
          คิดสิ่งใดขอให้สมปรารถนา เงินทองไหลมาเทมา I will be beside you naka"
          onClose={() => setIsOpen01(false)}
        />
      )}


        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-pink-200">
          <Image src="/coupon (2).png" alt="Letter" width={100} height={100} className="mx-auto" />
          <p className="mt-2">Coupon</p>
          <button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
        onClick={() => setIsOpen02(true)}
      >
        Open
      </button>
        </div>
        
        {isOpen02 && (
        <Popup
        Images ="/ccpp.png"
          title="สุขสันต์วันเกิดนะคะคนเก่ง"
          message="คูปองอธิษฐานอะไรก็ได้ 1 อย่าง ขอแล้วมาเอาที่เค้านะคะ💖"
          onClose={() => setIsOpen02(false)}
        />
      )}


        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-pink-200">
          <Image src="/goal.png" alt="Letter" width={100} height={100} className="mx-auto" />
          <p className="mt-2">Road map Goal</p>
          <button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
        onClick={() => setIsOpen03(true)}
      >
        Open
      </button>
        </div>
        {isOpen03 && (
        <Popup
        Images ="/1,000 Billian.png" 
          title="Growup together"
          // message="This is a special message just for youuu 123. 💖"
          onClose={() => setIsOpen03(false)}
        />
      )}


        <div className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-pink-200">
          <Image src="/secrt.png" alt="Letter" width={100} height={100} className="mx-auto" />
          <p className="mt-2">Secret</p>
          <button
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
        onClick={() => setIsOpen04(true)}
      >
        Open
      </button>
        </div>
        {isOpen04 && (
        <Popupvideo
        
          
          onClose={() => setIsOpen04(false)}
        />
      )}
       {isOpenCake && (
        <Popupvideo 
        onClose={() => setIsOpenCake(false)}
        />
      )}
      </div>
    </main>
  );
}