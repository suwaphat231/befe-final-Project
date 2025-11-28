import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';



//import BookCard from '../components/BookCard';
//import LoadingSpinner from '../components/LoadingSpinner';
//import './BookDetailPage.css';

const AboutPage = () => {
    const navigate = useNavigate();
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <img src="/images/instruments/logo1.png" alt="logo" className="w-64 h-auto mb-6 rounded-xl animate-spin"/>
            <p class="text-center text-2xl text-red-600">
                "เราใส่ใจในทุกรายละเอียดเพื่อประสบการณ์ในการเลือกซื้อเครื่องดนตรีสร้างสรรค์บทเพลงที่ดีที่สุด!!"
            </p>

            <button onClick={() => navigate('/')}
                className="mt-10 px-6 py-2 bg-gray-300 text-black rounded-xl shadow hover:bg-blue-700 transition">
                    ย้อนกลับ
            </button>
          </div>
      );
  }

export default AboutPage;