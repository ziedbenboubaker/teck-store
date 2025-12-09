/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // أضف هذا الجزء الخاص بالإعدادات التجريبية
  experimental: {
    serverActions: {
      // قم بإضافة الـ IP الذي ظهر في التحذير مع المنفذ (Port)
      allowedOrigins: ['192.168.32.1:3000', 'localhost:3000'],
    },
  },
};

export default nextConfig;
