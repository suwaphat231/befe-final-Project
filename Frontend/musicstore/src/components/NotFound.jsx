import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/outline';

const NotFound = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/instruments/error.png')" 
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <div className="text-center relative z-10">
        <h1 className="text-9xl text-gray-700 font-bold text-black  drop-shadow mb-4">
          404
        </h1>

        <p className="text-3xl  font-semibold text-black  mb-4">
          ไม่พบทางที่คุณกำลังเดินไป
        </p>

        <p className="text-black mb-8 max-w-md mx-auto">
          อุ๊ปส์! ดูเหมือนว่าคุณกำลังเดินห่างไปไกลจากเสียงดนตรีนะ 🎵
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-3 bg-white text-black 
              font-semibold rounded-lg border-2  border-viridian-600 
              hover:bg-viridian-50 transition-colors">
            <HomeIcon className="h-5 w-5 mr-2" />
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
