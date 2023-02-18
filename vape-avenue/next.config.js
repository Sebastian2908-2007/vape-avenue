/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ['https://images.unsplash.com',],
    domains: ['images.unsplash.com'],
    },
}

module.exports = withVideos(nextConfig)
