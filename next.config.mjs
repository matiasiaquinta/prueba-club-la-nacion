/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
  distDir: 'dist', // Cambia el directorio de salida a 'dist'
};

export default nextConfig;
