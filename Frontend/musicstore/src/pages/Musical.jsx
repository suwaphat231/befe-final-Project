import React from "react";
import { useNavigate } from "react-router-dom";

const Musical = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/guitars2-proong.png"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">กีตาร์แนะนำ</p>
            <button
              onClick={() => navigate("/categories/guitar")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

       
        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/frence_horn.png"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">เครื่องลมทองเหลืองแนะนำ</p>
            <button
              onClick={() => navigate("/categories/brass")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

        
        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/drum3-bassdrum.png"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">กลองแนะนำ</p>
            <button
              onClick={() => navigate("/categories/guitar")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

        
        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/keyboard2-dulcitone.jpg"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">คีบอร์ดแนะนำ</p>
            <button
              onClick={() => navigate("/categories/guitar")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

        
        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/guitars3-digital.png"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">กีตาร์ไฟฟ้าแนะนำ</p>
            <button
              onClick={() => navigate("/categories/guitar")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

       
        <div className="flex items-center bg-white p-4 rounded-xl shadow">
          <img
            src="/images/instruments/stand2-guitar.jpg"
            className="w-32 h-32 rounded-full object-cover mr-4"
          />
          <div className="flex flex-col flex-1">
            <p className="text-gray-700 text-lg">อุปกรณ์เสริมแนะนำ</p>
            <button
              onClick={() => navigate("/categories/accessories")}
              className="px-3 py-1 text-sm bg-yellow-200 text-black rounded-md shadow hover:bg-blue-600 transition self-end mt-4"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        </div>

      </div>

      
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/categories")}
          className="mt-10 mb-10 px-6 py-2 bg-pink-200 text-black rounded-xl shadow hover:bg-blue-700 transition"
        >
          ค้นหาเครื่องดนตรี
        </button>
      </div>

    </div>
  );
};

export default Musical;
