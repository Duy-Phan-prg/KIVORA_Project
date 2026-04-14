import React, { useState } from 'react';
import { Button } from '../shared/components';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-800 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">DREAM-LAB.AI</span>
          <span className="mx-8">FPT UNIVERSITY</span>
          <span className="mx-8">DREAM-LAB.AI</span>
          <span className="mx-8">FPT UNIVERSITY</span>
          <span className="mx-8">DREAM-LAB.AI</span>
          <span className="mx-8">FPT UNIVERSITY</span>
          <span className="mx-8">DREAM-LAB.AI</span>
          <span className="mx-8">FPT UNIVERSITY</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>GIA SƯ ĐƯỢC XÁC MINH HỒ SƠ & ĐÁNH GIÁ SAU MỖI BUỔI HỌC</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight font-montserrat">
                  TÌM GIA SƯ <br />
                  <span className="italic text-red-500">phù hợp.</span> <br />
                  THEO DỐI TIẾN BỘ <br />
                  TỪNG BUỔI.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  KIVORA giúp phụ huynh tìm gia sư đã được xác minh, đặt lịch học online, 
                  và nhận báo cáo tiến độ sau mỗi buổi — tất cả từ một ứng dụng duy nhất.
                </p>
              </div>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Tìm kiếm gia sư..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-lg"
                  />
                </div>
                <Button variant="primary" size="lg" className="px-8 py-4 text-lg font-semibold">
                  Tìm kiếm
                </Button>
              </div>

              {/* Demo Button */}
              <div className="pt-4">
                <button className="inline-flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors border-2 border-red-500 px-6 py-3 rounded-xl hover:bg-red-50">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Xem demo</span>
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&h=981"
                  alt="Students learning together"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Floating Rating Card */}
                <div className="absolute top-6 right-6 bg-white rounded-xl shadow-lg p-4 border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-800">4.9/5</div>
                    <div className="text-sm text-gray-600">ĐÁNH GIÁ TRUNG BÌNH</div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-6 left-6 bg-slate-800 bg-opacity-80 text-white rounded-xl p-4">
                  <div className="text-xl font-bold font-montserrat">KIVORA — Theo dõi học tập.</div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-red-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-800 mb-2">10,000+</div>
              <div className="text-gray-600">Gia sư đã xác minh</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 mb-2">50,000+</div>
              <div className="text-gray-600">Học sinh đã tham gia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 mb-2">95%</div>
              <div className="text-gray-600">Tỷ lệ hài lòng</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 mb-2">24/7</div>
              <div className="text-gray-600">Hỗ trợ khách hàng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-montserrat">
              Tại sao chọn KIVORA?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nền tảng kết nối gia sư - học sinh hiện đại với đầy đủ tính năng hỗ trợ việc học
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center font-montserrat">Gia sư được xác minh</h3>
              <p className="text-gray-600 text-center">
                Tất cả gia sư đều được kiểm tra hồ sơ, bằng cấp và đánh giá năng lực giảng dạy
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center font-montserrat">Theo dõi tiến độ</h3>
              <p className="text-gray-600 text-center">
                Nhận báo cáo chi tiết sau mỗi buổi học và theo dõi sự tiến bộ của con em
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center font-montserrat">Linh hoạt thời gian</h3>
              <p className="text-gray-600 text-center">
                Đặt lịch học online hoặc offline theo thời gian phù hợp với gia đình
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
            Bắt đầu hành trình học tập ngay hôm nay
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Tham gia cùng hàng nghìn phụ huynh và học sinh đã tin tưởng KIVORA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Tìm gia sư ngay
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 text-lg font-semibold">
              Đăng ký làm gia sư
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;