import React, { useState } from "react";
import { HeartIcon} from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  // กัน error เผื่อ book ยังไม่มา
  if (!book) return null;

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsInCart(!isInCart);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  // map field ที่เราต้องใช้
  const {
    id,
    name,
    instrument_type,
    brand,
    price,
    image,
  } = book;

  return (
    <Link to={`/books/${id}`} className="block">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-xs mx-auto
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

        {/* IMAGE */}
        <div className="p-4 pb-0">
          <div className="w-full h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            <img
              src={image || "/images/instruments/placeholder.png"}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* DETAILS */}
        <div className="px-5 py-4 flex flex-col gap-2">
          <p className="text-lg font-bold text-gray-900 line-clamp-1">
            {name}
          </p>

          <p className="text-sm text-gray-600">
            ประเภท: <span className="font-medium text-gray-800">{instrument_type}</span>
          </p>

          <p className="text-sm text-gray-600">
            ยี่ห้อ: <span className="font-medium text-gray-800">{brand}</span>
          </p>

          <p className="text-xl font-bold text-emerald-600 mt-1">
            ฿{price}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="border-t border-gray-100 px-5 py-4 flex items-center gap-3">
          <button
            onClick={handleToggleFavorite}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center
            hover:border-pink-300 hover:bg-pink-50 transition-colors"
          >
            {isFavorite ? (
              <HeartSolidIcon className="h-5 w-5 text-pink-500" />
            ) : (
              <HeartIcon className="h-5 w-5 text-slate-500" />
            )}
          </button>

          <button
            onClick={handleAddToCart}
            className={`flex-1 py-2.5 rounded-full text-sm font-semibold text-white shadow-md
              transition-all duration-200
              ${isInCart ? "bg-emerald-500 hover:bg-emerald-600" : "bg-pink-500 hover:bg-pink-600"}`}
          >
            {isInCart ? "อยู่ในตะกร้าแล้ว" : "เพิ่มลงตะกร้า"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
