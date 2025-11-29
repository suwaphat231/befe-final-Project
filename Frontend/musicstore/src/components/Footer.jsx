import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">HarmonyLab</h3>
            <p className="text-gray-400 mb-4">
              ศูนย์รวมเครื่องดนตรีครบวงจร ทั้งมืออาชีพและผู้เริ่มต้น
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">เมนูลัด</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">เกี่ยวกับร้าน</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">แนะนำสินค้า</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white">หมวดหมู่เครื่องดนตรี</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">บริการลูกค้า</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-400 hover:text-white">การจัดส่ง & รับสินค้า</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white">นโยบายการเปลี่ยน–คืนสินค้า</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-white">การรับประกันสินค้า</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">ติดต่อทีมงาน</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <LocationMarkerIcon className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                <p className="text-gray-400 text-sm">
                  45 ถนนเมโลดี้ แขวงเสียงใส<br />
                  เขตซิมโฟนี กรุงเทพฯ 10400
                </p>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-400 text-sm">02-456-7890</p>
              </div>

              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-blue-400 mr-3" />
                <p className="text-gray-400 text-sm">support@harmonylab.co.th</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 HarmonyLab. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                เงื่อนไขการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer; 