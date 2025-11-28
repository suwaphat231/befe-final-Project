import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, AcademicCapIcon, SupportIcon } from '@heroicons/react/outline';
import BookCard from '../components/BookCard';
import FeaturedBooks from '../components/FeaturedBooks';
import NewBook from '../components/Newbooks';
const HomePage = () => {
  const featuredBooks = [

  ];

  const instrumentCategories = [
    { nameTh: 'เปียโน & คีย์บอร์ด', nameEn: 'Piano & Keyboard', slug: 'Piano & Keyboard', image: '/images/instruments/digital-piano.png' },
    { nameTh: 'กีตาร์ & เบส', nameEn: 'Guitars & Bass', slug: 'Guitars & Bass', image: '/images/instruments/guitar.png' },
    { nameTh: 'เครื่องลมไม้', nameEn: 'Woodwind', slug: 'Woodwind', image: '/images/instruments/Clarinet.png' },
    { nameTh: 'เครื่องลมทองเหลือง', nameEn: 'brass instruments', slug: 'brass instruments', image: '/images/instruments/Trumpet.png' },
    { nameTh: 'กลอง', nameEn: 'Drum', slug: 'Drum', image: '/images/instruments/drum.png' },
    { nameTh: 'อุปกรณ์เพิ่มเติม', nameEn: 'Accessories', slug: 'Accessories', image: '/images/instruments/ampi.png' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-purple-400 to-purple-700 text-black">

        {/* Wave SVG */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* Features */}


      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-600 text-center mb-12">หมวดหมู่สินค้า</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {instrumentCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/categories/${category.slug}`}
                className="flex items-center border border-yellow-400 rounded-2xl bg-yellow-100 px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.nameTh}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-lg">
                    {category.nameTh}
                  </span>
                  <span className="text-sm text-gray-500">
                    {category.nameEn}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* หนังสือใหม่ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-sky-600 font-bold text-center mb-12">สินค้าใหม่</h2>
          <NewBook />
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-sky-600 font-bold text-center mb-12">สินค้าแนะนำ</h2>
          <FeaturedBooks />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/books" className="inline-flex items-center text-viridian-600
              hover:text-viridian-700 font-semibold text-lg group">
              ดูหนังสือทั้งหมด
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-2
                transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-viridian-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            รับข่าวสารและโปรโมชั่นล่าสุด
          </h2>
          <p className="text-viridian-200 mb-8">
            สมัครรับจดหมายข่าวเพื่อไม่พลาดหนังสือใหม่และส่วนลดพิเศษ
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="กรอกอีเมลของคุณ"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-4
                focus:ring-viridian-300 text-gray-900"
            />
            <button type="submit" className="px-8 py-3 bg-yellow-400 text-viridian-900
              font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
              สมัครรับข่าว
            </button>
          </form>
        </div>
      </section>

      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center group">
              <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-4
          group-hover:bg-orange-200 transition-colors">
                <TruckIcon className="h-12 w-12 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">จัดส่งเร็ว</h3>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4
          group-hover:bg-green-200 transition-colors">
                <ShieldCheckIcon className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">สินค้าของแท้ 100%</h3>
            </div>

            <div className="text-center group">
              <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 mx-auto mb-4
          group-hover:bg-indigo-200 transition-colors">
                <AcademicCapIcon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">มีคำแนะนำจากผู้เชี่ยวชาญ</h3>
            </div>

            <div className="text-center group">
              <div className="bg-pink-100 p-4 rounded-full w-20 h-20 mx-auto mb-4
          group-hover:bg-pink-200 transition-colors">
                <SupportIcon className="h-12 w-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">มีบริการหลังการขาย</h3>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;